import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Header.css';

function Header_fr() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === 'fr') {
      navigate('/fr');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/fr">SuppliesPro</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/fr">Accueil</Link></li>
          <li><Link to="/fr/food-supplements">Compléments Alimentaires</Link></li>
          <li><Link to="/fr/sports-equipments">Équipements Sportifs</Link></li>
          <li><Link to="/fr/about-us">À Propos</Link></li>
          <li><Link to="/fr/contact-us">Nous Contacter</Link></li>
          <li><Link to="/fr/client-progress">Progrès de Nos Clients</Link></li>
          <li><Link to="/fr/compare">Comparer</Link></li>
        </ul>
      </nav>
      <div className="user-section">
        <Link to="/fr/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
        <Link to="/fr/register">S'inscrire</Link>
        <Link to="/fr/login">Se Connecter</Link>
      </div>

      {/* Language Selector */}
      <select onChange={handleLanguageChange} defaultValue="fr">
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </header>
  );
}

export default Header_fr;
