// src/components/AuctionStatusBadge.jsx
import React from 'react';

const AuctionStatusBadge = ({ status }) => {
  const statusColors = {
    live: 'bg-red-500',
    upcoming: 'bg-blue-500',
    ended: 'bg-gray-500',
    sold: 'bg-green-500'
  };

  const statusText = {
    live: 'LIVE',
    upcoming: 'UPCOMING',
    ended: 'ENDED',
    sold: 'SOLD'
  };

  return (
    <span className={`${statusColors[status]} text-white text-xs font-bold px-2 py-1 rounded-full uppercase`}>
      {statusText[status]}
    </span>
  );
};

export default AuctionStatusBadge;