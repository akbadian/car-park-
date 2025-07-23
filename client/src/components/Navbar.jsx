import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';

const Navbar = () => {
  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">CarPark</h1>
        
        {/* Always visible navigation links with explicit spacing */}
        <div className="flex items-center">
          <a href="/" className="text-white/90 hover:text-white font-medium transition-all duration-200 text-sm sm:text-base px-4 sm:px-6">Home</a>
        </div>
        <div className="flex items-center">
          <a href="/register" className="text-white/90 hover:text-white font-medium transition-all duration-200 text-sm sm:text-base px-4 sm:px-6">Register</a>
        </div>
        <div className="flex items-center">
          <a href="/login" className="text-white/90 hover:text-white font-medium transition-all duration-200 text-sm sm:text-base px-4 sm:px-6">Login</a>
        </div>
        <div className="flex items-center">
          <a href="/dashboard" className="text-white/90 hover:text-white font-medium transition-all duration-200 text-sm sm:text-base px-4 sm:px-6">Dashboard</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;