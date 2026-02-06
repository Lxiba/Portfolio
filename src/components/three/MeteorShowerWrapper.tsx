"use client";

import dynamic from "next/dynamic";

const MeteorShowerCanvas = dynamic(
  () =>
    import("@/components/three/MeteorShowerCanvas").then(
      (mod) => mod.MeteorShowerCanvas
    ),
  { ssr: false }
);

export function MeteorShowerWrapper() {
  return <MeteorShowerCanvas />;
}
