import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ArrowUpRight, ZoomIn, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { STUDIO_INFO } from '../data/studioData';
import { PortfolioItem, TattooStyle } from '../types/tattoo';
import Lightbox from './Lightbox';

interface PortfolioGalleryProps {
  onOpenBookingWithStyle?: (style: string, concept: string) => void;
}

export default function PortfolioGallery({ onOpenBookingWithStyle }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<TattooStyle>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: TattooStyle[] = [
    'All',
    'Black & Grey',
    'Realism',
    'Blackwork',
    'Fine Line',
    'Custom Designs',
    'Large-Scale Pieces'
  ];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 bg-[#080808] border-t border-[#181818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#B51F2D] font-bold">
              <span className="w-6 h-[1px] bg-[#B51F2D]" />
              <span>Selected Portfolio</span>
            </div>
            
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#F2EEE7] tracking-wide">
              THE WORK SPEAKS.
            </h2>

            <p className="mt-3 font-editorial italic text-xl sm:text-2xl text-[#A8A8A8]">
              “Every piece carries an idea. Every detail has a purpose.”
            </p>
          </div>

          {/* Instagram Link CTA */}
          <div className="shrink-0">
            <a
              href={STUDIO_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#A8A8A8] hover:text-white transition-colors pb-1 border-b border-[#333] hover:border-[#B51F2D]"
            >
              <Instagram className="w-4 h-4 text-[#B51F2D]" />
              <span>Full Feed on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-pill discipline: segmented clean tabs) */}
        <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 border-b border-[#1e1e1e] pb-3 min-w-max">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer font-medium border ${
                    isActive
                      ? 'bg-[#181818] border-[#B51F2D] text-[#F2EEE7]'
                      : 'border-transparent text-[#777] hover:text-[#bbb] hover:border-[#282828]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const isLarge = index === 0 || index === 4;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative bg-[#121212] border border-[#202020] hover:border-[#B51F2D]/70 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  {/* Image Container — 100% Uncropped Natural Aspect Ratio */}
                  <div className="relative w-full bg-[#080808] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto object-contain filter contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out max-h-[500px]"
                    />

                    {/* Verified Real Artist Asset Badge */}
                    {item.isRealArtistAsset && (
                      <div className="absolute top-3 left-3 z-10 bg-black/90 border border-[#B51F2D] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#F2EEE7] flex items-center gap-1.5 shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B51F2D]" />
                        <span>Verified Post</span>
                      </div>
                    )}

                    {/* Zoom Icon Hover Hint */}
                    <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/75 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Clean Dedicated Metadata Footer (No Dark Gradient Covering Artwork) */}
                  <div className="p-4 sm:p-5 bg-[#121212] border-t border-[#1e1e1e] flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#B51F2D] font-bold">
                        <span>{item.category}</span>
                        <span className="text-[#555]">·</span>
                        <span className="text-[#888] font-normal">{item.placement}</span>
                      </div>

                      <h3 className="mt-1.5 font-display text-base sm:text-lg font-bold uppercase text-[#F2EEE7] tracking-wider group-hover:text-white transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#8c8c8c] line-clamp-2 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] text-[#666]">
                      <span>{item.size}</span>
                      <span className="text-[#B51F2D] group-hover:underline">View Full Details →</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Transparent Exhibition & Instagram Note */}
        <div className="mt-16 p-6 sm:p-8 bg-[#0e0e0e] border border-[#202020] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-[#F2EEE7]">
              Live Studio Portfolio on Instagram
            </h4>
            <p className="text-xs sm:text-sm text-[#8c8c8c] font-light max-w-2xl">
              John regularly posts freshly completed tattoos, stencil designs, and behind-the-scenes progress directly to his official Instagram page <strong className="text-white font-medium">{STUDIO_INFO.instagram.handle}</strong>.
            </p>
          </div>

          <a
            href={STUDIO_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.2em] font-semibold border border-[#B51F2D] transition-all flex items-center gap-2 shrink-0 shadow-[0_0_20px_rgba(181,31,45,0.3)]"
          >
            <Instagram className="w-4 h-4" />
            <span>VIEW MORE WORK</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrevItem}
        onNext={handleNextItem}
        onInquireStyle={(item) => {
          if (onOpenBookingWithStyle) {
            onOpenBookingWithStyle(item.category, item.title);
          }
        }}
      />
    </section>
  );
}
