import React from 'react';
import { MessageSquare, Lock } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-brand-green text-white py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-24 max-w-3xl mx-auto leading-tight">
            Simple, mais redoutable d'efficacité.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center">
                <div className="text-6xl md:text-7xl font-extrabold text-brand-orange mb-6 drop-shadow-sm tracking-tighter">+40%</div>
                <p className="text-lg md:text-xl max-w-xs text-green-50 font-medium">
                    Une page focalisée convertit nettement mieux qu'un site multipages.
                </p>
            </div>
            
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-6 text-brand-orange bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MessageSquare size={40} strokeWidth={2} />
                </div>
                <p className="text-lg md:text-xl max-w-xs text-green-50 font-medium">
                    Moins d'infos = moins d'hésitation pour vous envoyer un message.
                </p>
            </div>

            <div className="flex flex-col items-center">
                 <div className="w-20 h-20 mb-6 text-brand-orange bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Lock size={40} strokeWidth={2} />
                </div>
                <p className="text-lg md:text-xl max-w-xs text-green-50 font-medium">
                    Une présence pro qui renforce immédiatement votre crédibilité.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;