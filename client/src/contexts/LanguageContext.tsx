import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ht';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Event data with multilingual support
export const eventData = {
  en: {
    title: 'EAT DRINK DANCE - BRUNCH PARTY',
    date: 'Sunday, August 24, 2025',
    time: 'Starts at 12:00 PM',
    djs: 'DJ Nos, Static, and opening set by Blade',
    tickets: {
      earlyBird: { price: '$15.00', available: true },
      free: { price: 'FREE', available: false, soldOut: true }
    },
    buyTickets: 'Buy Tickets',
    soldOut: 'Sold Out',
    description: 'Join us for an unforgettable brunch party experience with amazing music, delicious food, and breathtaking rooftop views.',
    moreEvents: 'More events will be posted as they become available.'
  },
  fr: {
    title: 'EAT DRINK DANCE - BRUNCH PARTY',
    date: 'Dimanche 24 Août 2025',
    time: 'Commence à 12:00 PM',
    djs: 'DJ Nos, Static, et ouverture par Blade',
    tickets: {
      earlyBird: { price: '$15.00', available: true },
      free: { price: 'GRATUIT', available: false, soldOut: true }
    },
    buyTickets: 'Acheter des Billets',
    soldOut: 'Complet',
    description: 'Rejoignez-nous pour une expérience brunch inoubliable avec une musique incroyable, une cuisine délicieuse et des vues époustouflantes sur le toit.',
    moreEvents: 'Plus d\'événements seront publiés dès qu\'ils seront disponibles.'
  },
  ht: {
    title: 'EAT DRINK DANCE - BRUNCH PARTY',
    date: 'Dimanch 24 Dawout 2025',
    time: 'Kòmanse a 12:00 PM',
    djs: 'DJ Nos, Static, ak premye pati a ak Blade',
    tickets: {
      earlyBird: { price: '$15.00', available: true },
      free: { price: 'GRATIS', available: false, soldOut: true }
    },
    buyTickets: 'Achte Tikè',
    soldOut: 'Vann Nèt',
    description: 'Vin jwenn nou pou yon ekspèyans brunch inoubliab ak mizik gwo kalite, manje ki bon anpil, ak yon bèl vi sou tèt kay la.',
    moreEvents: 'Y ap gen plis evènman yo lè yo disponib.'
  }
};

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
    'home.hero.subtitle': 'V Lounge & Rooftop - Where sophistication meets the Pétion-Ville skyline',
    'home.hero.reserve': 'Reserve a Table',
    'home.hero.tickets': 'Buy Event Tickets',
    'home.about.title': 'Elevated Dining Experience',
    'home.about.text': 'Located in the heart of Pétion-Ville, V Lounge & Rooftop offers an unparalleled dining and entertainment experience with breathtaking city views, exquisite cuisine, and sophisticated ambiance.',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.appetizers': 'Appetizers',
    'menu.mains': 'Main Courses',
    'menu.seafood': 'Seafood',
    'menu.pizzas': 'Pizzas',
    'menu.burgers': 'Burgers & Wings',
    'menu.wings': 'Wings',
    'menu.cocktails': 'Signature Cocktails',
    'menu.wines': 'Wines',
    'menu.spirits': 'Spirits & Beer',
    'menu.desserts': 'Desserts',
    'menu.serviceNote': '10% TCA & 10% SERVICE CHARGE NOT INCLUDED',
    'menu.fridayOnly': 'Friday Only',
    
    // Menu Items
    'menu.items.acra': 'Acra',
    'menu.items.bangBangShrimp': 'Bang Bang Shrimp',
    'menu.items.chickenSkewer': 'Chicken Skewer',
    'menu.items.plantainCups': 'Plantain Cups',
    'menu.items.griot': 'Griot',
    'menu.items.chicken': 'Chicken',
    'menu.items.shrimp': 'Shrimp',
    'menu.items.grilledShrimp': 'Juicy Grilled Shrimp',
    'menu.items.empanadas': 'V-Empanadas',
    'menu.items.beefFilet': 'Beef Filet',
    'menu.items.grilledGoat': 'Grilled Goat',
    'menu.items.grilledChicken': 'Grilled Chicken',
    'menu.items.pork': 'Pork',
    'menu.items.steak': 'Steak',
    'menu.items.cesarSalad': 'César Salad',
    'menu.items.tunaTartare': 'Tuna Tartare',
    'menu.items.vLoungeSalad': 'V Lounge Salad',
    'menu.items.fettuccini': 'Fettuccini',
    'menu.items.fish34': 'Fish 3/4 LB',
    'menu.items.fish1lb': 'Fish 1 LB',
    'menu.items.fishFilet': 'Fish Filet',
    'menu.items.grilledOctopus': 'Grilled Octopus',
    'menu.items.lobster': 'Lobster',
    'menu.items.salmon': 'Salmon',
    'menu.items.shrimpMain': 'Shrimp',
    'menu.items.griotPizza': 'Griot Pizza',
    'menu.items.margaritaPizza': 'Margarita Pizza',
    'menu.items.pepperoniPizza': 'Pepperoni Pizza',
    'menu.items.chickenPizza': 'Chicken Pizza',
    'menu.items.vPizza': 'V Pizza',
    'menu.items.vBurger': 'V Burger',
    'menu.items.wings6': '6 Wings',
    'menu.items.wings12': '12 Wings',
    'menu.items.wings30': '30 Wings',
    'menu.items.wings50': '50 Wings',
    'menu.items.specialWings12': 'Special Wings (12)',
    'menu.items.specialWings30': 'Special Wings (30)',
    'menu.items.specialWings50': 'Special Wings (50)',
    'menu.items.amarettoSour': 'Amaretto Sour',
    'menu.items.blueKamikaz': 'Blue Kamikaz',
    'menu.items.chillIt': 'Chill It',
    'menu.items.dryMartini': 'Dry Martini',
    'menu.items.espressoMartini': 'Espresso Martini',
    'menu.items.gingerBreeze': 'Ginger Breeze',
    'menu.items.ginBasil': 'Gin Basil',
    'menu.items.margarita': 'Margarita',
    'menu.items.mojito': 'Mojito',
    'menu.items.pinaColada': 'Piña Colada',
    'menu.items.vPunch': 'V Punch',
    'menu.items.rouge': 'Red Wine',
    'menu.items.blanc': 'White Wine',
    'menu.items.rose': 'Rosé Wine',
    'menu.items.mousseux': 'Sparkling Wine',
    'menu.items.laFinca': 'La Finca',
    'menu.items.moetRose': 'Moët & Chandon Rosé',
    'menu.items.prestige': 'Prestige Beer',
    'menu.items.barbancourt3': 'Barbancourt 3*',
    'menu.items.barbancourt5': 'Barbancourt 5*',
    'menu.items.jackDaniels': "Jack Daniel's",
    'menu.items.johnnieBlue': 'Johnnie Walker Blue',
    'menu.items.hennesyVSOP': 'Hennessy VSOP',
    'menu.items.patronSilver': 'Patrón Silver',
    'menu.items.brownies': 'Brownies à la Mode',
    'menu.items.friedOreo': 'Fried Oreo',
    'menu.items.iceCream': 'Ice Cream',
    
    // Menu Descriptions
    'menu.descriptions.chickenSkewer': 'Grilled chicken skewers with herbs',
    'menu.descriptions.grilledShrimp': 'Fresh juicy grilled shrimp',
    'menu.descriptions.beefFilet': 'Beef filet with mushroom sauce and sautéed vegetables',
    'menu.descriptions.grilledGoat': 'Grilled goat with timalice sauce, rice and plantains',
    'menu.descriptions.grilledChicken': 'Grilled chicken with plantains and salad',
    'menu.descriptions.pork': 'Marinated griot with timalice sauce and plantains',
    'menu.descriptions.steak': 'Surf and turf with hollandaise or pepper sauce',
    'menu.descriptions.fettuccini': 'Choice of chicken (+$7) or shrimp (+$10), bolognaise or alfredo sauce',
    'menu.descriptions.fish34': 'Grilled or sauced fish with plantains',
    'menu.descriptions.fish1lb': 'Grilled or sauced fish with plantains',
    'menu.descriptions.fishFilet': 'Fish filet with rosemary butter and sautéed vegetables',
    'menu.descriptions.grilledOctopus': 'Grilled octopus with plantains or fries and timalice sauce',
    'menu.descriptions.lobster': 'Grilled lobster tail with mashed potatoes',
    'menu.descriptions.salmon': 'Honey grilled salmon with mashed potatoes and vegetables',
    'menu.descriptions.shrimpMain': 'Shrimp with garlic butter or cream sauce and plantains',
    'menu.descriptions.vBurger': 'Served with potato chips',
    'menu.descriptions.specialWings': 'Friday Only - BBQ, Buffalo, Jerk, Lemon Butter, Parmesan Pepper, Honey Mustard, Garlic Parmesan, KFC',
    'menu.descriptions.amarettoSour': 'Amaretto, lemon, sugar syrup',
    'menu.descriptions.blueKamikaz': 'Lemon, pineapple, blue curaçao',
    'menu.descriptions.chillIt': 'Pineapple, tequila, gin, lemon, sugar, cranberry juice',
    'menu.descriptions.dryMartini': 'Vodka, white vermouth, olive',
    'menu.descriptions.espressoMartini': 'Vodka, coffee liqueur, espresso',
    'menu.descriptions.gingerBreeze': 'Vodka, lemon, sugar, ginger, pineapple',
    'menu.descriptions.ginBasil': 'Gin, basil, sugar syrup, lemon',
    'menu.descriptions.margarita': 'Tequila, triple sec, lemon',
    'menu.descriptions.mojito': 'Lemon, mint, white rum',
    'menu.descriptions.pinaColada': 'Pineapple, coconut cream, white rum',
    'menu.descriptions.vPunch': 'Mango, pineapple, rum, orange juice',

    // Events
    'events.title': 'Upcoming Events',
    'events.buy': 'Buy Tickets',
    'events.more': 'Learn More',
    'events.section.title': 'Upcoming Events',
    'events.section.subtitle': 'Don\'t miss our exclusive events',
    'events.viewAll': 'View All Events',
    
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
    'home.about.text': 'Situé au cœur de Pétion-Ville, V Lounge & Rooftop offre une expérience culinaire et de divertissement inégalée avec des vues imprenables sur la ville, une cuisine exquise et une ambiance sophistiquée.',
    
    // Menu
    'menu.title': 'Notre Menu',
    'menu.appetizers': 'Hors-d\'œuvres',
    'menu.mains': 'Plats Principaux',
    'menu.seafood': 'Fruits de Mer',
    'menu.pizzas': 'Pizzas',
    'menu.burgers': 'Burgers & Ailes',
    'menu.wings': 'Ailes',
    'menu.cocktails': 'Cocktails Signature',
    'menu.wines': 'Vins',
    'menu.spirits': 'Spiritueux & Bière',
    'menu.desserts': 'Desserts',
    'menu.serviceNote': '10% TCA & 10% FRAIS DE SERVICE NON INCLUS',
    'menu.fridayOnly': 'Vendredi Seulement',

    // Events
    'events.title': 'Événements à Venir',
    'events.buy': 'Acheter des Billets',
    'events.more': 'En Savoir Plus',
    'events.section.title': 'Événements à Venir',
    'events.section.subtitle': 'Ne manquez pas nos événements exclusifs',
    'events.viewAll': 'Voir Tous les Événements',
    
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
    'contact.submit': 'Soumettre la Réservation',
    'contact.info': 'Informations de Contact',
    'contact.address': 'Pétion-Ville, Haïti',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.daily': 'Mardi - Dimanche: 18h00 - 02h00',
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
    'home.hero.title': 'Viv Ekspèyans Liks la Sou Vil la',
    'home.hero.subtitle': 'V Lounge & Rooftop - Kote rafinman ak divès konn rankontre nan syèl Pétion-Ville',
    'home.hero.reserve': 'Fè Rezèvasyon',
    'home.hero.tickets': 'Achte Tikè',
    'home.about.title': 'Ekspèyans Restoran ki wo',
    'home.about.text': 'Nan kè Pétion-Ville, V Lounge & Rooftop ofri yon ekspèyans restoran ak divetisment san parèy ak yon bèl vi sou vil la, manje egzèllan, ak yon anviwonman sofistike.',
    
    // Menu
    'menu.title': 'Meni Nou an',
    'menu.appetizers': 'Apetrif',
    'menu.mains': 'Gwo Manje',
    'menu.seafood': 'Fwi Lanmè',
    'menu.pizzas': 'Pizza',
    'menu.burgers': 'Burger ak Zèl',
    'menu.wings': 'Zèl',
    'menu.cocktails': 'Cocktail Sinatè',
    'menu.wines': 'Diven',
    'menu.spirits': 'Alkòl ak Byè',
    'menu.desserts': 'Dezè',
    'menu.serviceNote': '10% TCA & 10% FRAIS SERVICE PA ENKLI',
    'menu.fridayOnly': 'Vendèdi Sèlman',

    // Events
    'events.title': 'Aktivite k ap Vin yo',
    'events.buy': 'Achte Tikè',
    'events.more': 'Aprann Plis',
    'events.section.title': 'Aktivite k ap Vin yo',
    'events.section.subtitle': 'Pa rate aktivite espesyal nou yo',
    'events.viewAll': 'Gade Tout Aktivite yo',
    
    // Gallery
    'gallery.title': 'Galri',
    
    // Contact
    'contact.title': 'Kontak ak Rezèvasyon',
    'contact.reserve': 'Fè Rezèvasyon',
    'contact.name': 'Non Konplè',
    'contact.email': 'Adrès Imel',
    'contact.phone': 'Nimewo Telefòn',
    'contact.date': 'Dat Rezèvasyon',
    'contact.time': 'Lè ou Prefere',
    'contact.guests': 'Konbyen Moun',
    'contact.message': 'Demand Espesyal',
    'contact.submit': 'Voye Rezèvasyon',
    'contact.info': 'Enfòmasyon Kontak',
    'contact.address': 'Pétion-Ville, Ayiti',
    'contact.hours': 'Lè Ouvè',
    'contact.daily': 'Madi - Dimanch: 6:00 PM - 2:00 AM',
    'contact.closed': 'Fèmen Lendi',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};