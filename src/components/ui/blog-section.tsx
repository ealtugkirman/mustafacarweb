'use client';

import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { Zap, Eye, User, Sparkles, FileText, Calendar } from 'lucide-react';

// Extended FeatureCard for blog posts
type BlogPostType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
	date?: string;
	readTime?: string;
};

type BlogCardProps = React.ComponentProps<'div'> & {
	post: BlogPostType;
	onClick?: () => void;
};

function BlogCard({ post, className, onClick, ...props }: BlogCardProps) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: 0.2 }}
			className="cursor-pointer relative"
			onClick={onClick}
		>
			<FeatureCard
				feature={post}
				className={`${className} hover:border-blue-400/40 transition-colors duration-300 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30`}
				{...props}
			/>
			{post.date && (
				<div className="absolute top-4 right-4 text-xs text-gray-400 flex items-center gap-1">
					<Calendar className="w-3 h-3" />
					{post.date}
				</div>
			)}
		</motion.div>
	);
}

const blogPosts = [
	{
		title: 'Alın Şekillendirme Tedavisi',
		icon: User,
		description: 'Alın Şekillendirme Tedavisi: Kimler İçin Uygundur ve Nasıl Yapılır? Ekspert doktorumuzdan detaylı bilgiler.',
		date: '2025',
		readTime: '5 dk'
	},
	{
		title: 'Eksozom Saç Tedavisi',
		icon: Sparkles,
		description: 'Eksozom Saç Tedavisi İşe Yarıyor mu? Bilimsel Gerçekler ve Kullanıcı Deneyimleri. Son yıllarda saç tedavisinde devrim.',
		date: '2025',
		readTime: '7 dk'
	},
	{
		title: 'Göz Kapağı Estetiği',
		icon: Eye,
		description: 'Göz Kapağı Estetiği (Blefaroplasti) Nedir? İşlem Süreci ve Sonuçlar. Detaylı rehber ve uzman görüşleri.',
		date: '2025',
		readTime: '6 dk'
	},
	{
		title: 'Jalupro Gençlik Aşısı',
		icon: Zap,
		description: 'Jalupro Nedir? Gençlik Aşısının Etkisi, Süreci ve Sonuçları. Cildin yenilenme sürecinde en etkili yöntemler.',
		date: '2025',
		readTime: '4 dk'
	},
	{
		title: 'Diğer Blog Yazıları',
		icon: FileText,
		description: 'Merak ettiğiniz tüm estetik ve KBB konularında uzman görüşleri ve güncel bilgiler için blog arşivimizi keşfedin.',
		date: 'Sürekli',
		readTime: 'Değişken'
	}
];

export const BlogSection = () => {
	const shouldReduceMotion = useReducedMotion();

	const handleBlogClick = (post: BlogPostType) => {
		console.log('Blog post clicked:', post.title);
		// Here you can navigate to the blog post detail page
	};

	return (
		<section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 font-[var(--font-nord)] overflow-hidden py-16 md:py-32">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-[0.03]">
				<div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:px-12">
				<AnimatedContainer className="mx-auto max-w-4xl text-center">
					<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium uppercase tracking-wider backdrop-blur-sm mb-8">
						📚 Blog
					</span>

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight mb-6">
						<span className="text-blue-400 font-medium">Blog</span> Yazılarımız
					</h2>

					<div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>

					<p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
						Merak ettiğiniz konuları cevapladık. Daha fazlası için blog sayfamızı ziyaret edin.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
				>
					{blogPosts.map((post, i) => (
						<BlogCard 
							key={i} 
							post={post} 
							onClick={() => handleBlogClick(post)}
						/>
					))}
				</AnimatedContainer>

				{/* CTA Section */}
				<AnimatedContainer delay={0.6} className="text-center pt-12">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
					>
						<FileText className="w-5 h-5" />
						Tüm Blog Yazılarını Gör
					</motion.button>
				</AnimatedContainer>
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