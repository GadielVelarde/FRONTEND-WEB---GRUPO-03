import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Buttons-CreateA.css';

const Buttons = () => {
  return (
    <div className="buttons">
      <Link to="/sign-up">
        <button className="button">Compañía</button>
      </Link>
      <Link to="/sign-up">
        <button className="button">Usuario</button>
      </Link>
    </div>
  );
};

export default Buttons;
