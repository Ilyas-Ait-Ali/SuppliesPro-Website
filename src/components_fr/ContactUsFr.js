import React from 'react';
import '../styles/ContactUs.css';

function ContactUs_fr() {
  return (
    <div className="contact-us">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contactez-Nous</h1>
          <p>Nous aimerions avoir de vos nouvelles!</p>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/images/contact-hero.jpg`} alt="Contactez-Nous" />
        </div>
      </section>

      <section className="contact-info">
        <h2>Informations de Contact</h2>
        <p>Si vous avez des questions, n'hésitez pas à nous contacter en utilisant les coordonnées ci-dessous :</p>
        <ul>
          <li><strong>Email :</strong> support@suppliespro.com</li>
          <li><strong>Téléphone :</strong> +1 343 777 7777</li>
          <li><strong>Adresse :</strong> 1234 Fitness Street, Ottawa, ON K1A 0B1, Canada</li>
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>Envoyez-nous un message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Envoyer le message</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>Notre Localisation</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22748.857570765337!2d-75.70812003818003!3d45.42110645075559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff0a50745b%3A0x4b1d4905c5bfe0e1!2sFitness%20Street%2C%20Ottawa%2C%20ON%2C%20Canada!5e0!3m2!1sfr!2sfr!4v1612330441536!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Notre Localisation"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs_fr;
