import React from "react";

const Image = ({ productImage }) => {
  return (
    <img
      src={productImage}
      alt="Product"
      style={{ width: "80%", height: "auto" }}
    />
  );
};

export default Image;
