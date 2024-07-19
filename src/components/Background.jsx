import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

function Background() {
  return (
    <div className="w-full h-full absolute blur-[0.5px] inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 1000 }}>
        <Suspense fallback={null}>
          {/* You can add other 3D components here if needed */}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default Background;
