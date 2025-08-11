import { Link } from 'wouter';
import { ArrowRight, MapPin, Clock, Users, Star, Award, Heart, Calendar, Music, ExternalLink } from 'lucide-react';
import { useLanguage, eventData } from '../contexts/LanguageContext';
import HeroSlider from '../components/HeroSlider';
import InteractiveBlocks from '../components/InteractiveBlocks';
import eventImage from '@assets/vlounge_rooftop_1754936167492_1754942008137.jpeg';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const currentEvent = eventData[language];

  const handleBuyTickets = () => {
    window.open('https://pamevent.com/event/eat-drink-dance-brunch-party/510', '_blank');
  };

  return (
    <div>
      {/* Enhanced Hero Slider */}
      <HeroSlider />

      {/* Interactive Blocks Section */}
      <InteractiveBlocks />

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container-fluid relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-gradient animate-fade-in-up">
              {t('home.about.title')}
            </h2>
            <p className="text-xl md:text-2xl text-enhanced leading-relaxed mb-20 max-w-4xl mx-auto font-medium animate-fade-in-up delay-200 text-balance">
              {t('home.about.text')}
            </p>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="card-premium text-center hover-lift animate-fade-in-up delay-300 group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <MapPin className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-bright group-hover:text-gradient transition-colors duration-300">Prime Location</h3>
                <p className="text-enhanced leading-relaxed font-medium">Heart of Pétion-Ville with stunning city views</p>
              </div>

              <div className="card-premium text-center hover-lift animate-fade-in-up delay-400 group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Clock className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-bright group-hover:text-gradient transition-colors duration-300">Perfect Hours</h3>
                <p className="text-enhanced leading-relaxed font-medium">Open Tuesday-Sunday, 6PM-2AM</p>
              </div>

              <div className="card-premium text-center hover-lift animate-fade-in-up delay-500 group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Users className="text-black" size={28} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-bright group-hover:text-gradient transition-colors duration-300">VIP Experience</h3>
                <p className="text-enhanced leading-relaxed font-medium">Exclusive events and premium service</p>
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
              <div className="text-enhanced text-sm uppercase tracking-widest font-semibold">Years Excellence</div>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">50K+</div>
              <div className="text-enhanced text-sm uppercase tracking-widest font-semibold">Happy Guests</div>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">200+</div>
              <div className="text-enhanced text-sm uppercase tracking-widest font-semibold">Events Hosted</div>
            </div>
            <div className="text-center animate-fade-in-up delay-400">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">4.9</div>
              <div className="text-enhanced text-sm uppercase tracking-widest font-semibold">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container-fluid relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
              {t('events.section.title')}
            </h2>
            <p className="text-enhanced text-xl font-medium animate-fade-in-up delay-200 max-w-2xl mx-auto text-balance">
              {t('events.section.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="card-premium hover-lift animate-fade-in-up delay-300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden image-overlay">
                    <img
                      src={eventImage}
                      alt={currentEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Music className="text-primary-gold" size={18} />
                        <span className="text-sm font-medium text-white">LIVE MUSIC EVENT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                    {currentEvent.title}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-primary-gold flex-shrink-0" size={18} />
                      <span className="text-secondary">{currentEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-primary-gold flex-shrink-0" size={18} />
                      <span className="text-secondary">{currentEvent.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Music className="text-primary-gold flex-shrink-0" size={18} />
                      <span className="text-secondary">{currentEvent.djs}</span>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-8">
                    {currentEvent.description}
                  </p>

                  {/* Ticket Pricing */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="bg-gradient-to-r from-primary-gold to-primary-orange px-4 py-2 rounded-lg">
                      <span className="text-black font-semibold">EARLY BIRD: {currentEvent.tickets.earlyBird.price}</span>
                    </div>
                    <div className="text-secondary">
                      <span className="text-red-400 font-medium">{currentEvent.tickets.free.price}: {currentEvent.soldOut}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleBuyTickets}
                      className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>{currentEvent.buyTickets}</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    <Link 
                      to="/events"
                      className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                    >
                      {t('events.viewAll')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Preview */}
      <section className="py-32 bg-bg-secondary relative overflow-hidden">
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