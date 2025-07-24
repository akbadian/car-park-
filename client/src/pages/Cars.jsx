import React from 'react';

const carsList = [
  { brand: 'Ferrari F8', year: 2023, plate: 'A-178-FEZ', status: 'Disponible' },
  { brand: 'Lamborghini Huracán', year: 2022, plate: 'B-350-CAS', status: 'Louée' },
  { brand: 'Toyota Supra', year: 2021, plate: 'C-490-RAB', status: 'Disponible' },
];

const Cars = () => {
  return (
    <div className="p-8 font-sans text-white">
      <div className="mb-6">
        <h1 className="text-4xl font-heading font-bold">🚘 Voitures Disponibles</h1>
        <p className="text-gray-300 text-lg">Liste complète de vos véhicules gérés via CarPark.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carsList.map((car, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-semibold mb-2">{car.brand}</h2>
            <p className="text-gray-300">📅 Année: {car.year}</p>
            <p className="text-gray-300">🔖 Plaque: {car.plate}</p>
            <p className={`mt-2 px-3 py-1 inline-block rounded-full text-sm font-bold ${
              car.status === 'Disponible' ? 'bg-green-600' : 'bg-red-600'
            }`}>
              {car.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;