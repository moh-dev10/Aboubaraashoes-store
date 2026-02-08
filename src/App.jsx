import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Features from "./sections/Features"
import Hero from "./sections/hero"
import Products from "./sections/Products"
import cartdrawer from "./components/cartdrawer"



function App() {

  const [cartItems,setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart):[];
  });
  const [isCartOpen,setIsCartOpen] = useState(false);

// remove product from cart
  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_,i) => i !== index ));
  }

  //save to local storage
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItems));
    console.log("Saved to local storage:", cartItems);
  },[cartItems]);
  
  // add to cart function
  const addToCart = (product) => {
    setCartItems([...cartItems,product]);
  }

  return (
    <>
      <Navbar cartCount={cartItems.length}
      openCart={() => setIsCartOpen(true)}/>
      <cartdrawer
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      items={cartItems}
      remove={removeFromCart}/>
      <Hero/>
      <Features/>
      <Products addToCart={addToCart}/>
    </>
  )
}

export default App
