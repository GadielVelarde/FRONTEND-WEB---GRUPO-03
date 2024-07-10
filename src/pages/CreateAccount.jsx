import React from 'react';
import './CSS/CreateAccount.css';
import Title from '../components/Title-CreateA';
import Buttons from '../components/Buttons-CreateA';

const CreateAccount = () => {
  return (
    <div className="home-container">
    <Title />
    <div className="buttons-container">
      <Buttons />
    </div>
  </div>
  );
};

export default CreateAccount;