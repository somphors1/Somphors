import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Input, Modal } from "antd";
import Product from "./Product";
import logo from "./logo.svg";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from localStorage when the component mounts
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // Initial products if nothing is in localStorage
      setProducts([
        {
          name: "Fanta",
          productPrice: 5,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMns47UZsmdQLmRLUBjVdoJSvNgzUeRTdTg&s",
        },
        {
          name: "Vatanac",
          productPrice: 6,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQC6-j7s3Wsxm7evp6B_Sf-tb7mFaW4knHA&s",
        },
        {
          name: "Sting",
          productPrice: 5,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCouNeEnwywCB-uDwxmfWoziRO85l6kOu_vQ&s",
        },
        {
          name: "Sting",
          productPrice: 3.5,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t4iwpkr9fMa-U8RBXgqQcHBcea-QTBp33A&s",
        },
      ]);
    }
  }, []);

  function showAddProductModal() {
    setIsOpenModal(true);
  }

  function closeAddProductModal() {
    setIsOpenModal(false);
  }

  function handleAddProduct() {
    const newProduct = {
      name: productName,
      productPrice: parseFloat(productPrice),
      imageUrl: productImageUrl,
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Save to localStorage
    setProductName("");
    setProductPrice("");
    setProductImageUrl("");
    closeAddProductModal();
  }

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#333",
            color: "white",
            padding: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              marginBottom: "0px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img style={{ width: "50px" }} src={logo} alt="Logo" />

            <ul
              style={{
                listStyleType: "none",
                padding: "0 12px",
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <li style={{ marginRight: "20px" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Body */}
        <div style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          <div
            style={{
              width: "15%",
              backgroundColor: "#f0f0f0",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Sidebar */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ height: "50px" }}>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Dashboard
                </a>
              </li>
              <li style={{ height: "50px" }}>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Products
                </a>
              </li>
              <li style={{ height: "50px" }}>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Category
                </a>
              </li>
              <li style={{ height: "50px" }}>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Customers
                </a>
              </li>
              <li style={{ height: "50px" }}>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  Invoice
                </a>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div style={{ width: "85%", padding: "20px" }}>
            <Button onClick={showAddProductModal} style={{ marginBottom: "20px" }}>
              Add New Item
            </Button>
            <Modal
              title="Add new product"
              open={isOpenModal}
              onCancel={closeAddProductModal}
              onOk={handleAddProduct}
              okText="បន្ថែមទំនិញ"
              okButtonProps={{ style: { backgroundColor: "red" } }}
              cancelText="ត្រឡប់ក្រោយ"
            >
              <Input
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <Input
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <Input
                placeholder="Product Image URL"
                value={productImageUrl}
                onChange={(e) => setProductImageUrl(e.target.value)}
                style={{ marginBottom: "10px" }}
              />
            </Modal>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {products.map((product, index) => (
                <Product
                  key={index}
                  name={product.name}
                  productPrice={product.productPrice}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
