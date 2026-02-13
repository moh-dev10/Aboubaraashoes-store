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

  // ============================================
  // CART FUNCTIONS
  // ============================================

  /**
   * Update quantity of a product in cart
   * @param {number} productId - ID of the product to update
   * @param {number} newQuantity - New quantity value
   */
  const updateQuantity = (productId, newQuantity) => {
    if(newQuantity < 1) return; // Don't allow quantity less than 1

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
   * This ensures cart persists even if user refreshes the page
   */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log("Saved to local storage:", cartItems);
  }, [cartItems]);
  
  /**
   * Add product to cart
   * If product already exists (same id and size), increment quantity
   * If product doesn't exist, add as new item
   * @param {object} product - Product object to add to cart
   */
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      // Match by both id AND size (if size exists)
      const existingItem = prevItems.find(item => {
        if (product.size) {
          return item.id === product.id && item.size === product.size;
        }
        return item.id === product.id;
      });
      
      if (existingItem) {
        // Product exists - increment quantity
        return prevItems.map(item => {
          if (product.size) {
            // If product has size, match both id and size
            return (item.id === product.id && item.size === product.size)
              ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) }
              : item;
          }
          // If no size, just match by id
          return item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) }
            : item;
        });
      } else {
        // Product doesn't exist - add new item
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
    
    // Optional: Show success message (you can add toast notification here)
    console.log('Added to cart:', product);
  };

  // ============================================
  // NAVIGATION FUNCTIONS
  // ============================================

  /**
   * Open product detail page
   * @param {object} product - Product to display
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
   * Only proceed if cart has items
   */
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);  // Close cart drawer
    setIsCheckoutOpen(true); // Open checkout page
  };

  /**
   * Close checkout page
   */
  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  /**
   * Handle order confirmation
   * Called when user completes checkout form
   * @param {object} orderInfo - Order details from checkout form
   */
  const handleConfirmOrder = (orderInfo) => {
    setOrderData(orderInfo);      // Save order data
    setIsCheckoutOpen(false);     // Close checkout
    setCartItems([]);             // Clear cart
    localStorage.removeItem('cart'); // Clear cart from localStorage
  };

  /**
   * Return to home from thank you page
   * Resets order data and scrolls to top
   */
  const handleReturnHome = () => {
    setOrderData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <>
      {/* ========================================
          NAVIGATION BAR
          - Always visible at top
          - Shows cart count badge
          - Opens cart drawer on click
      ======================================== */}
      <Navbar 
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {/* ========================================
          CART DRAWER (SIDEBAR)
          - Slides in from right
          - Shows all cart items
          - Can update quantities
          - Can remove items
          - Has checkout button
      ======================================== */}
      <Cartdrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
      
      {/* ========================================
          PRODUCT DETAIL PAGE (MODAL)
          - Full screen overlay
          - Shows when user clicks on a product
          - Has image gallery
          - Size selection
          - Quantity selector
          - Add to cart with size
      ======================================== */}
      {selectedProduct && (
        <ProductPage 
          product={selectedProduct}
          onAddToCart={addToCart}
          onClose={closeProductPage}
        />
      )}

      {/* ========================================
          CHECKOUT PAGE (FULL SCREEN)
          - Customer information form
          - Wilaya and commune selection
          - Delivery type selection
          - Shipping price calculation
          - Order summary
      ======================================== */}
      {isCheckoutOpen && (
        <Checkout 
          cartItems={cartItems}
          onClose={closeCheckout}
          onConfirmOrder={handleConfirmOrder}
        />
      )}

      {/* ========================================
          THANK YOU PAGE (ORDER CONFIRMATION)
          - Shows after successful order
          - Displays order number
          - Shows customer details
          - Shows ordered items
          - Return to home button
      ======================================== */}
      {orderData && (
        <ThankYou 
          orderData={orderData}
          onReturnHome={handleReturnHome}
        />
      )}
      
      {/* ========================================
          MAIN HOMEPAGE SECTIONS
          - Only shown when no modal is open
          - Includes all homepage sections
      ======================================== */}
      {!selectedProduct && !isCheckoutOpen && !orderData && (
        <>
          {/* Hero Section - Large banner with main CTA */}
          <Hero/>
          
          {/* Features Section - 3 key features (Fast Shipping, Quality, Support) */}
          <Features/>
          
          {/* Categories Section - Shop by category carousel
              - Shows different product categories
              - Carousel with navigation arrows
              - Click to filter products by category
          */}
          <Categories/>
          
          {/* Products Section - Main product grid
              - Shows all available products
              - Click image/title to open product detail
              - Quick add to cart button
          */}
          <Products 
            addToCart={addToCart}
            onProductClick={handleProductClick}
          />
          
          {/* Sales Section - Discounted products
              - Shows products with sale badges
              - Displays old price with strikethrough
              - Shows discount percentage
              - Red theme to highlight deals
          */}
          <Sales
            addToCart={addToCart}
            onProductClick={handleProductClick}
          />
          
          {/* Reviews Section - Customer testimonials carousel
              - Auto-scrolls every 5 seconds
              - Manual navigation with arrows
              - Shows customer name, location, rating
              - Displays review text
          */}
          <Reviews/>
          
          {/* Footer Section - Site footer
              - Social media links (Facebook, Instagram, TikTok)
              - Quick links navigation
              - Customer service links
              - Contact button
              - Copyright notice
          */}
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;