"use client";
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string; // path to image/icon
  buttonText: string;
  buttonLink: string;
  color?: string; // optional color theme
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  color = 'bg-white',
}) => {
  return (
    <div 
      className="w-full p-4 rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl border-2 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-Neutral)',
        borderColor: 'var(--color-Primary)',
        boxShadow: '0 4px 20px rgba(182, 245, 0, 0.1)',
      }}
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" 
          src={image} 
          alt={title} 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }}
        />
      </div>
      
      <div className="p-2">
        <h2 
          className="font-bold text-xl mb-3 leading-tight"
          style={{ color: 'var(--color-Neutral2)' }}
        >
          {title}
        </h2>
        <p 
          className="text-sm mb-4 leading-relaxed"
          style={{ color: 'var(--color-Neutral3)' }}
        >
          {description}
        </p>
      </div>
      
      <div className="p-2">
        <a 
          role="button" 
          href={buttonLink} 
          className="inline-block w-full text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: 'var(--color-Primary)',
            color: 'var(--color-Neutral2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-Secondary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-Primary)';
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;