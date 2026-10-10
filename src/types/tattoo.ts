export type TattooStyle = 
  | 'All' 
  | 'Black & Grey' 
  | 'Realism' 
  | 'Blackwork' 
  | 'Fine Line' 
  | 'Custom Designs'
  | 'Large-Scale Pieces';

export interface PortfolioItem {
  id: string;
  title: string;
  category: TattooStyle;
  image: string;
  placement: string;
  size: string;
  isRealArtistAsset?: boolean;
  notes?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  process: string[];
  ctaLabel: string;
  defaultConcept: string;
}

export interface BookingFormData {
  // Step 1: Idea
  conceptName: string;
  style: string;
  placement: string;
  customPlacement?: string;
  approxSize: string;
  colorType: 'Black & Grey' | 'Full Color' | 'Artist Recommendation';
  description: string;

  // Step 2: Reference files
  referenceImages: { name: string; url: string; size: string }[];

  // Step 3: Contact Details
  fullName: string;
  email: string;
  phone: string;
  contactMethod: 'Instagram DM' | 'Text Message' | 'Email' | 'Phone Call';
  instagramHandle?: string;

  // Step 4: Preferences
  preferredDate: string;
  alternativeDate: string;
  timePreference: 'Morning' | 'Afternoon' | 'Evening' | 'Flexible';
  firstTattoo: boolean;
  notes: string;

  // Step 5: Terms
  acceptedTerms: boolean;
}

export interface SubmittedBooking extends BookingFormData {
  referenceId: string;
  submittedAt: string;
  status: 'Pending Review' | 'Accepted' | 'Consultation Scheduled';
}
