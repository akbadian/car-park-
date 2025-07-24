import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = ['Home', 'Register', 'Login', 'Dashboard'];

  return (
    <nav className="bg-transparent backdrop-blur-xl rounded-2xl px-6 py-4 mx-4 mt-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        
        {/* Logo placeholder with Home redirection */}
        <Link to="/" className="text-3xl font-semibold text-white tracking-wide drop-shadow-md mb-2 sm:mb-0 hover:text-purple-300 transition-colors duration-300">
          CarPark
        </Link>

        {/* Centered links with gentle spacing */}
        <div className="flex justify-center flex-wrap space-x-4 sm:space-x-6">
          {links.map((item) => {
            const route = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={route}
                className="relative text-white/80 hover:text-white font-medium transition duration-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 blur-sm transition-all duration-500 group-hover:w-full"></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;