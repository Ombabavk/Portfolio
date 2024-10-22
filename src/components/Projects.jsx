import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-80 border border-purple-500 rounded-lg shadow overflow-hidden backdrop-filter backdrop-blur-sm mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools?.map((tool, index) => (
            <span key={`${project.id}-${tool}-${index}`} className="bg-purple-700 text-white text-xs px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
        {project.status === 'completed' ? (
          <>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                View Project
              </a>
            )}
          </>
        ) : (
          <p className="text-yellow-400">{project.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}</p>
        )}
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

// Updated projects array with all required properties
const projects = [
  {
    id: 1,
    title: "Amazon Product Data Fetcher",
    description: "A Python script that uses Amazon Product Advertising API to fetch product data.",
    tools: ["Python", "Amazon API", "Data Analysis"],
    status: 'in-progress',
  },
  {
    id: 2,
    title: "Sales Dashboard",
    description: "Interactive sales dashboard created with Tableau.",
    tools: ["Tableau", "Data Visualization"],
    status: 'coming-soon',
  },
  {
    id: 3,
    title: "Customer Segmentation Analysis",
    description: "Power BI dashboard showcasing customer segmentation analysis.",
    tools: ["Power BI", "Data Analysis", "Customer Insights"],
    status: 'coming-soon',
    url: "https://app.powerbi.com/view?r=yourreportid",
  },
];

function Projects() {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  const generateStars = useCallback(() => {
    if (!containerRef.current) return;
    
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
    
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateStars]);

  useEffect(() => {
    if (!containerRef.current) return;

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
      className="min-h-screen py-16 relative z-10 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #1a1a2e, #000000)" }}
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
      <div className="container mx-auto px-4 relative z-20">
        <h2 
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          My Cosmic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;