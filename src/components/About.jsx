// About.jsx
import React from 'react';
import '../App.css'

const About = () => {
  return (
    <div className="h-screen bg-black">
      <div className='w-screen text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👋 Hello! I'm Anirudh Kalapatapu, an enthusiastic data analyst with a passion for transforming data into actionable insights. My journey began in New Zealand in 2015, starting as a kiwi fruit picker and progressing through roles such as a retail assistant, supervisor, store manager, and multi-store manager. In 2022, I pivoted my career to become a service desk analyst at Datacom, where I received positive feedback for my dedication and problem-solving skills.
              <br/><br/>
              💡 With a keen eye for detail and a love for numbers, I've built this portfolio to showcase my case study dashboards and projects. These examples highlight my ability to analyze complex datasets, derive meaningful conclusions, and present them in an understandable and visually appealing manner.
              <br/><br/>
              ✨ Beyond the numbers, I am a father who loves to explore new technologies and continuously learn. My goal is to leverage my diverse experiences to contribute to data-driven decision-making processes and create impactful solutions.
              <br/><br/>
              📈 Fun fact: Why did the data analyst bring a ladder to work? Because they wanted to take their analysis to the next level! 😄
            </p>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'>
              View Resume →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;