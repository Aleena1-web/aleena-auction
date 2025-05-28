// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ title, description, image, currentBid, bidsCount, timeLeft }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
          LIVE
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
          {bidsCount} bids
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Current Bid</p>
            <p className="font-bold text-yellow-600">${currentBid.toFixed(2)}</p>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <i className="far fa-clock mr-1" /> {timeLeft} left
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm font-medium transition">
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;