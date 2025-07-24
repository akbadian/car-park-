import React from 'react';

const Settings = () => {
  return (
    <div className=" p-8 font-sans text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
        <h1 className="text-3xl font-heading font-bold mb-4">⚙️ Paramètres</h1>
        <p className="text-gray-300 text-lg mb-6">
          Gérez vos préférences, compte utilisateur et notifications ici.
        </p>

        <div className="space-y-4">
          {/* Example input fields */}
          <div>
            <label className="block text-gray-400 mb-1">Nom</label>
            <input type="text" placeholder="Votre nom" className="w-full p-3 rounded-xl bg-white/20 text-white focus:outline-none" />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input type="email" placeholder="exemple@email.com" className="w-full p-3 rounded-xl bg-white/20 text-white focus:outline-none" />
          </div>

          <button className="mt-4 px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition text-white font-semibold">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;