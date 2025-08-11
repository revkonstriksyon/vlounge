import type { IStorage } from './storage';

// Existing content data structures from the frontend
export const existingSliderData = [
  {
    imageUrl: '/assets/vlounge_rooftop_1754936167492_1754942008137.jpeg',
    titleEn: 'Upcoming Events',
    titleFr: 'Événements à venir',
    titleHt: 'Evènman ki gen pou vin yo',
    subtitleEn: 'Experience unforgettable nights',
    subtitleFr: 'Vivez des nuits inoubliables',
    subtitleHt: 'Ekspèyans nwit inoubliab yo',
    buttonTextEn: 'View Events',
    buttonTextFr: 'Voir les événements',
    buttonTextHt: 'Gade evènman yo',
    buttonLink: '/events',
    order: 1,
    isActive: true
  },
  {
    imageUrl: '/assets/vlounge_rooftop_1754936205223_1754948240046.jpeg',
    titleEn: 'Visual Gallery',
    titleFr: 'Galerie Visuelle',
    titleHt: 'Galeri Vizyèl',
    subtitleEn: 'Discover our breathtaking spaces',
    subtitleFr: 'Découvrez nos espaces à couper le souffle',
    subtitleHt: 'Dekouvri espas yo ki koupe souf nou yo',
    buttonTextEn: 'View Gallery',
    buttonTextFr: 'Voir la galerie',
    buttonTextHt: 'Gade galeri a',
    buttonLink: '/gallery',
    order: 2,
    isActive: true
  },
  {
    imageUrl: '/assets/vlounge_rooftop_1754936302542 (1)_1754948240046.jpeg',
    titleEn: 'Exquisite Menu',
    titleFr: 'Menu Exquis',
    titleHt: 'Meni Egselè',
    subtitleEn: 'Savor exceptional culinary experiences',
    subtitleFr: 'Savourez des expériences culinaires exceptionnelles',
    subtitleHt: 'Gout ekspèyans kwizin eksèpsyonèl yo',
    buttonTextEn: 'View Menu',
    buttonTextFr: 'Voir le menu',
    buttonTextHt: 'Gade meni a',
    buttonLink: '/menu',
    order: 3,
    isActive: true
  }
];

export const existingGalleryData = [
  { imageUrl: '/assets/vlounge_rooftop_1754936167492_1754942008137.jpeg', category: 'rooftop', titleEn: 'Rooftop Evening View', titleFr: 'Vue du soir sur le toit', titleHt: 'Vi aswè sou tèt kay la', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936205223_1754948240046.jpeg', category: 'rooftop', titleEn: 'City Panorama', titleFr: 'Panorama de la ville', titleHt: 'Panorama vil la', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936302542 (1)_1754948240046.jpeg', category: 'interior', titleEn: 'Elegant Interior', titleFr: 'Intérieur élégant', titleHt: 'Enteryè elegant', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936413185_1754948240045.jpeg', category: 'cuisine', titleEn: 'Gourmet Dishes', titleFr: 'Plats gastronomiques', titleHt: 'Manje gourmet yo', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936429390_1754948240028.jpeg', category: 'events', titleEn: 'Event Atmosphere', titleFr: 'Ambiance événementielle', titleHt: 'Atmosfè evènman', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936435556_1754948240029.jpeg', category: 'cuisine', titleEn: 'Signature Cocktails', titleFr: 'Cocktails signature', titleHt: 'Cocktail sinatè yo', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936441929_1754948240030.jpeg', category: 'rooftop', titleEn: 'Sunset Views', titleFr: 'Vues du coucher de soleil', titleHt: 'Vi solèy ap kouche a', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936449739_1754948240031.jpeg', category: 'interior', titleEn: 'Lounge Area', titleFr: 'Espace salon', titleHt: 'Zòn salon an', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936453817_1754948240035.jpeg', category: 'events', titleEn: 'Live Entertainment', titleFr: 'Divertissement en direct', titleHt: 'Divertisman an dirèk', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936457936_1754948240038.jpeg', category: 'rooftop', titleEn: 'Night Ambiance', titleFr: 'Ambiance nocturne', titleHt: 'Atmosfè lannwit', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936476091_1754948240039.jpeg', category: 'cuisine', titleEn: 'Chef\'s Special', titleFr: 'Spécialité du chef', titleHt: 'Espesyalite chef la', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936479997_1754948240040.jpeg', category: 'interior', titleEn: 'Premium Seating', titleFr: 'Sièges premium', titleHt: 'Chèz premium yo', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936491487_1754948240041.jpeg', category: 'events', titleEn: 'Party Night', titleFr: 'Soirée festive', titleHt: 'Nwit fèt', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936503366_1754948240042.jpeg', category: 'rooftop', titleEn: 'Skyline Views', titleFr: 'Vues sur la ligne d\'horizon', titleHt: 'Vi sou la ligne horizon', isActive: true },
  { imageUrl: '/assets/vlounge_rooftop_1754936521995_1754948240043.jpeg', category: 'interior', titleEn: 'Sophisticated Dining', titleFr: 'Restauration sophistiquée', titleHt: 'Manje sofistike', isActive: true }
];

export const existingEventData = [
  {
    titleEn: 'EAT DRINK DANCE - BRUNCH PARTY',
    titleFr: 'EAT DRINK DANCE - BRUNCH PARTY',
    titleHt: 'EAT DRINK DANCE - BRUNCH PARTY',
    descriptionEn: 'Join us for an unforgettable brunch party experience with amazing music, delicious food, and breathtaking rooftop views.',
    descriptionFr: 'Rejoignez-nous pour une expérience brunch inoubliable avec une musique incroyable, une cuisine délicieuse et des vues époustouflantes sur le toit.',
    descriptionHt: 'Vin jwenn nou pou yon ekspèyans brunch inoubliab ak mizik gwo kalite, manje ki bon anpil, ak yon bèl vi sou tèt kay la.',
    eventDate: new Date('2025-08-24T12:00:00'),
    location: 'V Lounge & Rooftop, Pétion-Ville',
    ticketPrice: '15.00',
    ticketUrl: 'https://pamevent.com/event/eat-drink-dance-brunch-party/510',
    imageUrl: '/assets/vlounge_rooftop_1754936429390_1754948240028.jpeg',
    isActive: true,
    isFeatured: true
  }
];

export const existingMenuData = [
  // Appetizers
  { category: 'appetizers', nameEn: 'Acra', nameFr: 'Acra', nameHt: 'Akra', descriptionEn: 'Traditional Haitian fritters', descriptionFr: 'Beignets traditionnels haïtiens', descriptionHt: 'Akra tradisyonèl ayisyen', price: '6.00', imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', isActive: true, isFeatured: false },
  { category: 'appetizers', nameEn: 'Bang Bang Shrimp', nameFr: 'Crevettes Bang Bang', nameHt: 'Chevrèt Bang Bang', descriptionEn: 'Crispy shrimp with spicy mayo', descriptionFr: 'Crevettes croustillantes avec mayo épicée', descriptionHt: 'Chevrèt krokant ak mayo piman', price: '8.00', imageUrl: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg', isActive: true, isFeatured: true },
  { category: 'appetizers', nameEn: 'Brochette de Poulet', nameFr: 'Brochette de Poulet', nameHt: 'Brochette Poul', descriptionEn: 'Grilled chicken skewers with herbs', descriptionFr: 'Brochettes de poulet grillées aux herbes', descriptionHt: 'Brochette poul griye ak fèy', price: '8.00', imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', isActive: true, isFeatured: false },
  { category: 'appetizers', nameEn: 'Coques Plantain', nameFr: 'Coques Plantain', nameHt: 'Kok Banann', descriptionEn: 'Plantain cups with savory filling', descriptionFr: 'Coupes de banane plantain avec garniture savoureuse', descriptionHt: 'Kok banann ak ganitur gou', price: '8.00', imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', isActive: true, isFeatured: false },
  { category: 'appetizers', nameEn: 'Griot', nameFr: 'Griot', nameHt: 'Griot', descriptionEn: 'Traditional Haitian fried pork', descriptionFr: 'Porc frit traditionnel haïtien', descriptionHt: 'Kochon fri tradisyonèl ayisyen', price: '7.00', imageUrl: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg', isActive: true, isFeatured: true },
  
  // Mains
  { category: 'mains', nameEn: 'Steak Frites', nameFr: 'Steak Frites', nameHt: 'Steak ak Fri', descriptionEn: 'Grilled steak with french fries', descriptionFr: 'Steak grillé avec frites', descriptionHt: 'Steak griye ak fri', price: '25.00', imageUrl: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg', isActive: true, isFeatured: true },
  { category: 'mains', nameEn: 'Chicken Parmesan', nameFr: 'Poulet Parmesan', nameHt: 'Poul Parmesan', descriptionEn: 'Breaded chicken with parmesan', descriptionFr: 'Poulet pané au parmesan', descriptionHt: 'Poul ak parmesan', price: '22.00', imageUrl: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg', isActive: true, isFeatured: false },
  
  // Seafood
  { category: 'seafood', nameEn: 'Grilled Salmon', nameFr: 'Saumon Grillé', nameHt: 'Salmon Griye', descriptionEn: 'Fresh salmon with herbs', descriptionFr: 'Saumon frais aux herbes', descriptionHt: 'Salmon fre ak fèy', price: '28.00', imageUrl: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg', isActive: true, isFeatured: true },
  { category: 'seafood', nameEn: 'Lobster Tail', nameFr: 'Queue de Homard', nameHt: 'Ke Woma', descriptionEn: 'Butter-poached lobster tail', descriptionFr: 'Queue de homard pochée au beurre', descriptionHt: 'Ke woma nan mantèg', price: '35.00', imageUrl: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg', isActive: true, isFeatured: true },
  
  // Pizzas
  { category: 'pizzas', nameEn: 'Griot Pizza', nameFr: 'Pizza Griot', nameHt: 'Pizza Griot', descriptionEn: 'Traditional Haitian griot on pizza', descriptionFr: 'Griot haïtien traditionnel sur pizza', descriptionHt: 'Griot ayisyen tradisyonèl sou pizza', price: '15.00', imageUrl: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg', isActive: true, isFeatured: true },
  { category: 'pizzas', nameEn: 'Margarita', nameFr: 'Margarita', nameHt: 'Margarita', descriptionEn: 'Classic tomato, mozzarella, basil', descriptionFr: 'Classique tomate, mozzarella, basilic', descriptionHt: 'Klasik tomat, mozzarella, basilic', price: '12.00', imageUrl: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg', isActive: true, isFeatured: false },
  { category: 'pizzas', nameEn: 'Pepperoni', nameFr: 'Pepperoni', nameHt: 'Pepperoni', descriptionEn: 'Classic pepperoni pizza', descriptionFr: 'Pizza pepperoni classique', descriptionHt: 'Pizza pepperoni klasik', price: '13.00', imageUrl: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg', isActive: true, isFeatured: false },
  { category: 'pizzas', nameEn: 'Chicken Pizza', nameFr: 'Pizza Poulet', nameHt: 'Pizza Poul', descriptionEn: 'Grilled chicken with vegetables', descriptionFr: 'Poulet grillé avec légumes', descriptionHt: 'Poul griye ak legim', price: '14.00', imageUrl: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg', isActive: true, isFeatured: false },
  
  // Burgers
  { category: 'burgers', nameEn: 'V-Lounge Burger', nameFr: 'Burger V-Lounge', nameHt: 'Burger V-Lounge', descriptionEn: 'Our signature burger with special sauce', descriptionFr: 'Notre burger signature avec sauce spéciale', descriptionHt: 'Burger espesyal nou an ak sos espesyal', price: '16.00', imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', isActive: true, isFeatured: true },
  { category: 'burgers', nameEn: 'Bacon Cheeseburger', nameFr: 'Cheeseburger Bacon', nameHt: 'Cheeseburger ak Bacon', descriptionEn: 'Beef patty with bacon and cheese', descriptionFr: 'Galette de bœuf avec bacon et fromage', descriptionHt: 'Patty vyann ak bacon ak fromaj', price: '15.00', imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', isActive: true, isFeatured: false },
  
  // Wings
  { category: 'wings', nameEn: 'Buffalo Wings', nameFr: 'Ailes Buffalo', nameHt: 'Zèl Buffalo', descriptionEn: 'Spicy buffalo chicken wings', descriptionFr: 'Ailes de poulet buffalo épicées', descriptionHt: 'Zèl poul buffalo piman', price: '12.00', imageUrl: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg', isActive: true, isFeatured: true },
  { category: 'wings', nameEn: 'BBQ Wings', nameFr: 'Ailes BBQ', nameHt: 'Zèl BBQ', descriptionEn: 'Smoky BBQ chicken wings', descriptionFr: 'Ailes de poulet BBQ fumées', descriptionHt: 'Zèl poul BBQ ak lafimen', price: '12.00', imageUrl: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg', isActive: true, isFeatured: false },
  
  // Cocktails
  { category: 'cocktails', nameEn: 'V-Lounge Signature', nameFr: 'Signature V-Lounge', nameHt: 'Sinatè V-Lounge', descriptionEn: 'Our house special cocktail', descriptionFr: 'Notre cocktail spécial maison', descriptionHt: 'Cocktail espesyal kay nou an', price: '14.00', imageUrl: 'https://images.pexels.com/photos/1983847/pexels-photo-1983847.jpeg', isActive: true, isFeatured: true },
  { category: 'cocktails', nameEn: 'Mojito', nameFr: 'Mojito', nameHt: 'Mojito', descriptionEn: 'Classic Cuban cocktail', descriptionFr: 'Cocktail cubain classique', descriptionHt: 'Cocktail cuban klasik', price: '12.00', imageUrl: 'https://images.pexels.com/photos/1983847/pexels-photo-1983847.jpeg', isActive: true, isFeatured: false },
  { category: 'cocktails', nameEn: 'Pina Colada', nameFr: 'Pina Colada', nameHt: 'Pina Colada', descriptionEn: 'Tropical coconut and pineapple', descriptionFr: 'Coco et ananas tropical', descriptionHt: 'Kokoye ak ananas tropical', price: '13.00', imageUrl: 'https://images.pexels.com/photos/1983847/pexels-photo-1983847.jpeg', isActive: true, isFeatured: false },
  
  // Wines
  { category: 'wines', nameEn: 'Cabernet Sauvignon', nameFr: 'Cabernet Sauvignon', nameHt: 'Cabernet Sauvignon', descriptionEn: 'Full-bodied red wine', descriptionFr: 'Vin rouge corsé', descriptionHt: 'Vin wouj ki gen kò', price: '45.00', imageUrl: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg', isActive: true, isFeatured: true },
  { category: 'wines', nameEn: 'Chardonnay', nameFr: 'Chardonnay', nameHt: 'Chardonnay', descriptionEn: 'Crisp white wine', descriptionFr: 'Vin blanc sec', descriptionHt: 'Vin blan sèk', price: '40.00', imageUrl: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg', isActive: true, isFeatured: false },
  
  // Spirits
  { category: 'spirits', nameEn: 'Barbancourt Rum', nameFr: 'Rhum Barbancourt', nameHt: 'Rom Barbancourt', descriptionEn: 'Premium Haitian rum', descriptionFr: 'Rhum haïtien premium', descriptionHt: 'Rom ayisyen premyè kalite', price: '35.00', imageUrl: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg', isActive: true, isFeatured: true },
  { category: 'spirits', nameEn: 'Whiskey', nameFr: 'Whisky', nameHt: 'Whiskey', descriptionEn: 'Aged whiskey selection', descriptionFr: 'Sélection de whisky vieilli', descriptionHt: 'Seleksyon whiskey ki vye', price: '25.00', imageUrl: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg', isActive: true, isFeatured: false },
  
  // Desserts
  { category: 'desserts', nameEn: 'Chocolate Cake', nameFr: 'Gâteau au Chocolat', nameHt: 'Gato Chokola', descriptionEn: 'Rich chocolate layer cake', descriptionFr: 'Gâteau riche au chocolat en couches', descriptionHt: 'Gato chokola rich ak kouch', price: '8.00', imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg', isActive: true, isFeatured: true },
  { category: 'desserts', nameEn: 'Tiramisu', nameFr: 'Tiramisu', nameHt: 'Tiramisu', descriptionEn: 'Classic Italian dessert', descriptionFr: 'Dessert italien classique', descriptionHt: 'Dèsè italian klasik', price: '9.00', imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg', isActive: true, isFeatured: false },
  { category: 'desserts', nameEn: 'Ice Cream', nameFr: 'Glace', nameHt: 'Krèm Glase', descriptionEn: 'Artisanal ice cream selection', descriptionFr: 'Sélection de glaces artisanales', descriptionHt: 'Seleksyon krèm glase atizan', price: '8.00', imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg', isActive: true, isFeatured: false }
];

export const existingContactData = {
  addressEn: 'Pétion-Ville, Haiti',
  addressFr: 'Pétion-Ville, Haïti',
  addressHt: 'Pétion-Ville, Ayiti',
  phone: '+509 1234 5678',
  email: 'info@vloungerooftop.com',
  hoursEn: 'Tuesday - Sunday: 6:00 PM - 2:00 AM',
  hoursFr: 'Mardi - Dimanche: 18h00 - 02h00',
  hoursHt: 'Madi - Dimanch: 6:00 PM - 2:00 AM',
  socialLinks: {
    instagram: 'https://instagram.com/vloungerooftop',
    facebook: 'https://facebook.com/vloungerooftop',
    twitter: 'https://twitter.com/vloungerooftop'
  }
};

export async function synchronizeExistingContent(storage: IStorage) {
  console.log('Starting content synchronization...');
  
  try {
    // Synchronize slider data
    for (const slide of existingSliderData) {
      await storage.createSliderItem(slide);
    }
    console.log(`Synchronized ${existingSliderData.length} slider items`);

    // Synchronize gallery data
    for (const image of existingGalleryData) {
      await storage.createGalleryItem(image);
    }
    console.log(`Synchronized ${existingGalleryData.length} gallery items`);

    // Synchronize event data
    for (const event of existingEventData) {
      await storage.createEvent(event);
    }
    console.log(`Synchronized ${existingEventData.length} events`);

    // Synchronize menu data
    for (const item of existingMenuData) {
      await storage.createMenuItem(item);
    }
    console.log(`Synchronized ${existingMenuData.length} menu items`);

    // Synchronize contact data
    await storage.updateContactInfo(existingContactData);
    console.log('Synchronized contact information');

    console.log('Content synchronization completed successfully!');
    return { success: true, message: 'All existing content has been imported successfully' };
  } catch (error) {
    console.error('Error during content synchronization:', error);
    return { success: false, message: 'Failed to synchronize content', error };
  }
}