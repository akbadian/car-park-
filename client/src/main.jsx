// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Achat from './pages/Achat.jsx'; // Assuming you have an Achat component
import Location from './pages/Location.jsx'; // Assuming you have a Location component
import Settings from './pages/Settings.jsx';
import Cars from './pages/Cars.jsx';


import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/achat', element: <Achat /> },
      { path: '/login', element: <Login /> },
      { path: '/location', element: <Location /> },
      { path: '/register', element: <Register /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/cars', element: <Cars /> },          
      { path: '/settings', element: <Settings /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);