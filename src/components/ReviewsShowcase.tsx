import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Phone, Clock, ExternalLink, Quote, CheckCircle2, ChevronRight } from 'lucide-react';
import { GOOGLE_REVIEWS_SUMMARY, VERIFIED_GOOGLE_REVIEWS } from '../data/reviewsData';

export default function ReviewsShowcase() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredReviews = selectedTag === 'All'
    ? VERIFIED_GOOGLE_REVIEWS
    : VERIFIED_GOOGLE_REVIEWS.filter(r => r.tags?.includes(selectedTag));

  return (
    <section id="reviews" className="relative py-28 sm:py-36 bg-[#090909] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.3em] text-[#B51F2D] font-bold">
              <span className="w-6 h-[1px] bg-[#B51F2D]" />
              <span>Verified Client Reputation</span>
            </div>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide text-[#F2EEE7]">
              GOOGLE REVIEWS & STUDIO REPUTATION.
            </h2>

            <p className="mt-3 font-editorial italic text-xl sm:text-2xl text-[#A8A8A8]">
              “4.8 Stars across 184 genuine client experiences at 105 Boston Rd, Edgewater, FL.”
            </p>
          </div>

          {/* Google Maps External Link Button */}
          <a
            href={GOOGLE_REVIEWS_SUMMARY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#141414] hover:bg-[#1f1f1f] border border-[#2c2c2c] hover:border-[#B51F2D] text-xs uppercase tracking-wider text-white transition-all self-start md:self-auto shrink-0"
          >
            <div className="flex items-center gap-1 text-[#f59e0b]">
              <Star className="w-4 h-4 fill-[#f59e0b]" />
              <span className="font-bold text-white">4.8</span>
            </div>
            <span>View 184 Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#888]" />
          </a>
        </div>

        {/* Business Profile Snapshot Card */}
        <div className="mb-14 p-6 sm:p-8 bg-[#111111] border border-[#222] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs divide-y md:divide-y-0 md:divide-x divide-[#1e1e1e]">
            
            {/* Rating Stat */}
            <div className="pb-4 md:pb-0 md:pr-4 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#181818] border border-[#282828] flex flex-col items-center justify-center shrink-0">
                <span className="text-xl font-bold font-display text-white">4.8</span>
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-[#f59e0b]" />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-white font-bold uppercase tracking-wider block">
                  {GOOGLE_REVIEWS_SUMMARY.shopName}
                </span>
                <span className="text-[#888] mt-0.5 block">
                  {GOOGLE_REVIEWS_SUMMARY.totalReviews} Google Reviews
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="pt-4 md:pt-0 md:px-4 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#B51F2D] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold uppercase tracking-wider block">
                  Studio Address
                </span>
                <span className="text-[#aaa] mt-0.5 block leading-relaxed">
                  {GOOGLE_REVIEWS_SUMMARY.address}
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="pt-4 md:pt-0 md:px-4 flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#B51F2D] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold uppercase tracking-wider block">
                  Studio Hours
                </span>
                <span className="text-[#aaa] mt-0.5 block">
                  {GOOGLE_REVIEWS_SUMMARY.hours}
                </span>
                <span className="text-[#666] text-[11px] block">
                  Appointments & Consultations
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="pt-4 md:pt-0 md:pl-4 flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#B51F2D] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold uppercase tracking-wider block">
                  Phone Direct
                </span>
                <a
                  href={`tel:${GOOGLE_REVIEWS_SUMMARY.phone}`}
                  className="text-white hover:text-[#B51F2D] font-mono mt-0.5 block transition-colors"
                >
                  {GOOGLE_REVIEWS_SUMMARY.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Featured Studio Storefront & John at Shop (FULL SIZE DISPLAY) */}
          <div className="mt-10 pt-10 border-t border-[#1e1e1e] space-y-8">
            
            {/* FULL SIZE SHOP EXTERIOR SHOWCASE (100% UNCROPPED FULL IMAGE) */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B51F2D] font-bold block">
                    Official Studio Headquarters · Full Exterior View
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-wide mt-1">
                    BAD AZZ TATTOO STOREFRONT · 105 BOSTON RD
                  </h3>
                </div>
                <div className="text-xs uppercase tracking-wider text-[#A8A8A8] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B51F2D]" />
                  <span>Edgewater, Florida · Full-Resolution Display</span>
                </div>
              </div>

              {/* Full Uncropped Image Frame */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#2e2e2e] bg-[#0c0c0c] shadow-[0_25px_60px_rgba(0,0,0,0.95)] group flex flex-col items-center">
                
                {/* Image rendered in full dimensions without cropping */}
                <div className="w-full bg-[#080808] flex items-center justify-center p-2 sm:p-4">
                  <img
                    src="/images/shop-exterior.jpg"
                    alt="Bad Azz Tattoo, LLC official building storefront at 105 Boston Rd, Edgewater, FL"
                    className="w-full h-auto object-contain rounded-lg filter contrast-105 group-hover:scale-101 transition-transform duration-500"
                  />
                </div>

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
                  <div className="bg-black/90 backdrop-blur-md border border-[#B51F2D] px-3 py-1.5 text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-2 shadow-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#B51F2D]" />
                    <span>Official Studio Storefront</span>
                  </div>
                  <div className="bg-black/90 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs uppercase tracking-wider text-[#fbbf24] font-semibold flex items-center gap-1.5 shadow-xl">
                    <Star className="w-3.5 h-3.5 fill-[#fbbf24]" />
                    <span>4.8 ★ (184 Google Reviews)</span>
                  </div>
                </div>

                {/* Bottom Metadata Bar */}
                <div className="w-full bg-[#121212] border-t border-[#222] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-display text-base sm:text-lg font-bold uppercase text-white tracking-wider">
                      Bad Azz Tattoo, LLC
                    </div>
                    <div className="text-xs text-[#aaa] mt-0.5">
                      105 Boston Rd, Edgewater, FL 32141, United States · Open 12:00 PM
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={GOOGLE_REVIEWS_SUMMARY.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 transition-colors shadow-lg"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Directions on Maps</span>
                      <ExternalLink className="w-3 h-3 text-[#fca5a5]" />
                    </a>
                    <a
                      href={`tel:${GOOGLE_REVIEWS_SUMMARY.phone}`}
                      className="px-4 py-2.5 bg-[#181818] hover:bg-[#252525] text-white text-xs uppercase tracking-wider font-mono border border-white/15 transition-colors"
                    >
                      {GOOGLE_REVIEWS_SUMMARY.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PAIRED SHOWCASE: JOHN SCHMITZ AT BAD AZZ TATTOO (FULL UNCROPPED) */}
            <div className="max-w-5xl mx-auto p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative w-full bg-[#080808] rounded-lg overflow-hidden border border-[#2e2e2e] shadow-xl p-2 flex items-center justify-center">
                <img
                  src="/images/john-at-badazz-shop.jpg"
                  alt="John Schmitz tattooing station at Bad Azz Tattoo"
                  className="w-full h-auto max-h-[420px] object-contain rounded-md filter contrast-105"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B51F2D] font-bold">
                  <span className="w-5 h-[1px] bg-[#B51F2D]" />
                  <span>On-Site Tattoo Craftsmanship</span>
                </div>
                <h4 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                  JOHN SCHMITZ AT THE SHOP
                </h4>
                <blockquote className="font-editorial italic text-lg sm:text-xl text-[#F2EEE7]/95 border-l-2 border-[#B51F2D] pl-4 py-1">
                  &ldquo;Hmu at Bad Azz Tattoo! If anyone’s been wanting a tattoo, reach out. I’m here and creating custom ink at 105 Boston Rd.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-[#aaa] font-light leading-relaxed">
                  Collaborate directly with John Schmitz on custom projects, large-scale sleeves, fine line precision, or consultation stencils right here at Bad Azz Tattoo.
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#B51F2D] hover:bg-[#8F1521] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    <span>Schedule Consultation with John</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Filter Tags from Google Reviews */}
          <div className="mt-8 pt-6 border-t border-[#1e1e1e] flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-[#666] mr-2">
              Topic Highlights:
            </span>
            <button
              onClick={() => setSelectedTag('All')}
              className={`px-3 py-1 text-xs uppercase tracking-wider border transition-colors ${
                selectedTag === 'All'
                  ? 'border-[#B51F2D] bg-[#1a1214] text-white'
                  : 'border-[#262626] bg-[#141414] text-[#888] hover:text-[#ccc]'
              }`}
            >
              All Feedback
            </button>
            {['John Schmitz', 'Clean Lines', 'Line Work', 'Shading', 'First Tattoo'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 text-xs uppercase tracking-wider border transition-colors ${
                  selectedTag === tag
                    ? 'border-[#B51F2D] bg-[#1a1214] text-white font-semibold'
                    : 'border-[#262626] bg-[#141414] text-[#888] hover:text-[#ccc]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-[#121212] border border-[#202020] hover:border-[#B51F2D]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1b1b1b]">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      {rev.author}
                    </h4>
                    {rev.badge && (
                      <span className="text-[10px] text-[#777] block mt-0.5">
                        {rev.badge}
                      </span>
                    )}
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#f59e0b]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                {/* Review Quote Body */}
                <p className="mt-4 text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Review Footer with Tags */}
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-[10px] uppercase tracking-wider text-[#666]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#B51F2D]" />
                  <span>Google Verified</span>
                </div>
                <span>{rev.timeAgo}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to View More or Leave a Review on Google Maps */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_SUMMARY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#A8A8A8] hover:text-white transition-colors pb-1 border-b border-[#333] hover:border-[#B51F2D]"
          >
            <span>Read all 184 reviews directly on Google Maps</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B51F2D]" />
          </a>
        </div>

      </div>
    </section>
  );
}
