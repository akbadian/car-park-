import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = ['Home', 'Register', 'Login', 'Dashboard'];

  return (
    <nav className="bg-black/40 backdrop-blur-lg rounded-xl shadow-lg px-6 py-4 relative z-50 mx-4 mt-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side: Brand */}
        <h1 className="text-3xl font-extrabold text-white tracking-wider glow-text">
          CarPark
        </h1>

        {/* Right side: Navigation Links */}
        <div className="flex space-x-6">
          {links.map((item) => {
            const route = item === 'Home' ? '/' : `/${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                to={route}
                className="relative text-white/80 hover:text-white font-medium transition-all duration-300 group"
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