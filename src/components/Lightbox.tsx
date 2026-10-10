import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PortfolioItem } from '../types/tattoo';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onInquireStyle: (item: PortfolioItem) => void;
}

export default function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  onInquireStyle
}: LightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-2.5 bg-[#141414] hover:bg-[#B51F2D] text-[#F2EEE7] border border-[#2a2a2a] transition-colors rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close image lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-[#141414]/80 hover:bg-[#B51F2D] text-white border border-[#262626] transition-colors focus-visible:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-[#141414]/80 hover:bg-[#B51F2D] text-white border border-[#262626] transition-colors focus-visible:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Main Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#0c0c0c] border border-[#222] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Left: Image Canvas */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[60vh] lg:max-h-[85vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[80vh]"
          />

          {/* Real Artist Provenance Badge */}
          {item.isRealArtistAsset && (
            <div className="absolute top-4 left-4 bg-[#080808]/90 border border-[#B51F2D] px-3 py-1 text-[10px] uppercase tracking-wider text-[#F2EEE7] flex items-center gap-1.5 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B51F2D]" />
              <span>Verified John Schmitz Work</span>
            </div>
          )}
        </div>

        {/* Right: Editorial Meta Panel */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between bg-[#111111] border-t lg:border-t-0 lg:border-l border-[#222] overflow-y-auto max-h-[35vh] lg:max-h-[85vh]">
          <div>
            {/* Category / Style */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B51F2D] font-bold">
              <span>{item.category}</span>
            </div>

            {/* Title */}
            <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold uppercase text-[#F2EEE7] tracking-wide">
              {item.title}
            </h3>

            {/* Placement and Dimensions */}
            <div className="mt-4 pt-4 border-t border-[#1e1e1e] space-y-2 text-xs text-[#A8A8A8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B51F2D]" />
                <span>Placement: <strong className="text-[#F2EEE7]">{item.placement}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="w-3.5 h-3.5 text-[#B51F2D]" />
                <span>Scale: <strong className="text-[#F2EEE7]">{item.size}</strong></span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 text-xs sm:text-sm text-[#8c8c8c] font-light leading-relaxed">
              {item.description}
            </p>

            {/* Transparency Note */}
            {item.notes && (
              <div className="mt-4 p-3 bg-[#0a0a0a] border border-[#222] text-[11px] text-[#777] italic">
                {item.notes}
              </div>
            )}
          </div>

          {/* CTA: Inquire for similar piece */}
          <div className="mt-8 pt-5 border-t border-[#1e1e1e]">
            <button
              onClick={() => {
                onClose();
                onInquireStyle(item);
              }}
              className="w-full py-3.5 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Book a Piece in This Style</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="mt-2 text-[10px] text-center text-[#666] uppercase tracking-wider">
              Discuss size & placement with John
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
