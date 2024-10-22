export const name = "Anirudh Kalapatapu";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  github: "https://github.com/your-github-profile",
  twitter: "https://twitter.com/your-twitter-handle",
  // Add more social links as needed
};

export const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Data Analysis", level: 80 },
  // Add more skills as needed
];

export const experiences = [
  {
    role: "Service Desk Analyst",
    company: "Datacom",
    duration: "2023 - Present",
    logo: "/images/datacom-logo.png", // Replace with actual path
    url: "https://www.datacom.com",
    points: [
      "Provided excellent support to users, earning positive feedback.",
      "Troubleshooted and resolved various technical issues efficiently.",
      "Collaborated with team members to improve support processes.",
    ],
    technologies: ["IT Support", "Troubleshooting", "Customer Service"],
    achievements: [
      "Reduced average ticket resolution time by 15%",
      "Maintained a 98% customer satisfaction rate",
    ],
  },
  {
    role: "Multi-store Manager",
    company: "NZ Vape Ltd",
    duration: "2019 - 2022",
    logo: "/images/nz-vape-logo.png", // Replace with actual path
    url: "https://www.shosha.co.nz",
    points: [
      "Managed multiple retail stores, overseeing operations and staff.",
      "Implemented strategies to increase sales and improve customer satisfaction.",
      "Ensured stores met financial and operational goals.",
    ],
    technologies: ["Retail Management", "Sales Strategy", "Team Leadership"],
    achievements: [
      "Increased overall sales by 25% year-over-year",
      "Implemented a new inventory management system, reducing waste by 30%",
    ],
  },
  // ... Include other experiences with similar structure
];

export const projects = [
  {
    title: "Portfolio Website",
    description: "A space-themed personal portfolio showcasing my skills and projects.",
    technologies: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio-url.com",
    image: "/images/portfolio-screenshot.png", // Replace with actual path
  },
  // Add more projects as needed
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    duration: "2010 - 2014",
    achievements: [
      "Graduated with First Class Honours",
      "Completed a thesis on Machine Learning applications in Astronomy",
    ],
  },
  // Add more education entries as needed
];

export const spaceThemeConfig = {
  primaryColor: "#8A2BE2", // Deep purple
  secondaryColor: "#4B0082", // Indigo
  accentColor: "#FFD700", // Gold
  backgroundColor: "#000000", // Black
  textColor: "#FFFFFF", // White
  gradients: {
    primary: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    secondary: "linear-gradient(to bottom, #000000, #1a1a2e)",
    accent: "linear-gradient(135deg, #FFD700, #FFA500)",
  },
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Roboto', sans-serif",
  },
};

export const videoBackground = "/Portfolio/Nebula.mp4";
