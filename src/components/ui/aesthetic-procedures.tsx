"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { Syringe, Heart, Sparkles, Zap, Wand2, Users, Star, Clock } from 'lucide-react';

const AESTHETIC_PROCEDURES = [
  {
    title: "Dudak Dolgusu",
    icon: Heart,
    description: "Dudakları dolgunlaştırma işlemidir. Doğal ve estetik sonuçlar için güvenli malzemeler kullanılır."
  },
  {
    title: "Burun Dolgusu",
    icon: Syringe,
    description: "Burun şeklini düzeltme işlemidir. Cerrahi olmayan yöntemlerle burun konturunu iyileştirme."
  },
  {
    title: "Çene Ucu Dolgusu",
    icon: Star,
    description: "Çene ucunu vurgulama yöntemidir. Yüz hatlarının daha belirgin ve estetik görünmesini sağlar."
  },
  {
    title: "Jawline",
    icon: Wand2,
    description: "Çene hattını belirginleştirme işlemidir. Güçlü ve net çene hatları için profesyonel dolgu uygulaması."
  },
  {
    title: "Gençlik Aşısı Jalupro",
    icon: Sparkles,
    description: "Jalupro: Gençlik aşısı ve cilt yenileme. Cildin doğal kollagen üretimini artıran etkili tedavi."
  },
  {
    title: "Harmonyca",
    icon: Users,
    description: "Harmonyca: Gençlik ve cilt bakımı. Uzun süreli etki sağlayan hibrit dolgu teknolojisi."
  },
  {
    title: "Altın İğne",
    icon: Zap,
    description: "Altın iğne: Cilt yenileme işlemi. Ciltte sıkılaştırma ve gençleştirme etkisi yaratan mikroiğne tedavisi."
  },
  {
    title: "Kırışıklık Tedavisi",
    icon: Clock,
    description: "Gençlik sağlama işlemidir. Botoks ve dolgu kombinasyonu ile kırışıklıkları minimize etme."
  }
];

export const AestheticProcedures = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight mb-6">
              <span className="text-pink-400 font-medium">Ameliyatsız</span> Estetik İşlemleri
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ameliyatsız estetik işlemleri, cilt ve yüz görünümünü geliştirmenin cerrahi olmayan yollarını sunar
            </p>
          </motion.div>

          {/* Main Integrated Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/40 shadow-2xl shadow-black/40"
          >
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Left Side - Doctor Image & Info */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border border-gray-600/50 shadow-2xl shadow-black/60">
                      <img 
                        src="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yuz-profili.webp"
                        alt="Dr. Mustafa Acar - Estetik İşlemler"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-2">Dr. Mustafa Acar</h3>
                  <p className="text-pink-400 font-medium text-lg mb-8">Estetik İşlemler Uzmanı</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-700/30 border border-gray-600/30">
                      <span className="text-gray-300 text-sm">Deneyim</span>
                      <span className="text-white font-semibold">20+ Yıl</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-700/30 border border-gray-600/30">
                      <span className="text-gray-300 text-sm">Başarılı İşlem</span>
                      <span className="text-white font-semibold">5000+</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-700/30 border border-gray-600/30">
                      <span className="text-gray-300 text-sm">Memnuniyet</span>
                      <span className="text-white font-semibold">%98</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Procedures Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {AESTHETIC_PROCEDURES.map((procedure, index) => (
                    <motion.div
                      key={procedure.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="group p-6 rounded-xl bg-gray-700/20 border border-gray-600/30 hover:border-pink-400/50 hover:bg-gray-700/40 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-medium uppercase tracking-wider mb-3">
                            {procedure.category}
                          </span>
                          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                            {procedure.title}
                          </h4>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {procedure.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Integrated CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-8"
                >
                  <div className="p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20 text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">Size Özel Konsültasyon</h4>
                    <p className="text-gray-300 text-sm mb-4">En uygun tedavi planını birlikte belirleyelim</p>
                    <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-semibold text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105">
                      Ücretsiz Konsültasyon Al
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Tüm işlemler, modern teknikler ve güvenli malzemeler kullanılarak, 
              doğal sonuçlar elde etmek amacıyla gerçekleştirilir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AestheticProcedures; 