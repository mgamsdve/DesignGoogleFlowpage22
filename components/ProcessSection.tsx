import React from 'react';

const steps = [
  {
    number: "01",
    title: "Vous m'expliquez",
    description: "On discute de votre activité, de vos valeurs et de ce que vous attendez de votre page. Pas de formulaires compliqués, juste une conversation humaine."
  },
  {
    number: "02",
    title: "Je crée la page",
    description: "Je m'occupe de tout : design, structure et mise en ligne. Je façonne une page qui vous ressemble et qui rassure vos futurs clients."
  },
  {
    number: "03",
    title: "Vous recevez des contacts",
    description: "Votre page est en ligne. Elle travaille pour vous 24h/24, guidant chaque visiteur vers votre téléphone ou votre boîte mail.",
    highlight: true
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-brand-cream py-32 md:py-48 px-6 md:px-12 border-t border-brand-dark/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-24 md:mb-32">
          Comment ça se passe, <span className="text-brand-orange">concrètement ?</span>
        </h2>

        <div className="relative space-y-20 md:space-y-24">
          {/* Vertical line */}
          <div className="absolute left-[34px] top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-10 md:gap-16 items-start group">
              <div className={`
                flex-shrink-0 w-[72px] h-[72px] rounded-full flex items-center justify-center text-2xl font-bold z-10 border-[6px] border-brand-cream transition-transform duration-300 group-hover:scale-110
                ${step.highlight ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/30' : 'bg-white text-brand-orange shadow-md'}
              `}>
                {step.number}
              </div>
              <div className="pt-2 max-w-2xl">
                <h3 className="text-3xl font-bold mb-4 text-brand-dark">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;