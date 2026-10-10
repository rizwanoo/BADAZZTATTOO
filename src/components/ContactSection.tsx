import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Instagram, Mail, Calendar, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [quickMessage, setQuickMessage] = useState({
    name: '',
    emailOrIg: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.name || !quickMessage.message) return;

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setQuickMessage({ name: '', emailOrIg: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#090909] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#B51F2D] font-bold mb-3">
            Inquiries & Consultations
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide text-[#F2EEE7]">
            LET&apos;S TALK ABOUT YOUR NEXT PIECE.
          </h2>
          <p className="mt-4 font-editorial italic text-xl sm:text-2xl text-[#A8A8A8]">
            “Bring the idea. Share the inspiration. Let&apos;s explore what&apos;s possible.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Studio Information & Direct Contact Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-[#121212] border border-[#202020] p-8">
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-[#F2EEE7] mb-6">
                Studio Operations & Location
              </h3>

              <div className="space-y-6 text-sm">
                {/* Physical Studio Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#181818] border border-[#262626] text-[#B51F2D] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                      Bad Azz Tattoo Studio Location
                    </h4>
                    <p className="text-[#F2EEE7] mt-1 text-xs sm:text-sm font-medium">
                      {STUDIO_INFO.location.fullAddress}
                    </p>
                    <a
                      href={STUDIO_INFO.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#B51F2D] hover:underline mt-1 font-medium"
                    >
                      <span>Open in Google Maps (4.8 ★ · 184 Reviews)</span>
                    </a>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#181818] border border-[#262626] text-[#B51F2D] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                      Direct Phone & Schedule
                    </h4>
                    <a
                      href={`tel:${STUDIO_INFO.location.phone}`}
                      className="text-white hover:text-[#B51F2D] font-mono text-sm mt-1 block"
                    >
                      {STUDIO_INFO.location.phone}
                    </a>
                    <p className="text-[11px] text-[#888] mt-0.5">
                      Hours: {STUDIO_INFO.location.hours} · Appointments & Custom Consultations
                    </p>
                  </div>
                </div>

                {/* Official Instagram */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#181818] border border-[#262626] text-[#B51F2D] shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                      John Schmitz Direct Instagram
                    </h4>
                    <a
                      href={STUDIO_INFO.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B51F2D] hover:underline font-mono text-sm mt-1 inline-block"
                    >
                      {STUDIO_INFO.instagram.handle}
                    </a>
                    <p className="text-[11px] text-[#666] mt-1">
                      Direct messaging for concept ideas, questions, and session coordination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Age Restriction Policy Box */}
              <div className="mt-8 p-4 bg-[#181213] border border-[#B51F2D]/30 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#B51F2D] shrink-0 mt-0.5" />
                <div className="text-xs text-[#bbb] leading-relaxed">
                  <strong className="text-white uppercase tracking-wider block mb-0.5">Strict 18+ Florida Law:</strong>
                  All clients must present a valid government-issued photo ID. No minors, even with parental consent.
                </div>
              </div>

              {/* Comprehensive Booking Trigger CTA */}
              <div className="mt-8 pt-6 border-t border-[#1e1e1e]">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-[0.2em] font-bold border border-[#B51F2D] transition-all shadow-[0_0_20px_rgba(181,31,45,0.35)] cursor-pointer"
                >
                  Launch Full 5-Step Booking Request
                </button>
              </div>
            </div>
          </div>

          {/* Right: Quick Question Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#121212] border border-[#202020] p-8">
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-[#F2EEE7] mb-2">
                Have a Quick Question?
              </h3>
              <p className="text-xs text-[#8c8c8c] mb-6">
                Send a direct inquiry about placement, scheduling, or concept viability.
              </p>

              {messageSent ? (
                <div className="p-8 text-center bg-[#161616] border border-[#262626]">
                  <CheckCircle2 className="w-10 h-10 text-[#B51F2D] mx-auto mb-3" />
                  <h4 className="font-display text-lg uppercase text-white font-bold">
                    Message Sent
                  </h4>
                  <p className="text-xs text-[#888] mt-1">
                    Thank you. John will review your note and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickMessage.name}
                      onChange={(e) => setQuickMessage({ ...quickMessage, name: e.target.value })}
                      placeholder="Alex"
                      className="w-full bg-[#181818] border border-[#262626] focus:border-[#B51F2D] px-4 py-3 text-sm text-[#F2EEE7] placeholder-[#555] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-semibold mb-1.5">
                      Email or Instagram Username *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickMessage.emailOrIg}
                      onChange={(e) => setQuickMessage({ ...quickMessage, emailOrIg: e.target.value })}
                      placeholder="@username or you@example.com"
                      className="w-full bg-[#181818] border border-[#262626] focus:border-[#B51F2D] px-4 py-3 text-sm text-[#F2EEE7] placeholder-[#555] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-semibold mb-1.5">
                      Your Question or Idea *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={quickMessage.message}
                      onChange={(e) => setQuickMessage({ ...quickMessage, message: e.target.value })}
                      placeholder="Ask about design concepts, sizing, or preparation..."
                      className="w-full bg-[#181818] border border-[#262626] focus:border-[#B51F2D] px-4 py-3 text-sm text-[#F2EEE7] placeholder-[#555] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1a1a1a] hover:bg-[#B51F2D] text-[#F2EEE7] hover:text-white text-xs uppercase tracking-[0.2em] font-semibold border border-[#2d2d2d] hover:border-[#B51F2D] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
