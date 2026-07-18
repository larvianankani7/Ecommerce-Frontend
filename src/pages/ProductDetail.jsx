import React from 'react';

function ProductDetail({ product, setActivePage, addToCart }) {
  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button 
        onClick={() => setActivePage('products')}
        className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Catalog
      </button>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden aspect-square">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">{product.name}</h1>
            <p className="text-2xl font-black text-indigo-600">${product.price.toFixed(2)}</p>
            
            <hr className="border-gray-100" />
            
            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Key Characteristics</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside">
                <li>Premium Materials</li>
                <li>Ergonomic Design</li>
                <li>Official Warranty</li>
                <li>Syssian Certified</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => addToCart(product.id)}
            className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg active:scale-[0.99]"
          >
            Add to Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;