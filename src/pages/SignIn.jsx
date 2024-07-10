import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && password) {
      // Navegar a otra página después de la validación
      navigate('/perfil');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="signin-container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="continue-btn" onClick={handleSubmit}>Continue</button>
    </div>
  );
};

export default SignIn;
