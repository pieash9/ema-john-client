import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
     // if cart data is in database you have to use async wait
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart)
  console.log(ids)
  const loadedProducts = await fetch(`http://localhost:5000/products`);
  const products = await loadedProducts.json();

 

  const savedCart = [];
  // console.log(storedCard)
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd._id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
  /* if you want to return 2 things at a time 
    return as object or array and then destructure them

    return {savedCard, storedCard}
    return [savedCart, storedCart]
    
    */
};

export default cartProductsLoader;