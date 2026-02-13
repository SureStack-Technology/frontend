import React from 'react';
import { ChevronRight } from 'lucide-react';
import useLanguageStore from '../../stores/useLanguageStore';

const StatCard = ({ statistic }) => (
  <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
    <div className="text-cyan-400 font-heading text-3xl font-bold mb-2">{statistic.value}</div>
    <div className="font-subheading text-xl">{statistic.label}</div>
  </div>
);

const Hero = () => {

  const { t, language } = useLanguageStore();

  const statistics = [
      { label: t('hero.faster'), value: "2,880x"  },
      { label: t('hero.accuracy'), value: ">95%" },
      { label: t('hero.realtime'), value: "24/7" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('hero.head1')} <span className="text-cyan-400">{t('hero.head2')}</span>
          </h1>
          
          <p className="text-xl font-subheading mb-8 max-w-3xl mx-auto">
            {t('hero.sub')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-subheading transition inline-flex items-center justify-center">
              {t('hero.learn-more')} <ChevronRight className="ml-2" />
            </a>
            <a href="#contact" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-subheading transition">
              {t('hero.get-started')}
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
              <StatCard key={index} statistic={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;