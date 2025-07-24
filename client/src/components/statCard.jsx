import React from 'react';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-center gap-4 w-64 shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
      <div className="text-gray-400 text-3xl drop-shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-200 text-sm tracking-wide">{title}</h4>
        <p className="text-white text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;