import React from 'react';
import { Bar } from 'react-chartjs-2';
import StatsCard from '@/components/statCard';
import { FaChartBar, FaCar, FaCogs, FaClipboardList, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CarList from '@/components/carList';


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
  <div className="w-64 from-purple-800 to-purple-900 text-white p-5 shadow-lg rounded-r-2xl">
    <h2 className="text-2xl font-bold mb-8 text-center"></h2>
    <ul className="space-y-4">
      <li>
        <Link to="/dashboard" className="flex items-center space-x-3 p-2 rounded hover:bg-purple-700 transition">
          <FaChartBar />
          <span className='flex items-center'>Dashboard</span>
        </Link>
      </li>
      {/*<li>
        <Link to="/rentals" className="flex items-center space-x-3 p-2 rounded hover:bg-purple-700 transition">
          <FaClipboardList />
          <span>Rentals</span>
        </Link>
      </li>*/}
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

function Dashboard() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Rentals',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(27, 3, 3, 0.81)',
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
    <div className="flex text-gray-400 font-sans">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <StatsCard title="Total Cars" value="120" icon={<FaCar />} />
            <StatsCard title="Total Users" value="85" icon={<FaUser />} />
            <StatsCard title="Total Rentals" value="320" icon={<FaClipboardList />} />
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-lg font-bold mb-4">Rental Trends</h3>
            <Bar data={data} options={options} />
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-4">Car List</h3>
            <CarList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;