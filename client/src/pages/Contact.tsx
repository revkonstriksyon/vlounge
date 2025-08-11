import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Star, Calendar, Users, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ParallaxSection from '../components/ParallaxSection';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert(t('contact.success'));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      label: t('contact.address'),
      value: 'Pétion-Ville, Haiti',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+509 1234 5678',
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'info@vlounge.ht',
    },
    {
      icon: <Clock size={24} />,
      label: t('contact.hours'),
      value: t('contact.daily'),
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        </div>
        
        <ParallaxSection speed={0.3}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 text-gradient animate-fade-in-up">
                {t('contact.title')}
              </h1>
              <p className="text-xl md:text-2xl text-enhanced leading-relaxed font-medium animate-fade-in-up delay-200 text-balance">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Reservation Form */}
            <div className="animate-fade-in-up">
              <div className="card-premium">
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold text-bright mb-4">
                    {t('contact.reserve')}
                  </h2>
                  <p className="text-enhanced font-medium">
                    Fill out the form below and we'll confirm your reservation within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        {t('contact.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="+509 xxxx xxxx"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="guests" className="form-label">
                        {t('contact.guests')}
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="date" className="form-label">
                        {t('contact.date')}
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="time" className="form-label">
                        {t('contact.time')}
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select time</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Any special requests or dietary requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                          <span>{t('contact.submit')}</span>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up delay-300">
              
              {/* Location Info */}
              <div className="card-premium">
                <h3 className="font-display text-2xl font-bold text-bright mb-6">
                  {t('contact.location.title')}
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-gold to-primary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="text-black">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-enhanced font-semibold mb-1">{item.label}</p>
                        <p className="text-bright font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating & Reviews */}
              <div className="card-premium">
                <h3 className="font-display text-2xl font-bold text-bright mb-6">
                  Why Choose V Lounge?
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={24} 
                            className="text-primary-gold fill-current animate-pulse" 
                            style={{ animationDelay: `${i * 0.1}s` }} 
                          />
                        ))}
                      </div>
                      <span className="text-3xl font-bold text-gradient">4.9</span>
                    </div>
                    <p className="text-enhanced font-medium">Based on 1,200+ reviews</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-primary-gold/20">
                      <div className="text-2xl font-bold text-gradient mb-1">50K+</div>
                      <div className="text-enhanced text-sm font-medium">Happy Guests</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-primary-gold/20">
                      <div className="text-2xl font-bold text-gradient mb-1">200+</div>
                      <div className="text-enhanced text-sm font-medium">Events Hosted</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-primary-gold/20">
                      <div className="text-2xl font-bold text-gradient mb-1">5+</div>
                      <div className="text-enhanced text-sm font-medium">Years Excellence</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Features */}
              <div className="card-premium">
                <h3 className="font-display text-2xl font-bold text-bright mb-6">
                  Premium Experience
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Rooftop dining with panoramic city views',
                    'Live DJ entertainment and events',
                    'Premium cocktails and fine dining',
                    'VIP reservations and private events',
                    'Professional service and luxury ambiance'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-gold rounded-full animate-pulse" />
                      <p className="text-enhanced font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;