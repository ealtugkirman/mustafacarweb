'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

const ScrollHeroDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yeni-yil.webp"
        bgImageSrc="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yeni-yil.webp"
        title="Dr. Mustafa Acar"
        date="KBB ve Estetik Cerrah"
        scrollToExpand="Aşağı Kaydırın"
        textBlend={true}
      >
        <div className='max-w-5xl mx-auto font-[var(--font-nord)]'>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Doctor Info */}
            <div className="space-y-8">
              <div>
                <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
                  Deneyim ve Uzmanlık
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-blue-400 font-semibold">1978 yılında Fethiye'de doğan</span> Dr. Mustafa Acar, 
                  2001 yılında Ankara Üniversitesi Tıp Fakültesi'ni bitirmiş, 2006 yılında 
                  Ankara Numune Eğitim ve Araştırma Hastanesinde Kulak Burun Boğaz Hastalıkları 
                  alanında uzmanlık eğitimini tamamlamıştır.
                </p>
                
                <p>
                  <span className="text-purple-400 font-semibold">2018 yılında Doçentlik ünvanını</span> almış 
                  ve 2018-2019 yılları arası Eskişehir Şehir Hastanesi KBB kliniğinde görev yapmıştır.
                </p>
                
                <p>
                  <span className="text-blue-400 font-semibold">Ekim 2019 tarihinden itibaren</span> devletteki 
                  görevinden ayrılıp kendi kliniğinde görev yapmaya başlamıştır.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Yıl Deneyim</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5000+</div>
                  <div className="text-gray-300 text-sm">Başarılı Ameliyat</div>
                </div>
              </div>
            </div>

            {/* Right Side - Specializations */}
            <div className="space-y-8">
              <div>
                <h3 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
                  Uzmanlık Alanları
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-8"></div>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Burun Estetiği", desc: "Rinoplasti ve fonksiyonel burun cerrahisi" },
                  { title: "Estetik Cerrahi", desc: "Yüz ve boyun estetik işlemleri" },
                  { title: "KBB Hastalıkları", desc: "Kulak, burun, boğaz hastalıkları tedavisi" },
                  { title: "Septoplasti", desc: "Burun içi anatomik düzeltmeler" },
                  { title: "Nazal Valve", desc: "Burun solunumu problemleri" },
                  { title: "Tipplasti", desc: "Burun ucu estetiği" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                  🩺 Randevu Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default ScrollHeroDemo; 