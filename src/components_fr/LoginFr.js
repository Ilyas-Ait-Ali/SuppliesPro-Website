import React, { useState } from 'react';
import '../styles/Login.css';

function Login_fr() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Connecté avec succès !');
  };

  return (
    <div className="login">
      <h2>Connectez-vous à votre compte</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mot de passe :
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login_fr;
