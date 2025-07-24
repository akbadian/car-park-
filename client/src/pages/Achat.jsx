import React, { useState } from 'react';

const carsForSale = [
  { brand: 'BMW M3', price: '650,000 MAD', year: 2022, image: '../images/cars/bmw-m3.jpeg' },
  { brand: 'Audi R8', price: '1,200,000 MAD', year: 2021, image: '/images/cars/audi-r8.jpeg' },
  { brand: 'Mercedes-Benz C63 AMG', price: '750,000 MAD', year: 2023, image: '/images/cars/mercedes-c63.jpeg' },
  { brand: 'Tesla Model S', price: '890,000 MAD', year: 2022, image: '/images/cars/tesla-model-s.jpeg' },
  { brand: 'Porsche 911 Carrera', price: '1,100,000 MAD', year: 2020, image: '/images/cars/porsche-911.jpeg' },
];

const Achat = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  const filteredCars = carsForSale.filter((car) => {
    const matchesSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = yearFilter ? car.year === parseInt(yearFilter) : true;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="p-8 font-sans text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-heading font-bold mb-2">🛒 Voitures à Vendre</h1>
        <p className="text-gray-300 text-lg">
          Découvrez nos véhicules haut de gamme disponibles à l'achat.
        </p>
      </div>

      {/* 🔍 Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Rechercher une marque"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-md placeholder-gray-400 text-white w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-white w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">📅 Filtrer par année</option>
          {[2023, 2022, 2021, 2020].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* 🚗 Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length === 0 ? (
          <p className="text-gray-400">Aucune voiture ne correspond à votre recherche.</p>
        ) : (
          filteredCars.map((car, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-4 hover:scale-[1.02] transition-transform flex flex-col"
            >
              <img
                src={car.image}
                alt={car.brand}
                className="rounded-xl mb-4 h-48 w-full object-cover shadow-md"
              />
              <h2 className="text-2xl font-semibold mb-1">{car.brand}</h2>
              <p className="text-gray-300">💰 Prix: {car.price}</p>
              <p className="text-gray-300">📅 Année: {car.year}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Achat;