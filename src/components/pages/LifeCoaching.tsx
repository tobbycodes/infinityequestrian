import React from "react";
import { CheckCircle2, Award, Sparkles, BookOpen } from "lucide-react";

interface LifeCoachingPageProps {
  onEnquireClick: (serviceId?: string) => void;
}

export default function LifeCoachingPage({ onEnquireClick }: LifeCoachingPageProps) {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-24 px-6 md:px-12 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/founders_beach_horse_1788478486991.jpg" 
            alt="Pip Easton standing peacefully next to a horse in nature" 
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-[#070e1c]/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block">
            Mindset, Alignment & Purpose
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight uppercase">
            Mindset & Life Coaching <br />
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-secondary not-italic capitalize leading-[0.3]">with Pip Easton</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Over 30 years of helping individuals release subconscious blocks, master emotional state, and align actions with their authentic purpose. Studied under master coach Tony Robbins.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onEnquireClick("life-coaching")}
              className="bg-brand-secondary text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-[#FAF8F5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl cursor-pointer"
            >
              Consultation Booking
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="border border-brand-border p-3 bg-white rounded-sm shadow-sm">
              <img 
                src="/assets/images/pip_hugging_horse_1788478505449.jpg" 
                alt="Pip Easton - Master Mindset Coach" 
                className="w-full aspect-5/6 object-cover rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-secondary/15 text-brand-secondary px-3.5 py-1.5 rounded-sm">
              <Award className="w-4 h-4 text-brand-secondary" />
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Tony Robbins Academy Alumna</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary leading-tight">
              Re-patterning Subconscious Beliefs for Authentic Self-Leadership
            </h2>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              Most challenges in our careers, relationships, and equestrian journeys don't stem from lack of skill—they stem from silent, internal defense mechanisms. Pip Easton combines decades of practical human psychology with insights from equine behavioral linguistics to help you discover where you're holding back.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="font-serif text-lg font-bold text-brand-primary">The Transformational Focus:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-brand-primary/85 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                  <span>Subconscious Mindset Re-patterning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                  <span>Somatic & Breathing Composure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                  <span>Healthy Personal & Professional Boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                  <span>Intuition-based Decision Making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Three C's System */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Transformational Framework</span>
            <h2 className="font-serif text-3xl font-bold text-brand-primary">The Three C's of Transformation</h2>
            <p className="font-sans text-xs text-brand-primary/70 leading-relaxed font-light">
              Pip's structured transformation model applies equally to corporate leadership, individual personal growth, and creating deeper bonds with your horse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-secondary/30 block">01</span>
              <h4 className="font-serif text-xl font-bold text-brand-primary">Composure</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                Learning to regulate your physical nervous system, slow your heart rate, and master emotional triggers before you interact with your environment.
              </p>
            </div>

            <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-secondary/30 block">02</span>
              <h4 className="font-serif text-xl font-bold text-brand-primary">Consciousness</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                Releasing judgement, dissolving defensive beliefs, mastering mindset, listening to your gut intuition, and cultivating absolute presence.
              </p>
            </div>

            <div className="bg-brand-surface border border-brand-border p-8 rounded-sm space-y-4">
              <span className="font-serif text-4xl font-bold text-brand-secondary/30 block">03</span>
              <h4 className="font-serif text-xl font-bold text-brand-primary">Connection</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                Establishing clear, fair, and consistent spatial boundaries. Bridging the gap between your intent and how others perceive your energy.
              </p>
            </div>
          </div>
        </div>

        {/* Private Coaching Form Info */}
        <div className="bg-brand-surface border border-brand-border rounded-sm p-8 md:p-12 max-w-4xl mx-auto shadow-xs text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Start Your Journey</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">Private Online Virtual Coaching</h3>
          <p className="font-sans text-xs sm:text-sm text-brand-primary/75 max-w-2xl mx-auto leading-relaxed font-light">
            We conduct customized coaching sessions via Zoom, making self-mastery and leadership coaching accessible regardless of where you are located. Individual sessions or structured 6-session packages available.
          </p>
          <button
            onClick={() => onEnquireClick("life-coaching")}
            className="bg-brand-primary hover:bg-brand-primary/95 text-white font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm transition-all cursor-pointer"
          >
            Apply for Private Coaching
          </button>
        </div>

      </section>
    </div>
  );
}
