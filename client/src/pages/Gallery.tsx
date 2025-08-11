import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Filter, Camera } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

// Import our V Lounge images
import image1 from '@assets/vlounge_rooftop_1754936167492_1754942008137.jpeg';
import image2 from '@assets/vlounge_rooftop_1754936429390_1754948240028.jpeg';
import image3 from '@assets/vlounge_rooftop_1754936435556_1754948240029.jpeg';
import image4 from '@assets/vlounge_rooftop_1754936441929_1754948240030.jpeg';
import image5 from '@assets/vlounge_rooftop_1754936449739_1754948240031.jpeg';
import image6 from '@assets/vlounge_rooftop_1754936453817_1754948240035.jpeg';
import image7 from '@assets/vlounge_rooftop_1754936457936_1754948240038.jpeg';
import image8 from '@assets/vlounge_rooftop_1754936476091_1754948240039.jpeg';
import image9 from '@assets/vlounge_rooftop_1754936479997_1754948240040.jpeg';
import image10 from '@assets/vlounge_rooftop_1754936491487_1754948240041.jpeg';
import image11 from '@assets/vlounge_rooftop_1754936503366_1754948240042.jpeg';
import image12 from '@assets/vlounge_rooftop_1754936521995_1754948240043.jpeg';
import image13 from '@assets/vlounge_rooftop_1754936413185_1754948240045.jpeg';
import image14 from '@assets/vlounge_rooftop_1754936302542 (1)_1754948240046.jpeg';
import image15 from '@assets/vlounge_rooftop_1754936205223_1754948240046.jpeg';

type GalleryCategory = 'all' | 'interior' | 'rooftop' | 'cuisine' | 'events';

interface GalleryImage {
  src: string;
  category: GalleryCategory;
  title: string;
}

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');

  const galleryImages: GalleryImage[] = [
    { src: image1, category: 'rooftop', title: 'Rooftop Evening View' },
    { src: image2, category: 'rooftop', title: 'City Panorama' },
    { src: image3, category: 'interior', title: 'Elegant Interior' },
    { src: image4, category: 'cuisine', title: 'Gourmet Dishes' },
    { src: image5, category: 'events', title: 'Event Atmosphere' },
    { src: image6, category: 'cuisine', title: 'Signature Cocktails' },
    { src: image7, category: 'rooftop', title: 'Sunset Views' },
    { src: image8, category: 'interior', title: 'Lounge Area' },
    { src: image9, category: 'events', title: 'Live Entertainment' },
    { src: image10, category: 'rooftop', title: 'Night Ambiance' },
    { src: image11, category: 'cuisine', title: 'Chef\'s Special' },
    { src: image12, category: 'interior', title: 'Premium Seating' },
    { src: image13, category: 'events', title: 'Party Night' },
    { src: image14, category: 'rooftop', title: 'Skyline Views' },
    { src: image15, category: 'interior', title: 'Sophisticated Dining' }
  ];

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: t('gallery.filter.all') },
    { key: 'interior', label: t('gallery.filter.interior') },
    { key: 'rooftop', label: t('gallery.filter.rooftop') },
    { key: 'cuisine', label: t('gallery.filter.cuisine') },
    { key: 'events', label: t('gallery.filter.events') }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 py-20">
        {/* Header Section with Parallax */}
        <ParallaxSection speed={0.3}>
          <section className="py-20 text-center">
            <div className="container mx-auto px-4">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Camera size={24} className="text-primary-gold animate-pulse" />
                <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">
                  Visual Experience
                </span>
                <Camera size={24} className="text-primary-gold animate-pulse" />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient mb-6 animate-fade-in-up">
                {t('gallery.title')}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                {t('gallery.subtitle')}
              </p>
            </div>
          </section>
        </ParallaxSection>

        {/* Filter Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    activeFilter === category.key
                      ? 'bg-gradient-to-r from-primary-gold to-primary-orange text-black shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Filter size={16} />
                    <span>{category.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 transform translateY-4 group-hover:translateY-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {image.title}
                    </h3>
                  </div>

                  {/* Hover Effect Ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
              />
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;