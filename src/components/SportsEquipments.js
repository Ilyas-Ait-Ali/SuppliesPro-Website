import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CompareContext } from '../context/CompareContext';
import sportsEquipmentsData from './sportsEquipmentsData';
import '../styles/FoodSupplements.css';

function SportsEquipments() {
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

  const filteredProducts = sportsEquipmentsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (minPrice === '' || product.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || product.price <= parseFloat(maxPrice))
    );
  });

  return (
    <div className="food-supplements">
      <h1>Sports Equipments</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-card-buttons">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => navigate(`/product/sports-equipments/${product.id}`)}>View Details</button>
              <label>
                <input
                  type="checkbox"
                  checked={compareList.includes(product)}
                  onChange={() => handleCompareChange(product)}
                />
                Compare
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsEquipments;
