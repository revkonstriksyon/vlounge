import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ht';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Homepage
    'home.hero.title': 'Experience Luxury Above the City',
    'home.hero.subtitle': 'V Lounge & Rooftop - Where sophistication meets the skyline of Pétion-Ville',
    'home.hero.reserve': 'Make Reservation',
    'home.hero.tickets': 'Buy Event Tickets',
    'home.about.title': 'Elevated Dining Experience',
    'home.about.text': 'Located in the heart of Pétion-Ville, V Lounge & Rooftop offers an unparalleled dining and entertainment experience with breathtaking city views, exquisite cuisine, and sophisticated ambiance.',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.appetizers': 'Appetizers',
    'menu.mains': 'Main Courses',
    'menu.cocktails': 'Signature Cocktails',
    'menu.desserts': 'Desserts',
    
    // Events
    'events.title': 'Upcoming Events',
    'events.buy': 'Buy Tickets',
    'events.more': 'Learn More',
    
    // Gallery
    'gallery.title': 'Gallery',
    
    // Contact
    'contact.title': 'Contact & Reservations',
    'contact.reserve': 'Make a Reservation',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.date': 'Reservation Date',
    'contact.time': 'Preferred Time',
    'contact.guests': 'Number of Guests',
    'contact.message': 'Special Requests',
    'contact.submit': 'Submit Reservation',
    'contact.info': 'Contact Information',
    'contact.address': 'Pétion-Ville, Haiti',
    'contact.hours': 'Opening Hours',
    'contact.daily': 'Tuesday - Sunday: 6:00 PM - 2:00 AM',
    'contact.closed': 'Closed Mondays',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.menu': 'Menu',
    'nav.events': 'Événements',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    
    // Homepage
    'home.hero.title': 'Découvrez le Luxe Au-Dessus de la Ville',
    'home.hero.subtitle': 'V Lounge & Rooftop - Où la sophistication rencontre l\'horizon de Pétion-Ville',
    'home.hero.reserve': 'Réserver une Table',
    'home.hero.tickets': 'Acheter des Billets',
    'home.about.title': 'Expérience Culinaire Élevée',
    'home.about.text': 'Situé au cœur de Pétion-Ville, V Lounge & Rooftop offre une expérience culinaire et de divertissement incomparable avec des vues imprenables sur la ville, une cuisine exquise et une ambiance sophistiquée.',
    
    // Menu
    'menu.title': 'Notre Menu',
    'menu.appetizers': 'Entrées',
    'menu.mains': 'Plats Principaux',
    'menu.cocktails': 'Cocktails Signature',
    'menu.desserts': 'Desserts',
    
    // Events
    'events.title': 'Événements à Venir',
    'events.buy': 'Acheter Billets',
    'events.more': 'En Savoir Plus',
    
    // Gallery
    'gallery.title': 'Galerie',
    
    // Contact
    'contact.title': 'Contact & Réservations',
    'contact.reserve': 'Faire une Réservation',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.phone': 'Numéro de Téléphone',
    'contact.date': 'Date de Réservation',
    'contact.time': 'Heure Préférée',
    'contact.guests': 'Nombre d\'Invités',
    'contact.message': 'Demandes Spéciales',
    'contact.submit': 'Soumettre Réservation',
    'contact.info': 'Informations de Contact',
    'contact.address': 'Pétion-Ville, Haïti',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.daily': 'Mardi - Dimanche: 18:00 - 02:00',
    'contact.closed': 'Fermé le Lundi',
  },
  ht: {
    // Navigation
    'nav.home': 'Akèy',
    'nav.menu': 'Meni',
    'nav.events': 'Aktivite',
    'nav.gallery': 'Galri',
    'nav.contact': 'Kontak',
    
    // Homepage
    'home.hero.title': 'Viv Eksperyans Luxe Anwo Vil la',
    'home.hero.subtitle': 'V Lounge & Rooftop - Kote sofistikasyon rankontre orizon Pétion-Ville',
    'home.hero.reserve': 'Fè Rezèvasyon',
    'home.hero.tickets': 'Achte Tikè',
    'home.about.title': 'Eksperyans Manje ki Elve',
    'home.about.text': 'Ki sitye nan kè Pétion-Ville, V Lounge & Rooftop ofri yon eksperyans manje ak amizman ki san konparezon ak bèl vi sou vil la, manje ki ekselèn, ak yon anviwonman rafine.',
    
    // Menu
    'menu.title': 'Meni Nou an',
    'menu.appetizers': 'Antrè',
    'menu.mains': 'Mèt Manje',
    'menu.cocktails': 'Cocktail Espesyal',
    'menu.desserts': 'Dese',
    
    // Events
    'events.title': 'Aktivite k ap Vini',
    'events.buy': 'Achte Tikè',
    'events.more': 'Aprann Plis',
    
    // Gallery
    'gallery.title': 'Galri',
    
    // Contact
    'contact.title': 'Kontak & Rezèvasyon',
    'contact.reserve': 'Fè yon Rezèvasyon',
    'contact.name': 'Non Konple',
    'contact.email': 'Adrès Imèl',
    'contact.phone': 'Nimewo Telefòn',
    'contact.date': 'Dat Rezèvasyon',
    'contact.time': 'Lè w Prefere',
    'contact.guests': 'Kantite Envite',
    'contact.message': 'Demann Espesyal',
    'contact.submit': 'Soumèt Rezèvasyon',
    'contact.info': 'Enfomasyon Kontak',
    'contact.address': 'Pétion-Ville, Ayiti',
    'contact.hours': 'Lè Ouvèti',
    'contact.daily': 'Madi - Dimanch: 6:00 PM - 2:00 AM',
    'contact.closed': 'Fèmen Lendi',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};