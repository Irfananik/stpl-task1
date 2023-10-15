import React from "react";
import "./product.css";

const Product = (props) => {
  const { image, carName, id, year, price } = props.product;
  const handleAddToCart = props.handleAddToCart
  //console.log(props)

  return (
    <div className="mt-6 rounded overflow-hidden shadow-lg mx-auto">
      <img
        className="w-full"
        src={image}
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="text-xl text-gray-500 mb-2 flex space-x-end space-x-8"><h1>{carName}</h1><span className="border border-dotted border-gray-400 rounded-md p-2"><h2 className="text-sm flex items-center justify-center">{year}</h2></span></div>
        <div className="grid grid-cols-2 gap-4 py-2">
            <span><p className="text-gray-500">Gasonline</p></span>
            <span><p className="text-gray-500">8.2 km / 1-letter</p></span>
            <span><p className="text-gray-500">Autometic</p></span>
            <span><p className="text-gray-500">4 people</p></span>
        </div>
      </div>
      <div className="border border-gray-200"></div>
      <div className="px-6 py-4">
        <span className="text-xl">${price}</span>
        <button onClick={() => handleAddToCart(props.product)} className="ml-4 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
          <i className="fa-solid fa-cart-shopping ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
