import React, { useState } from 'react';

const rentalCars = [
  { brand: 'Range Rover Sport', pricePerDay: '2 750 MAD / jour', year: 2022, image: '/images/cars/range-rover.jpeg' },
  { brand: 'BMW X6', pricePerDay: '2 090 MAD / jour', year: 2021, image: '/images/cars/bmw-x6.jpeg' },
  { brand: 'Tesla Model X', pricePerDay: '2 420 MAD / jour', year: 2023, image: '/images/cars/tesla-model-x.jpeg' },
  { brand: 'Audi Q8', pricePerDay: '2 310 MAD / jour', year: 2022, image: '/images/cars/audi-q8.jpeg' },
  { brand: 'Mercedes-Benz GLE', pricePerDay: '2 145 MAD / jour', year: 2020, image: '/images/cars/mercedes-gle.jpeg' },
];

const Location = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [dates, setDates] = useState({ start: '', end: '' });

  const handleBooking = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  return (
    <div className="p-8 font-sans text-white">
      <div className="mb-6">
        <h1 className="text-4xl font-heading font-bold mb-2">🔑 Voitures en Location</h1>
        <p className="text-gray-300 text-lg">
          Louez nos véhicules haut de gamme pour une expérience inoubliable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentalCars.map((car, index) => (
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
            <p className="text-gray-300">💸 Prix: {car.pricePerDay}</p>
            <p className="text-gray-300">📅 Année: {car.year}</p>

            <div className="flex flex-col gap-2 mt-4">
              <input
                type="date"
                className="p-2 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Date de début"
                value={dates.start}
                onChange={(e) => setDates({ ...dates, start: e.target.value })}
              />
              <input
                type="date"
                className="p-2 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Date de fin"
                value={dates.end}
                onChange={(e) => setDates({ ...dates, end: e.target.value })}
              />
              <button
                onClick={() => handleBooking(car)}
                className="mt-2 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition text-white font-semibold"
              >
                Réserver
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🌟 Booking Modal */}
      {showModal && selectedCar && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white/10 p-6 rounded-2xl shadow-xl w-full max-w-md text-center text-white">
            <h2 className="text-2xl font-bold mb-4">🚗 Réservation confirmée !</h2>
            <p className="text-gray-300 mb-2">
              Vous avez demandé à louer <strong>{selectedCar.brand}</strong>.
            </p>
            <p className="text-gray-300 mb-4">
              Du <strong>{dates.start || '...'}</strong> au <strong>{dates.end || '...'}</strong>.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition font-semibold"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;