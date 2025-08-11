import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Camera, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import our V Lounge images
import eventImage from '@assets/vlounge_rooftop_1754936167492_1754942008137.jpeg';
import galleryImage from '@assets/vlounge_rooftop_1754936429390_1754948240028.jpeg';
import menuImage from '@assets/vlounge_rooftop_1754936453817_1754948240035.jpeg';

const HeroSlider: React.FC = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      id: 1,
      image: eventImage,
      title: t('home.slider.events.title'),
      subtitle: t('home.slider.events.subtitle'),
      cta: t('home.slider.events.cta'),
      link: '/events',
      icon: <Calendar size={24} />,
      gradient: 'from-purple-900/90 via-black/70 to-pink-900/90'
    },
    {
      id: 2,
      image: galleryImage,
      title: t('home.slider.gallery.title'),
      subtitle: t('home.slider.gallery.subtitle'),
      cta: t('home.slider.gallery.cta'),
      link: '/gallery',
      icon: <Camera size={24} />,
      gradient: 'from-blue-900/90 via-black/70 to-orange-900/90'
    },
    {
      id: 3,
      image: menuImage,
      title: t('home.slider.menu.title'),
      subtitle: t('home.slider.menu.subtitle'),
      cta: t('home.slider.menu.cta'),
      link: '/menu',
      icon: <UtensilsCrossed size={24} />,
      gradient: 'from-green-900/90 via-black/70 to-yellow-900/90'
    }
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom'
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1200}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="w-full h-[120%] bg-cover bg-center transition-transform duration-1000 ease-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: 'translateY(-10%)'
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center max-w-6xl mx-auto px-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary-gold to-primary-orange mb-8 animate-fade-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-black">
                    {slide.icon}
                  </div>
                </div>

                {/* Title */}
                <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white animate-fade-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                   style={{ animationDelay: `${index * 0.2 + 0.6}s` }}>
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <div className={`animate-fade-in-up ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                     style={{ animationDelay: `${index * 0.2 + 0.9}s` }}>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-gold to-primary-orange text-black font-semibold px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 group text-lg"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
        <ArrowRight size={20} className="text-white rotate-180 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="swiper-button-next-custom absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
        <ArrowRight size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-gradient-to-b from-primary-gold to-primary-orange rounded-full mt-3 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;