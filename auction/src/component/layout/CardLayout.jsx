// src/components/CardLayout.jsx
import React from 'react';

const CardLayout = ({ children, title, footer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {title && (
        <div className="border-b border-gray-200 px-4 py-3">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default CardLayout;