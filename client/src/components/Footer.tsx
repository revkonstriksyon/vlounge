import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ParallaxSection from './ParallaxSection';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Instagram size={24} />, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: <Facebook size={24} />, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
  ];

  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.menu'), href: '/menu' },
    { label: t('nav.events'), href: '/events' },
    { label: t('nav.gallery'), href: '/gallery' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <ParallaxSection speed={0.2}>
        <div className="relative z-10 pt-20 pb-8">
          <div className="container mx-auto px-4">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
              
              {/* Brand Section */}
              <div className="lg:col-span-1 animate-fade-in-up">
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center animate-glow">
                      <svg width="32" height="32" viewBox="0 0 100 100" className="animate-float">
                        <path
                          d="M20 20 L80 20 L50 60 L50 85 M35 85 L65 85"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                        <polygon
                          points="25,25 75,25 50,55"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gradient">
                        V Lounge
                      </h3>
                      <p className="text-enhanced text-sm font-medium">& Rooftop</p>
                    </div>
                  </div>
                  <p className="text-enhanced leading-relaxed font-medium mb-6">
                    {t('home.about.text')}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} hover:bg-white/20 group`}
                        aria-label={social.label}
                      >
                        <div className="transform transition-transform duration-300 group-hover:scale-110">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-fade-in-up delay-200">
                <h4 className="font-display text-xl font-bold text-bright mb-6">
                  {t('footer.quickLinks')}
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-enhanced hover:text-accent transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in-up delay-300">
                <h4 className="font-display text-xl font-bold text-bright mb-6">
                  {t('contact.info')}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-black" size={18} />
                    </div>
                    <div>
                      <p className="text-enhanced font-medium">{t('contact.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-black" size={18} />
                    </div>
                    <div>
                      <p className="text-enhanced font-medium">+509 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-black" size={18} />
                    </div>
                    <div>
                      <p className="text-enhanced font-medium">info@vlounge.ht</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="animate-fade-in-up delay-400">
                <h4 className="font-display text-xl font-bold text-bright mb-6">
                  {t('contact.hours')}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 group">
                    <Clock className="text-accent group-hover:text-primary-gold transition-colors duration-300" size={20} />
                    <div>
                      <p className="text-enhanced font-medium">{t('contact.daily')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5" />
                    <p className="text-enhanced font-medium">{t('contact.closed')}</p>
                  </div>
                </div>

                {/* Rating Display */}
                <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-primary-gold/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-primary-gold fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <span className="text-bright font-bold">4.9</span>
                  </div>
                  <p className="text-enhanced text-sm font-medium">50,000+ Happy Guests</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-enhanced text-sm font-medium">
                  © 2024 V Lounge & Rooftop. All rights reserved.
                </p>
                <div className="flex items-center space-x-2 text-enhanced text-sm font-medium">
                  <span>Made with</span>
                  <Heart className="text-primary-gold fill-current animate-pulse" size={16} />
                  <span>in Pétion-Ville</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </footer>
  );
};

export default Footer;