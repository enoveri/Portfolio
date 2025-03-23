import React from 'react';

const ProfessionalSkillCard = ({ title, image, description }) => {
  return (
    <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-[var(--secondary)]">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProfessionalSkillCard; 