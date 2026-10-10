import { X, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0e0e0e] border border-[#2a2a2a] p-6 sm:p-8 text-[#F2EEE7] my-auto max-h-[85vh] overflow-y-auto shadow-2xl"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#222]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B51F2D]" />
            <h3 className="font-display text-lg font-bold uppercase tracking-wider">
              Studio Policies & Privacy Terms
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#888] hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-5 text-xs text-[#A8A8A8] leading-relaxed">
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-1">
              1. Age Requirement (Strict Florida Law)
            </h4>
            <p>
              In strict compliance with Florida State Regulations (Chapter 381.0075), all tattoo recipients must be at least 18 years of age. A valid, unexpired government-issued photo identification (Driver&apos;s License, State ID, Passport, or Military ID) must be presented in person prior to beginning any tattoo session.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-1">
              2. Design Deposits & Scheduling
            </h4>
            <p>
              A standard design deposit is required to confirm appointments and initiate custom artwork preparation. Deposits are non-refundable and are credited directly toward the final cost of your tattoo session. Rescheduling requires at least 48 hours prior notice.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-1">
              3. Privacy & Personal Information
            </h4>
            <p>
              Your contact information (name, phone number, email, reference photos) submitted through BADAZZTATTOO is handled confidentially and utilized exclusively by John Schmitz for consultation, scheduling, and direct client correspondence. Information is never sold, shared, or distributed.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-1">
              4. Sterile Environment & Aftercare
            </h4>
            <p>
              {STUDIO_INFO.brandName} utilizes 100% single-use, sterile disposable needle cartridges, medical barrier films, and hospital-grade sanitization protocols. Comprehensive aftercare instructions will be provided in writing upon session completion.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#222] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#B51F2D] text-white text-xs uppercase tracking-wider font-semibold"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
