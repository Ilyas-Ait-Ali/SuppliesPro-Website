import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './productsData';
import sportsEquipmentsData from './sportsEquipmentsData';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { category, productId } = useParams();
  let product;

  if (category === 'food-supplements') {
    product = productsData.find((item) => item.id === parseInt(productId));
  } else if (category === 'sports-equipments') {
    product = sportsEquipmentsData.find((item) => item.id === parseInt(productId));
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <h3>Advantages:</h3>
      <ul>
        {product.advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetail;
