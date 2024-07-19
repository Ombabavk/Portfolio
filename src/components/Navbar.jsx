import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Destructured into value and setter pair
  const [navbarHidden, setNavbarHidden] = useState(false); // Destructured into value and setter pair

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Increased threshold for better visibility
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition-transform duration-300 bg-transparent p-4 text-white shadow-md ${navbarHidden ? "hidden" : ""}`}
      style={{ cursor: "default", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <div className="mx-auto text-center flex w-5/6 justify-between">
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="text-3xl sm:text-2xl font-extrabold">
          <Link to="/">Home</Link>
        </div>
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to="/experience">Experience</Link>
          <Link to="/reviews">Reviews</Link>
        </div>

        <div className="sm:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${
            mobileMenuOpen
              ? "flex flex-col items-center justify-center"
              : "hidden"
          }`}
        >
          <button
            type="button"
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={closeMobileMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/reviews" onClick={closeMobileMenu}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
