import { Code, FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isRestaurantSection = location.pathname.includes(
    '/projects/restaurant'
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Code className="h-8 w-8 text-indigo-600 transform transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold text-gray-900">Suyang Chen</span>
          </Link>
        </div>
          {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            {!isRestaurantSection && (
              <>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:your.email@example.com" className="nav-link">
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FileText className="h-5 w-5" />
                </a>
              </>
            )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="mobile-nav-link">
            Home
          </Link>
          <Link to="/projects" className="mobile-nav-link">
            Projects
          </Link>
          {isRestaurantSection && (
            <Link to="/projects/restaurant/cart" className="mobile-nav-link">
              Cart
            </Link>
          )}
          {!isRestaurantSection && (
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/he1l0world"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/suyang-chen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dawson0xff@gmail.com"
                className="text-gray-700 hover:text-indigo-600"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
