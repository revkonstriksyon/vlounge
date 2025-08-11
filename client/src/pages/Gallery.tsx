import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'rooftop', name: 'Rooftop Views' },
    { id: 'food', name: 'Cuisine' },
    { id: 'events', name: 'Events' },
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
      alt: 'Rooftop dining area with city views',
      category: 'rooftop',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
      alt: 'Elegant interior lounge seating',
      category: 'interior',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg',
      alt: 'Signature cocktails and appetizers',
      category: 'food',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      alt: 'Live jazz performance',
      category: 'events',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg',
      alt: 'Grilled shrimp presentation',
      category: 'food',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      alt: 'Modern bar area',
      category: 'interior',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg',
      alt: 'Rooftop terrace at sunset',
      category: 'rooftop',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg',
      alt: 'Premium wagyu beef dish',
      category: 'food',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      alt: 'Salsa dancing event',
      category: 'events',
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1283566/pexels-photo-1283566.jpeg',
      alt: 'Signature martini collection',
      category: 'food',
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg',
      alt: 'Wine tasting setup',
      category: 'events',
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      alt: 'New Year celebration',
      category: 'events',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % filteredImages.length
      : (selectedImage - 1 + filteredImages.length) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {t('gallery.title')}
          </h1>
          <p className="text-gray-400 text-lg">
            Discover the elegance and sophistication of V Lounge & Rooftop
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                  : 'border border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium mb-2">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="text-sm text-gray-400">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;