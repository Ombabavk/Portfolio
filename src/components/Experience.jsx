import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";

const Experience = () => {
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  const generateStars = useCallback(() => {
    const starCount = 800;
    const newStars = [];
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.5;
      const angle = Math.atan2(y - centerY, x - centerX);
      const speed = Math.random() * 0.5 + 0.5;

      newStars.push({ id: i, x, y, size, opacity, angle, speed });
    }

    setStars(newStars);
  }, []);

  useEffect(() => {
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, [generateStars]);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => {
          let x = star.x + Math.cos(star.angle) * star.speed;
          let y = star.y + Math.sin(star.angle) * star.speed;

          if (x < 0 || x > width || y < 0 || y > height) {
            x = centerX + (Math.random() - 0.5) * 100;
            y = centerY + (Math.random() - 0.5) * 100;
            star.angle = Math.atan2(y - centerY, x - centerX);
          }

          return { ...star, x, y };
        })
      );
    };

    const intervalId = setInterval(animateStars, 50);
    return () => clearInterval(intervalId);
  }, []);

  const toggleExperience = () => {
    setIsExperienceVisible(!isExperienceVisible);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen py-16 relative z-10 overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(to bottom, #000000, #1a1a2e)" }}
    >
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
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
      
      <div className="container mx-auto px-4 relative z-20 flex-grow">
        {!isExperienceVisible && (
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            My Cosmic Journey
          </motion.h2>
        )}

        {isExperienceVisible && (
          <div className="w-full h-full overflow-y-auto">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={`experience-${experience.company_name}`}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: "#1d1836",
                    color: "#fff",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                >
                  <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                  <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point) => (
                      <li
                        key={`point-${experience.company_name}-${point.substring(0, 20)}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <motion.button
          className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full hover:bg-purple-700 transition duration-300"
          onClick={toggleExperience}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExperienceVisible ? "Close Experience" : "Launch Experience"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Experience;
