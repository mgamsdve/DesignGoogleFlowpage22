import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 px-6 md:px-12 max-w-8xl mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="max-w-2xl z-10">
          <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.05] mb-8 tracking-tight text-brand-dark">
            Votre page web doit vous apporter <span className="text-brand-orange relative inline-block">
              des clients.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            Fini les sites complexes qui ne servent à rien. Je crée des pages uniques conçues pour transformer vos visiteurs en contacts qualifiés.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#c56045] transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-orange/20">
              Démarrer mon projet
            </button>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-brand-dark">
                  Places limitées par mois
                </span>
                <span className="text-sm text-gray-400">
                  Réponse sous 24h
                </span>
            </div>
          </div>
        </div>

        {/* Right Visual - Mockup */}
        <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0 perspective-1000">
          <div className="relative z-10 bg-white p-3 md:p-4 rounded-[2.5rem] shadow-2xl rotate-[-3deg] max-w-[340px] md:max-w-[460px] border border-gray-100/50">
             {/* Simple representation of a browser window / card */}
             <div className="bg-gray-50 rounded-[2rem] overflow-hidden aspect-[4/3] relative mb-2 shadow-inner">
                <img src="https://picsum.photos/seed/yoga/800/600" alt="Exemple de site" className="w-full h-full object-cover opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating UI Element inside image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/40">
                    <div className="flex gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                            <ArrowRight size={16} />
                        </div>
                        <div>
                            <div className="h-2 w-24 bg-brand-dark rounded-full mb-1.5 opacity-80"></div>
                            <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="h-10 w-full bg-brand-dark rounded-xl flex items-center justify-center text-white text-xs font-bold">
                        Prendre rendez-vous
                    </div>
                </div>
             </div>
             
             {/* Mobile Phone floating next to it */}
             <div className="absolute -right-12 -bottom-16 w-[140px] md:w-[160px] bg-brand-dark rounded-[2.5rem] p-2 shadow-2xl rotate-[6deg] border-4 border-gray-800">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <img src="https://picsum.photos/seed/mobile/300/600" alt="Mobile" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
          
          {/* Decorative circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;