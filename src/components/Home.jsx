import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { videoBackground } from '../constants';

export default function Home() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const name = "Anirudh Kalapatapu";

  // Custom intersection observer hook
  const useInView = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.1 }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

    return [ref, inView];
  };

  const [ref, inView] = useInView();

  // Typewriter effect
  useEffect(() => {
    if (currentIndex <= name.length) {
      const timeoutId = setTimeout(() => {
        setText(name.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, name]);

  // Move console.log statements here if you need them
  useEffect(() => {
    console.log('Current index:', currentIndex);
    console.log('Current text:', text);
  }, [currentIndex, text]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay with proper z-index */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-40 z-10"
        style={{ WebkitBackgroundClip: "border-box" }}
      />
      
      {/* Content */}
      <motion.div 
        className="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center z-20"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="hero relative text-white text-center px-4">
          <motion.h1 
            className="text-6xl sm:text-8xl font-extrabold mb-6"
            style={{
              WebkitTextSizeAdjust: "100%",
              WebkitFontSmoothing: "antialiased"
            }}
            variants={itemVariants}
          >
            Hi, I&apos;m{" "}
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              style={{ 
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {text}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl max-w-3xl mx-auto font-light text-gray-300"
            style={{ WebkitTextSizeAdjust: "100%" }}
            variants={itemVariants}
          >
            I love to code and analyze data, building scalable and optimized
            systems to drive business insights and efficiencies.
          </motion.p>
          
          <motion.button
            className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore My Work"
          >
            Explore My Work
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
