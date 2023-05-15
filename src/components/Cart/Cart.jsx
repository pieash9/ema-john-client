import React from "react";
import { HiTrash } from "react-icons/hi";

const Cart = ({ cart , handleClearCart ,  children }) => {
  // console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <>
      <h3 className="text-center text-2xl font-semibold mt-5 mb-8">
        Order Summary
      </h3>
      <div className="flex flex-col gap-3">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h3 className="text-lg font-semibold ">Grand Total: ${grandTotal}</h3>
        <button onClick={handleClearCart} className="btn btn-error bg-red-500 hover:bg-red-700 text-white capitalize text-lg">Clear Cart
        <HiTrash className="ml-auto text-lg"/>
        
        </button>
      </div>
      {children}
    </>
  );
};

export default Cart;
