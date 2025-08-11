import React from 'react';
import { Calendar, Clock, MapPin, Ticket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Events: React.FC = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      id: 1,
      title: 'Jazz Under the Stars',
      date: '2025-01-15',
      time: '8:00 PM',
      price: '$35',
      description: 'An intimate evening of smooth jazz with local and international artists on our stunning rooftop.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      capacity: '120 guests',
      featured: true,
    },
    {
      id: 2,
      title: 'Wine Tasting Experience',
      date: '2025-01-22',
      time: '7:00 PM',
      price: '$45',
      description: 'Explore premium wines from around the world paired with artisanal appetizers.',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
      capacity: '80 guests',
      featured: false,
    },
    {
      id: 3,
      title: 'Rooftop Salsa Night',
      date: '2025-01-25',
      time: '9:00 PM',
      price: '$25',
      description: 'Dance the night away with live Latin music and professional dance instructors.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      capacity: '150 guests',
      featured: false,
    },
    {
      id: 4,
      title: 'New Year Celebration',
      date: '2025-12-31',
      time: '10:00 PM',
      price: '$150',
      description: 'Ring in the New Year with style! Premium dinner, open bar, and spectacular fireworks view.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      capacity: '200 guests',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {t('events.title')}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join us for unforgettable nights filled with music, dining, and breathtaking city views
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event) => (
              <div
                key={event.id}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full font-semibold text-sm">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar size={16} className="text-yellow-400" />
                      <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock size={16} className="text-yellow-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Ticket size={16} className="text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400">{event.price}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <MapPin size={16} className="text-yellow-400" />
                      <span className="text-sm">{event.capacity}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Ticket size={18} />
                      <span>{t('events.buy')}</span>
                    </button>
                    <button className="border border-gray-600 text-white px-4 py-3 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 flex items-center space-x-2">
                      <span>{t('events.more')}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">All Events</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex">
                  <div className="w-32 h-32 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200">
                        {event.title}
                      </h3>
                      <span className="text-yellow-400 font-semibold">
                        {event.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <button className="text-yellow-400 hover:text-yellow-300 font-medium">
                        {t('events.buy')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Planning a Private Event?
            </h3>
            <p className="text-gray-400 mb-6">
              V Lounge & Rooftop is the perfect venue for private parties, corporate events, and special celebrations
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
              Contact for Private Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;