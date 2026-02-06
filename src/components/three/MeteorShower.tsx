"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const METEOR_COUNT = 50;

interface MeteorData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  speed: number;
  life: number;
  maxLife: number;
}

const headColor = new THREE.Color("#FF4500");
const tailColor = new THREE.Color("#8B0000");

function createMeteor(): MeteorData {
  return {
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 20,
      Math.random() * 10 + 5,
      (Math.random() - 0.5) * 10 - 5
    ),
    velocity: new THREE.Vector3(
      (Math.random() - 0.5) * 0.02,
      -(Math.random() * 0.03 + 0.02),
      (Math.random() - 0.5) * 0.01
    ),
    speed: Math.random() * 0.03 + 0.02,
    life: Math.random() * 200,
    maxLife: Math.random() * 200 + 100,
  };
}

export function MeteorShower() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const meteors = useMemo(() => Array.from({ length: METEOR_COUNT }, createMeteor), []);

  useFrame(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < meteors.length; i++) {
      const m = meteors[i];
      m.life++;
      m.position.add(m.velocity);

      if (m.life > m.maxLife || m.position.y < -8) {
        const fresh = createMeteor();
        m.position.copy(fresh.position);
        m.velocity.copy(fresh.velocity);
        m.speed = fresh.speed;
        m.life = 0;
        m.maxLife = fresh.maxLife;
      }

      const lifeRatio = m.life / m.maxLife;
      let scale: number;
      if (lifeRatio < 0.1) scale = lifeRatio / 0.1;
      else if (lifeRatio > 0.8) scale = (1 - lifeRatio) / 0.2;
      else scale = 1;
      scale *= 0.04 + m.speed * 0.5;

      dummy.position.copy(m.position);
      dummy.scale.setScalar(Math.max(scale, 0.001));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      const color = new THREE.Color().lerpColors(headColor, tailColor, lifeRatio);
      meshRef.current.setColorAt(i, color);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, METEOR_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial transparent opacity={0.9} toneMapped={false} />
    </instancedMesh>
  );
}
