"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShimmerButton } from "./shimmer-button";
import { Timeline } from "./timeline";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

export function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const photoInView = useInView(photoRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    // Mouse gradient effect
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gradient.style.left = x - 192 + "px";
        gradient.style.top = y - 192 + "px";
        gradient.style.opacity = "0.4";
      }
    }
    
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", onMouseMove);
      section.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", onMouseMove);
        section.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  // Animation variants - simplified
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const timelineData = [
    {
      title: "1978",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            <strong className="text-blue-400">Doğum - Fethiye</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            1978 yılında Fethiye'de dünyaya geldi. Çocukluk yıllarından itibaren tıp alanına ilgi duydu ve bu hedef doğrultusunda çalışmalarını sürdürdü.
          </p>
        </motion.div>
      ),
    },
    {
      title: "2001",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            <strong className="text-blue-400">Tıp Fakültesi Mezunu - Ankara Üniversitesi</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Ankara Üniversitesi Tıp Fakültesi'nden başarıyla mezun oldu. Üniversite yıllarında akademik başarısıyla dikkat çekti ve uzmanlık alanına yöneldi.
          </p>
        </motion.div>
      ),
    },
    {
      title: "2006",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            <strong className="text-blue-400">KBB Uzmanlığı - Ankara Numune Eğitim ve Araştırma Hastanesi</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
            Kulak Burun Boğaz Hastalıkları alanında uzmanlık eğitimini tamamladı. Bu dönemde rinoplasti ve estetik cerrahiye özel ilgi duydu.
          </p>
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              "KBB Hastalıkları Uzmanlığı",
              "Rinoplasti Eğitimi", 
              "Estetik Cerrahi Deneyimi"
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex gap-3 items-center text-neutral-300 text-sm md:text-base group cursor-default"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                />
                <span className="group-hover:text-blue-300 transition-colors duration-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "2018",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            <strong className="text-blue-400">Doçentlik Ünvanı</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Akademik çalışmaları ve klinik deneyimi ile Doçentlik ünvanını aldı. Bu dönemde Eskişehir Şehir Hastanesi'nde KBB kliniğinde görev yaptı ve akademik kariyerini geliştirdi.
          </p>
        </motion.div>
      ),
    },
    {
      title: "2019-Günümüz",
      content: (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-4">
            <strong className="text-blue-400">Özel Klinik - Kendi İşletmesi</strong>
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
            Ekim 2019'dan itibaren kendi kliniğinde hizmet vermeye başladı. Rinoplasti, estetik cerrahiler ve KBB tedavileri konusunda uzmanlaştı.
          </p>
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              "5000+ Başarılı Ameliyat",
              "%98 Hasta Memnuniyeti",
              "Modern Teknoloji Kullanımı",
              "Bireysel Hasta Yaklaşımı"
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex gap-3 items-center text-neutral-300 text-sm md:text-base group cursor-default"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                />
                <span className="group-hover:text-blue-300 transition-colors duration-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Grid Pattern with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(59,130,246,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
          <motion.line 
            x1="0" y1="25%" x2="100%" y2="25%" 
            className="grid-line" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line 
            x1="0" y1="75%" x2="100%" y2="75%" 
            className="grid-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line 
            x1="25%" y1="0" x2="25%" y2="100%" 
            className="grid-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.line 
            x1="75%" y1="0" x2="75%" y2="100%" 
            className="grid-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 2 }}
          />
          <motion.circle 
            cx="25%" cy="25%" r="2" 
            className="detail-dot"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 3 }}
          />
          <motion.circle 
            cx="75%" cy="25%" r="2" 
            className="detail-dot"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          />
          <motion.circle 
            cx="25%" cy="75%" r="2" 
            className="detail-dot"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          />
          <motion.circle 
            cx="75%" cy="75%" r="2" 
            className="detail-dot"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 3.6 }}
          />
        </svg>
      </motion.div>

      {/* Corner elements with staggered animations */}
      {[
        { position: "top-8 left-8", delay: 4 },
        { position: "top-8 right-8", delay: 4.2 },
        { position: "bottom-8 left-8", delay: 4.4 },
        { position: "bottom-8 right-8", delay: 4.6 }
      ].map((corner, index) => (
        <motion.div 
          key={index}
          className={`corner-element ${corner.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.8, delay: corner.delay }}
        >
          <div className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full"></div>
        </motion.div>
      ))}

      {/* Floating particles with parallax */}
      <motion.div style={{ y: floatingElementsY }}>
        {[
          { top: "20%", left: "10%", delay: 5 },
          { top: "60%", left: "90%", delay: 5.5 },
          { top: "40%", left: "15%", delay: 6 },
          { top: "80%", left: "85%", delay: 6.5 },
          { top: "30%", left: "80%", delay: 7 },
          { top: "70%", left: "20%", delay: 7.5 }
        ].map((particle, index) => (
          <motion.div
            key={index}
            className="floating-element"
            style={{ top: particle.top, left: particle.left }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.4, 0.8, 0.2],
              scale: [0, 1, 1.1, 1, 1]
            }}
            transition={{ 
              delay: particle.delay,
              duration: 4,
              repeat: Infinity
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 py-20">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center px-6"
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-blue-400 font-mono text-sm uppercase tracking-[0.3em] mb-4"
            variants={itemVariants}
          >
            Dr. Mustafa Acar Hakkında
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-6"
            variants={itemVariants}
          >
            Doç. Dr. 
            <motion.span 
              className="text-blue-400 font-medium"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {" "}Mustafa Acar
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Profesyonel yolculuğum ve KBB ile estetik cerrahi alanındaki 20+ yıllık deneyimim
          </motion.p>
          <motion.div 
            className="mt-8 w-24 h-px opacity-30 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"
            variants={itemVariants}
          />
        </motion.div>

        {/* Doctor Photo */}
        <motion.div 
          ref={photoRef}
          className="max-w-xl mx-auto px-6 mb-12 mt-16"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={photoInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -15 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 p-8 max-w-md mx-auto group"
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-6">
              <motion.img 
                src="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yeni-yil.webp"
                alt="Dr. Mustafa Acar"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-medium text-white mb-2">Doç. Dr. Mustafa Acar</h3>
              <p className="text-blue-400 font-medium tracking-wide">KBB ve Estetik Cerrah Uzmanı</p>
            </div>
            
            {/* Enhanced animated border */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 pointer-events-none"
              whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          ref={timelineRef}
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10 py-12 pt-20">
            <motion.h2 
              className="text-3xl md:text-4xl mb-4 text-white max-w-4xl font-extralight"
              initial={{ opacity: 0, x: -30 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Profesyonel Yolculuğum
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-base md:text-lg max-w-2xl mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              1978'den günümüze kadar olan eğitim ve kariyer yolculuğumun önemli dönüm noktaları.
            </motion.p>
            <motion.div 
              className="mt-4 w-16 h-px opacity-30 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={timelineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
          <Timeline data={timelineData} />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="text-center px-6 pt-16"
          variants={containerVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-extralight text-white mb-6"
            variants={itemVariants}
          >
            Güvenilir ellerde sağlıklı bir gelecek
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
            variants={itemVariants}
          >
            Dr. Mustafa Acar ile randevu alarak sağlığınız ve güzelliğiniz için ilk adımı atın.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShimmerButton
                className="px-10 py-4 text-base font-medium"
                shimmerColor="#3b82f6"
                background="rgba(37, 99, 235, 0.9)"
                borderRadius="12px"
                shimmerDuration="2.5s"
                onClick={() => window.location.href = '#contact'}
              >
                <span className="font-medium tracking-wider text-white">Randevu Al</span>
              </ShimmerButton>
            </motion.div>
            
            <motion.button 
              className="px-10 py-4 text-base font-medium text-blue-400 border border-blue-400/30 rounded-xl hover:bg-blue-400/10 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(59, 130, 246, 0.6)",
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Hizmetleri İncele
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Mouse Gradient Effect */}
      <motion.div
        ref={gradientRef}
        className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 100%)`,
        }}
      />
    </motion.section>
  );
} 