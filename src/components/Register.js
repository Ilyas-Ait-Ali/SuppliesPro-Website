import React, { useState } from 'react';
import '../styles/Register.css';

function Register() {
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
      alert('Account created successfully!');
    }
  };

  const handleResendCode = () => {
    alert('Confirmation code resent!');
  };

  return (
    <div className="register">
      <div className="progress-bar">
        <div className="progress" style={{ width: step === 1 ? '50%' : '100%' }}></div>
      </div>
      {step === 1 ? (
        <div className="step">
          <h2>Step 1 - Create Account</h2>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <button onClick={handleNext}>Register</button>
        </div>
      ) : (
        <div className="step">
          <h2>Step 2 - Confirm Email</h2>
          <label>
            Confirmation code:
            <input type="text" name="confirmationCode" value={formData.confirmationCode} onChange={handleChange} />
          </label>
          <p>You will receive a confirmation email shortly.</p>
          <p>
            <button type="button" onClick={handleResendCode}>Click here to resend code</button>
          </p>
          <button onClick={handleNext}>Confirm</button>
        </div>
      )}
    </div>
  );
}

export default Register;
