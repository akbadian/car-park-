import React from "react";

const Home = () => {
    return (
        <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Bienvenu(e) chez Golden Auto</h1>
        <div className="mt-4 text-gray-700">
          <p className="text-lg">Votre application de gestion de parc automobile.</p>
          <p className="text-lg">Gérez vos véhicules, vos clients et vos ventes en toute simplicité.</p>
          <p className="mt-4 text-gray-600">Gerez confortablement vos Vehicules, vos Clients et vos Ventes.</p>
        </div>
        <div className="mt-6">
          <p className="text-lg">Pour commencer, veuillez vous connecter ou vous inscrire.</p>
            <p className="text-lg">Pour toute question, n'hésitez pas à nous contacter.</p>
        </div>
      </div>
    )
}

export default Home;