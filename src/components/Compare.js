import React, { useContext } from 'react';
import { CompareContext } from '../context/CompareContext';
import '../styles/Compare.css';

function Compare() {
  const { compareList } = useContext(CompareContext);

  return (
    <div className="compare-page">
      <h1>Compare Products</h1>
      <div className="compare-grid">
        {compareList.map((product) => (
          <div key={product.id} className="compare-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <ul>
              {product.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compare;
