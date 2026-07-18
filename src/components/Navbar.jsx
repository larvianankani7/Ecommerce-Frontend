import React from 'react';

function Navbar({ cartCount, activePage, setActivePage, onCartClick }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-800 tracking-wider cursor-pointer" onClick={() => setActivePage('home')}>
              SYSSIAN <span className="text-indigo-600">STORE</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <button 
              onClick={() => setActivePage('home')}
              className={`transition-colors duration-200 ${activePage === 'home' ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActivePage('products')}
              className={`transition-colors duration-200 ${activePage === 'products' ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActivePage('contact')}
              className={`transition-colors duration-200 ${activePage === 'contact' ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Contact
            </button>
          </div>

          {/* Cart Icon Badge */}
          <div 
            onClick={onCartClick}
            className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full transform translate-x-1 -translate-y-1 animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;