import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const toggleNav = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleNav}>
        {visible ? 'Hide' : 'Show'}
      </button>
      <div className={`bottom-nav ${visible ? 'visible' : ''}`}>
        <button className="nav-button" onClick={() => navigate('/')}>
          <img src="/images/home-icon.jpg" alt="Home" />
        </button>
        <button className="nav-button" onClick={() => navigate('/actividades')}>
          <img src="/images/actividades-icon.jpg" alt="Actividades" />
        </button>
        <button className="nav-button" onClick={() => navigate('/perfil')}>
          <img src="/images/perfil-icon.jpg" alt="Perfil" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
