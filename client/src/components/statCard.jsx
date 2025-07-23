import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex items-center space-x-4 w-64">
      <div className="text-purple-600 text-3xl">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
