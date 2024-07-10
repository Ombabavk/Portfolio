import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/scene.gltf'); // Corrected path
  return <primitive object={scene} scale={0.5} />;
};

const ThreeDScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
