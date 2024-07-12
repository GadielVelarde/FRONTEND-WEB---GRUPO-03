import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Importa el AuthContext
import './CSS/SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // Usa el contexto
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && name && password) {
      login(); // Llama a la función de inicio de sesión
      // Navegar a otra página después de la validación

      navigate('/perfil');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="signup-container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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

export default SignUp;
