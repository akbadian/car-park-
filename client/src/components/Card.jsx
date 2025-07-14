import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="card w-72 bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="h-32 w-full object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
