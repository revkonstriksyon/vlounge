import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Star, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
            alt="V Lounge Rooftop View"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
          <div className="absolute inset-0 bg-gradient-radial" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-12 animate-fade-in">
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="mx-auto mb-8 animate-float filter drop-shadow-2xl"
            >
              <path
                d="M20 20 L80 20 L50 60 L50 85 M35 85 L65 85"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                className="drop-shadow-lg"
              />
              <defs>
                <linearGradient id="vGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <polygon
                points="25,25 75,25 50,55"
                fill="url(#vGradientHero)"
                className="animate-glow"
              />
            </svg>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold mb-8 text-gradient animate-fade-in-up text-shadow text-balance leading-tight">
            {t('home.hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light tracking-wide text-balance">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Link
              to="/contact"
              className="btn-primary hover-lift text-lg px-10 py-5 group"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>{t('home.hero.reserve')}</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link
              to="/events"
              className="btn-secondary hover-lift text-lg px-10 py-5 group"
            >
              <span className="flex items-center justify-center space-x-3">
                <span>{t('home.hero.tickets')}</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce delay-1000">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-primary-gold to-primary-orange rounded-full mt-3 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container-fluid relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-gradient animate-fade-in-up">
              {t('home.about.title')}
            </h2>
            <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-20 max-w-4xl mx-auto font-light animate-fade-in-up delay-200 text-balance">
              {t('home.about.text')}
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="card-premium text-center hover-lift animate-fade-in-up delay-300 group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <MapPin className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-gradient transition-colors duration-300">Prime Location</h3>
                <p className="text-muted leading-relaxed">Heart of Pétion-Ville with stunning city views</p>
              </div>

              <div className="card-premium text-center hover-lift animate-fade-in-up delay-400 group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Clock className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-gradient transition-colors duration-300">Perfect Hours</h3>
                <p className="text-muted leading-relaxed">Open Tuesday-Sunday, 6PM-2AM</p>
              </div>

              <div className="card-premium text-center hover-lift animate-fade-in-up delay-500 group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Users className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-gradient transition-colors duration-300">VIP Experience</h3>
                <p className="text-muted leading-relaxed">Exclusive events and premium service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="container-fluid">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up delay-100">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">5+</div>
              <div className="text-muted text-sm uppercase tracking-widest">Years Excellence</div>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">50K+</div>
              <div className="text-muted text-sm uppercase tracking-widest">Happy Guests</div>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">200+</div>
              <div className="text-muted text-sm uppercase tracking-widest">Events Hosted</div>
            </div>
            <div className="text-center animate-fade-in-up delay-400">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">4.9</div>
              <div className="text-muted text-sm uppercase tracking-widest">Rating</div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Gallery Preview */}
      <section className="py-32 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container-fluid relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
              Experience V Lounge
            </h2>
            <p className="text-secondary text-xl font-light animate-fade-in-up delay-200 max-w-2xl mx-auto text-balance">
              Discover our sophisticated ambiance and exquisite cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
              'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
              'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg'
            ].map((image, index) => (
              <div
                key={index}
                className={`image-overlay rounded-3xl aspect-square hover-lift animate-fade-in-up delay-${300 + index * 100}`}
              >
                <img
                  src={image}
                  alt={`V Lounge Experience ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="btn-primary hover-lift text-lg px-10 py-5 group animate-fade-in-up delay-700"
            >
              <span className="flex items-center space-x-3">
                <span>View Full Gallery</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;