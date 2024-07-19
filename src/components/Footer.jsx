import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 flex justify-center items-center">
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anirudh Kalapatapu. All rights
          reserved.
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="https://github.com/Ombabavk"
            className="mx-2 text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anirudhvk"
            className="mx-2 text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="mx-2 text-gray-400 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
