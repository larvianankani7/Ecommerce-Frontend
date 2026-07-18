import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import CartModal from './components/CartModal';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Cart States
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch product list centrally so we can search by ID for detail page views
  useEffect(() => {
    fetch('https://ecommerce-backend-f9ud.onrender.com/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error setting products context:", err));
  }, []);

  const addToCart = (productId) => {
    const productToAdd = products.find(p => p.id === productId);
    if (!productToAdd) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setActivePage('detail');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar 
        cartCount={totalCartCount} 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <main className="flex-grow">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'products' && <Products addToCart={addToCart} onViewDetails={handleViewDetails} />}
        {activePage === 'contact' && <Contact />}
        {activePage === 'detail' && (
          <ProductDetail 
            product={selectedProduct} 
            setActivePage={setActivePage} 
            addToCart={addToCart} 
          />
        )}
      </main>

      <Footer />

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        clearCart={() => setCartItems([])} 
      />
    </div>
  );
}

export default App;