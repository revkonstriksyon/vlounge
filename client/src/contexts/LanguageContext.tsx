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
    
    // Menu Items FR
    'menu.items.acra': 'Acra',
    'menu.items.bangBangShrimp': 'Bang Bang Crevettes',
    'menu.items.chickenSkewer': 'Brochette de Poulet',
    'menu.items.plantainCups': 'Coques Plantain',
    'menu.items.griot': 'Griot',
    'menu.items.chicken': 'Poulet',
    'menu.items.shrimp': 'Crevettes',
    'menu.items.grilledShrimp': 'Crevettes Grillées Juteuses',
    'menu.items.empanadas': 'V-Empanadas',
    'menu.items.beefFilet': 'Filet de Bœuf',
    'menu.items.grilledGoat': 'Cabrit Grillé',
    'menu.items.grilledChicken': 'Poulet Grillé',
    'menu.items.pork': 'Porc',
    'menu.items.steak': 'Steak',
    'menu.items.vBurger': 'V Burger',
    'menu.items.wings6': '6 Ailes',
    'menu.items.wings12': '12 Ailes',
    'menu.items.wings30': '30 Ailes',
    'menu.items.wings50': '50 Ailes',
    'menu.items.brownies': 'Brownies à la Mode',
    'menu.items.friedOreo': 'Oreo Frit',
    'menu.items.iceCream': 'Crème Glacée',
    
    // Events
    'events.title': 'Événements à Venir',
    'events.buy': 'Acheter des Billets',
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
    
    // Menu Items HT
    'menu.items.acra': 'Akra',
    'menu.items.bangBangShrimp': 'Bang Bang Kribich',
    'menu.items.chickenSkewer': 'Bochèt Poul',
    'menu.items.plantainCups': 'Kòk Bannann',
    'menu.items.griot': 'Griyò',
    'menu.items.chicken': 'Poul',
    'menu.items.shrimp': 'Kribich',
    'menu.items.grilledShrimp': 'Kribich Griye ki gen Gou',
    'menu.items.empanadas': 'V-Empanadas',
    'menu.items.beefFilet': 'File Bèf',
    'menu.items.grilledGoat': 'Kabrit Griye',
    'menu.items.grilledChicken': 'Poul Griye',
    'menu.items.pork': 'Kochon',
    'menu.items.steak': 'Stèk',
    'menu.items.vBurger': 'V Burger',
    'menu.items.wings6': '6 Zèl',
    'menu.items.wings12': '12 Zèl',
    'menu.items.wings30': '30 Zèl',
    'menu.items.wings50': '50 Zèl',
    'menu.items.brownies': 'Brownies ak Glas',
    'menu.items.friedOreo': 'Oreo Fri',
    'menu.items.iceCream': 'Glas',
    
    // Events
    'events.title': 'Aktivite k ap Vin yo',
    'events.buy': 'Achte Tikè',
    'events.more': 'Aprann Plis',
    
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