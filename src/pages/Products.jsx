import { useState, useEffect } from 'react';

function Products({ addToCart, onViewDetails }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedProductId, setExpandedProductId] = useState(null);

  const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Furniture'];

  useEffect(() => {
    setLoading(true);
    const url = selectedCategory && selectedCategory !== 'All'
      ? `http://localhost:8080/api/products?category=${selectedCategory}`
      : 'http://localhost:8080/api/products';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Catalog</h2>
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === 'All' ? '' : cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                (cat === 'All' && !selectedCategory) || selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group">
              <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-indigo-600 shadow-sm">
                  {product.category}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{product.name}</h3>
                    <span className="font-extrabold text-indigo-600">${product.price.toFixed(2)}</span>
                  </div>
                  
                  {/* Toggle Description Details */}
                  {/* Replace the old Toggle Description Details button and paragraph block with this */}
                <button 
                    onClick={() => onViewDetails(product)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline mb-2 block"
                    >
                    Show details & characteristics
                </button>
                  {expandedProductId === product.id && (
                    <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg animate-fadeIn">
                      {product.description}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full mt-4 bg-gray-900 hover:bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-xl transition-colors active:scale-95 transform duration-150"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;