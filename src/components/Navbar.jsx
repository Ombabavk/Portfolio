import { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarHidden(window.scrollY > 50);
    };

    const handleSetActive = (to) => {
      setActiveSection(to);
    };

    window.addEventListener('scroll', handleScroll);
    Events.scrollEvent.register('begin', handleSetActive);
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Reviews', to: 'reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarHidden ? '-translate-y-full' : ''} bg-gradient-to-b from-black to-transparent`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="home" smooth={true} duration={500} className="text-white font-bold text-xl">Anirudh Kalapatapu</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                  offset={-70} // Adjust this value based on your navbar height
                  activeClass="bg-purple-600 text-white"
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${
                    activeSection === item.to ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <dialog open={mobileMenuOpen} className="fixed inset-0 z-50 md:hidden bg-black bg-opacity-50" onClick={closeMobileMenu}>
        <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-gray-800 shadow-xl p-6">
          <button
            type="button"
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
            aria-label="Close mobile menu"
          >
            ✕
          </button>
          <div className="mt-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="bg-purple-600 text-white"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;