import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Features from "./sections/Features"
import Hero from "./sections/hero"
import Products from "./sections/Products"
import Cartdrawer from "./components/cartdrawer"
import ProductPage from "./components/ProductPage"
import Checkout from "./components/Checkout"
import ThankYou from "./components/ThankYou"
import Categories from "./sections/Categories"
import Sales from "./sections/Sales"
import Reviews from "./sections/Reviews"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import CategoryProducts from "./components/CategoryProducts"



function App() {

  // ============================================
  // STATE MANAGEMENT
  // ============================================
  
  // Cart items stored in state and localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Currently selected product for detailed view
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart drawer open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Checkout page open/close state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Order confirmation data after successful checkout
  const [orderData, setOrderData] = useState(null);

  // Contact Us page state
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ============================================
  // CART FUNCTIONS
  // ============================================

  /**
   * Update quantity of a product in cart
   * @param {number} productId - ID of the product to update
   * @param {number} newQuantity - New quantity value
   */
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

  /**
   * Remove product from cart by ID
   * @param {number} productId - ID of the product to remove
   */
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  /**
   * Save cart to localStorage whenever it changes
   */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log("Saved to local storage:", cartItems);
  }, [cartItems]);
  
  /**
   * Add product to cart
   * @param {object} product - Product object to add to cart
   */
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => {
        if (product.size) {
          return item.id === product.id && item.size === product.size;
        }
        return item.id === product.id;
      });
      
      if (existingItem) {
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
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
    
    console.log('Added to cart:', product);
  };

  // ============================================
  // NAVIGATION FUNCTIONS
  // ============================================

  /**
   * Open product detail page
   */
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  /**
   * Close product detail page
   */
  const closeProductPage = () => {
    setSelectedProduct(null);
  };

  /**
   * Open checkout page
   */
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  /**
   * Handle Buy Now - Goes directly to checkout
   */
  const handleBuyNow = () => {
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  /**
   * Close checkout page
   */
  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  /**
   * Handle order confirmation
   */
  const handleConfirmOrder = (orderInfo) => {
    setOrderData(orderInfo);
    setIsCheckoutOpen(false);
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  /**
   * Return to home from thank you page
   */
  const handleReturnHome = () => {
    setOrderData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Open Contact Us page
   */
  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  /**
   * Close Contact Us page
   */
  const closeContactUs = () => {
    setIsContactOpen(false);
  };

  /**
   * Handle category click - Show products for that category
   */
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  /**
   * Close category products page
   */
  const closeCategoryProducts = () => {
    setSelectedCategory(null);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <>
      {/* Navbar - Always visible */}
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
      
      {/* Product Detail Page */}
      {selectedProduct && (
        <ProductPage 
          product={selectedProduct}
          onAddToCart={addToCart}
          onClose={closeProductPage}
          onBuyNow={handleBuyNow}
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

      {/* Contact Us Page */}
      {isContactOpen && (
        <ContactUs 
          onClose={closeContactUs}
        />
      )}

      {/* Category Products Page */}
      {selectedCategory && (
        <CategoryProducts 
          category={selectedCategory}
          onClose={closeCategoryProducts}
          addToCart={addToCart}
          onProductClick={handleProductClick}
        />
      )}
      
      {/* Main Homepage */}
      {!selectedProduct && !isCheckoutOpen && !orderData && !isContactOpen && !selectedCategory && (
        <>
          <Hero/>
          <Features/>
          <Categories onCategoryClick={handleCategoryClick} />
          <Products 
            addToCart={addToCart}
            onProductClick={handleProductClick}
          />
          <Sales
            addToCart={addToCart}
            onProductClick={handleProductClick}
          />
          <Reviews/>
          <Footer onContactClick={handleContactClick} />
        </>
      )}
    </>
  );
}

export default App;