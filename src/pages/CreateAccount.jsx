import React from 'react';
import './CSS/CreateAccount.css';
import Title from '../components/Title-CreateA';
import Buttons from '../components/Buttons-CreateA';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();


  return (
    <div className="CreateA-container">

      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
    <Title />
    <div className="buttons-container">
      <Buttons />
    </div>
  </div>
  );

};

export default CreateAccount;