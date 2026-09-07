export interface Service {
  id: string;
  title: string;
  tagline: string;
  headline: string;
  category: "Core Foundation" | "Specialist Solutions" | "Riding & Biomechanics" | "Mindset & Growth";
  price: string;
  priceNote?: string;
  suitability: string;
  requirements: string[];
  whatHappens: string;
  duration: string;
  location: string;
  expectations: string;
  beforeYouBook: string[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Lessons & Travel" | "Float Training" | "Mindset & Therapy" | "Policies & Booking";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  tag?: string;
}
