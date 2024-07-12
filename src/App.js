'use client';

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Profile from './pages/Profile';
import Activities from './pages/Activities';
import BottomNav from './components/BottomNav';
import CreateAccount from './pages/CreateAccount';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './AuthContext'; // Importa el AuthProvider

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/actividades" element={<Activities />} />

            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
          <BottomNav />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
