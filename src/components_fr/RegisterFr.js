import React, { useState } from 'react';
import '../styles/Register.css';

function Register_fr() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmationCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      alert('Compte créé avec succès!');
    }
  };

  const handleResendCode = () => {
    alert('Code de confirmation renvoyé!');
  };

  return (
    <div className="register">
      <div className="progress-bar">
        <div className="progress" style={{ width: step === 1 ? '50%' : '100%' }}></div>
      </div>
      {step === 1 ? (
        <div className="step">
          <h2>Étape 1 - Créer un compte</h2>
          <label>
            Nom d'utilisateur:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Mot de passe:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <button onClick={handleNext}>S'inscrire</button>
        </div>
      ) : (
        <div className="step">
          <h2>Étape 2 - Confirmer l'email</h2>
          <label>
            Code de confirmation:
            <input type="text" name="confirmationCode" value={formData.confirmationCode} onChange={handleChange} />
          </label>
          <p>Vous recevrez un email de confirmation sous peu.</p>
          <p>
            <button type="button" onClick={handleResendCode}>Cliquez ici pour renvoyer le code</button>
          </p>
          <button onClick={handleNext}>Confirmer</button>
        </div>
      )}
    </div>
  );
}

export default Register_fr;
