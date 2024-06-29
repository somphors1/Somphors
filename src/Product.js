import React, { useState } from "react";
import "./product.css";

function Product({ name, productPrice, imageUrl }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const deleteFromCart = () => {
    setCount(0);
  };

  const handleAddToCart = () => {
    setCount(1); // Start the count from 1 when added to cart
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="detail">
        <div className="name">{name}</div>
        <div style={{ fontSize: "15px", margin: "8px" }}>${productPrice.toFixed(2)}</div>
        {count === 0 ? (
          <button className="btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <button className="sum" onClick={increment} style={{ width: 35, margin: 9 }}>
              +
            </button>
            <div>{count}</div>
            <button className="sum" onClick={decrement} style={{ width: 35, margin: 9 }}>
              -
            </button>
            <button className="delete-btn" onClick={deleteFromCart}>
            Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
