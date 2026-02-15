import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-brand-cream py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
                <h2 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-8 leading-[1.05]">
                    Envie d'une page qui vous apporte <span className="text-brand-dark border-b-[6px] border-brand-orange/30">des contacts ?</span>
                </h2>
                <p className="text-gray-600 mb-12 text-xl md:text-2xl leading-relaxed">
                    Discutons de votre projet. C'est sans engagement, juste une opportunité de voir comment simplifier votre présence en ligne.
                </p>

                <div className="flex items-center gap-6">
                     <div className="flex -space-x-5">
                         {[1,2,3].map(i => (
                             <div key={i} className="w-16 h-16 rounded-full border-4 border-brand-cream overflow-hidden bg-gray-200">
                                 <img src={`https://picsum.photos/seed/user${i}/200/200`} alt="User" className="w-full h-full object-cover" />
                             </div>
                         ))}
                         <div className="w-16 h-16 rounded-full border-4 border-brand-cream bg-white flex items-center justify-center text-gray-400 text-sm font-bold shadow-sm">
                             <Plus size={24} />
                         </div>
                     </div>
                     <span className="text-sm font-semibold text-gray-500 max-w-[150px] leading-snug">Rejoignez les indépendants qui ont choisi la clarté.</span>
                </div>
            </div>

            {/* Right Form */}
            <div className="order-1 lg:order-2 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-brand-orange/5 border border-white">
                <form className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-3">
                             <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Nom complet</label>
                             <input type="text" placeholder="Jean Dupont" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all placeholder:text-gray-300" />
                         </div>
                         <div className="space-y-3">
                             <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Email</label>
                             <input type="email" placeholder="jean@email.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all placeholder:text-gray-300" />
                         </div>
                    </div>
                    
                    <div className="space-y-3">
                         <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Votre activité</label>
                         <input type="text" placeholder="Ex: Thérapeute, Menuisier..." className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all placeholder:text-gray-300" />
                    </div>

                    <div className="space-y-3">
                         <label className="text-sm font-bold text-brand-dark uppercase tracking-wide">Votre message</label>
                         <textarea placeholder="Dites-moi en quelques mots ce dont vous avez besoin..." rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none placeholder:text-gray-300"></textarea>
                    </div>

                    <button type="button" className="w-full bg-brand-orange text-white font-bold py-5 rounded-xl hover:bg-[#c56045] transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-3 text-lg">
                        Envoyer ma demande <ArrowRight size={20} />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;