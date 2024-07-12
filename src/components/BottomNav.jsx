import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Importa el AuthContext
import './CSS/BottomNav.css';

const BottomNav = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext); // Usa el contexto
  const [visible, setVisible] = useState(false);

  const toggleNav = () => {
    setVisible(!visible);
  };

  if (!isAuthenticated) {
    return null; // No renderizar el componente si no está autenticado
  }

  return (
    <div>
      <button className="toggle-button" onClick={toggleNav}>
        {visible ? 'Hide' : 'Show'}
      </button>
      <div className={`bottom-nav ${visible ? 'visible' : ''}`}>
        <button className="nav-button" onClick={() => navigate('/Home2')}>
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
