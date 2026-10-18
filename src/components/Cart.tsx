import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onClose, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-stone-50 shadow-2xl flex flex-col h-full animate-slide-in">
        <div className="p-6 border-b border-stone-200 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-800">Your Cart</h2>
              <p className="text-sm text-stone-500 mt-0.5">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-stone-500 font-medium">Your cart is empty</p>
              <p className="text-sm text-stone-400 mt-1">Add some amazing coffee to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="bg-white rounded-xl p-4 shadow-sm border border-stone-100">
                  <div className="flex gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-stone-800 text-sm truncate">{item.product.name}</h4>
                      <p className="text-xs text-stone-500 mt-0.5">{item.product.weight} · {item.product.roast}</p>
                      <p className="text-sm font-semibold text-stone-800 mt-1.5">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-stone-50">
                    <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-stone-500 hover:bg-stone-50 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-stone-800 border-x border-stone-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-stone-500 hover:bg-stone-50 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-xs text-stone-400 hover:text-red-500 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-stone-600">Subtotal</span>
              <span className="text-lg font-bold text-stone-800">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500">Shipping</span>
              <span className="text-stone-500">Free over $40</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-stone-800 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
