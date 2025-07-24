import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Achat from './pages/Achat.jsx';
import Location from './pages/Location.jsx';
import Settings from './pages/Settings.jsx';
import Cars from './pages/Cars.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },

      // 🛡️ Protected Routes
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: '/achat',
        element: (
          <ProtectedRoute>
            <Achat />
          </ProtectedRoute>
        )
      },
      {
        path: '/location',
        element: (
          <ProtectedRoute>
            <Location />
          </ProtectedRoute>
        )
      },
      {
        path: '/cars',
        element: (
          <ProtectedRoute>
            <Cars />
          </ProtectedRoute>
        )
      },
      {
        path: '/settings',
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);