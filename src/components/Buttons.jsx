import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Buttons.css';

const Buttons = () => {
  return (
    <div className="buttons">
      <Link to="/create-account">
        <button className="button">Crear Cuenta</button>

      </Link>
      <Link to="/sign-in">
      <button className="button">Iniciar Sesión</button>
      </Link>
    </div>
  );
};

export default Buttons;
