import React from 'react';
import './CSS/Home.css';
import Title from '../components/Title';
import Buttons from '../components/Buttons';

const Home = () => {
  return (
    <div className="home-container">
      <Title />
      <div className="buttons-container">
        <Buttons />
      </div>
    </div>
  );
};

export default Home;
