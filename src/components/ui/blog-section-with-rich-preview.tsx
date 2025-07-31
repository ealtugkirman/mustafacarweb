'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "motion/react";

// Blog post data adapted for Dr. Mustafa Acar's content
const blogPosts = [
  {
    id: 'featured',
    title: 'Alın Şekillendirme Tedavisi: Kimler İçin Uygundur ve Nasıl Yapılır?',
    description: 'Alın şekillendirme tedavisi hakkında kapsamlı rehber. Hangi durumlarda uygulandığı, işlem süreci ve sonuçları hakkında uzman görüşleri.',
    category: 'Estetik İşlemler',
    author: 'Dr. Mustafa Acar',
    date: '2025',
    readTime: '5 dk',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'eksozom',
    title: 'Eksozom Saç Tedavisi İşe Yarıyor mu?',
    description: 'Bilimsel gerçekler ve kullanıcı deneyimleri ışığında eksozom saç tedavisinin etkinliği ve uygulama yöntemleri.',
    category: 'Saç Tedavisi',
    author: 'Dr. Mustafa Acar',
    date: '2025',
    readTime: '7 dk',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2069&auto=format&fit=crop',
    featured: false
  },
  {
    id: 'goz-kapagi',
    title: 'Göz Kapağı Estetiği (Blefaroplasti)',
    description: 'Göz kapağı estetiği işlem süreci, sonuçları ve dikkat edilmesi gereken noktalar hakkında detaylı bilgiler.',
    category: 'Estetik Cerrahi',
    author: 'Dr. Mustafa Acar',
    date: '2025',
    readTime: '6 dk',
    imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2087&auto=format&fit=crop',
    featured: false
  },
  {
    id: 'jalupro',
    title: 'Jalupro Gençlik Aşısının Etkisi ve Sonuçları',
    description: 'Jalupro gençlik aşısının cildin yenilenme sürecindeki rolü ve uzun vadeli etkileri hakkında uzman değerlendirmesi.',
    category: 'Anti-Aging',
    author: 'Dr. Mustafa Acar',
    date: '2025',
    readTime: '4 dk',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    featured: false
  }
];

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

function BlogRichPreview() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleBlogClick = (postId: string) => {
    console.log('Blog post clicked:', postId);
    // Here you can navigate to the blog post detail page
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)] py-16 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full py-20 lg:py-40">
        <div className="container mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <AnimatedContainer className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium uppercase tracking-wider backdrop-blur-sm w-fit">
                📚 Blog
              </span>
              
              <h4 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight max-w-4xl">
                <span className="text-blue-400 font-medium">Blog</span> Yazılarımız
              </h4>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full"></div>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                Merak ettiğiniz konuları cevapladık. Daha fazlası için blog sayfamızı ziyaret edin.
              </p>
            </div>
          </AnimatedContainer>

          {/* Blog Grid */}
          <AnimatedContainer delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2 group"
                onClick={() => handleBlogClick(featuredPost.id)}
              >
                <div className="relative rounded-2xl aspect-video overflow-hidden border border-gray-700/30">
                  <img 
                    src={featuredPost.imageUrl} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <div className="flex flex-row gap-4 items-center">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                    {featuredPost.category}
                  </Badge>
                  <p className="flex flex-row gap-2 text-sm items-center text-gray-400">
                    <span>Yazar:</span>
                    <Avatar className="h-6 w-6 border border-gray-600">
                      <AvatarImage src="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yeni-yil.webp" />
                      <AvatarFallback className="bg-blue-500/20 text-blue-300 text-xs">MA</AvatarFallback>
                    </Avatar>
                    <span className="text-white">{featuredPost.author}</span>
                    <span className="text-gray-500">•</span>
                    <span>{featuredPost.readTime} okuma</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="max-w-4xl text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="max-w-4xl text-gray-300 text-lg leading-relaxed">
                    {featuredPost.description}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Regular Posts */}
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col gap-4 hover:opacity-75 cursor-pointer group"
                onClick={() => handleBlogClick(post.id)}
              >
                <div className="relative rounded-xl aspect-video overflow-hidden border border-gray-700/30">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                <div className="flex flex-row gap-4 items-center">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                    {post.category}
                  </Badge>
                  <p className="flex flex-row gap-2 text-sm items-center text-gray-400">
                    <span>Yazar:</span>
                    <Avatar className="h-6 w-6 border border-gray-600">
                      <AvatarImage src="https://drmustafaacar.com/wp-content/uploads/2023/11/mustafa-acar-yeni-yil.webp" />
                      <AvatarFallback className="bg-purple-500/20 text-purple-300 text-xs">MA</AvatarFallback>
                    </Avatar>
                    <span className="text-white">{post.author}</span>
                  </p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className="max-w-3xl text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="max-w-3xl text-gray-400 text-base leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatedContainer>

          {/* CTA Section */}
          <AnimatedContainer delay={0.6} className="text-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Tüm Blog Yazılarını Gör
            </motion.button>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

export { BlogRichPreview }; 