import React, { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "../../assets/Cart/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* product cart section */}
      <div className="shadow-lg w-1/2 flex justify-center items-center mx-auto my-6 rounded-lg">
        <Cart cart={cart}></Cart>
      </div>
      {/* all products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
