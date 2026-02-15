import React from 'react';
import { Info, MousePointerClick, Smartphone, Compass } from 'lucide-react';

const problems = [
  {
    icon: <Info size={32} />,
    title: "Trop d'informations",
    description: "Le visiteur est noyé sous des détails inutiles et finit par quitter la page frustré. Less is more."
  },
  {
    icon: <MousePointerClick size={32} />,
    title: "Pas d'action claire",
    description: "On ne sait pas quoi faire. Où cliquer ? Comment réserver ? Le doute fait fuir vos prospects."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Illisible sur mobile",
    description: "Plus de 70% de vos clients vous cherchent sur leur téléphone. Si ça rame, c'est fini."
  },
  {
    icon: <Compass size={32} />,
    title: "Manque de guide",
    description: "Le site ne raconte pas d'histoire. Il ne rassure pas le visiteur sur votre expertise."
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white py-32 md:py-40 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[5rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-xs font-semibold tracking-wider uppercase mb-6 text-gray-300">
              Le constat
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Beaucoup de sites existent.<br />
            <span className="text-brand-orange">Peu apportent des contacts.</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
            Avoir une présence en ligne est inutile si elle égare vos clients potentiels au lieu de les guider vers vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-[#262626] p-10 rounded-3xl hover:bg-[#303030] transition-all duration-300 group border border-white/5 hover:border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-gray-700 flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{problem.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;