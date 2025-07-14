import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import {
  FaCar,
  FaMoneyBillWave,
  FaTools,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Find Your Perfect Ride
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover our premium selection of new and used vehicles
          </p>
          <div className="flex gap-4">
            <Link 
              to="/cars"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Cars
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <FaCar className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
            <p className="text-gray-600">
              Browse our extensive collection of certified pre-owned vehicles
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <FaMoneyBillWave className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Financing</h3>
            <p className="text-gray-600">
              Competitive rates and flexible financing options
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <FaTools className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
            <p className="text-gray-600">
              Professional maintenance and repair services
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <FaPhone className="text-3xl text-blue-600 mb-2" />
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div>
              <FaMapMarkerAlt className="text-3xl text-blue-600 mb-2" />
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-gray-600">123 Car Street, City, Country</p>
            </div>
            <div>
              <FaClock className="text-3xl text-blue-600 mb-2" />
              <h3 className="font-semibold">Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect vehicle
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/cars" className="text-gray-400 hover:text-white">View Inventory</Link></li>
                <li><Link to="/finance" className="text-gray-400 hover:text-white">Financing</Link></li>
                <li><Link to="/service" className="text-gray-400 hover:text-white">Service Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">123 Car Street</li>
                <li className="text-gray-400">(555) 123-4567</li>
                <li className="text-gray-400">info@carpark.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            &copy; {new Date().getFullYear()} CarPark Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;