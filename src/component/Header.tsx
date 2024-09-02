import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";

// import { FaUserCircle } from "react-icons/fa";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <header className="fixed bg-gray-950 text-white top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex text-white justify-between items-center p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <Link to="/">Umoren</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center gap-5">
          <Link
            to="/"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/service"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/project"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
            Project
          </Link>
          <Link
            to="/contact"
            className="py-2 text-white font-serif text-xl"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
        {/* Dropdown Button for Desktop */}
        <Link to="/location">
          <button
            className="relative hidden md:block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 p-2 rounded-md"
            onClick={toggleDropDown}
          >
            Contact Me
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <TiThMenu size={28} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-black text-white shadow-lg md:hidden z-50"
        >
          <div className="flex justify-end p-4">
            <button className="text-white" onClick={toggleMenu}>
              <TiThMenu size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center p-4">
            <Link
              to="/"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/service"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Service
            </Link>
            <Link
              to="/project"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Prroject
            </Link>
            <Link
              to="/contact"
              className="py-2 text-white text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
