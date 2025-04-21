import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './productsDataFr';
import sportsEquipmentsData from './sportsEquipmentsDataFr';
import '../styles/ProductDetail.css';

function ProductDetail_fr() {
  const { category, productId } = useParams();
  let product;

  if (category === 'food-supplements') {
    product = productsData.find((item) => item.id === parseInt(productId));
  } else if (category === 'sports-equipments') {
    product = sportsEquipmentsData.find((item) => item.id === parseInt(productId));
  }

  if (!product) {
    return <h2>Produit non trouvé</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Prix : {product.price.toFixed(2)} €</p>
      <p>{product.description}</p>
      <h3>Avantages :</h3>
      <ul>
        {product.advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetail_fr;
