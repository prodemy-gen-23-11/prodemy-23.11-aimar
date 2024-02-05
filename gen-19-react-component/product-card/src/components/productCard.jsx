import React from 'react';

function productCard({ name, price, image, sold, onBuyClick }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-44 h-auto rounded-lg" />
      <h3 className="text-xl font-semibold text-white mt-2">{name}</h3>
      <p className="text-white">Rp. {price}</p>
      <p className="text-gray-400">{sold}</p>
      
      <button
        className="bg-white text-gray-600 px-6 py-2 rounded-full mx-auto mt-4 block hover:bg-gray-700 hover:text-white focus:outline-none focus:shadow-outline"
        onClick={() => onBuyClick(name)}
      >
        Add to Bag
      </button>
      
    </div>
  );
}

export default productCard;