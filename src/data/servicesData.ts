import { ServiceItem } from '../types/tattoo';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-tattoos',
    title: 'Custom Tattoos',
    tagline: 'Single session & focused concepts',
    description: 'Collaborate one-on-one with John to translate your visual concept, anatomical placement, and stylistic references into a bespoke, enduring tattoo.',
    process: [
      'Concept exploration & anatomical alignment',
      'Original custom stencil design & sizing',
      'Sterile single-use setup & precision execution',
      'Dedicated aftercare regimen guidance'
    ],
    ctaLabel: 'Request a Personalized Quote',
    defaultConcept: 'Custom Tattoo Session'
  },
  {
    id: 'large-scale-projects',
    title: 'Large-Scale Projects',
    tagline: 'Full sleeves, backpieces & multi-session narratives',
    description: 'Comprehensive multi-session commitments developed to flow organically with the body’s musculature, utilizing deliberate contrast, scale, and longevity.',
    process: [
      'In-depth master composition blueprinting',
      'Body mapping & movement considerations',
      'Structured multi-session scheduling',
      'Progressive shading, saturation & detail passes'
    ],
    ctaLabel: 'Inquire on Project Scope',
    defaultConcept: 'Large-Scale Multi-Session Project'
  },
  {
    id: 'design-consultation',
    title: 'Design Consultation',
    tagline: 'Artistic direction & concept refinement',
    description: 'Share your references, discuss sizing feasibility, explore stylistic directions, and establish a clear artistic roadmap before ink touches skin.',
    process: [
      'Direct review of your moodboards & ideas',
      'Placement & longevity feasibility review',
      'Style recommendation (fine-line, realism, blackwork)',
      'Deposit confirmation & calendar scheduling'
    ],
    ctaLabel: 'Book a Design Consultation',
    defaultConcept: 'Concept Design Consultation'
  }
];
