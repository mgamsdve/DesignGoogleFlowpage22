import React from 'react';
import { Check, X } from 'lucide-react';

const QualificationSection: React.FC = () => {
  return (
    <section className="bg-brand-cream py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Good fit */}
        <div className="bg-white p-12 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100/50 hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-3xl font-bold text-brand-dark mb-10 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Check size={20} strokeWidth={3} />
                </span>
                C'est fait pour vous si...
            </h3>
            <ul className="space-y-8">
                {[
                    "Vous êtes indépendant ou freelance",
                    "Vous êtes un artisan local (plombier, menuisier...)",
                    "Vous proposez des services de soin (thérapeute, coach)",
                    "Vous voulez des résultats sans complication technique"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-cream border border-gray-200 flex items-center justify-center mt-1">
                             <Check size={14} className="text-brand-dark" strokeWidth={3} />
                        </span>
                        <span className="text-gray-700 text-lg leading-relaxed font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Bad fit */}
        <div className="bg-brand-beige/50 p-12 md:p-16 rounded-[2.5rem] shadow-none border border-transparent">
            <h3 className="text-3xl font-bold text-gray-400 mb-10 flex items-center gap-3">
                 <span className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                    <X size={20} strokeWidth={3} />
                </span>
                Ce n'est pas pour vous si...
            </h3>
             <ul className="space-y-8">
                {[
                    "Vous voulez lancer un gros e-commerce",
                    "Vous avez besoin d'une plateforme complexe",
                    "Vous cherchez un site de 50 pages",
                    "Vous préférez le blabla aux résultats"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                             <X size={20} className="text-gray-300" />
                        </span>
                        <span className="text-gray-400 text-lg leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </section>
  );
};

export default QualificationSection;