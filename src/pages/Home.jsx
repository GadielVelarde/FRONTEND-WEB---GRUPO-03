import React from 'react';
import './CSS/Home.css';
import Title from '../components/Title';
import Buttons from '../components/Buttons';

const Home = () => {
  return (
    <div className="home">
      <Title />
      <Buttons />
    </div>
  );
};

export default Home;
