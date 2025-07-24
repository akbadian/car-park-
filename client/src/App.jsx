import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path if needed

const backgrounds = {
  '/': '/images/car-home.jpeg',
  '/login': '/images/car-login.jpeg',
  '/register': '/images/car-register.jpeg',
  '/dashboard': '/images/car-dashboard.jpeg',
  '/achat': '/images/car-achat.jpeg',
  '/location': '/images/car-location.jpeg',
  '/settings': '/images/car-settings.jpeg',
  '/cars': '/images/car-cars.jpeg'
};

const App = () => {
  const location = useLocation();
  const [bgImage, setBgImage] = useState(backgrounds['/']);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const path = location.pathname;
    const newBg = backgrounds[path] || '/images/car-default.jpg';

    setFade(false);
    setTimeout(() => {
      setBgImage(newBg);
      setFade(true);
    }, 300);
  }, [location]);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      
      {/* 🎯 Background Layer */}
      <div
        className={`fixed inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* 🧊 Dark overlay */}
      <div className="fixed inset-0 z-0 bg-black/50 backdrop-blur-md" />

      {/* 🧱 Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;