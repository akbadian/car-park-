import React from 'react';

const Home = () => {
  return (
    <div className="text-white bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-br from-black via-gray-800 to-gray-900">
        <h1 className="text-5xl font-bold mb-4">CarPark, Sensationel !</h1>
        <p className="text-lg mb-6">Vivez Elegance, Pouvoir, et Performance a travers nos autos</p>
        <div className="flex flex-row gap-4">
          <button className="px-20 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition">Achat</button>
          <button className="px-20 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">Location</button>
        </div>
      </section>

      {/*Features Section 
      <section className="py-20 px-6 bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1].map((i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <div className="mb-4 text-3xl">🚗</div>
              <h2 className="text-xl font-bold mb-2">Feature {i}</h2>
              <p className="text-sm">High-end details tailored for exclusivity.</p>
            </div>
          ))}
        </div>
      </section>
      */}


      {/* Footer Section */}
      <footer className="py-12 px-6 bg-gray-950 text-center text-sm">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:underline">Home</a>
          <a href="#" className="mx-2 hover:underline">About</a>
          <a href="#" className="mx-2 hover:underline">Contact</a>
        </div>
        <p className="mt-4 text-gray-400">© 2025 Luxury Motors. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;