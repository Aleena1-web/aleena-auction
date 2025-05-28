// src/components/SectionContainer.jsx
import React from 'react';

const SectionContainer = ({ children, title, subtitle, className = '' }) => {
  return (
    <section className={`py-8 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-8 text-center">
            {title && <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>}
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;