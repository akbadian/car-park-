import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_API_URL}/cars`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => setCars(res.data))
    .catch((err) => console.error('Error fetching cars:', err));
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-bold mb-4">🚗 Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white/10 border border-white/20 p-4 rounded-xl shadow-sm backdrop-blur-md"
          >
            <h3 className="text-purple-300 font-semibold text-lg">
              {car.brand} {car.model}
            </h3>
            <p className="text-sm text-gray-300">Year: {car.year}</p>
            <p className="text-sm text-gray-300">Plate: {car.licensePlate}</p>
            <p className="text-sm text-green-400">Status: {car.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;