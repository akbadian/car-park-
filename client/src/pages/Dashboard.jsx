import React from 'react';
import { Bar } from 'react-chartjs-2';
import StatsCard from '@/components/statCard';
import { FaChartBar, FaCar, FaCogs, FaClipboardList, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Sidebar = () => (
  <div className="w-64 min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 text-white p-5 shadow-lg">
    <h2 className="text-2xl font-bold mb-8 text-center">🚗 CarPark</h2>
    
    <ul className="space-y-4">
      <li>
        <Link to="/dashboard" className="flex items-center space-x-3 p-2 rounded hover:bg-purple-700 transition">
          <FaChartBar />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/rentals" className="flex items-center space-x-3 p-2 rounded hover:bg-purple-700 transition">
          <FaClipboardList />
          <span>Rentals</span>
        </Link>
      </li>
      <li>
        <Link to="/cars" className="flex items-center space-x-3 p-2 rounded hover:bg-purple-700 transition">
          <FaCar />
          <span>Cars</span>
        </Link>
      </li>
      <li>
        <Link to="/settings" className="flex items-center space-x-3 p-2 rounded hover:bg-purple-700 transition">
          <FaCogs />
          <span>Settings</span>
        </Link>
      </li>
    </ul>
  </div>
);

const Dashboard = () => {
  // Sample chart data
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Rentals',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(139, 92, 246, 0.6)', // purple
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="flex flex-wrap gap-4 mb-8">
          <StatsCard title="Total Cars" value="120" icon={<FaCar />} />
          <StatsCard title="Total Users" value="85" icon={<FaUser />} />
          <StatsCard title="Total Rentals" value="320" icon={<FaClipboardList />} />
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold mb-4">Rental Trends</h3>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
