import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const product = {
    title: "Plain T-shirt",
    brand: "Good Brand Company",
    price: 29.5,
    salePrice: 20.0,
    variants: [
      {
        color: "Orange",
        imgSrc: "./images/orange.png",
        secImgSrc: "./images/orange-secondary.png",
      },
      {
        color: "Green",
        imgSrc: "./images/green.png",
        secImgSrc: "./images/green-secondary.png",
      },
      {
        color: "Blue",
        imgSrc: "./images/blue.png",
        secImgSrc: "./images/blue-secondary.png",
      },
      {
        color: "Yellow",
        imgSrc: "./images/yellow.png",
        secImgSrc: "./images/yellow-secondary.png",
      },
      {
        color: "Pink",
        imgSrc: "./images/pink.png",
        secImgSrc: "./images/pink-secondary.png",
      },
      {
        color: "Navy",
        imgSrc: "./images/navy.png",
        secImgSrc: "./images/navy-secondary.png",
      },
    ],
    onSale: true,
  };

  return (
    <div className="flex justify-center p-8">
      <ProductCard product={product} />
    </div>
  );
};

export default App;
