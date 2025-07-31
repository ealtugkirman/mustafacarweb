"use client";

import React from "react";
import { ContainerScroll, CardSticky } from "./cards-stack";
import { motion } from "motion/react";

const MEDICAL_SERVICES = [
  {
    id: "service-2", 
    title: "Rinoplasti",
    category: "Cerrahi İşlem",
    description: "Burun şeklini ve işlevini düzeltmek için yapılan cerrahi bir prosedürdür, estetik ve fonksiyonel iyileştirmeler sunar.",
    imageUrl: "https://drmustafaacar.com/wp-content/uploads/2023/11/burun-estetigi-rino-anasayfa.webp",
    features: ["Şekil Düzeltme", "İşlev İyileştirme", "Uzun Süreli Sonuç"]
  },
  {
    id: "service-3",
    title: "Tipplasti", 
    category: "Burun Ucu Estetiği",
    description: "Burun ucunun estetik olarak düzeltilmesi ameliyatıdır, burunun dengeli ve harmonik görünümünü sağlamak için yapılır.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center",
    features: ["Burun Ucu Şekillendirme", "Harmonik Görünüm", "Minimal İnvaziv"]
  },
  {
    id: "service-4",
    title: "Septoplasti",
    category: "Fonksiyonel Cerrahi", 
    description: "Burun içindeki septumu düzeltmek için yapılan cerrahi bir işlemdir, burun solunumunu ve işlevselliğini iyileştirir.",
    imageUrl: "https://drmustafaacar.com/wp-content/uploads/2023/11/burun-estetigi-septoplasti.webp",
    features: ["Nefes Alma İyileştirme", "Septum Düzeltme", "Yaşam Kalitesi Artışı"]
  },
  {
    id: "service-5",
    title: "Nazal Valve",
    category: "İleri Cerrahi",
    description: "Burun içindeki nazal valvleri düzelterek burun solunumu ve estetik görünümü iyileştiren bir prosedürdür.",
    imageUrl: "https://drmustafaacar.com/wp-content/uploads/2023/11/burun-estetigi-nazalwa.webp",
    features: ["Valv Düzeltme", "Solunumu İyileştirme", "Estetik + Fonksiyon"]
  }
];

const STATS = [
  {
    id: "stat-1",
    title: "5000+",
    description: "Başarılı Ameliyat",
    bg: "rgb(59,130,246)",
  },
  {
    id: "stat-2", 
    title: "%98",
    description: "Hasta Memnuniyeti",
    bg: "rgb(16,185,129)",
  },
  {
    id: "stat-3",
    title: "20+",
    description: "Yıl Deneyim", 
    bg: "rgb(139,92,246)",
  },
  {
    id: "stat-4",
    title: "24/7",
    description: "Destek Hizmeti",
    bg: "rgb(245,101,101)",
  },
];

export const Services = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Sticky Content */}
          <div className="left-0 top-0 lg:sticky lg:h-screen lg:py-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h5 className="text-xs uppercase tracking-wide text-blue-400 font-mono">
                Hizmetlerimiz
              </h5>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
                <span className="text-blue-400 font-medium">Uzman</span> KBB ve Estetik{" "}
                <span className="text-blue-400 font-medium">Cerrahi</span> Hizmetleri
              </h2>
              <p className="max-w-prose text-lg md:text-xl text-gray-300 leading-relaxed">
                Dr. Mustafa Acar ile burun estetiği, rinoplasti ve KBB alanında 20+ yıllık deneyimin 
                getirdiği güvenle modern teknoloji kullanarak size en iyi hizmeti sunuyoruz.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/40">
                  <div className="text-2xl font-bold text-blue-400">5000+</div>
                  <div className="text-sm text-gray-400">Başarılı Ameliyat</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/40">
                  <div className="text-2xl font-bold text-green-400">%98</div>
                  <div className="text-sm text-gray-400">Hasta Memnuniyeti</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                  Ücretsiz Konsültasyon
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling Cards */}
          <ContainerScroll className="min-h-[500vh] py-20">
            {MEDICAL_SERVICES.map((service, index) => (
              <CardSticky
                key={service.id}
                index={index}
                className="w-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-2xl shadow-black/20 hover:shadow-blue-500/10 transition-all duration-300"
                incrementY={80}
                incrementZ={5}
              >
                {/* Service Header */}
                <div className="p-6 lg:p-8 border-b border-gray-700/50">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                        {service.title}
                      </h2>
                      <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-base lg:text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    src={service.imageUrl}
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Overlay Button */}
                  <div className="absolute bottom-4 right-4">
                    <button className="px-4 py-2 bg-blue-600/90 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export const Stats = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4">
            Başarılarımızla <span className="text-blue-400 font-medium">Gurur Duyuyoruz</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Yılların deneyimi ve binlerce mutlu hastamızla elde ettiğimiz başarı rakamları
          </p>
        </motion.div>

        <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 text-center">
          {STATS.map((stat, index) => (
            <CardSticky
              key={stat.id}
              incrementY={30}
              index={index + 2}
              className="flex h-80 w-80 flex-col place-content-center justify-evenly rounded-2xl border border-gray-700/50 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm"
              style={{ 
                rotate: `${(index + 2) * 2}deg`, 
                background: stat.bg,
                backgroundImage: `linear-gradient(135deg, ${stat.bg}, ${stat.bg}88)`
              }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white opacity-90">
                {stat.title}
              </h1>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold capitalize tracking-tight text-white/90">
                  {stat.description}
                </h3>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </section>
  );
};

export { Services as default }; 