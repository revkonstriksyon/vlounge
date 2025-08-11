import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/menu', label: t('nav.menu') },
    { path: '/events', label: t('nav.events') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-fluid py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative animate-float">
              <svg
                width="48"
                height="48"
                viewBox="0 0 100 100"
                className="transform group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg"
              >
                <path
                  d="M20 20 L80 20 L50 60 L50 85 M35 85 L65 85"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  className="drop-shadow-sm"
                />
                <defs>
                  <linearGradient id="vGradientHeader" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FF6B35', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <polygon
                  points="25,25 75,25 50,55"
                  fill="url(#vGradientHeader)"
                  className="animate-glow"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-gradient tracking-wide">
              V Lounge
              </span>
              <span className="text-xs text-muted font-light tracking-widest uppercase">
                & Rooftop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-gradient group ${
                  location === path
                    ? 'text-gradient'
                    : 'text-white'
                }`}
              >
                {label}
                {location === path && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full animate-shimmer" />
                )}
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            <div className="ml-4">
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-white hover:text-gradient transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-6 space-y-6">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-medium tracking-wide transition-all duration-300 hover:text-gradient hover:translate-x-2 ${
                  location === path
                    ? 'text-gradient'
                    : 'text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border-subtle">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;