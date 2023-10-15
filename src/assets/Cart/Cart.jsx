import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //const {cart} = props;

  let totalAmoutOfProductPrice = 0;
  let totalShippingCharge = 0;

  for (const product of cart) {
    //total = total + product.price;
    totalAmoutOfProductPrice += product.price;
    totalShippingCharge += product.shippingCharge;
  }

  const totalText = totalAmoutOfProductPrice * 7 / 100;
  const grandTotal = totalAmoutOfProductPrice + totalText + totalShippingCharge;

  return (
    <div className="md:flex md:items-center md:justify-center my-6">
      <div className="px-6 py-4">
        <h1 className="text-gray-500"><span>Total Order: {cart.length}</span></h1>
        <h1 className="text-gray-500"><span>Total Price: ${totalAmoutOfProductPrice}</span></h1>
        <h1 className="text-gray-500"><span>Shipping Charge: ${totalShippingCharge}</span></h1>
        <h1 className="text-gray-500"><span>Total Tex: ${totalText}</span></h1>
        <h1 className="text-gray-500"><span>Grand Total: ${grandTotal}</span></h1>
      </div>
      <div className="px-6 py-4">
        <button className="ml-4 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Payment
          <i className="fa-regular fa-credit-card px-2"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
