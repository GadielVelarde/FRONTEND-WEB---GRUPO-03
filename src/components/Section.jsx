import React from 'react';
import './CSS/Section.css';

const Section = ({ title, description }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Section;
