export interface GoogleReview {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  timeAgo: string;
  text: string;
  tags?: string[];
}

export const GOOGLE_REVIEWS_SUMMARY = {
  shopName: 'Bad Azz Tattoo, LLC',
  rating: 4.8,
  totalReviews: 184,
  category: 'Tattoo shop',
  address: '105 Boston Rd, Edgewater, FL 32141, United States',
  phone: '+1 386-409-9573',
  hours: 'Closed · Opens 12:00 PM',
  plusCode: 'X4C4+7G Edgewater, Florida, USA',
  mapsUrl: 'https://www.google.com/maps/place/Bad+Azz+Tattoo,+LLC/@28.9707176,-80.893698,17z/data=!4m15!1m8!3m7!1s0x88e72c2b4d953dd3:0xfea0428230555fb4!2sBad+Azz+Tattoo,+LLC!8m2!3d28.9707176!4d-80.893698!10e1!16s%2Fg%2F1tdlcjwq!3m5!1s0x88e72c2b4d953dd3:0xfea0428230555fb4!8m2!3d28.9707176!4d-80.893698!16s%2Fg%2F1tdlcjwq?entry=ttu',
  highlightTopics: [
    { label: 'Line work', count: 5 },
    { label: 'Clean lines', count: 2 },
    { label: 'Shading', count: 5 },
    { label: 'Artistic eye', count: 5 },
    { label: 'Personable staff', count: 3 },
    { label: 'Size & placement', count: 2 }
  ]
};

export const VERIFIED_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Caitlin Cook',
    badge: 'Local Guide · 16 reviews',
    rating: 5,
    timeAgo: '2 months ago',
    text: 'My daughter and I decided to get matching mother-daughter tattoos on our last day visiting New Smyrna Beach, and it couldn’t have been a better experience. This tattoo was especially meaningful because it was my daughter’s very first.',
    tags: ['First Tattoo', 'Clean Lines']
  },
  {
    id: 'rev-2',
    author: 'Michele Solms',
    badge: '3 reviews',
    rating: 5,
    timeAgo: '10 months ago',
    text: 'John is a great guy. Matt and Tom are great tattoo artists. If you are looking for beautiful work this is the place to go.',
    tags: ['John Schmitz', 'Custom Work']
  },
  {
    id: 'rev-3',
    author: 'Maria Cornforth',
    badge: '5 reviews',
    rating: 5,
    timeAgo: '9 months ago',
    text: 'Had a great experience here. John was very kind, respectful, and welcoming. Lots of laughs were had. Everything was done professionally. I would recommend this place to anyone in the area.',
    tags: ['John Schmitz', 'Professionalism']
  },
  {
    id: 'rev-4',
    author: 'Alissa Burke',
    badge: '3 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    text: 'John is awesome! The whole time he was friendly, personable and made sure I was comfortable. Clean, welcoming atmosphere. Thank you!!',
    tags: ['John Schmitz', 'Personable']
  },
  {
    id: 'rev-5',
    author: 'Sarah Grimes',
    badge: 'Local Guide · 19 reviews',
    rating: 5,
    timeAgo: '4 years ago',
    text: 'Excellent attention to details. Line work was on point!! Made sure I was 100% happy with size and placement before starting, and made sure I was comfortable throughout the tattoo. Definitely recommend this place!! Found my new tattoo shop.',
    tags: ['Line Work', 'Size & Placement']
  },
  {
    id: 'rev-6',
    author: 'Mckenna Madison',
    badge: '3 reviews · 5 photos',
    rating: 5,
    timeAgo: '6 months ago',
    text: 'Another fabulous tattoo done at Bad Azz. Always made sure that I was ok and or needed a break. The line work and shading is absolutely amazing, just have to get the back side finished!',
    tags: ['Shading', 'Detail']
  },
  {
    id: 'rev-7',
    author: 'Madeline Colon',
    badge: 'Local Guide · 24 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    text: 'We had a great consultation, took time with me and my boyfriend. Super artistic eye and participated in creating a beautiful piece that we are so happy with! Everything is clean.',
    tags: ['Artistic Eye', 'Consultation']
  },
  {
    id: 'rev-8',
    author: 'Nathan Perez',
    badge: '8 reviews · 2 photos',
    rating: 5,
    timeAgo: '2 years ago',
    text: 'Cool, professional and very talented and will make you very comfortable during the whole process. Clean environment and exceptional results after healing.',
    tags: ['Healing', 'Clean Environment']
  }
];
