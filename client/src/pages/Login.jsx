import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password
      });

      localStorage.setItem('token', res.data.token); // ✅ Store token
      navigate('/dashboard'); // or wherever your protected route begins
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
      setIsLoading(false);
    }
  };

  return (
    <div className="from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-[320px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5">
        <h1 className="text-xl font-bold text-center text-white mb-3">Welcome Back</h1>
        <p className="text-center text-gray-400 text-sm mb-5">Sign in to your CarPark account</p>

        {error && (
          <p className="text-red-400 text-sm text-center mb-3">{error}</p>
        )}

        <form className="space-y-3" onSubmit={handleSubmit}>
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
                placeholder="Enter your password"
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

          <div className="flex items-center justify-between text-gray-300 text-xs">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded text-purple-500" />
              Remember me
            </label>
            <a href="#" className="hover:text-purple-400">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full from-purple-500 to-pink-500 text-white py-2 rounded-md font-medium hover:from-purple-600 hover:to-pink-600 focus:outline-none transform hover:scale-105 transition"
          >
            {isLoading ? 'Signing in...' : (
              <span className="flex items-center justify-center text-sm">
                Sign In <ArrowRight size={16} className="ml-1" />
              </span>
            )}
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-purple-400 hover:text-purple-300 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;