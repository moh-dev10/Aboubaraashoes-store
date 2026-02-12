import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Features from "./sections/Features"
import Hero from "./sections/hero"
import Products from "./sections/Products"
import Cartdrawer from "./components/cartdrawer"
import ProductPage from "./components/ProductPage"
import Checkout from "./components/Checkout"
import ThankYou from "./components/ThankYou"



function App() {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const updateQuantity = (productId, newQuantity) => {
    if(newQuantity < 1) return;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? {...item, quantity: newQuantity}
          : item
      )
    );
  };

  // Remove product by ID
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log("Saved to local storage:", cartItems);
  }, [cartItems]);
  
  // Add to cart function - check if exists, increment quantity or add new
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart (match by id AND size if size exists)
      const existingItem = prevItems.find(item => {
        if (product.size) {
          return item.id === product.id && item.size === product.size;
        }
        return item.id === product.id;
      });
      
      if (existingItem) {
        // If exists, increment quantity
        return prevItems.map(item => {
          if (product.size) {
            return (item.id === product.id && item.size === product.size)
              ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) }
              : item;
          }
          return item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) }
            : item;
        });
      } else {
        // If doesn't exist, add new item
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
    
    // Show feedback (optional - you can add a toast notification here)
    console.log('Added to cart:', product);
  };

  // Handle product click to open product page
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close product page
  const closeProductPage = () => {
    setSelectedProduct(null);
  };

  // Open checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Close checkout
  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  // Confirm order
  const handleConfirmOrder = (orderInfo) => {
    setOrderData(orderInfo);
    setIsCheckoutOpen(false);
    // Clear cart after order
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  // Return to home from thank you page
  const handleReturnHome = () => {
    setOrderData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleDirectBuy = (productWithDetails) => {
  // 1. نضيف هذا المنتج بالذات للسلة (ونمسح القديم أو نتركه حسب رغبتك)
  // هنا سأقوم بإضافته فقط
  addToCart(productWithDetails);
  
  // 2. نغلق صفحة المنتج ونفتح التشيك أوت فوراً
  setSelectedProduct(null);
  setIsCheckoutOpen(true);
};

  return (
    <>
      {/* Navbar */}
      <Navbar 
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {/* Cart Drawer */}
      <Cartdrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
      
      {/* Product Page Modal */}
      {selectedProduct && (
        <ProductPage 
          product={selectedProduct}
          onAddToCart={addToCart}
          onClose={closeProductPage}
          onCheckout={handleDirectBuy}
        />
      )}

      {/* Checkout Page */}
      {isCheckoutOpen && (
        <Checkout 
          cartItems={cartItems}
          onClose={closeCheckout}
          onConfirmOrder={handleConfirmOrder}
        />
      )}

      {/* Thank You Page */}
      {orderData && (
        <ThankYou 
          orderData={orderData}
          onReturnHome={handleReturnHome}
        />
      )}
      
      {/* Main Sections */}
      {!selectedProduct && !isCheckoutOpen && !orderData && (
        <>
          <Hero/>
          <Features/>
          <Products 
            addToCart={addToCart}
            onProductClick={handleProductClick}
          />
        </>
      )}
    </>
  );
}

export default App;