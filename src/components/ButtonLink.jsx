import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ButtonLink = ({ url, text, padding = "px-6 py-3", className = "" }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block
        ${padding}
        ${className}
        rounded-full
        text-white
        border-2 border-purple-500
        bg-gradient-to-r from-purple-500 to-pink-500
        hover:from-purple-600 hover:to-pink-600
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        cursor-pointer
        font-semibold
        text-center
      `}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
};

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  padding: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonLink;
