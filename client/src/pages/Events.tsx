import React from 'react';
import { Calendar, Clock, Users, ExternalLink, Music, MapPin } from 'lucide-react';
import { useLanguage, eventData } from '../contexts/LanguageContext';
import eventImage from '@assets/vlounge_rooftop_1754936167492_1754942008137.jpeg';

const Events: React.FC = () => {
  const { t, language } = useLanguage();
  const currentEvent = eventData[language];

  const handleBuyTickets = () => {
    window.open('https://pamevent.com/event/eat-drink-dance-brunch-party/510', '_blank');
  };

  return (
    <div className="min-h-screen bg-bg-primary py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="container-fluid relative z-10">
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in-up">
            {t('events.title')}
          </h1>
          <p className="text-secondary text-xl font-light animate-fade-in-up delay-200 max-w-3xl mx-auto text-balance">
            Join us for exclusive events featuring world-class entertainment and unforgettable experiences
          </p>
        </div>

        {/* Main Event */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-up delay-300">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden image-overlay">
                <img
                  src={eventImage}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <Music className="text-primary-gold" size={20} />
                    <span className="text-sm font-medium text-white">LIVE MUSIC EVENT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-400">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {currentEvent.title}
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-primary-gold flex-shrink-0" size={20} />
                  <span className="text-secondary font-medium">{currentEvent.date}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary-gold flex-shrink-0" size={20} />
                  <span className="text-secondary font-medium">{currentEvent.time}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary-gold flex-shrink-0" size={20} />
                  <span className="text-secondary font-medium">V Lounge & Rooftop, Pétion-Ville</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Music className="text-primary-gold flex-shrink-0" size={20} />
                  <span className="text-secondary font-medium">{currentEvent.djs}</span>
                </div>
              </div>

              <p className="text-muted text-lg leading-relaxed mb-8">
                {currentEvent.description}
              </p>

              {/* Ticket Options */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Ticket Options:</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Early Bird */}
                  <div className="bg-gradient-to-r from-primary-gold to-primary-orange p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-black">EARLY BIRD</span>
                      <span className="text-2xl font-bold text-black">{currentEvent.tickets.earlyBird.price}</span>
                    </div>
                    {currentEvent.tickets.earlyBird.available && (
                      <span className="text-xs text-black/80">Available Now</span>
                    )}
                  </div>

                  {/* Free Tickets */}
                  <div className="bg-gray-700/50 p-4 rounded-xl border border-gray-600">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{currentEvent.tickets.free.price}</span>
                      <span className="text-sm font-medium text-red-400">{currentEvent.soldOut}</span>
                    </div>
                    <span className="text-xs text-gray-400">No longer available</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBuyTickets}
                className="btn-primary w-full sm:w-auto text-lg px-8 py-4 hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{currentEvent.buyTickets}</span>
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* More Events Coming Soon */}
        <div className="text-center animate-fade-in-up delay-500">
          <div className="card-premium max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={24} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">More Events Coming Soon</h3>
              <p className="text-secondary leading-relaxed">
                {currentEvent.moreEvents}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;