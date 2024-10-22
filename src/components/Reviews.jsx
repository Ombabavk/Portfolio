import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';

const reviews = [
  {
    text: "Anirudh is a dedicated and hardworking professional with exceptional analytical skills.",
    author: "Jane Doe",
    role: "Data Science Lead",
    company: "TechCorp"
  },
  {
    text: "Great problem-solving skills and an excellent team player. Anirudh consistently delivers innovative solutions.",
    author: "John Smith",
    role: "Project Manager",
    company: "DataDrive Inc."
  },
  {
    text: "Consistently delivers high-quality work and exceeds expectations. A true asset to any data-driven project.",
    author: "Emily Johnson",
    role: "CTO",
    company: "AnalyticsPro"
  },
];

const ReviewCard = ({ review, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm border border-purple-500 max-w-md w-full"
    >
      <p className="text-white text-lg mb-4 font-roboto">&apos;{review.text}&apos;</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {review.author[0]}
        </div>
        <div className="ml-4">
          <p className="text-white font-semibold font-poppins">{review.author}</p>
          <p className="text-purple-300 text-sm font-roboto">{review.role}, {review.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  }).isRequired,
  isVisible: PropTypes.bool.isRequired
};

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

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

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen py-16 relative z-10 overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(to bottom, #1a1a2e, #000000)" }}
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
      <motion.h2 
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Cosmic Testimonials
      </motion.h2>
      <div className="relative z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <ReviewCard key={currentReview} review={reviews[currentReview]} isVisible={true} />
        </AnimatePresence>
        <div className="mt-8 flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-poppins"
            onClick={prevReview}
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-poppins"
            onClick={nextReview}
          >
            Next
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
