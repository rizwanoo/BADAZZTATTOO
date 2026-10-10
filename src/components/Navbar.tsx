import { useState, useEffect } from 'react';
import { Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenBooking, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'The Work', href: '#portfolio', id: 'portfolio' },
    { label: 'The Artist', href: '#artist', id: 'artist' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#202020] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Artist Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B51F2D] rounded"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#2e2e2e] group-hover:border-[#B51F2D] transition-colors shadow-lg shrink-0">
              <img
                src="/images/badazztattoo-logo.jpg"
                alt="BADAZZTATTOO official logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold tracking-[0.2em] text-[#F2EEE7] group-hover:text-white transition-colors">
                {STUDIO_INFO.brandName}
              </span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#A8A8A8] font-medium">
                {STUDIO_INFO.artistName} · TATTOO ARTIST
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#A8A8A8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 hover:text-[#F2EEE7] focus-visible:outline-none focus-visible:text-[#B51F2D] ${
                    isActive ? 'text-[#F2EEE7] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B51F2D]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={STUDIO_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit verified Instagram profile of John Schmitz"
              className="p-2 text-[#A8A8A8] hover:text-[#F2EEE7] hover:border-[#B51F2D] transition-colors rounded-full border border-transparent hover:border-[#202020]"
              title="Official Instagram @notwheelienelson"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-none border border-[#B51F2D] transition-all duration-200 shadow-[0_0_20px_rgba(181,31,45,0.35)] hover:shadow-[0_0_28px_rgba(181,31,45,0.6)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B51F2D] focus-visible:ring-offset-[#080808]"
            >
              <span>Book a Session</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-[#B51F2D] text-white text-[11px] uppercase tracking-wider font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A8A8A8] hover:text-white border border-[#202020] rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080808]/98 border-b border-[#202020] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm uppercase tracking-[0.18em]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-[#181818] ${
                  activeSection === link.id ? 'text-[#B51F2D] font-bold' : 'text-[#A8A8A8]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#B51F2D] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
            >
              <span>Book a Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={STUDIO_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-wider text-[#A8A8A8] border border-[#202020]"
            >
              <Instagram className="w-4 h-4 text-[#B51F2D]" />
              <span>Instagram: {STUDIO_INFO.instagram.handle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
