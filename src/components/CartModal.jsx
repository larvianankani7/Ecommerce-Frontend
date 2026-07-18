import React from 'react';

function CartModal({ isOpen, onClose, cartItems, clearCart }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slideIn">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Your Shopping Cart</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg font-medium">Your cart is completely empty</p>
                <p className="text-sm mt-1">Add some awesome items from our catalog!</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-white" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Total */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 space-y-4 bg-gray-50">
              <div className="flex justify-between font-bold text-gray-900 text-base">
                <span>Total Amount:</span>
                <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={clearCart}
                  className="w-full border border-gray-200 hover:bg-gray-100 text-gray-600 font-medium py-2.5 px-4 rounded-xl text-sm transition-colors"
                >
                  Clear All
                </button>
                <button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-xs"
                  onClick={() => alert("Checkout integration coming soon!")}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default CartModal;