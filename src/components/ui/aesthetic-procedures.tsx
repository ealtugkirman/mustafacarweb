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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)] py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <AnimatedContainer className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/20 text-pink-400 text-sm font-medium uppercase tracking-wider backdrop-blur-sm mb-8">
              💫 Estetik İşlemler
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight mb-6">
              <span className="text-pink-400 font-medium">Ameliyatsız</span> Estetik İşlemleri
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 rounded-full mx-auto mb-8"></div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ameliyatsız estetik işlemleri, cilt ve yüz görünümünü geliştirmenin cerrahi olmayan yollarını sunar
            </p>
          </AnimatedContainer>

          {/* Doctor Info Section */}
          <AnimatedContainer delay={0.2} className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/40 shadow-2xl shadow-black/40">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border border-gray-600/50 shadow-2xl shadow-black/60">
                  <img 
                    src="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yuz-profili.webp"
                    alt="Dr. Mustafa Acar - Estetik İşlemler"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-2">Dr. Mustafa Acar</h3>
                  <p className="text-pink-400 font-medium text-lg mb-4">Estetik İşlemler Uzmanı</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300">20+ Yıl Deneyim</span>
                    <span className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300">5000+ Başarılı İşlem</span>
                    <span className="px-3 py-1 bg-gray-700/50 rounded-lg text-sm text-gray-300">%98 Memnuniyet</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Procedures Grid */}
          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-gray-600/30 sm:grid-cols-2 lg:grid-cols-4"
          >
            {AESTHETIC_PROCEDURES.map((procedure, i) => (
              <FeatureCard 
                key={i} 
                feature={procedure}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 text-white border-gray-600/30"
              />
            ))}
          </AnimatedContainer>

          {/* CTA Section */}
          <AnimatedContainer delay={0.6} className="text-center">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20 backdrop-blur-sm">
              <h4 className="text-2xl font-semibold text-white mb-4">Size Özel Konsültasyon</h4>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                En uygun tedavi planını birlikte belirleyelim. Tüm işlemler modern teknikler ve güvenli malzemeler kullanılarak gerçekleştirilir.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-semibold text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Ücretsiz Konsültasyon Al
              </motion.button>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AestheticProcedures; 