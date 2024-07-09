import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>What's up Pals</h1>
      <div className="buttons">
        <button className="button">Create Account</button>
        <button className="button">Sign In</button>
      </div>
    </div>
  );
};

export default Home;
