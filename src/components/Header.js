import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Header.css';

function Header() {
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
        <Link to="/">SuppliesPro</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/food-supplements">Food Supplements</Link></li>
          <li><Link to="/sports-equipments">Sports Equipments</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/client-progress">Our Clients Progress</Link></li>
          <li><Link to="/compare">Compare</Link></li>
        </ul>
      </nav>
      <div className="user-section">
        {/* Language Selector */}
        <select onChange={handleLanguageChange} defaultValue="en">
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>

        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </div>
    </header>
  );
}

export default Header;
