import React from "react";
import { Compass, CheckCircle2, Award, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-24 px-6 md:px-12 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/founders_beach_horse_1788478486991.jpg" 
            alt="Pip Easton and Francois Ignatius standing together" 
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05] object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-[#070e1c]/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block">
            The Visionaries Behind the Re-education
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight uppercase">
            Bridging the Worlds <br />
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-secondary not-italic capitalize leading-[0.3]">Where horses teach & humans evolve</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed font-light">
            We believe in kindness, consciousness, clarity, and consistency as the absolute foundation for trust and self-carriage in horse and rider.
          </p>
        </div>
      </section>

      {/* Profiles & Experience */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* Pip Easton Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 border border-brand-border p-3 bg-white rounded-sm shadow-sm">
            <img 
              src="/src/assets/images/pip_hugging_horse_1788478505449.jpg" 
              alt="Pip Easton standing calmly next to her horse" 
              className="w-full aspect-5/6 object-cover rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Co-Founder</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary">Pip Easton</h2>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              With over 30 years of experience helping individuals and horses align, Pip is a deeply passionate natural horsewoman and Tony Robbins-trained life coach. Her training methodology dissolves traditional pressure-and-force behaviors, translating complex equine herd psychology into clear, compassionate step-by-step ground systems that horse owners can safely repeat at home.
            </p>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              Pip's coaching spans from nervous young children finding their footing to corporate executives seeking somatic mindfulness, all anchored in the profound, honest feedback that only a horse can provide.
            </p>
          </div>
        </div>

        {/* Francois Ignatius Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-5 lg:order-2 border border-brand-border p-3 bg-white rounded-sm shadow-sm">
            <img 
              src="/src/assets/images/covered_arena_clinic_1788478551562.jpg" 
              alt="Francois Ignatius performing horse training" 
              className="w-full aspect-5/6 object-cover rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 lg:order-1 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Co-Founder & "The Body Whisperer"</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary">Francois Ignatius</h2>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              Francois is a master horseman, specialized farrier, and barefoot trimming rehabilitation expert. Known affectionately as "The Body Whisperer," Francois has an uncanny ability to read a horse's structural alignment, posture, and residual pain. 
            </p>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              His work is dedicated to releasing physical tension and posture blocks in horses' bodies. By combining natural barefoot trimming with classical ground linguistics, Francois resolves behavioral issues by targeting physical pain and building real, anatomical balance in the horse.
            </p>
          </div>
        </div>

        {/* Philosophy Core: The Infinity Way */}
        <div className="bg-brand-surface border border-brand-border rounded-sm p-10 md:p-16 max-w-5xl mx-auto space-y-8 shadow-xs">
          <div className="text-center space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Our Philosophy</span>
            <h3 className="font-serif text-3xl font-bold text-brand-primary">The Infinity Way</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-brand-primary">Kindness & Consciousness</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                We completely reject physical force, tight tie-downs, or fear-based compliance. We treat both horse and human with deep empathy, listening closely to intuition and micro-signals.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-brand-primary">Clarity & Consistency</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                Setting clear, fair, and consistent spatial boundaries. We help humans master their somatic intent so horses can instantly understand their responsibility and space.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-brand-primary">Mastering the Mindset</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                Horses respond immediately to our internal state. By helping riders release judgement and cultivate physical composure, we resolve riding issues at their core.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-brand-primary">Spatial & Herd Awareness</h4>
              <p className="font-sans text-xs text-brand-primary/75 leading-relaxed font-light">
                Translating forty years of natural herd behavior into clear, logical milestones. Learn to become the calm, confident leader your horse inherently needs.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
