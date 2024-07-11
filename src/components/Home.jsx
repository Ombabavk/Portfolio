import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Background from './Background';
import ThreeDScene from './ThreeDScene';

const Home = () => {
  const [text, setText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < name.length) {
        setText((prevText) => prevText + name[text.length]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text, name]);

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.error('WebGL context lost');
      setIsLoaded(false);
    };

    window.addEventListener('webglcontextlost', handleContextLost, false);

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost, false);
    };
  }, []);

  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      <Background />
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='hero relative h-[calc(100vh)] flex flex-col justify-center items-center text-white' id='hero'>
        {isLoaded ? (
          <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
            <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
              Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span>
            </h1>
            <p className='mt-3 text-xl'>
              I love to code and analyze data, building scalable and optimized systems to drive business insights and efficiencies.
            </p>
          </div>
        ) : (
          <div className='text-white text-2xl'>Loading...</div>
        )}
        <div className='mt-10 w-full h-96'>
          <ThreeDScene /> {/* Add the 3D scene here */}
        </div>
      </div>
    </div>
  );
};

export default Home;