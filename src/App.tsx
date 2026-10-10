import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtistFeature from './components/ArtistFeature';
import PortfolioGallery from './components/PortfolioGallery';
import ReviewsShowcase from './components/ReviewsShowcase';
import Philosophy from './components/Philosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TermsModal from './components/TermsModal';

export default function App() {
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['hero', 'portfolio', 'artist', 'reviews', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2EEE7] selection:bg-[#B51F2D] selection:text-white flex flex-col font-sans">
      
      {/* Dynamic Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Full-screen Cinematic Video Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. John Schmitz — Artist Feature (Real Portraits) */}
        <ArtistFeature onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Tattoo Portfolio — The Main Event (Editorial Grid & Lightbox) */}
        <PortfolioGallery
          onOpenBookingWithStyle={(_style, _concept) => handleOpenBooking()}
        />

        {/* 4. Google Reviews & Studio Reputation (Bad Azz Tattoo, LLC 4.8★) */}
        <ReviewsShowcase />

        {/* 5. Why The Right Tattoo Matters (3 Pillars) */}
        <Philosophy />

        {/* 6. Studio Contact & Information */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Terms & Privacy Policies Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      {/* Floating Mobile Booking Bar (Accessibility on small screens) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-[#222] p-3 flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-wider text-[#F2EEE7]">
          BADAZZTATTOO
        </div>
        <button
          onClick={() => handleOpenBooking()}
          className="px-5 py-2.5 bg-[#B51F2D] text-white text-xs uppercase tracking-wider font-bold shadow-lg"
        >
          Book a Session
        </button>
      </div>

    </div>
  );
}
