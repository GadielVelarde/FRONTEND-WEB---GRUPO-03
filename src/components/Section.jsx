import React from 'react';
import './CSS/Section.css';

const Section = ({ title, description, icon }) => {
  return (
    <div className="section">
      <img src={icon} alt={title} className="section-icon" />
      <div className="section-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Section;
