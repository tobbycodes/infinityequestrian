import React from "react";
import { CheckCircle2, ShieldAlert, Sparkles, Heart, Compass } from "lucide-react";

interface EquineMirrorPageProps {
  onEnquireClick: (serviceId?: string) => void;
}

export default function EquineMirrorPage({ onEnquireClick }: EquineMirrorPageProps) {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-24 px-6 md:px-12 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/founders_beach_horse_1788478486991.jpg" 
            alt="Pip Easton and Francois Ignatius standing together in natural surroundings" 
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05] object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-[#070e1c]/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block">
            Equine-Assisted Self-Awareness
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight uppercase">
            The Equine Mirror Experience <br />
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-secondary not-italic capitalize leading-[0.3]">Where the horse reflects your truth</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed font-light">
            A non-riding, deeply grounding 90-minute session. Discover how horses read your heart rate, micro-expressions, and internal composure to guide you toward conscious self-leadership.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onEnquireClick("equine-mirror")}
              className="bg-brand-secondary text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-[#FAF8F5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl cursor-pointer"
            >
              Book 90-Min Experience
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy & Structure */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">
              The Science of Connection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary leading-tight">
              Why Horses Make Unbiased Mentors
            </h2>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              As prey animals, horses survived for millions of years by reading the tiniest shifts in their herd's physical and emotional states. They do not care about your job title, your past mistakes, or the stories you tell yourself. 
            </p>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              Instead, they respond strictly to your immediate somatic composure, heart rate, and authentic assertiveness. When you learn to slow your breathing and align your actions with your internal intent, the horse's response shifts instantly—providing a clear, honest mirror of your leadership state.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Heart className="w-5 h-5 text-brand-secondary" />
                <h4 className="font-serif text-lg font-bold text-brand-primary">No Riding Required</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Conducted entirely from the ground in a safe, fenced arena or round yard. Open to everyone, regardless of horse experience.
                </p>
              </div>
              <div className="space-y-2">
                <Sparkles className="w-5 h-5 text-brand-secondary" />
                <h4 className="font-serif text-lg font-bold text-brand-primary">Somatic Centering</h4>
                <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                  Learn physical breathing and nervous-system regulation protocols to immediately dissipate stress and anxiety.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-brand-border p-3 bg-white rounded-sm shadow-sm relative">
              <img 
                src="/assets/images/pip_hugging_horse_1788478505449.jpg" 
                alt="Pip Easton standing with her horse, listening and interacting" 
                className="w-full h-full object-cover rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Quote Block */}
        <div className="border-y border-brand-border py-12 text-center max-w-4xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl italic text-brand-primary leading-relaxed">
            "I walked into the arena carrying weeks of corporate stress. Within fifteen minutes, without a single word being spoken, the horse guided me to find my center. It was the most honest feedback I have ever received."
          </p>
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-secondary uppercase block mt-6">
            — Sarah M., Business Owner
          </span>
        </div>

        {/* Pricing & Structure Callout */}
        <div className="bg-brand-surface border border-brand-border rounded-sm p-8 md:p-12 max-w-4xl mx-auto shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase">Rates & Booking</span>
            <h3 className="font-serif text-2xl font-bold text-brand-primary">The 90-Minute Private Mirror Session</h3>
            <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
              Includes a guided centering protocol, structured ground interaction with one of our calm herd members, and a reflective debrief session with Pip Easton.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-brand-primary/80 pt-2">
              <li className="flex items-center gap-2">✔ Gympie area training arena</li>
              <li className="flex items-center gap-2">✔ All equipment supplied</li>
              <li className="flex items-center gap-2">✔ Suitable for absolute beginners</li>
              <li className="flex items-center gap-2">✔ Fully insured professional coaching</li>
            </ul>
          </div>
          <div className="md:col-span-4 text-center border-t md:border-t-0 md:border-l border-brand-border pt-6 md:pt-0 md:pl-8 space-y-4">
            <span className="font-serif text-3xl font-bold text-brand-primary">$150 AUD</span>
            <span className="font-sans text-[10px] text-brand-primary/60 block uppercase tracking-wider leading-none">Single Private Session</span>
            <button
              onClick={() => onEnquireClick("equine-mirror")}
              className="w-full text-center font-sans text-xs font-bold tracking-widest bg-brand-primary hover:bg-brand-primary/95 text-white uppercase py-3.5 rounded-sm transition-all cursor-pointer"
            >
              Book Session
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
