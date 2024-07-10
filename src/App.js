'use client';

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Activities from './pages/Activities'; // Nuevo componente para actividades
import BottomNav from './components/BottomNav';
import CreateAccount from './pages/CreateAccount';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
