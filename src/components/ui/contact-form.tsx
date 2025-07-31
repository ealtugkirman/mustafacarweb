"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const SERVICE_OPTIONS = [
  "Burun Estetiği",
  "Rinoplasti", 
  "Tipplasti",
  "Septoplasti",
  "Nazal Valve",
  "Genel KBB Muayenesi",
  "Diğer"
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    service: "Burun Estetiği"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        city: "",
        phone: "",
        service: "Burun Estetiği"
      });
    }, 3000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium uppercase tracking-wider backdrop-blur-sm mb-6">
              💬 İletişim
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight mb-6">
              <span className="text-blue-400 font-medium">Detaylı Bilgi</span> İçin
              <br />
              İletişime Geçin
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Size en uygun tedavi seçeneklerini belirlemek için ücretsiz konsültasyon randevusu alın
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl"></div>
            
            <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/40 shadow-2xl shadow-black/40">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Adınızı ve soyadınızı girin"
                      />
                    </motion.div>

                    {/* City Field */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Yaşadığınız Şehir
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Hangi şehirde yaşıyorsunuz?"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Phone Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="05xx xxx xx xx"
                      />
                    </motion.div>

                    {/* Service Selection */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-xl bg-gray-800/50 border border-gray-600/50 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-gray-800 text-white">
                            {option}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="pt-4"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          📞 Bilgi İste
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Talebiniz Başarıyla Alındı!
                  </h3>
                  <p className="text-gray-300 text-lg">
                    En kısa sürede size dönüş yapacağız. Teşekkür ederiz!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Telefon</h4>
              <p className="text-gray-300">+90 (xxx) xxx xx xx</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">E-posta</h4>
              <p className="text-gray-300">info@drmustafaacar.com</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Adres</h4>
              <p className="text-gray-300">İstanbul, Türkiye</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 