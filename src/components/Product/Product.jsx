import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Product = ({ product,handleCart }) => {
  const { name, img, seller, price, ratings, quantity, shipping } = product;

  
  return (
    <div>
      <div className="card w-full h-[35rem] bg-base-100 shadow-2xl border border-neutral border-opacity-30">
        <figure className="px-3 pt-3">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body mt-0">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} star</p>
        </div>
        <div>
          <button onClick={()=>handleCart(product)} className="btn btn-warning w-full bg-opacity-40 rounded-t-none capitalize text-lg">
            Add to Cart <span className="ml-2"><FaCartPlus /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
