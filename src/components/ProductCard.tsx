import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const roastColor = product.roast.includes('Light') 
    ? 'bg-amber-100 text-amber-800' 
    : product.roast === 'Medium' || product.roast === 'Medium-Dark'
    ? 'bg-orange-100 text-orange-800'
    : 'bg-stone-200 text-stone-800';

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-stone-100 hover:border-amber-200/60 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${roastColor}`}>
          {product.roast}
        </span>
        <button
          onClick={() => onViewDetails(product)}
          className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-stone-700 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
        >
          View Details
        </button>
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg font-semibold text-stone-800 leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-0.5 shrink-0">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-stone-500 font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-stone-500 mb-3">{product.origin} · {product.weight}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.slice(0, 3).map((note) => (
            <span key={note} className="px-2 py-0.5 bg-stone-50 border border-stone-100 rounded-md text-xs text-stone-600">
              {note}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-50">
          <span className="text-xl font-bold text-stone-800">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-stone-800 hover:bg-amber-700 text-white text-sm font-medium rounded-xl transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
