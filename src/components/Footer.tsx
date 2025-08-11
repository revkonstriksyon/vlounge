import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                className="transform"
              >
                <path
                  d="M20 20 L80 20 L50 60 L50 85 M35 85 L65 85"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
                <defs>
                  <linearGradient id="vGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F97316', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <polygon
                  points="25,25 75,25 50,55"
                  fill="url(#vGradientFooter)"
                />
              </svg>
              <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                V Lounge & Rooftop
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience luxury dining and entertainment with breathtaking views in the heart of Pétion-Ville. 
              Where sophistication meets the skyline.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/vloungeht"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/vloungeht"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform duration-200"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-400" />
                <span>Pétion-Ville, Haiti</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-400" />
                <span>+509 XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-400" />
                <span>info@vlounge.ht</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-yellow-400" />
                <div>
                  <div>Tue - Sun</div>
                  <div>6:00 PM - 2:00 AM</div>
                </div>
              </div>
              <div className="text-xs">
                Closed Mondays
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 V Lounge & Rooftop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;