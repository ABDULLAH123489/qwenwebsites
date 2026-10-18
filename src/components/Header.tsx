import React from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onLogoClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={onLogoClick} className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/30">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-stone-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.789l1.599.799L9 4.323V3a1 1 0 011-1z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-bold text-amber-50 group-hover:text-amber-200 transition-colors">
                Ember & Bloom
              </span>
              <span className="text-[10px] sm:text-xs text-amber-600/80 tracking-widest uppercase -mt-0.5">
                Specialty Coffee
              </span>
            </div>
          </button>

          <button
            onClick={onCartClick}
            className="relative p-2 sm:p-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-amber-700/50 transition-all duration-200 group"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100 group-hover:text-amber-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 text-stone-900 text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
