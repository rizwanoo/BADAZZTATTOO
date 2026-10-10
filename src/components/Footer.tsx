import { Instagram, ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenBooking: () => void;
}

export default function Footer({ onOpenTerms, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060606] text-[#A8A8A8] border-t border-[#181818] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-[#181818] gap-6">
          
          {/* Brand Logo & Artist Identity */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#2e2e2e] shadow-lg shrink-0">
              <img
                src="/images/badazztattoo-logo.jpg"
                alt="BADAZZTATTOO official logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-display text-lg font-bold tracking-[0.2em] text-[#F2EEE7]">
                {STUDIO_INFO.brandName}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#777] font-medium">
                {STUDIO_INFO.artistName} · INDEPENDENT TATTOO ARTIST
              </div>
            </div>
          </div>

          {/* Quick Action & Scroll Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              Book a Session
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#121212] hover:bg-[#202020] text-[#aaa] hover:text-white border border-[#252525] transition-colors"
              aria-label="Scroll back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Navigation & Info */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs tracking-wider">
          {/* Col 1: Studio Details */}
          <div>
            <span className="text-white uppercase font-bold tracking-[0.2em] block mb-3">
              Bad Azz Tattoo, LLC
            </span>
            <p className="text-[#ccc] font-medium leading-relaxed">
              {STUDIO_INFO.location.fullAddress}
            </p>
            <p className="text-[#888] mt-1 font-mono">
              Phone: <a href={`tel:${STUDIO_INFO.location.phone}`} className="hover:text-white transition-colors">{STUDIO_INFO.location.phone}</a>
            </p>
            <a
              href={STUDIO_INFO.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B51F2D] hover:underline text-[11px] mt-2 inline-block font-medium"
            >
              Google Maps Rating: 4.8 ★ (184 Reviews)
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col space-y-2 uppercase">
            <span className="text-white font-bold tracking-[0.2em] block mb-1">
              Navigation
            </span>
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Selected Portfolio</a>
            <a href="#artist" className="hover:text-white transition-colors">Meet John Schmitz</a>
            <a href="#reviews" className="hover:text-white transition-colors">Google Reviews (4.8★)</a>
            <a href="#services" className="hover:text-white transition-colors">Services & Quotes</a>
            <a href="#contact" className="hover:text-white transition-colors">Studio Contact</a>
          </div>

          {/* Col 3: Official Channels */}
          <div>
            <span className="text-white uppercase font-bold tracking-[0.2em] block mb-3">
              Official Instagram
            </span>
            <a
              href={STUDIO_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#B51F2D] transition-colors font-mono"
            >
              <Instagram className="w-4 h-4 text-[#B51F2D]" />
              <span>{STUDIO_INFO.instagram.handle}</span>
            </a>
            <p className="text-[#666] text-[11px] mt-2">
              Browse John&apos;s daily flash, client progress reels, and tattoo announcements.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#666] gap-4">
          <div>
            © 2026 {STUDIO_INFO.brandName} · John Schmitz. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerms}
              className="hover:text-[#aaa] transition-colors uppercase tracking-wider"
            >
              Studio Policies & Privacy
            </button>
            <span>·</span>
            <span>Edgewater, Florida</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
