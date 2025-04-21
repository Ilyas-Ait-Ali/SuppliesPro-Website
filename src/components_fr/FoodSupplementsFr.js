import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CompareContext } from '../context/CompareContext';
import productsData from './productsDataFr';
import '../styles/FoodSupplements.css';

function FoodSupplements_fr() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { addToCart } = useContext(CartContext);
  const { compareList, addToCompare, removeFromCompare } = useContext(CompareContext);
  const navigate = useNavigate();

  const handleCompareChange = (product) => {
    if (compareList.includes(product)) {
      removeFromCompare(product);
    } else {
      addToCompare(product);
    }
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (minPrice === '' || product.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || product.price <= parseFloat(maxPrice))
    );
  });

  return (
    <div className="food-supplements">
      <h1>Compléments Alimentaires</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)} €</p>
            <div className="product-card-buttons">
              <button onClick={() => addToCart(product)}>Ajouter au Panier</button>
              <button onClick={() => navigate(`/product/food-supplements/${product.id}`)}>Voir Détails</button>
              <label>
                <input
                  type="checkbox"
                  checked={compareList.includes(product)}
                  onChange={() => handleCompareChange(product)}
                />
                Comparer
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSupplements_fr;
