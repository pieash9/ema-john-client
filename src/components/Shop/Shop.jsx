import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link, useLoaderData } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsPerPages, setItemsPerPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / itemsPerPages);

  const pageNumbers = [...Array(totalPages).keys()];

  const handleCart = (product) => {
    // cart.push(product)
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPages}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage,itemsPerPages]);

  useEffect(() => {
    // console.log('pd',products)
    const savedCart = [];
    const storedCart = getShoppingCart();
    // 1 get id of the added product
    for (const id in storedCart) {
      //2 get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);
      // console.log(addedProduct)
      if (addedProduct) {
        // 3 add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //4 add the added product from the saved cart
        savedCart.push(addedProduct);
      }
    }
    //5 set the cart
    setCart(savedCart);
  }, [products]);

  const options = [5, 10, 20];
  const handleSelectChange = (e) => {
    setItemsPerPages(parseInt(e.target.value));
    setCurrentPage(0);
  };

  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/orders">
              <button className="btn btn-warning w-full bg-orange-500 hover:bg-orange-600 text-white capitalize text-lg mt-3">
                Review Order
                <HiOutlineArrowNarrowRight className="ml-auto text-lg" />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* Pagination */}
      <div className="pagination text-center my-12">
        <p>Current page: {currentPage} and items per page: {itemsPerPages}</p>
        {pageNumbers.map((number) => (
          <button
            className={`btn mr-5 ${currentPage === number ? "btn-error":""}`}
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <select value={itemsPerPages} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
