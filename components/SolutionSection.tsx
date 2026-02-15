import React from 'react';
import { Layout, Zap, CheckCircle2, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Layout className="text-brand-orange" size={28} />,
    title: "Page Dédiée",
    description: "Un espace unique qui présente uniquement ce que vous faites de mieux, sans distraction."
  },
  {
    icon: <Zap className="text-brand-orange" size={28} />,
    title: "Compréhension Flash",
    description: "En 3 secondes, votre visiteur sait qui vous êtes et ce que vous proposez précisément."
  },
  {
    icon: <CheckCircle2 className="text-brand-orange" size={28} />,
    title: "Appel à l'Action",
    description: "Un bouton visible et rassurant qui simplifie la prise de contact ou de rendez-vous."
  },
  {
    icon: <Smartphone className="text-brand-orange" size={28} />,
    title: "Mobile-First",
    description: "Une expérience fluide et légère sur smartphone pour ne perdre aucune opportunité."
  }
];

const SolutionSection: React.FC = () => {
  return (
    <section className="bg-white py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 lg:mb-32 gap-12">
            <div className="max-w-3xl">
                <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">La solution Flowpage</span>
                <h2 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-8 leading-[1.1]">
                Une page claire.<br/>
                Un seul objectif.
                </h2>
                <div className="inline-flex items-center gap-3 bg-brand-beige px-6 py-3 rounded-xl text-base font-semibold text-brand-dark border border-gray-200">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                    Moins de pages. Plus de contacts.
                </div>
            </div>
            <p className="max-w-md text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                Je me concentre sur l'essentiel : capter l'attention de vos prospects et les inciter à vous contacter immédiatement.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-gray-100 pt-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="w-16 h-16 bg-orange-50/80 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                    {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">{feature.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;