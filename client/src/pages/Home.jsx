import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 font-sans text-white">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight animate-fade-in animation-delay-[200ms]">
            CarPark, Conduisez vos rêves.
          </h1>

          <p className="text-lg italic text-gray-300 mb-2 max-w-2xl animate-slide-up animation-delay-[500ms]">
            Plus qu'une voiture. Une émotion.
          </p>

          <p className="text-lg italic text-gray-300 mb-6 max-w-2xl animate-slide-up animation-delay-[700ms]">
            De l’asphalte au rêve, laissez-vous guider vers des sensations uniques au volant des plus belles mécaniques.
          </p>
        {/* 🛒 CTA Buttons with Routing */}
        <div className="flex flex-row gap-4">
          <Link to="/achat">
            <button className="px-6 py-2 border border-white/30 text-white rounded-full backdrop-blur-md hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 shadow-md">
              Achat
            </button>
          </Link>
          <Link to="/location">
            <button className="px-6 py-2 border border-white/30 text-white rounded-full backdrop-blur-md hover:bg-white/10 hover:scale-[1.03] transition-all duration-300 shadow-md">
              Location
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-6 text-center text-sm">
        <div className="mb-4">
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <a href="#" className="mx-2 hover:underline">About</a>
          <a href="#" className="mx-2 hover:underline">Contact</a>
        </div>
        <p className="mt-4 text-gray-400">© 2025 Maverick Corp. . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;