import React, { useState } from "react";
import Product from "./Product";
import "./product.css";

export default function Counter() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function addProduct() {
    if (productName && productPrice) {
      const newProduct = {
        productName: productName,
        productPrice: parseFloat(productPrice),
        imageUrl: imageUrl,
      };
      setProducts([...products, newProduct]);
      // Clear input fields after adding product
      setProductName("");
      setProductPrice("");
      setImageUrl("");
    } else {
      alert("Please enter product name and price.");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: 10 }}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button
        style={{ width: 100, marginBottom: 10 }}
        onClick={addProduct}
      >
        Add Product
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product
              key={index} // Replace with a unique identifier like product ID if available
              name={product.productName}
              productPrice={product.productPrice}
              imageUrl={product.imageUrl}
            />
          ))
        ) : (
          <div>No products added yet.</div>
        )}
      </div>
    </div>
  );
}
