import { motion } from "framer-motion";
import ButtonLink from "./ButtonLink";
import { useEffect, useState, useRef, useCallback } from "react";

function About() {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  const generateStars = useCallback(() => {
    const starCount = 800;
    const newStars = [];
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    for (let i = 0; i < starCount; i++) {
      let x, y;
      const centerPadding = 0.4; // Adjust this value to control the size of the center area with fewer stars

      // Generate more stars on the sides and fewer in the center
      if (Math.random() > 0.3) {
        // 70% chance to generate stars on the sides
        x = Math.random() < 0.5 ? Math.random() * width * centerPadding : width - Math.random() * width * centerPadding;
        y = Math.random() * height;
      } else {
        // 30% chance to generate stars in the center area
        x = width * centerPadding + Math.random() * width * (1 - 2 * centerPadding);
        y = Math.random() * height;
      }

      newStars.push({
        id: i,
        x: x,
        y: y,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        speed: Math.random() * 0.2 + 0.1,
        angle: Math.atan2(y - height / 2, x - width / 2),
      });
    }
    setStars(newStars);
  }, []);

  useEffect(() => {
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, [generateStars]);

  useEffect(() => {
    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          const container = containerRef.current;
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          const centerX = width / 2;
          const centerY = height / 2;

          let newX = star.x + Math.cos(star.angle) * star.speed;
          let newY = star.y + Math.sin(star.angle) * star.speed;

          // Reset star position if it goes off-screen
          if (newX < 0 || newX > width || newY < 0 || newY > height) {
            newX = Math.random() * width;
            newY = Math.random() * height;
            star.angle = Math.atan2(newY - centerY, newX - centerX);
          }

          return {
            ...star,
            x: newX,
            y: newY,
            opacity: star.opacity - 0.002 > 0 ? star.opacity - 0.002 : Math.random(),
          };
        })
      );
    };

    const intervalId = setInterval(animateStars, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center overflow-hidden py-16 relative"
      style={{ background: "linear-gradient(to bottom, #000000, #1a1a2e)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.y}px`,
            left: `${star.x}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
      <div className="w-full max-w-4xl text-white px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Introduction
        </motion.h2>
        <motion.div 
          className="space-y-4 text-lg"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <p>
            👋 Hello! I&apos;m Anirudh Kalapatapu, an enthusiastic data analyst with a passion for transforming data into actionable insights. My journey began in New Zealand in 2015, starting as a kiwi fruit picker and progressing through roles such as a retail assistant, supervisor, store manager, and multi-store manager. In 2022, I pivoted my career to become a service desk analyst at Datacom, where I received positive feedback for my dedication and problem-solving skills.
          </p>
          <p>
            💡 With a keen eye for detail and a love for numbers, I have built this portfolio to showcase my case study dashboards and projects. These examples highlight my ability to analyze complex datasets, derive meaningful conclusions, and present them in an understandable and visually appealing manner.
          </p>
          <p>
            ✨ Beyond the numbers, I&apos;m a father who loves to explore new technologies and continuously learn. My goal is to leverage my diverse experiences to contribute to data-driven decision-making processes and create impactful solutions.
          </p>
          <p>
            📈 Fun fact: Why did the data analyst bring a ladder to work? Because they wanted to take their analysis to the next level! 😄
          </p>
        </motion.div>
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ButtonLink 
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            text="View Resume →"
            padding="px-6 py-3"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
