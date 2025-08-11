import React, { useState } from 'react';
import { Star, Heart, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Menu: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: t('menu.appetizers') },
    { id: 'mains', name: t('menu.mains') },
    { id: 'seafood', name: t('menu.seafood') },
    { id: 'pizzas', name: t('menu.pizzas') },
    { id: 'burgers', name: t('menu.burgers') },
    { id: 'wings', name: t('menu.wings') },
    { id: 'cocktails', name: t('menu.cocktails') },
    { id: 'wines', name: t('menu.wines') },
    { id: 'spirits', name: t('menu.spirits') },
    { id: 'desserts', name: t('menu.desserts') },
  ];

  const menuItems = {
    appetizers: [
      {
        name: t('menu.items.acra'),
        nameEn: 'Acra',
        price: '$6',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.bangBangShrimp'),
        nameEn: 'Bang Bang Shrimp',
        price: '$8',
        image: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg',
        featured: true
      },
      {
        name: t('menu.items.chickenSkewer'),
        nameEn: 'Brochette de Poulet',
        description: t('menu.descriptions.chickenSkewer'),
        price: '$8',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.plantainCups'),
        nameEn: 'Coques Plantain',
        price: '$8',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.griot'),
        nameEn: 'Griot',
        price: '$7',
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
        featured: true
      },
      {
        name: t('menu.items.chicken'),
        nameEn: 'Chicken',
        price: '$7',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.shrimp'),
        nameEn: 'Shrimp',
        price: '$9',
        image: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg',
        featured: false
      },
      {
        name: t('menu.items.grilledShrimp'),
        nameEn: 'Juicy Grilled Shrimp',
        description: t('menu.descriptions.grilledShrimp'),
        price: '$9',
        image: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg',
        featured: true
      },
      {
        name: t('menu.items.empanadas'),
        nameEn: 'V-Empanadas',
        price: '$8',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      }
    ],
    mains: [
      {
        name: t('menu.items.beefFilet'),
        nameEn: 'Beef Filet',
        description: t('menu.descriptions.beefFilet'),
        price: '$25',
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
        featured: true
      },
      {
        name: t('menu.items.grilledGoat'),
        nameEn: 'Grilled Goat',
        description: t('menu.descriptions.grilledGoat'),
        price: '$20',
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
        featured: true
      },
      {
        name: t('menu.items.grilledChicken'),
        nameEn: 'Grilled Chicken',
        description: t('menu.descriptions.grilledChicken'),
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.pork'),
        nameEn: 'Pork',
        description: t('menu.descriptions.pork'),
        price: '$22',
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
        featured: true
      },
      {
        name: t('menu.items.steak'),
        nameEn: 'Steak',
        description: t('menu.descriptions.steak'),
        price: '$25',
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
        featured: true
      },
      {
        name: t('menu.items.cesarSalad'),
        nameEn: 'César Salad',
        price: '$16',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.tunaTartare'),
        nameEn: 'Tuna Tartare',
        price: '$17',
        image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
        featured: true
      },
      {
        name: t('menu.items.vLoungeSalad'),
        nameEn: 'V Lounge Salad',
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.fettuccini'),
        nameEn: 'Fettuccini',
        description: t('menu.descriptions.fettuccini'),
        price: '$14',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      }
    ],
    seafood: [
      {
        name: t('menu.items.fish34'),
        nameEn: 'Fish 3/4 LB',
        description: t('menu.descriptions.fish34'),
        price: '$25',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: true
      },
      {
        name: t('menu.items.fish1lb'),
        nameEn: 'Fish 1 LB',
        description: t('menu.descriptions.fish1lb'),
        price: '$35',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: true
      },
      {
        name: t('menu.items.fishFilet'),
        nameEn: 'Fish Filet',
        description: t('menu.descriptions.fishFilet'),
        price: '$20',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: false
      },
      {
        name: t('menu.items.grilledOctopus'),
        nameEn: 'Grilled Octopus',
        description: t('menu.descriptions.grilledOctopus'),
        price: '$18',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: false
      },
      {
        name: t('menu.items.lobster'),
        nameEn: 'Homard (Lobster)',
        description: t('menu.descriptions.lobster'),
        price: '$30',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: true
      },
      {
        name: t('menu.items.salmon'),
        nameEn: 'Salmon',
        description: t('menu.descriptions.salmon'),
        price: '$30',
        image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
        featured: true
      },
      {
        name: t('menu.items.shrimpMain'),
        nameEn: 'Shrimp',
        description: t('menu.descriptions.shrimpMain'),
        price: '$25',
        image: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg',
        featured: true
      }
    ],
    pizzas: [
      {
        name: t('menu.items.griotPizza'),
        nameEn: 'Griot Pizza',
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      },
      {
        name: t('menu.items.margaritaPizza'),
        nameEn: 'Margarita Pizza',
        price: '$12',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.pepperoniPizza'),
        nameEn: 'Pepperoni Pizza',
        price: '$13',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.chickenPizza'),
        nameEn: 'Poulet Pizza',
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.vPizza'),
        nameEn: 'V Pizza',
        price: '$16',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      }
    ],
    burgers: [
      {
        name: t('menu.items.vBurger'),
        nameEn: 'V Burger',
        description: t('menu.descriptions.vBurger'),
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      }
    ],
    wings: [
      {
        name: t('menu.items.wings6'),
        nameEn: '6 Wings',
        price: '$8',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.wings12'),
        nameEn: '12 Wings',
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.wings30'),
        nameEn: '30 Wings',
        price: '$30',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      },
      {
        name: t('menu.items.wings50'),
        nameEn: '50 Wings',
        price: '$50',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      },
      {
        name: t('menu.items.specialWings12'),
        nameEn: 'Special Wings (12)',
        description: t('menu.descriptions.specialWings'),
        price: '$15',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: false
      },
      {
        name: t('menu.items.specialWings30'),
        nameEn: 'Special Wings (30)',
        description: t('menu.descriptions.specialWings'),
        price: '$20',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      },
      {
        name: t('menu.items.specialWings50'),
        nameEn: 'Special Wings (50)',
        description: t('menu.descriptions.specialWings'),
        price: '$35',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        featured: true
      }
    ],
    cocktails: [
      {
        name: t('menu.items.amarettoSour'),
        nameEn: 'Amaretto Sour',
        description: t('menu.descriptions.amarettoSour'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.blueKamikaz'),
        nameEn: 'Blue Kamikaz',
        description: t('menu.descriptions.blueKamikaz'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.chillIt'),
        nameEn: 'Chill It',
        description: t('menu.descriptions.chillIt'),
        price: '$12',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.dryMartini'),
        nameEn: 'Dry Martini',
        description: t('menu.descriptions.dryMartini'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.espressoMartini'),
        nameEn: 'Espresso Martini',
        description: t('menu.descriptions.espressoMartini'),
        price: '$12',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.gingerBreeze'),
        nameEn: 'Ginger Breeze',
        description: t('menu.descriptions.gingerBreeze'),
        price: '$12',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.ginBasil'),
        nameEn: 'Gin Basil',
        description: t('menu.descriptions.ginBasil'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.margarita'),
        nameEn: 'Margarita',
        description: t('menu.descriptions.margarita'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.mojito'),
        nameEn: 'Mojito',
        description: t('menu.descriptions.mojito'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.pinaColada'),
        nameEn: 'Piña Colada',
        description: t('menu.descriptions.pinaColada'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.vPunch'),
        nameEn: 'V Punch',
        description: t('menu.descriptions.vPunch'),
        price: '$10',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      }
    ],
    wines: [
      {
        name: t('menu.items.rouge'),
        nameEn: 'Rouge (Red Wine)',
        price: '$9',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.blanc'),
        nameEn: 'Blanc (White Wine)',
        price: '$8',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.rose'),
        nameEn: 'Rosé',
        price: '$8',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.mousseux'),
        nameEn: 'Mousseux (Sparkling)',
        price: '$8',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.laFinca'),
        nameEn: 'La Finca',
        price: '$50',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.moetRose'),
        nameEn: 'Moët et Chandon Rosé',
        price: '$150',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      }
    ],
    spirits: [
      {
        name: t('menu.items.prestige'),
        nameEn: 'Prestige Beer',
        price: '$3',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.barbancourt3'),
        nameEn: 'Barbancourt 3*',
        price: '$5/$35',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: false
      },
      {
        name: t('menu.items.barbancourt5'),
        nameEn: 'Barbancourt 5*',
        price: '$10/$50',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.jackDaniels'),
        nameEn: "Jack Daniel's",
        price: '$10/$100',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.johnnieBlue'),
        nameEn: 'Johnnie Walker Blue Label',
        price: '$30/$100',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.hennesyVSOP'),
        nameEn: 'Hennessy VSOP',
        price: '$20/$200',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      },
      {
        name: t('menu.items.patronSilver'),
        nameEn: 'Patrón Silver',
        price: '$9/$90',
        image: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
        featured: true
      }
    ],
    desserts: [
      {
        name: t('menu.items.brownies'),
        nameEn: 'Brownies à la Mode',
        price: '$7',
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        featured: true
      },
      {
        name: t('menu.items.friedOreo'),
        nameEn: 'Fried Oreo',
        price: '$7',
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        featured: false
      },
      {
        name: t('menu.items.iceCream'),
        nameEn: 'Ice Cream',
        price: '$8',
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        featured: false
      }
    ],
  };

  const currentItems = menuItems[activeCategory] || [];

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
          {currentItems.map((item, index) => (
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
                  {item.featured && (
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-primary-gold fill-current" />
                      <span className="text-sm text-secondary font-medium">Featured</span>
                    </div>
                  )}
                </div>
                {item.description && (
                  <p className="text-muted leading-relaxed mb-4 text-balance">
                    {item.description}
                  </p>
                )}
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

        {/* Service Note */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <Info size={16} className="text-yellow-400" />
            <span className="text-sm font-medium text-secondary">
              {t('menu.serviceNote')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;