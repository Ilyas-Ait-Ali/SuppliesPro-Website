import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

function Cart_fr() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.price.toFixed(2)} €</p>
                  <button onClick={() => removeFromCart(product.id)}>Supprimer</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Résumé du Panier</h2>
            <p>Prix Total : {totalPrice.toFixed(2)} €</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart_fr;
