import React, { useState, useEffect } from 'react';
import { name } from '../constants';
import nebulaVideo from '../assets/Nebula.mp4';

const Home = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < name.length) {
        setText(name.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Update every 100ms

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.error('WebGL context lost');
    };

    window.addEventListener('webglcontextlost', handleContextLost, false);

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost, false);
    };
  }, []);

  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      <video
        autoPlay
        loop
        muted
        className='video-background absolute top-0 left-0 w-full h-full object-cover'
      >
        <source src={nebulaVideo} type='video/mp4' />
      </video>
      <div className='absolute top-0 left-0 w-full h-full'>
        <ul className="circles">
          {Array(9).fill(0).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
        <div className='hero relative h-full flex flex-col justify-center items-center text-white' id='hero'>
          <div className='pt-4 h-36 rounded-3xl'>
            <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
              Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span>
            </h1>
            <p className='mt-3 text-xl'>
              I love to code and analyze data, building scalable and optimized systems to drive business insights and efficiencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
