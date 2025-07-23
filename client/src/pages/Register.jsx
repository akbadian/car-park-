import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log({ name, email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-[320px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5">
        <h1 className="text-xl font-bold text-center text-white mb-3">Create Account</h1>
        <p className="text-center text-gray-400 text-sm mb-5">Sign up for a CarPark account</p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Full Name</label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3 py-2">
              <User className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent text-white w-full placeholder-gray-400 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Email Address</label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3 py-2">
              <Mail className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white w-full placeholder-gray-400 text-sm focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3 py-2">
              <Lock className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white w-full placeholder-gray-400 text-sm focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-white ml-2 focus:outline-none"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md font-medium hover:from-purple-600 hover:to-pink-600 focus:outline-none transform hover:scale-105 transition"
          >
            {isLoading ? 'Creating account...' : (
              <span className="flex items-center justify-center text-sm">
                Sign Up <ArrowRight size={16} className="ml-1" />
              </span>
            )}
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
