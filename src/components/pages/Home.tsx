import React from "react";
import { 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  AlertTriangle, 
  Search, 
  HelpCircle, 
  Award, 
  Heart, 
  ExternalLink 
} from "lucide-react";
import ServiceFinder from "../ServiceFinder";
import { SERVICES_DATA, GENERAL_FAQS, TESTIMONIALS, TRUST_STATS } from "../../data";
import { Service } from "../../types";

interface HomePageProps {
  onEnquireClick: () => void;
  onFinderClick: () => void;
  onServiceSelect: (serviceId: string) => void;
  selectedServiceId: string;
  setActiveModalService: (service: Service | null) => void;
  faqSearch: string;
  setFaqSearch: (val: string) => void;
  activeFaqTab: string;
  setActiveFaqTab: (val: string) => void;
  filteredFaqs: typeof GENERAL_FAQS;
  faqCategories: string[];
}

export default function HomePage({
  onEnquireClick,
  onFinderClick,
  onServiceSelect,
  selectedServiceId,
  setActiveModalService,
  faqSearch,
  setFaqSearch,
  activeFaqTab,
  setActiveFaqTab,
  filteredFaqs,
  faqCategories,
}: HomePageProps) {
  return (
    <div>
      {/* Hero Section - Immersive Fullscreen Editorial Aesthetic aligned with flyer branding */}
      <section className="relative min-h-screen flex items-center pt-36 pb-24 overflow-hidden px-6 md:px-12 bg-brand-dark">
        {/* Full-bleed background image with sophisticated dual gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/
            assets/images/body_whisperer_rope_halter_1788481515314.jpg"
            alt="Gentle horseman calmly connecting with a dark bay horse in a blue halter" 
            className="w-full h-full object-cover object-center scale-[1.01] filter brightness-[0.38] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Precise, luxury editorial vignettes & gradients to maximize text readability and color contrast fading to brand navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent md:via-[#070e1c]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-[#070e1c]/10 to-[#070e1c]/60" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Column 1: Typography Storytelling matching flyer */}
            <div className="lg:col-span-8 space-y-6 md:space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5]/10 text-white border border-[#FAF8F5]/25 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 bg-brand-secondary rounded-full animate-pulse" />
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-[#FAF8F5]">
                  Mobile Services Gympie & Sunshine Coast QLD
                </span>
              </div>

              {/* Dynamic Logo-styled Heading Stack */}
              <div className="space-y-3 md:space-y-4">
                <div className="space-y-1">
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[0.25em] text-white leading-none uppercase">
                    Infinity
                  </h2>
                  <div className="flex items-center gap-2 pl-1">
                    <span className="h-[1px] bg-brand-secondary/40 w-8" />
                    <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.35em] text-brand-secondary uppercase block">
                      Equestrian
                    </span>
                    <span className="h-[1px] bg-brand-secondary/40 w-8" />
                  </div>
                </div>

                <div className="relative pt-3 pl-1">
                  <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-secondary block leading-[0.2] -rotate-[2deg] origin-left select-none pb-5 drop-shadow-lg">
                    Bulletproof
                  </span>
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wider text-white uppercase block leading-tight">
                    Foundation System
                  </span>
                </div>

                <div className="pt-2 pl-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-t border-white/10 max-w-xl">
                  <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-[#FAF8F5]/80 uppercase block">
                    THE BODY WHISPERER
                  </span>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <span className="font-script text-3xl text-brand-secondary block leading-none">
                    Clear & Fair Communication
                  </span>
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/85 leading-relaxed max-w-2xl font-light">
                We translate natural herd psychology into a logical, 7-step groundwork foundation system, classical riding mechanics, and somatic bodywork to release deep-seated physical tension. We do not use force. We travel directly to your property.
              </p>

              {/* Verified Ribbon Badge */}
              <div className="flex flex-wrap gap-4 items-center text-xs text-white/70 font-sans font-semibold pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-secondary" />
                  Principals: Pip Easton & Francois Ignatius
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-secondary" />
                  Territories: Sunshine Coast, Gympie, Caboolture, Hervey Bay
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button 
                  onClick={onFinderClick}
                  className="bg-brand-secondary text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-4.5 px-8 rounded-sm hover:bg-[#FAF8F5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 shadow-xl cursor-pointer"
                >
                  <Compass className="w-4 h-4" /> Match My Experience
                </button>
                <button 
                  onClick={onEnquireClick}
                  className="border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white font-sans text-xs font-bold tracking-widest uppercase py-4.5 px-8 rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  Quick Enquiry <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Column 2: Elegant Philosophy and Core Belief Box */}
            <div className="lg:col-span-4 relative flex lg:justify-end mt-6 lg:mt-0">
              <div className="bg-[#0b1528]/80 backdrop-blur-md border border-brand-secondary/35 p-8 rounded-sm max-w-md w-full shadow-2xl space-y-6 animate-fade-in relative overflow-hidden">
                {/* Accent corner design elements mimicking the flyer border rules */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-secondary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-secondary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-secondary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-secondary" />
                
                <div className="text-center space-y-2">
                  <span className="font-sans text-[10px] font-extrabold tracking-[0.25em] text-brand-secondary uppercase block">
                    Our Core Promise
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
                    The Connected Approach
                  </h3>
                  <div className="h-[1px] bg-brand-secondary/30 w-16 mx-auto mt-2" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-brand-secondary text-sm shrink-0 mt-0.5">✦</span>
                    <p className="font-sans text-xs text-[#FAF8F5]/85 leading-relaxed font-light">
                      <strong className="text-brand-secondary font-medium block mb-0.5 uppercase tracking-wide text-[10px]">Natural Groundwork Linguistics</strong>
                      Build direct, mutual respect and absolute safety by speaking the horse's native herd language.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-brand-secondary text-sm shrink-0 mt-0.5">✦</span>
                    <p className="font-sans text-xs text-[#FAF8F5]/85 leading-relaxed font-light">
                      <strong className="text-brand-secondary font-medium block mb-0.5 uppercase tracking-wide text-[10px]">Anatomical Alignment</strong>
                      Combine classical equitation and specialized barefoot trimming to target physical posture, balance, and release.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-brand-secondary text-sm shrink-0 mt-0.5">✦</span>
                    <p className="font-sans text-xs text-[#FAF8F5]/85 leading-relaxed font-light">
                      <strong className="text-brand-secondary font-medium block mb-0.5 uppercase tracking-wide text-[10px]">Somatic Self-Mastery</strong>
                      Develop calm breathing, consistent intent, and nervous-system composure so your horse chooses to follow.
                    </p>
                  </div>
                </div>

                <div className="border-t border-brand-secondary/20 pt-4 text-center space-y-2">
                  <span className="font-script text-3xl text-brand-secondary block leading-none pl-1">
                    "Become the Leader
                  </span>
                  <span className="font-script text-3xl text-brand-secondary block leading-none pl-1 -mt-1">
                    Your Horse Needs You to Be"
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll down indicator absolute centered at bottom */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 cursor-pointer"
          onClick={onFinderClick}
        >
          <span className="font-sans text-[9px] tracking-[0.25em] uppercase">Scroll to Begin</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trust & Real Statistics Bar */}
      <section className="bg-brand-surface border-y border-brand-border py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary block">{TRUST_STATS.yearsExperience}</span>
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-secondary block mt-1">
              Years Active Coaching
            </span>
          </div>
          <div className="text-center md:text-left border-l border-brand-border/80 pl-0 md:pl-8">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary block">{TRUST_STATS.clientsHelped}</span>
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-secondary block mt-1">
              Enquiries Qualified
            </span>
          </div>
          <div className="text-center md:text-left border-l border-brand-border/80 pl-0 md:pl-8">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary block">{TRUST_STATS.successRate}</span>
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-secondary block mt-1">
              Desensitization Success
            </span>
          </div>
          <div className="text-center md:text-left border-l border-brand-border/80 pl-0 md:pl-8">
            <span className="font-serif text-base sm:text-lg font-bold text-brand-primary block line-clamp-1">{TRUST_STATS.locationServed}</span>
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-secondary block mt-1">
              Mobile Servicing Zone
            </span>
          </div>
        </div>
      </section>

      {/* The Core Approach: 7-Step Bulletproof Foundation */}
      <section id="approach" className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-2">
                Our Signature Framework
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
                The Infinity Way: <br />
                7-Step Bulletproof Foundation System
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-xs sm:text-sm text-brand-primary/80 leading-relaxed font-light">
                Rather than treating symptoms of fear or resistance (such as biting, bucking, or float refusal) with short-term force, Pip Easton's 7-Step Foundation focuses on underlying horse-to-human language. This system translates herd behaviors into step-by-step milestones you can safely repeat at home.
              </p>
            </div>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Steps */}
            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">01</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Internal Composure</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Riders learn to regulate their own heart rate and somatic tension before ever touching the lead rope.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Rider Mindset</span>
            </div>

            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">02</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Herd Signaling</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Mastering the visual language of horses: interpreting ear tracking, eye blinking, and breathing shifts.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Ground Linguistics</span>
            </div>

            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">03</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Pressure Demarcation</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Establishing healthy boundaries. Training your horse to respect and yield his personal space on request.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Safety First</span>
            </div>

            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">04</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Desensitization Loops</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Methodical exposure to scary objects (tarp, whip, float ramp) to quiet the horse's instinctual flight mechanism.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Focus Mastery</span>
            </div>

            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">05</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Willing Direction</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Guiding directional movements, halting, and backing up purely from posture cues on a loose lead rope.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Soft Controls</span>
            </div>

            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">06</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Somatic Biomechanics</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Transferring calm ground boundaries and alignment principles cleanly into under-saddle classical movement.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Under Saddle</span>
            </div>

            <div className="bg-brand-surface border border-brand-border p-6 rounded-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-serif text-3xl font-bold text-brand-secondary/40 block mb-4">07</span>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-1">Conscious Union</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  The ultimate goal: riding and handling with complete, subtle, reciprocal communication and safety.
                </p>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-wider uppercase text-brand-secondary mt-4 block">Unified Connection</span>
            </div>

            {/* Final CTA Box */}
            <div className="bg-brand-primary border border-brand-secondary/20 p-6 rounded-sm flex flex-col justify-between min-h-[220px] text-white">
              <div>
                <Sparkles className="w-6 h-6 text-brand-secondary mb-4 animate-pulse" />
                <h4 className="font-serif text-lg font-bold text-[#FAF8F5] mb-1">Instant Digital Access</h4>
                <p className="font-sans text-xs text-[#FAF8F5]/80 leading-relaxed font-light">
                  Get immediate lifetime access to the 7-Step Bulletproof foundation manuals and modules.
                </p>
              </div>
              <button 
                onClick={() => {
                  setActiveModalService(SERVICES_DATA[0]);
                }}
                className="text-brand-secondary hover:text-[#FAF8F5] transition-editorial font-sans text-xs font-bold tracking-wider uppercase flex items-center gap-1 cursor-pointer"
              >
                Access for $97 AUD <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Main Experiences Directory */}
      <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-brand-bg border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-2">
              The Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              Our Experiences & Specialist Services
            </h2>
            <div className="h-0.5 w-12 bg-brand-secondary mx-auto mt-4 mb-4" />
            <p className="font-sans text-xs text-brand-primary/70 leading-relaxed font-light">
              Every service is structured to answer all suitability, location, and requirement questions. Select a service to read detailed schedules, expectations, and booking policies before making contact.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 0;
              const requiresHorse = [
                "ridden-lessons-equitation",
                "zen-float-loading",
                "barefoot-trimming",
                "equissage-massage-therapy"
              ].includes(service.id);
              
              return (
                <div 
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="aspect-4/3 bg-white border border-brand-border p-3.5 rounded-sm relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover rounded-sm grayscale-10 hover:grayscale-0 transition-editorial duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-brand-primary text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-sm shadow-sm">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-1"} space-y-6`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-brand-secondary font-bold tracking-widest uppercase">
                        {service.tagline}
                      </span>
                      <span className="text-brand-border/60">•</span>
                      <span className="text-xs text-brand-primary/55 font-semibold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {service.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary">
                      {service.title}
                    </h3>
                    
                    <p className="font-serif text-base text-brand-primary/80 italic">
                      "{service.headline}"
                    </p>

                    <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                      {service.whatHappens}
                    </p>

                    {/* Requirements tags */}
                    <div className="border-t border-brand-border/60 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
                      <div>
                        <span className="text-brand-primary/50 text-[10px] block uppercase font-bold">Suitability</span>
                        <span className="text-brand-primary font-semibold block mt-0.5">{service.suitability}</span>
                      </div>
                      <div>
                        <span className="text-brand-primary/50 text-[10px] block uppercase font-bold">Base Investment</span>
                        <span className="text-brand-secondary font-bold block mt-0.5">{service.price}</span>
                      </div>
                    </div>

                    {/* Requirement Warning */}
                    {requiresHorse && (
                      <div className="bg-brand-surface border border-brand-border/60 px-4 py-2.5 rounded-sm flex items-center gap-2 text-xs text-brand-accent font-sans font-bold">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>Strictly Requires Your Own Horse & Arena/Paddock Area</span>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button 
                        onClick={() => setActiveModalService(service)}
                        className="bg-brand-primary text-[#FAF8F5] text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm hover:bg-brand-primary/95 transition-editorial cursor-pointer"
                      >
                        Read Guidelines & Policies
                      </button>
                      <button 
                        onClick={() => {
                          onServiceSelect(service.id);
                          onEnquireClick();
                        }}
                        className="border border-brand-border hover:bg-brand-surface text-brand-primary text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm transition-editorial cursor-pointer"
                      >
                        Inquire Directly
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bonus Float Hire ribbon */}
          <div className="mt-20 md:mt-28 bg-brand-primary text-[#FAF8F5] border border-brand-secondary/25 rounded-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="bg-brand-secondary/25 text-brand-secondary text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm">
                Additional Rental Assets
              </span>
              <h4 className="font-serif text-2xl font-bold">Double Straight Load Float Hire</h4>
              <p className="font-sans text-xs text-white/70 max-w-xl font-light">
                We rent out our clean, robust, double straight load horse trailer for clients to travel safely. Direct hire rate is <strong>$80 AUD for up to 6 hours</strong>. Booking must be qualified in advance.
              </p>
            </div>
            <button 
              onClick={() => {
                onServiceSelect("general");
                onEnquireClick();
              }}
              className="bg-[#D4AF37] text-neutral-900 hover:bg-white hover:text-brand-primary text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm transition-editorial shadow-xs cursor-pointer"
            >
              Request Float Rental
            </button>
          </div>

        </div>
      </section>

      {/* Experience Match Finder Section */}
      <section id="finder" className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-1">
              Interactive Guidance
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">
              Not sure which service fits?
            </h2>
            <p className="font-sans text-xs text-brand-primary/70 mt-2 font-light">
              Answer two quick questions below, and our system will match you to the correct verified experience, outlining exact restrictions so you don't send unwanted messages.
            </p>
          </div>

          <ServiceFinder 
            services={SERVICES_DATA} 
            onSelectService={onServiceSelect}
            onOpenDetails={(service) => setActiveModalService(service)}
          />
        </div>
      </section>

      {/* Zero-Friction Booking Blueprint */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Sidebar Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-1">
                  How We Protect Your Time
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
                  The Zero-Friction Booking Blueprint
                </h2>
                <p className="font-sans text-xs text-brand-primary/70 mt-4 leading-relaxed font-light">
                  Infinity Equestrian is a premium mobile operation focused on deep partnership and biomechanics. To protect both our clients and ourselves from administrative overhead, this digital platform integrates automated qualification checks. 
                </p>
                <p className="font-sans text-xs text-brand-primary/70 mt-2 leading-relaxed font-light">
                  Here is how our platform streamlines the booking process, ensuring every hour spent on your property is 100% focused on progress:
                </p>
              </div>

              <div className="bg-[#f7f6f2] border border-brand-border p-6 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-sans text-xs font-bold tracking-wider uppercase">Administrative Sentry</span>
                </div>
                <p className="font-sans text-[11px] text-brand-primary/80 leading-relaxed font-light">
                  Our system filters out un-qualified inquiries automatically, saving <strong>up to 15 hours of phone-tag per week</strong>. This leaves us free to focus on what matters most: helping you and your horse.
                </p>
              </div>
            </div>

            {/* Right Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border border-brand-border/75 p-6 rounded-sm hover:border-brand-secondary transition-editorial space-y-4">
                <div className="w-10 h-10 bg-[#f7f6f2] rounded-full flex items-center justify-center text-brand-primary font-serif font-bold text-sm">
                  01
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-primary">The "No-Horse" Filter</h4>
                <p className="font-sans text-xs text-brand-primary/70 leading-relaxed font-light">
                  Because we are a mobile service, we do not provide school horses. Non-horse owners are gently and instantly steered toward remote <strong>Mindset Coaching</strong> or ground-based <strong>Equine Therapy</strong>, completely eliminating booking misunderstandings.
                </p>
              </div>

              <div className="border border-brand-border/75 p-6 rounded-sm hover:border-brand-secondary transition-editorial space-y-4">
                <div className="w-10 h-10 bg-[#f7f6f2] rounded-full flex items-center justify-center text-brand-primary font-serif font-bold text-sm">
                  02
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-primary">Territory Qualification</h4>
                <p className="font-sans text-xs text-brand-primary/70 leading-relaxed font-light">
                  We base our travel schedules around Gympie, the Sunshine Coast, Hervey Bay, and Caboolture. Our intake form pre-qualifies your geographical area, allowing us to factor travel surcharges into our first response with absolute clarity.
                </p>
              </div>

              <div className="border border-brand-border/75 p-6 rounded-sm hover:border-brand-secondary transition-editorial space-y-4">
                <div className="w-10 h-10 bg-[#f7f6f2] rounded-full flex items-center justify-center text-brand-primary font-serif font-bold text-sm">
                  03
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-primary">Somatic Horse Intake</h4>
                <p className="font-sans text-xs text-brand-primary/70 leading-relaxed font-light">
                  Instead of lengthy unbilled phone calls extracting basic data, our groundwork & float loading forms mandate a thorough horse history (age, breed, safety warnings). We arrive at your property fully briefed and ready to train.
                </p>
              </div>

              <div className="border border-brand-border/75 p-6 rounded-sm hover:border-brand-secondary transition-editorial space-y-4">
                <div className="w-10 h-10 bg-[#f7f6f2] rounded-full flex items-center justify-center text-brand-primary font-serif font-bold text-sm">
                  04
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-primary">Pip & Francois Co-Coaching</h4>
                <p className="font-sans text-xs text-brand-primary/70 leading-relaxed font-light">
                  Clear, transparent alignment of professional expertise ensures your message lands in the correct hand: Pip for NLP neuroscience & mindset; Francois for physical biomechanics, barefoot trimming, and Equissage tension release.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Real Reviews & Testimonials */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-brand-surface border-t border-brand-border relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-1">
              Social Proof
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-primary">
              What Real Handlers & Riders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white border border-brand-border p-8 rounded-sm flex flex-col justify-between relative shadow-xs">
                <div>
                  <span className="bg-brand-surface text-brand-primary/60 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm mb-6 inline-block">
                    {t.tag}
                  </span>
                  <p className="font-serif text-sm italic text-brand-primary/80 leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <div className="h-px bg-brand-border/60 mb-4" />
                  <h4 className="font-sans text-xs font-bold text-brand-primary">{t.author}</h4>
                  <p className="font-sans text-[11px] text-brand-primary/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-sans text-[11px] text-brand-primary/50 tracking-wider">
              All stories are verified from actual Infinity Equestrian Facebook clinic feedback • Check out our{" "}
              <a 
                href="https://www.facebook.com/InfinityLifeandInfinityEquestrian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-secondary hover:text-brand-primary transition-editorial underline inline-flex items-center gap-0.5 font-bold"
              >
                Facebook Community <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-1">
                  FAQ Desk
                </span>
                <h2 className="font-serif text-3xl font-bold text-brand-primary">
                  Got Questions? <br />
                  Find Answers Instantly.
                </h2>
                <p className="font-sans text-xs text-brand-primary/70 mt-2 leading-relaxed font-light">
                  We are highly transparent about how we operate. Use the tabs or search field below to instantly find policies on weather, travel, cancellations, and horse prerequisites.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-brand-primary/40 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search cancel, travel, rain..."
                  value={faqSearch}
                  onChange={e => setFaqSearch(e.target.value)}
                  className="w-full bg-[#f7f6f2] border border-brand-border focus:border-brand-secondary rounded-sm py-3 pl-10 pr-4 font-sans text-xs outline-none transition-editorial"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap lg:flex-col gap-2">
                {faqCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFaqTab(cat)}
                    className={`text-left font-sans text-xs font-semibold tracking-wider px-4 py-2.5 rounded-sm transition-editorial uppercase cursor-pointer ${
                      activeFaqTab === cat
                        ? "bg-[#1A1A1A] text-white"
                        : "bg-[#f7f6f2] hover:bg-brand-surface text-brand-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-brand-border p-5 rounded-sm hover:border-brand-secondary transition-editorial bg-[#f7f6f2]/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-brand-secondary/10 text-brand-secondary text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                        {faq.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-brand-primary">
                      {faq.question}
                    </h4>
                    <p className="font-sans text-xs text-brand-primary/75 leading-relaxed mt-2 pl-4 border-l-2 border-brand-secondary/40">
                      {faq.answer}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-brand-border/60 rounded-sm">
                  <HelpCircle className="w-8 h-8 text-brand-primary/30 mx-auto mb-3" />
                  <p className="font-sans text-xs text-brand-primary/50">
                    No answers match your specific search phrase. Please enquire below for custom support!
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
