import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FaMoneyCheck } from "react-icons/fa";

const Orders = () => {
  const savedCart = useLoaderData();
  console.log(savedCart);
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remaining = cart.filter((pd) => pd._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            <button className="btn btn-warning w-full bg-orange-500 hover:bg-orange-600 text-white capitalize text-lg mt-3">
              Proceed to Checkout
              <FaMoneyCheck className="ml-auto text-lg" />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
