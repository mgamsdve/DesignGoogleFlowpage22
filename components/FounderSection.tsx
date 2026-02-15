import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section className="bg-white py-32 md:py-48 px-6 md:px-12 text-center border-t border-brand-cream">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-10 ring-4 ring-brand-cream grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
            <img src="https://picsum.photos/seed/face/300/300" alt="Founder" className="w-full h-full object-cover" />
        </div>
        
        <h2 className="text-3xl font-bold mb-10 text-brand-dark">Qui est derrière Flowpage ?</h2>

        <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed font-serif italic">
                "J'ai vu trop d'indépendants talentueux se perdre dans des projets web interminables. Ma philosophie est simple : l'humain avant la technique."
            </p>
            <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full opacity-30"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Flowpage est né pour offrir une alternative : des pages qui parlent vrai, qui respirent, et qui font ce qu'on leur demande : vous connecter à vos clients. Pas d'ego, pas de jargon, juste du sens.
            </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;