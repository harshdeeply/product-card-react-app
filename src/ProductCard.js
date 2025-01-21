import React, { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  // Preload image when hover starts
  const preloadImage = (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  };

  useEffect(() => {
    if (isHovered) {
      preloadImage(selectedVariant.imgSrc); // Preload the hovered variant image
    }
  }, [isHovered, selectedVariant]);

  return (
    <div className="relative w-80 border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
      {product.onSale && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs py-1 px-3 rounded-full">
          On Sale!
        </span>
      )}
      <div className="mb-4">
        <img
          src={isHovered ? selectedVariant.secImgSrc : selectedVariant.imgSrc}
          alt={selectedVariant.color}
          className="w-full h-[275px] cursor-pointer object-fit"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
      </div>
      <div className="text-left">
        <div className="mt-4 flex space-x-2">
          {product.variants.map((variant) => (
            <button
              key={variant.color}
              onClick={() => handleVariantChange(variant)}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedVariant.color === variant.color
                  ? "ring-1 ring-black"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: variant.color.toLowerCase() }}
            />
          ))}
        </div>
        <h3 className="mt-4 text-sm">{product.brand}</h3>
        <h2 className="text-md text-blue-900">{product.title}</h2>
        <div className="mt-1">
          {product.onSale ? (
            <>
              <span className="line-through text-md">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-red-500 text-md ml-2">
                ${product.salePrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-gray-800 font-bold text-xl">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
