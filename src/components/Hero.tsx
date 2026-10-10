import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Instagram, Volume2, VolumeX, Play, Pause, MapPin, Star } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080808] text-[#F2EEE7]"
    >
      {/* =========================================================================
          HD TATTOO ARTIST VIDEO — FULL BRIGHTNESS & CRYSTAL CLEAR (NO BLUR BOX)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/hero-tattoo-artist-poster.jpg"
          className="w-full h-full object-cover filter contrast-105 brightness-100"
        >
          <source src="/hero-tattoo-artist-hd.mp4" type="video/mp4" />
          <source src="/hero-tattoo-live.mp4" type="video/mp4" />
          Your browser does not support HTML5 video playback.
        </video>

        {/* Minimal edge-only gradients to blend with navbar & footer — zero blur in center */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#080808]/90 pointer-events-none" />
      </div>

      {/* =========================================================================
          HERO CONTENT (DIRECTLY OVER THE CRYSTAL CLEAR VIDEO WITH SHARP TEXT SHADOWS)
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-36 pb-24 flex flex-col items-center">
        
        {/* 1. ARTIST EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center justify-center gap-2.5 sm:gap-3 mb-4 text-xs font-semibold tracking-[0.3em] text-[#F2EEE7] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
        >
          <span className="w-8 h-[2px] bg-[#B51F2D] shadow-[0_0_10px_rgba(181,31,45,1)]" />
          <span className="font-bold">JOHN SCHMITZ · INDEPENDENT TATTOO ARTIST</span>
          <span className="w-8 h-[2px] bg-[#B51F2D] shadow-[0_0_10px_rgba(181,31,45,1)]" />
        </motion.div>

        {/* 2. MAIN BOLD HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] text-[#F2EEE7] uppercase leading-[0.98] drop-shadow-[0_8px_30px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,1)]"
        >
          INKED WITH PURPOSE.
        </motion.h1>

        {/* 3. BRAND SUB-HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 text-xs sm:text-sm tracking-[0.32em] uppercase text-[#ff2e43] font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,1)]"
        >
          BADAZZTATTOO · EDGEWATER, FL
        </motion.div>

        {/* 4. EDITORIAL COPY */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-5 font-editorial italic text-xl sm:text-2xl md:text-3xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-[0_6px_24px_rgba(0,0,0,1)] drop-shadow-[0_2px_6px_rgba(0,0,0,1)]"
        >
          “Personal vision. Precise craftsmanship. Ink that becomes part of your story.”
        </motion.p>

        {/* 5. LOCATION & ARTIST ANCHOR */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 text-xs sm:text-sm text-[#F2EEE7] font-normal max-w-xl mx-auto tracking-wide leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,1)]"
        >
          Independent custom tattoo artistry by <strong className="text-white font-bold underline decoration-[#B51F2D] decoration-2">John Schmitz</strong> at Bad Azz Tattoo (105 Boston Rd, Edgewater, FL).
        </motion.p>

        {/* 6. CALL TO ACTION BUTTONS & LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.22em] font-bold border border-[#B51F2D] transition-all duration-300 shadow-[0_0_35px_rgba(181,31,45,0.7)] hover:shadow-[0_0_50px_rgba(181,31,45,1)] cursor-pointer drop-shadow-lg"
          >
            BOOK YOUR TATTOO
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-black/80 hover:bg-black text-[#F2EEE7] text-xs uppercase tracking-[0.22em] font-semibold border border-white/30 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
          >
            <span>EXPLORE THE WORK</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B51F2D]" />
          </a>

          <a
            href={STUDIO_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-white hover:text-[#B51F2D] transition-colors flex items-center justify-center gap-2 bg-black/75 border border-white/20 hover:border-[#B51F2D] shadow-xl"
          >
            <Instagram className="w-4 h-4 text-[#B51F2D]" />
            <span>{STUDIO_INFO.instagram.handle}</span>
          </a>
        </motion.div>

        {/* 7. VERIFIED REPUTATION SNIPPET (GOOGLE 4.8★) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs uppercase tracking-wider text-[#F2EEE7] drop-shadow-[0_3px_10px_rgba(0,0,0,1)] bg-black/60 px-4 py-1.5 rounded-full border border-white/10"
        >
          <div className="flex items-center gap-1 text-[#fbbf24]">
            <Star className="w-4 h-4 fill-[#fbbf24]" />
            <span className="font-bold text-white">4.8</span>
          </div>
          <span className="text-[#888]">·</span>
          <span className="font-semibold text-white">184 Google Reviews</span>
          <span className="text-[#888]">·</span>
          <span className="flex items-center gap-1 text-white">
            <MapPin className="w-3.5 h-3.5 text-[#B51F2D]" />
            105 Boston Rd, Edgewater FL
          </span>
        </motion.div>

      </div>

      {/* Floating Controls for the Background Video */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-20 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/85 border border-white/20 text-[11px] uppercase tracking-wider text-white hover:bg-[#B51F2D] transition-colors shadow-2xl rounded"
          title={isPlaying ? "Pause video" : "Resume video"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#ff4b5c]" />
              <span className="hidden sm:inline">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-white fill-white" />
              <span className="hidden sm:inline">Play</span>
            </>
          )}
        </button>

        <button
          onClick={toggleSound}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/85 border border-white/20 text-[11px] uppercase tracking-wider text-white hover:bg-[#B51F2D] transition-colors shadow-2xl rounded"
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#aaa]" />
              <span className="hidden sm:inline">Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#ff4b5c]" />
              <span className="hidden sm:inline">Sound On</span>
            </>
          )}
        </button>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#B51F2D] via-white to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
