import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-4 py-2 text-sm text-white hover:text-gradient transition-all duration-300 rounded-full hover:bg-white/5 group"
      >
        <Globe size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline font-medium tracking-wide">{currentLanguage?.name}</span>
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-3 glass rounded-2xl shadow-2xl min-w-[180px] z-50 overflow-hidden animate-fade-in-up">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'fr' | 'ht');
                setIsOpen(false);
              }}
                className={`w-full flex items-center space-x-4 px-6 py-4 text-left hover:bg-white/10 transition-all duration-300 group ${
                language === lang.code
                    ? 'text-gradient bg-white/5'
                  : 'text-white'
              }`}
            >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">{lang.flag}</span>
                <span className="font-medium tracking-wide">{lang.name}</span>
                {language === lang.code && (
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full animate-glow" />
                )}
            </button>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;