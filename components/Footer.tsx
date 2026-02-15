import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream py-20 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 font-extrabold text-2xl tracking-tight">
                <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center">
                    <ArrowUpRight size={18} />
                </div>
                <span>Flowpage</span>
            </div>
            <p className="text-xs font-medium text-gray-400 tracking-wide uppercase">L'agence web qui parle aux indépendants.</p>
        </div>

        <div className="text-center md:text-right">
            <a href="mailto:hello@flowpage.fr" className="text-xl md:text-2xl font-bold text-brand-dark hover:text-brand-orange transition-colors">hello@flowpage.fr</a>
            <p className="text-sm text-gray-400 mt-2 font-medium">Tout commence par une simple discussion.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>© 2024 Flowpage. Tous droits réservés.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-brand-dark transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-brand-dark transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-brand-dark transition-colors">CGV</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;