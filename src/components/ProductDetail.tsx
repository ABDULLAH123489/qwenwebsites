import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-stone-100 transition-colors"
        >
          <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800">
                {product.name}
              </h2>
              <p className="text-stone-500 mt-1">{product.origin} · {product.weight} · {product.roast} Roast</p>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-amber-800">{product.rating}</span>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3">Tasting Notes</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.map((note) => (
                <span key={note} className="px-3 py-1.5 bg-amber-50 border border-amber-100 rounded-full text-sm text-amber-800 font-medium">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-stone-100">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-stone-800">${product.price.toFixed(2)}</span>
              <span className="text-stone-400">/ {product.weight}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-stone-800 font-semibold border-x border-stone-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => { onAddToCart(product, quantity); onClose(); }}
                className="px-6 py-2.5 bg-stone-800 hover:bg-amber-700 text-white font-medium rounded-xl transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
