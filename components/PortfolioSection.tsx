import React from 'react';
import { ArrowRight, Linkedin, Twitter } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  return (
    <section className="bg-white py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            À quoi ressemble une page Flowpage ?
            </h2>
            <p className="text-xl text-gray-500">Des designs sur-mesure, adaptés à votre identité.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Card 1 - Artisan */}
          <div className="flex flex-col gap-6">
             <div className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 bg-white h-full flex flex-col">
                <div className="h-64 overflow-hidden relative bg-gray-100">
                    <img src="https://picsum.photos/seed/artisan/800/600" alt="Artisan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-5 left-5 flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/90 backdrop-blur"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/50 backdrop-blur"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/50 backdrop-blur"></div>
                    </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-orange-50 text-brand-orange text-xs font-bold rounded-lg uppercase tracking-wider">Artisanat Local</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-dark leading-tight">L'Atelier du Fer : Ferronnerie d'Art & Design</h3>
                    <p className="text-gray-500 text-base mb-8 leading-relaxed">
                        Des créations métalliques uniques, de la verrière sur mesure au mobilier d'exception.
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                        <span className="text-brand-orange text-sm font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                            Voir le détail <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
             </div>
          </div>

          {/* Card 2 - Therapist */}
          <div className="flex flex-col gap-6">
             <div className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 bg-white h-full flex flex-col">
                <div className="h-64 overflow-hidden relative bg-gray-100">
                    <img src="https://picsum.photos/seed/sophro/800/600" alt="Sophrologue" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 flex-grow flex flex-col">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg uppercase tracking-wider">Santé & Bien-être</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-dark leading-tight">Sophie Laurent : Sophrologue Certifiée</h3>
                    <p className="text-gray-500 text-base mb-8 leading-relaxed">
                        Un espace de parole et de détente pour retrouver votre équilibre intérieur.
                    </p>
                     <div className="mt-auto pt-6 border-t border-gray-50">
                        <button className="w-full bg-[#8C9D7D] text-white text-sm px-6 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-[#7a8b6c] transition-colors">
                            Voir le site
                        </button>
                    </div>
                </div>
             </div>
          </div>

          {/* Card 3 - Freelance */}
          <div className="flex flex-col gap-6">
             <div className="group border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 bg-white h-full flex flex-col">
                <div className="h-64 bg-[#1a1a1a] flex items-center justify-center relative">
                    <div className="text-center text-white p-6">
                        <h4 className="text-3xl font-serif mb-2">MARC D.</h4>
                        <div className="w-12 h-0.5 bg-gray-600 mx-auto"></div>
                    </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                    <div className="mb-6">
                         <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg uppercase tracking-wider">B2B & Consulting</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-brand-dark leading-tight">Boostez vos ventes grâce au Social Selling.</h3>
                    <p className="text-gray-500 text-base mb-8 leading-relaxed">
                        J'aide les TPE/PME à structurer leur prospection digitale pour générer des leads.
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                         <span className="text-brand-dark text-sm font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                            Étude de cas <ArrowRight size={14} />
                        </span>
                        <div className="flex gap-3 text-gray-300">
                             <Linkedin size={18} />
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;