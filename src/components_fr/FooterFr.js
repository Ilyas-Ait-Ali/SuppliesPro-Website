import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer_fr() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Supplies</span>Pro</h1>
          <p>
            SuppliesPro est votre guichet unique pour tous vos besoins en fitness et bien-être. Des compléments de haute qualité aux équipements sportifs durables, nous avons tout ce dont vous avez besoin pour atteindre vos objectifs de fitness.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Liens Rapides</h2>
          <ul>
            <li><a href="/fr">Accueil</a></li>
            <li><a href="/fr/about-us">À Propos</a></li>
            <li><a href="/fr/contact-us">Nous Contacter</a></li>
            <li><a href="/fr/food-supplements">Compléments Alimentaires</a></li>
            <li><a href="/fr/sports-equipments">Équipements Sportifs</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Nous Contacter</h2>
          <ul>
            <li><strong>Adresse :</strong> 123 Rue Fitness, Ottawa, Canada</li>
            <li><strong>Téléphone :</strong> +1 343 777 7777</li>
            <li><strong>Email :</strong> info@suppliespro.com</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Suivez-nous</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 SuppliesPro | Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer_fr;
