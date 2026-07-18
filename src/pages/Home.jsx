import React from 'react';

function Home({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl overflow-hidden shadow-xl text-white p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Discover Modern Craftsmanship
          </h1>
          <p className="text-lg text-indigo-100">
            Explore our curated catalog featuring handpicked tech accessories, premium leather goods, and high-performance lifestyle items.
          </p>
          <button 
            onClick={() => setActivePage('products')}
            className="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:bg-indigo-50 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Shop the Collection
          </button>
        </div>
        <div className="w-full max-w-sm hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" 
            alt="Hero Product" 
            className="rounded-2xl shadow-2xl object-cover aspect-square transform rotate-2 hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;