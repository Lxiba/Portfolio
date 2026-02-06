"use client";

import { Canvas } from "@react-three/fiber";
import { MeteorShower } from "./MeteorShower";

export function MeteorShowerCanvas() {
  return (
    <div
      className="fixed z-0 pointer-events-none"
      style={{ top: "100vh", left: 0, right: 0, bottom: 0 }}
    >
      <Canvas
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <MeteorShower />
      </Canvas>
    </div>
  );
}
