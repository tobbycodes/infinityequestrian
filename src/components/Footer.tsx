import React from "react";
import { Mail, Phone, MapPin, Award, ShieldCheck, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-surface text-brand-primary border-t border-brand-border">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand details */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-sm border border-brand-border bg-[#0b1528] overflow-hidden flex items-center justify-center shadow-md">
              <img 
                src="/assets/images/infinity_logo_1788471531048.jpg" 
                alt="Infinity Equestrian Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl font-bold tracking-widest text-brand-primary uppercase block">
                Infinity
              </span>
              <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary uppercase block mt-[-2px]">
                Equestrian
              </span>
            </div>
          </div>
          <p className="font-sans text-xs text-brand-primary/80 leading-relaxed max-w-sm">
            Based in Gympie and traveling throughout the Sunshine Coast, QLD, we help riders and horse owners develop absolute confidence, self-leadership, and somatic connection.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-col gap-2 pt-2 text-brand-primary/75">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-secondary block mb-1">
              Credentials & Philosophy
            </span>
            <div className="flex items-center gap-2 text-xs">
              <Award className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span>Pip Easton: Certified Laser Life Coach (NLP & Neuroscience)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span>40+ Years Horse Linguistics & Classical Horsemanship</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Heart className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span>Francois Ignatius: Classical Equitation & Topline Specialist</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-brand-secondary uppercase">
            Directory
          </h4>
          <ul className="space-y-2.5 font-sans text-xs text-brand-primary/75">
            <li>
              <button onClick={() => scrollToSection("approach")} className="hover:text-brand-secondary transition-editorial text-left cursor-pointer">
                The Approach
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-brand-secondary transition-editorial text-left cursor-pointer">
                Experiences
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("finder")} className="hover:text-brand-secondary transition-editorial text-left cursor-pointer">
                Match Finder
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faqs")} className="hover:text-brand-secondary transition-editorial text-left cursor-pointer">
                FAQs
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-brand-secondary transition-editorial text-left cursor-pointer">
                About Us
              </button>
            </li>
          </ul>
        </div>

        {/* Territories */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-brand-secondary uppercase">
            Service Territories
          </h4>
          <p className="font-sans text-xs text-brand-primary/80 leading-relaxed mb-4">
            We operate as a mobile service based in Gympie and travel directly to client arenas/properties in:
          </p>
          <ul className="space-y-2 font-sans text-xs text-brand-primary/85 font-semibold">
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-secondary" /> Gympie Region, QLD
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-secondary" /> Sunshine Coast, QLD
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-secondary" /> Hervey Bay, QLD
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-secondary" /> Caboolture Region, QLD
            </li>
          </ul>
        </div>

        {/* Core contact details */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-sans text-xs font-bold tracking-widest text-brand-secondary uppercase">
            Direct Contact
          </h4>
          <p className="font-sans text-xs text-brand-primary/80 leading-relaxed">
            For urgent clinic scheduling, float rental, or custom partnerships:
          </p>
          <div className="space-y-3 font-sans text-xs pt-1">
            <a
              href="mailto:support@infinitylife.au"
              className="flex items-center gap-2 hover:text-brand-secondary transition-editorial"
            >
              <Mail className="w-4 h-4 text-brand-secondary" />
              <span>support@infinitylife.au</span>
            </a>
            <a
              href="tel:+61407087799"
              className="flex items-center gap-2 hover:text-brand-secondary transition-editorial"
            >
              <Phone className="w-4 h-4 text-brand-secondary" />
              <span>+61 407 087 799</span>
            </a>
            <a
              href="https://www.facebook.com/InfinityLifeandInfinityEquestrian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 text-brand-primary hover:text-brand-secondary border border-brand-border px-3.5 py-2.5 rounded-sm transition-editorial"
            >
              Connect on Facebook <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower Copyright ribbon */}
      <div className="border-t border-brand-border py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-primary/50 font-sans text-[11px] tracking-wider">
          <p>
            © {currentYear} Infinity Equestrian. All Rights Reserved. Sunshine Coast, Gympie, QLD.
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-brand-secondary">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
              Factual Truth Verified
            </span>
            <span className="text-[10px] uppercase font-bold">
              Designed for Time-Saving Admin Efficiency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
