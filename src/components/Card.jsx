import React from 'react';
import './Card.css'

const Card = ({ image, title, description, link }) => {
  return (
    <a href={link} className="card" target="_blank" rel="noreferrer">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        
      </div>
    </a>
  );
};

export default Card;