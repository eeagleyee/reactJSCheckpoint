# reactJSCheckpoint

# Product Details React App

This is a simple React application that displays product details using React components and React Bootstrap.

## Overview

The application showcases a product with its name, price, description, and image. It is structured using multiple components to display the product details.

## Features

- Display of product details such as name, price, description, and image.
- Greeting message based on the provided first name.
- If no name is provide, it just displays "hello there", without a picture showing at the bottom
- Responsive design using media queries for different screen sizes.

## Project Structure

- `src/`
  - `App.js`: The main component that composes the product details using other components.
  - `product.js`: Contains the JSON object with product details.
  - `components/`
    - `Name.js`, `Price.js`, `Description.js`, `Image.js`: Components displaying individual product details.

## Technologies Used

- React: Front-end JavaScript library for building user interfaces.
- React Bootstrap: Library providing pre-styled React components for faster UI development.


## Usage

- Modify the `product.js` file to change the product details.
- Adjust the `firstName` variable in `App.js` to see different greeting messages.
