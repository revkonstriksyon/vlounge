import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Menu: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: t('menu.appetizers') },
    { id: 'mains', name: t('menu.mains') },
    { id: 'cocktails', name: t('menu.cocktails') },
    { id: 'desserts', name: t('menu.desserts') },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Grilled Shrimp Skewers',
        description: 'Fresh shrimp with citrus marinade and herbs',
        price: '$18',
        image: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg',
        featured: true,
        rating: 4.9
      },
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with truffle oil and parmesan',
        price: '$16',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false,
        rating: 4.7
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh yellowfin tuna with avocado and sesame',
        price: '$22',
        image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
        featured: true,
        rating: 4.8
      },
    ],
    mains: [
      {
        name: 'Grilled Lobster Tail',
        description: 'Caribbean lobster with garlic butter and herbs',
        price: '$45',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: true,
        rating: 4.9
      },
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Premium cut with roasted vegetables',
        price: '$65',
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
        featured: true,
        rating: 5.0
      },
      {
        name: 'Pan-Seared Mahi Mahi',
        description: 'Local fish with coconut rice and plantain',
        price: '$32',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false,
        rating: 4.6
      },
    ],
    cocktails: [
      {
        name: 'V Signature Martini',
        description: 'Premium vodka, dry vermouth, olive tapenade',
        price: '$16',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true,
        rating: 4.8
      },
      {
        name: 'Tropical Sunset',
        description: 'Rum, passion fruit, lime, and grenadine',
        price: '$14',
        image: 'https://images.pexels.com/photos/1097141/pexels-photo-1097141.jpeg',
        featured: false,
        rating: 4.5
      },
      {
        name: 'Smoky Old Fashioned',
        description: 'Bourbon, smoked maple syrup, bitters',
        price: '$18',
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg',
        featured: true,
        rating: 4.7
      },
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Warm chocolate soufflé with vanilla ice cream',
        price: '$12',
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        featured: true,
        rating: 4.9
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar',
        price: '$10',
        image: 'https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg',
        featured: false,
        rating: 4.6
      },
      {
        name: 'Tropical Fruit Tart',
        description: 'Fresh seasonal fruits with pastry cream',
        price: '$11',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
        featured: false,
        rating: 4.4
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg-primary py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="container-fluid relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in-up">
            {t('menu.title')}
          </h1>
          <p className="text-secondary text-xl font-light animate-fade-in-up delay-200 max-w-3xl mx-auto text-balance">
            Exquisite cuisine crafted with the finest ingredients
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover-lift ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-gold to-primary-orange text-black shadow-2xl'
                  : 'glass text-white hover:text-gradient hover:border-primary-gold/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className={`card-premium overflow-hidden hover-lift animate-fade-in-up delay-${100 + index * 100} group relative`}
            >
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-primary-gold to-primary-orange text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Star size={12} fill="currentColor" />
                    <span>Featured</span>
                  </div>
                </div>
              )}
              
              <div className="relative aspect-video overflow-hidden image-overlay">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="glass text-white px-4 py-2 rounded-full font-semibold text-lg backdrop-blur-md">
                    {item.price}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-display font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-primary-gold fill-current" />
                    <span className="text-sm text-secondary font-medium">{item.rating}</span>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-4 text-balance">
                  {item.description}
                </p>
                <button className="w-full btn-secondary text-sm py-3 group-hover:border-primary-gold/50 transition-all duration-300">
                  <span className="flex items-center justify-center space-x-2">
                    <Heart size={16} />
                    <span>Add to Favorites</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chef's Recommendations */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
              Chef's Recommendations
            </h2>
            <p className="text-secondary text-lg font-light animate-fade-in-up delay-200 max-w-2xl mx-auto">
              Handpicked selections from our executive chef
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="card-premium hover-lift animate-fade-in-up delay-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center">
                  <Star size={24} className="text-black fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                    Tasting Menu
                  </h3>
                  <p className="text-muted">7-course culinary journey</p>
                </div>
              </div>
              <p className="text-secondary leading-relaxed mb-4">
                Experience our chef's creativity with a carefully curated selection of our finest dishes, perfectly paired with premium wines.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient">$95</span>
                <button className="btn-primary px-6 py-2 text-sm">Reserve</button>
              </div>
            </div>
            
            <div className="card-premium hover-lift animate-fade-in-up delay-400 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-black fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                    Romantic Dinner
                  </h3>
                  <p className="text-muted">For two, with champagne</p>
                </div>
              </div>
              <p className="text-secondary leading-relaxed mb-4">
                An intimate dining experience featuring our signature dishes, premium champagne, and a private table with stunning city views.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient">$180</span>
                <button className="btn-primary px-6 py-2 text-sm">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto animate-fade-in-up delay-500">
            <h3 className="font-display text-3xl font-bold text-white mb-6">
              Ready to Experience V Lounge?
            </h3>
            <p className="text-secondary mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Make a reservation and enjoy our exquisite menu with breathtaking views of Pétion-Ville
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover-lift px-10 py-4 text-lg">
                Make a Reservation
              </button>
              <button className="btn-secondary hover-lift px-10 py-4 text-lg">
                View Wine List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;