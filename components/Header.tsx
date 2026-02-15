import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md py-4 px-6 md:px-12 border-b border-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center">
            <ArrowUpRight size={16} />
          </div>
          <span>Flowpage</span>
        </div>
        <button className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors">
          Me contacter
        </button>
      </div>
    </header>
  );
};

export default Header;