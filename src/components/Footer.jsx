import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Ombabavk", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/anirudhvk", label: "LinkedIn" },
    { icon: FaEnvelope, href: "mailto:your-email@example.com", label: "Email" },
  ];

  return (
    <motion.footer 
      className="w-full bg-gradient-to-r from-purple-900 to-black text-white py-6 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.p 
          className="text-sm mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; {currentYear} Anirudh Kalapatapu. All rights reserved.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="text-2xl" aria-label={link.label} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
