import React, { useState, useEffect } from "react";
import "./App.css";
import { product } from "./product"; // Importing product details from product.js
import { Card, Container, Row, Col } from "react-bootstrap";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("Joseph");
  const [promptShown, setPromptShown] = useState(false); // Flag to track if prompt was shown

  useEffect(() => {
    if (firstName === "Joseph" && !promptShown) {
      const enteredName = window.prompt("Please enter your first name:");
      if (enteredName) {
        setFirstName(enteredName.trim());
        setPromptShown(true); // Set the flag to indicate that prompt was shown
      }
    }
  }, [firstName, promptShown]);

  return (
    <Container fluid className="App">
      {/* Title for the product details */}
      <h1 className="main-title">Product Details</h1>
      {/* Creating a row for layout */}
      <Row>
        {/* Column for the product image */}
        <Col lg={6} className="product-col">
          <Card className="product-card">
            <Card.Body>
              {/* Rendering product image using Image component */}
              <Image productImage={product.image} />
            </Card.Body>
          </Card>
        </Col>
        {/* Column for product details */}
        <Col lg={6} className="product-col">
          <Card className="product-card">
            <Card.Body>
              {/* Rendering product name, price, and description */}
              <Name productName={product.name} />
              <Price productPrice={product.price} />
              <Description productDescription={product.description} />
            </Card.Body>
          </Card>
          {/* Greeting message */}
          <p className="greeting">
            Hello, {firstName ? `${firstName}!` : "there!"}
          </p>
          {/* Displaying user image if firstName is provided */}
          {firstName && (
            <img className="user-image" src={product.image} alt="Your Image" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
