import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Background from './Background';
import Footer from './Footer';
import ThreeDScene from './ThreeDScene'; // Import the 3D scene component

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prevText) => prevText + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [name]);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
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
      <Footer />
    </div>
  );
};

export default Home;
