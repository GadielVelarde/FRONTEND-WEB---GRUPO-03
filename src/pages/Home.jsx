import React from 'react';
import './CSS/Home.css';
import Title from '../components/Title';
import Buttons from '../components/Buttons';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title-container">
        <Title />
      </div>
      <div className="buttons-container">
        <Buttons />
      </div>
    </div>
  );
};

export default Home;