import React from 'react';
import { Link } from 'wouter';
import { UtensilsCrossed, Calendar, Camera, ArrowRight, Sparkles, Music, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Import V Lounge images for blocks
import menuBlockImage from '@assets/vlounge_rooftop_1754936457936_1754948240038.jpeg';
import eventBlockImage from '@assets/vlounge_rooftop_1754936479997_1754948240040.jpeg';
import galleryBlockImage from '@assets/vlounge_rooftop_1754936503366_1754948240042.jpeg';

const InteractiveBlocks: React.FC = () => {
  const { t } = useLanguage();

  const blocks = [
    {
      id: 1,
      title: t('home.blocks.menu.title'),
      subtitle: t('home.blocks.menu.subtitle'),
      description: t('home.blocks.menu.description'),
      image: menuBlockImage,
      link: '/menu',
      icon: <UtensilsCrossed size={28} />,
      gradient: 'from-orange-600/90 to-red-600/90',
      hoverGradient: 'from-orange-500/95 to-red-500/95'
    },
    {
      id: 2,
      title: t('home.blocks.events.title'),
      subtitle: t('home.blocks.events.subtitle'), 
      description: t('home.blocks.events.description'),
      image: eventBlockImage,
      link: '/events',
      icon: <Calendar size={28} />,
      gradient: 'from-purple-600/90 to-pink-600/90',
      hoverGradient: 'from-purple-500/95 to-pink-500/95'
    },
    {
      id: 3,
      title: t('home.blocks.gallery.title'),
      subtitle: t('home.blocks.gallery.subtitle'),
      description: t('home.blocks.gallery.description'),
      image: galleryBlockImage,
      link: '/gallery',
      icon: <Camera size={28} />,
      gradient: 'from-blue-600/90 to-teal-600/90',
      hoverGradient: 'from-blue-500/95 to-teal-500/95'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles size={24} className="text-primary-gold animate-pulse" />
            <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">
              {t('home.blocks.header.tagline')}
            </span>
            <Sparkles size={24} className="text-primary-gold animate-pulse" />
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-6 animate-fade-in-up">
            {t('home.blocks.header.title')}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t('home.blocks.header.subtitle')}
          </p>
        </div>

        {/* Interactive Blocks Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blocks.map((block, index) => (
            <Link key={block.id} to={block.link}>
              <div 
                className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${block.gradient} transition-all duration-500 group-hover:bg-gradient-to-t group-hover:${block.hoverGradient}`} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  {/* Icon */}
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <div className="text-white">
                        {block.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="mb-2">
                      <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">
                        {block.subtitle}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {block.title}
                    </h3>
                    
                    <p className="text-gray-200 text-base leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {block.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center space-x-2 text-white font-semibold">
                      <span className="group-hover:text-primary-gold transition-colors duration-300">
                        {t('home.blocks.cta')}
                      </span>
                      <ArrowRight 
                        size={20} 
                        className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary-gold" 
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up delay-1000">
          <p className="text-lg text-gray-400 mb-8">
            {t('home.blocks.bottom.text')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-gold to-primary-orange text-black font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          >
            <span>{t('home.blocks.bottom.cta')}</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBlocks;