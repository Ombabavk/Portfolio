import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function ThreeDScene() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return; // Make sure the ref is set

    const canvas = ref.current; // Get the canvas element
    const context = canvas.getContext("webgl2", { alpha: false }); // Get the WebGL context
    if (!context) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      context, // Pass the context to the renderer
      antialias: true,
    });

    const geometry = new THREE.SphereGeometry(1, 60, 60);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const sphere = new THREE.Mesh(geometry, material);

    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, [ref]);

  return (
    <canvas
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    />
  );
}

export default ThreeDScene;
