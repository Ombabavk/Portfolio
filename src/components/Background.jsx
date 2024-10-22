import { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

const Background = ({ children }) => {
  const canvasRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const scene = new THREE.Scene();

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.1,
      transparent: true
    });

    const starVertices = new Float32Array(30000);
    for (let i = 0; i < 30000; i += 3) {
      starVertices[i] = (Math.random() - 0.5) * 2000;
      starVertices[i + 1] = (Math.random() - 0.5) * 2000;
      starVertices[i + 2] = -Math.random() * 2000;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create nebula
      const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      // Adjust nebula color based on scroll position
      const hue = (scrollPosition / document.documentElement.scrollHeight) * 360;
      scene.children.forEach(child => {
        if (child instanceof THREE.Sprite) {
          child.material.color.setHSL(hue / 360, 1, 0.5);
        }
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
    };
  }, [handleScroll, scrollPosition]); // Add scrollPosition to the dependency array

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-2]" />
      {children}
    </>
  );
};

Background.propTypes = {
  children: PropTypes.node
};

export default Background;
