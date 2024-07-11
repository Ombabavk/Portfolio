import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/scene.gltf'); // Corrected path
  return <primitive object={scene} scale={0.5} />;
};

const ThreeDScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.error('WebGL context lost');
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored');
    };

    const canvas = canvasRef.current;

    if (canvas) {
      canvas.addEventListener('webglcontextlost', handleContextLost, false);
      canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleContextLost, false);
        canvas.removeEventListener('webglcontextrestored', handleContextRestored, false);
      }
    };
  }, []);

  return (
    <Canvas ref={canvasRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
