'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

interface MenuItem {
  title: string;
  items?: (MenuItem | string)[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Kurumsal',
    items: [
      { title: 'Hakkımda' },
      { title: 'KVKK' },
      { title: 'Çerez Politikası' }
    ]
  },
  {
    title: 'Burun Estetiği',
    items: [
      { title: 'Burun Estetiği (Rinoplasti)' },
      { title: 'Burun Kıkırdağı Eğriliği Ameliyatı' },
      { title: 'Burun Eğriliği (Septoplasti)' },
      { title: 'Burun Ucu Estetiği (TipPlasti)' }
    ]
  },
  {
    title: 'Ameliyatlı Estetik',
    items: [
      { title: 'Kepçe Kulak Estetiği (OtoPlasti)' },
      { title: 'Göz Kapağı Estetiği' },
      { title: 'Bademcik ve Geniz Eti Ameliyatı' },
      { title: 'Kulağa Tüp Takılması' },
      { title: 'Uyku Apnesi' },
      { title: 'Çocuklarda Uyku Apnesi Nedir?' },
      { title: 'Endoskopik Sinüs Cerrahisi' },
      { title: 'Burun Polibi (Nazal Polip)' },
      { title: 'Ben Aldırma Ameliyatı' }
    ]
  },
  {
    title: 'Ameliyatsız Estetik',
    items: [
      { title: 'Eksozom Tedavisi' },
      {
        title: 'Kırışıklık Önleyici',
        items: [
          'Kırışıklık Önleyici Nedir?',
          'Alın Bölgesi Tedavisi',
          'Boyun Kırışıklığı Tedavisi',
          'Kaz Ayağı Tedavisi',
          'Masseter Tedavisi'
        ]
      },
      {
        title: 'Dolgu',
        items: [
          'Dudak Dolgusu',
          'Burun Dolgusu',
          'Elmacık Kemiği Dolgusu',
          'Çene Ucu Dolgusu',
          'Nazolabial Dolgu',
          'Şakak Dolgusu',
          'Alın Dolgusu',
          'Jawline Dolgu'
        ]
      },
      {
        title: 'Yüz Gençleştirme',
        items: [
          'Gençlik Aşısı Jalupro HMW',
          'Gençlik Aşısı Jalupro',
          'Harmonyca',
          'Altın İğne'
        ]
      }
    ]
  },
  {
    title: 'KBB Tedavileri',
    items: [
      { title: 'Kulak Burun Boğaz' },
      { title: 'Baş Dönmesi (Vertigo)' },
      { title: 'Odyometri (İşitme Testi)' },
      { title: 'Orta Kulak Basınç Testi (Timpanometri)' },
      { title: 'Elektroterapi' },
      { title: 'İntratimpanik Enjeksiyon' },
      { title: 'Horlama Ve Uyku Apnesi Tedavisi' },
      { title: 'Yutma Terapisi' },
      { title: 'Ses Terapisi' },
      { title: 'Alerjik Rinit (Alerjik Nezle) Tedavisi' },
      { title: 'Konka Radyofrekansı' },
      { title: 'Burun Kanaması (Koterizasyon)' }
    ]
  }
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 300);
  };

  const handleSubMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubDropdown(title);
  };

  const handleSubMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderMenuItem = (item: MenuItem | string, isSubItem = false) => {
    if (typeof item === 'string') {
      return (
        <a
          key={item}
          href="#"
          className="block px-4 py-3 text-sm text-gray-200 hover:bg-gray-700/60 hover:text-blue-400 rounded-lg mx-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 font-normal tracking-wide"
        >
          {item}
        </a>
      );
    }

    return (
      <div
        key={item.title}
        className="relative group"
        onMouseEnter={() => isSubItem ? handleSubMouseEnter(item.title) : null}
        onMouseLeave={() => isSubItem ? handleSubMouseLeave() : null}
      >
        <a
          href="#"
          className="flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-gray-700/60 hover:text-blue-400 rounded-lg mx-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 group"
        >
          <span className="transition-all duration-300 ease-in-out font-medium tracking-wide">{item.title}</span>
          {item.items && (
            <svg className="w-4 h-4 ml-2 transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </a>
        
        {item.items && isSubItem && activeSubDropdown === item.title && (
          <div className="absolute left-full top-0 mt-0 ml-2 w-64 bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-600/30 z-50 animate-in slide-in-from-left-2 duration-300 ease-out">
            <div className="py-2">
              {item.items.map((subItem) => renderMenuItem(subItem, false))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/30 shadow-2xl transition-all duration-300 ease-in-out font-[var(--font-nord)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 transition-all duration-300 ease-in-out">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <img 
                src="/images/mustafa-acar-yeni-logo-beyaz.webp" 
                alt="Dr. Mustafa Acar Logo" 
                className="h-10 w-auto transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((menuItem) => (
              <div
                key={menuItem.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(menuItem.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-200 hover:text-blue-400 px-4 py-3 text-sm font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-800/50 hover:scale-105 group">
                  <span className="transition-all duration-300 ease-in-out font-medium tracking-wide">{menuItem.title}</span>
                  <svg className="w-4 h-4 ml-2 transition-all duration-300 ease-in-out group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === menuItem.title && menuItem.items && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-600/30 z-40 animate-in slide-in-from-top-2 duration-300 ease-out">
                    <div className="py-2">
                      {menuItem.items.map((item) => renderMenuItem(item, true))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <ShimmerButton
              className="px-6 py-3 text-sm font-medium"
              shimmerColor="#3b82f6"
              background="rgba(37, 99, 235, 0.9)"
              borderRadius="12px"
              shimmerDuration="2.5s"
              onClick={() => window.location.href = '#contact'}
            >
              <span className="font-medium tracking-wider text-white">İletişim</span>
            </ShimmerButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-blue-400 focus:outline-none focus:text-blue-400 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 ease-in-out transform hover:scale-110 group"
            >
              <svg className={`h-6 w-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'} group-hover:scale-110`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

            {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/30 animate-in slide-in-from-top duration-300 ease-out">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((menuItem, menuIndex) => (
              <div 
                key={menuItem.title} 
                className="space-y-2"
                style={{ animationDelay: `${menuIndex * 50}ms` }}
              >
                <button className="w-full text-left text-gray-200 hover:text-blue-400 px-4 py-3 text-base font-medium hover:bg-gray-800/60 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-2 group">
                  <span className="transition-all duration-300 ease-in-out group-hover:scale-105 font-medium tracking-wide">{menuItem.title}</span>
                </button>
                {menuItem.items && (
                  <div className="pl-6 space-y-1">
                    {menuItem.items.map((item, index) => {
                      const itemKey = typeof item === 'string' ? item : item.title;
                      
                      if (typeof item === 'string') {
                        return (
                          <a key={itemKey} href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800/40 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 font-normal tracking-wide">
                            {item}
                          </a>
                        );
                      }
                      
                      return (
                        <div key={itemKey}>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 font-medium hover:bg-gray-800/40 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 tracking-wide">
                            {item.title}
                          </a>
                          {item.items && (
                            <div className="pl-6 space-y-1 mt-2">
                              {item.items.map((subItem, subIndex) => (
                                <a key={`${itemKey}-${subIndex}`} href="#" className="block px-3 py-1 text-xs text-gray-400 hover:text-blue-400 hover:bg-gray-800/30 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 font-normal tracking-wide">
                                  {typeof subItem === 'string' ? subItem : subItem.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <ShimmerButton
                className="w-full px-4 py-3 text-base font-medium"
                shimmerColor="#3b82f6"
                background="rgba(37, 99, 235, 0.9)"
                borderRadius="12px"
                shimmerDuration="2.5s"
                onClick={() => window.location.href = '#contact'}
              >
                <span className="font-medium tracking-wider text-white">İletişim</span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
