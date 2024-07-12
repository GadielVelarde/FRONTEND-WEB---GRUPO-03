import React from 'react';
import './CSS/Header.css';

const Header = ({ name }) => {
  return (
    <div className="header">
      <img src="/images/utec.jpg" alt="Background" className="header-image" />
      <div className="header-content">
        <img src="/images/perfil_image.jpg" alt="Profile" className="profile-image" />
        <h1 className="profile-name">{name}</h1>
      </div>

    </div>
  );
};

export default Header;