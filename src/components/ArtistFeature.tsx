import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Instagram, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface ArtistFeatureProps {
  onOpenBooking: () => void;
}

export default function ArtistFeature({ onOpenBooking }: ArtistFeatureProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<'portrait1' | 'portrait2' | 'portrait3'>('portrait1');

  const photos = {
    portrait1: {
      src: '/images/john-schmitz-portrait-1.jpg',
      label: 'Main Studio Feature',
      caption: 'John Schmitz with his custom tattoo work showcase in Edgewater, FL.'
    },
    portrait2: {
      src: '/images/john-at-badazz-shop.jpg',
      label: 'At Bad Azz Tattoo Shop',
      caption: 'John Schmitz on location at Bad Azz Tattoo (105 Boston Rd, Edgewater, FL).'
    },
    portrait3: {
      src: '/images/john-schmitz-portrait-2.jpg',
      label: 'On Location & Creative Identity',
      caption: 'The authentic, independent spirit behind the BADAZZTATTOO craft.'
    }
  };

  return (
    <section id="artist" className="relative py-28 sm:py-36 bg-[#0c0c0c] overflow-hidden border-t border-[#1a1a1a]">
      {/* Ambient background crimson glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B51F2D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: John Schmitz Real Portrait Showcase */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Outer Editorial Frame with Crimson Border Accent */}
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-none overflow-hidden bg-[#141414] border border-[#262626] shadow-2xl group">
                
                {/* Real Image of John Schmitz — 100% Uncropped Natural Aspect Ratio */}
                <div className="relative w-full bg-[#080808] flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={photos[selectedPhoto].src}
                    alt="John Schmitz - Tattoo Artist behind BADAZZTATTOO"
                    className="w-full h-auto object-contain filter contrast-105 group-hover:scale-102 transition-transform duration-500 max-h-[500px]"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>

                {/* Photo Meta Footer */}
                <div className="p-4 sm:p-5 bg-[#141414] border-t border-[#202020] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#F2EEE7]">
                      John Schmitz
                    </p>
                    <p className="text-[11px] text-[#A8A8A8] mt-0.5">
                      {photos[selectedPhoto].caption}
                    </p>
                  </div>
                  
                  {/* Verified Artist Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#A8A8A8] bg-[#0c0c0c] px-2.5 py-1 border border-[#252525]">
                    <CheckCircle2 className="w-3 h-3 text-[#B51F2D]" />
                    <span>Real Photograph</span>
                  </div>
                </div>
              </div>

              {/* Photo Selector Switcher (Between the verified reference photos) */}
              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <button
                  onClick={() => setSelectedPhoto('portrait1')}
                  className={`text-xs uppercase tracking-[0.16em] px-3 py-2 transition-all border ${
                    selectedPhoto === 'portrait1'
                      ? 'border-[#B51F2D] text-[#F2EEE7] bg-[#1a1214]'
                      : 'border-[#222] text-[#888] hover:text-[#ccc] bg-[#111]'
                  }`}
                >
                  Portrait 01 · Studio
                </button>
                <button
                  onClick={() => setSelectedPhoto('portrait2')}
                  className={`text-xs uppercase tracking-[0.16em] px-3 py-2 transition-all border ${
                    selectedPhoto === 'portrait2'
                      ? 'border-[#B51F2D] text-[#F2EEE7] bg-[#1a1214]'
                      : 'border-[#222] text-[#888] hover:text-[#ccc] bg-[#111]'
                  }`}
                >
                  Portrait 02 · At Shop
                </button>
                <button
                  onClick={() => setSelectedPhoto('portrait3')}
                  className={`text-xs uppercase tracking-[0.16em] px-3 py-2 transition-all border ${
                    selectedPhoto === 'portrait3'
                      ? 'border-[#B51F2D] text-[#F2EEE7] bg-[#1a1214]'
                      : 'border-[#222] text-[#888] hover:text-[#ccc] bg-[#111]'
                  }`}
                >
                  Portrait 03 · Identity
                </button>
              </div>

              {/* Fine Crimson Graphic Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-[2px] bg-[#B51F2D] origin-left"
              />
            </motion.div>
          </div>

          {/* Right: Editorial Typography & Artist Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {/* Category / Kicker */}
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#B51F2D] font-bold">
                <span className="w-6 h-[1px] bg-[#B51F2D]" />
                <span>The Man Behind the Needle</span>
              </div>

              {/* Exact Heading */}
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#F2EEE7] uppercase tracking-wide leading-tight">
                MEET THE ARTIST BEHIND THE INK.
              </h2>

              {/* Refined Crimson Accent Line */}
              <div className="mt-5 w-16 h-[2px] bg-[#B51F2D]" />

              {/* Exact Suggested Copy */}
              <blockquote className="mt-6 font-editorial italic text-xl sm:text-2xl text-[#F2EEE7]/95 leading-relaxed border-l-2 border-[#333] pl-5 py-1">
                “Every piece begins with a vision. Through thoughtful design, careful execution, and an eye for detail, the goal is to create tattoos that feel personal, distinctive, and made to last.”
              </blockquote>

              {/* Artist Studio & Regional Context */}
              <div className="mt-8 space-y-4 text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
                <p>
                  Operating independently under the moniker <strong className="text-white font-medium">BADAZZTATTOO</strong>, John Schmitz focuses on high-precision custom ink tailored to each client&apos;s unique anatomical contours.
                </p>
                <p>
                  Every session is conducted one-on-one in a focused, sanitary environment with direct communication from initial concept review through final healing.
                </p>
              </div>

              {/* Key Studio Attributes (Unboxed text with typographic separators) */}
              <div className="mt-8 pt-6 border-t border-[#202020] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs tracking-wider uppercase text-[#A8A8A8]">
                <div className="flex items-center gap-1.5 text-[#F2EEE7]">
                  <MapPin className="w-3.5 h-3.5 text-[#B51F2D]" />
                  <span>Edgewater, Florida</span>
                </div>
                <span className="text-[#444]" aria-hidden="true">/</span>
                <span>Central FL & Daytona Area</span>
                <span className="text-[#444]" aria-hidden="true">/</span>
                <span>Custom Needlecraft</span>
                <span className="text-[#444]" aria-hidden="true">/</span>
                <span>18+ Private Sessions</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.2em] font-bold border border-[#B51F2D] transition-all duration-300 shadow-[0_0_20px_rgba(181,31,45,0.3)] hover:shadow-[0_0_30px_rgba(181,31,45,0.6)]"
                >
                  Consult with John
                </button>

                <a
                  href={STUDIO_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#141414] hover:bg-[#1f1f1f] text-[#F2EEE7] text-xs uppercase tracking-[0.18em] font-medium border border-[#2a2a2a] hover:border-[#444] transition-all duration-200 inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-[#B51F2D]" />
                  <span>Verify Instagram Feed</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#777]" />
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
