import React from "react";
import { Calendar, Users, MapPin, Compass, ArrowRight, ShieldCheck } from "lucide-react";

interface ClinicsPageProps {
  onEnquireClick: (serviceId?: string) => void;
}

export default function ClinicsPage({ onEnquireClick }: ClinicsPageProps) {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-24 px-6 md:px-12 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/covered_arena_clinic_1788478551562.jpg" 
            alt="Groundwork lesson with focus and connection" 
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-[#070e1c]/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block">
            Equestrian Clinics & Workshops
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight uppercase">
            Groundwork mastery & biomechanics <br />
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-secondary not-italic capitalize leading-[0.3]">in a collaborative atmosphere</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Our specialized clinics provide a supportive, small-group environment to deepen your feel, refine rider balance, and build true willingness in your horse.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onEnquireClick("clinics-art-of-feel")}
              className="bg-brand-secondary text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-[#FAF8F5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl cursor-pointer"
            >
              Enquire for Upcoming Clinic
            </button>
          </div>
        </div>
      </section>

      {/* Clinic Details */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-3xl font-bold text-brand-primary">Our Signature Clinic Curriculums</h2>
          <p className="font-sans text-sm text-brand-primary/75 leading-relaxed font-light">
            Rather than large auditoriums, we restrict our rider spots to 6-8 per clinic. This ensures that Pip Easton and Francois Ignatius can provide hands-on, highly customized coaching for every horse-and-human partnership.
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Clinic 1 */}
          <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <span className="font-sans text-[9px] font-bold tracking-widest text-brand-secondary bg-brand-secondary/15 px-2.5 py-1 rounded-xs uppercase">
                Aesthetic & Feel
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-primary">The Art of Feel Clinics</h3>
              <p className="font-sans text-xs text-brand-primary/80 leading-relaxed font-light">
                Focuses heavily on rider body awareness, soft hands, saddle balance, and releasing residual anxiety/tension in both horse and rider. Ideal for establishing deep emotional regulation and fluid riding contact.
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-border/60">
                <div className="flex items-center gap-2 text-xs text-brand-primary/70">
                  <Users className="w-4 h-4 text-brand-secondary" />
                  <span>Max 8 Rider Spots</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-primary/70">
                  <MapPin className="w-4 h-4 text-brand-secondary" />
                  <span>Sunshine Coast Venues</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onEnquireClick("clinics-art-of-feel")}
              className="w-full text-center font-sans text-xs font-bold tracking-widest bg-brand-primary hover:bg-brand-primary/95 text-white uppercase py-3 rounded-sm transition-all cursor-pointer mt-4"
            >
              Enquire Now
            </button>
          </div>

          {/* Clinic 2 */}
          <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <span className="font-sans text-[9px] font-bold tracking-widest text-brand-secondary bg-brand-secondary/15 px-2.5 py-1 rounded-xs uppercase">
                1-2 Day Intensive
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-primary">Mini Clinics</h3>
              <p className="font-sans text-xs text-brand-primary/80 leading-relaxed font-light">
                Intensive full-day workshops covering groundwork mastery in the morning, followed by structured ridden biomechanics sessions in the afternoon. Includes deep group discussions and video reviews of horse behavior.
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-border/60">
                <div className="flex items-center gap-2 text-xs text-brand-primary/70">
                  <Users className="w-4 h-4 text-brand-secondary" />
                  <span>Max 6 Rider Spots</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-primary/70">
                  <MapPin className="w-4 h-4 text-brand-secondary" />
                  <span>Gympie & Wide Bay Regions</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onEnquireClick("clinics-mini")}
              className="w-full text-center font-sans text-xs font-bold tracking-widest bg-brand-primary hover:bg-brand-primary/95 text-white uppercase py-3 rounded-sm transition-all cursor-pointer mt-4"
            >
              Enquire Now
            </button>
          </div>

          {/* Clinic 3 */}
          <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <span className="font-sans text-[9px] font-bold tracking-widest text-brand-secondary bg-brand-secondary/15 px-2.5 py-1 rounded-xs uppercase">
                Biomechanics
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-primary">Secret of Shoulder-In</h3>
              <p className="font-sans text-xs text-brand-primary/80 leading-relaxed font-light">
                A dedicated ridden clinic focusing entirely on lateral work, horse straightness, self-carriage, and building a strong, healthy topline. Unlocks the key exercises required for classical equitation and dressage.
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-border/60">
                <div className="flex items-center gap-2 text-xs text-brand-primary/70">
                  <Users className="w-4 h-4 text-brand-secondary" />
                  <span>Max 8 Rider Spots</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-primary/70">
                  <MapPin className="w-4 h-4 text-brand-secondary" />
                  <span>Sunshine Coast Venues</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onEnquireClick("clinics-shoulder-in")}
              className="w-full text-center font-sans text-xs font-bold tracking-widest bg-brand-primary hover:bg-brand-primary/95 text-white uppercase py-3 rounded-sm transition-all cursor-pointer mt-4"
            >
              Enquire Now
            </button>
          </div>

        </div>

        {/* Interactive Highlight */}
        <div className="bg-brand-primary text-white rounded-sm p-10 md:p-12 relative overflow-hidden border border-brand-secondary/25">
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/images/dressage_chestnut_arena_1788478530930.jpg" 
              alt="Horses in a paddock behaving naturally" 
              className="w-full h-full object-cover opacity-15 filter grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="font-sans text-[9px] font-bold tracking-widest text-brand-secondary uppercase">Host a Clinic</span>
            <h3 className="font-serif text-3xl font-bold">Have your own arena?</h3>
            <p className="font-sans text-sm text-[#FAF8F5]/85 leading-relaxed font-light">
              We travel to private properties, riding clubs, and agistment centers across QLD to host customized 1 or 2-day clinics. If you organize 6 or more riders, you receive your rider spot entirely free as a host.
            </p>
            <button
              onClick={() => onEnquireClick("host-clinic")}
              className="bg-brand-secondary text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm hover:bg-[#FAF8F5] transition-all cursor-pointer"
            >
              Host a Clinic at Your Venue
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
