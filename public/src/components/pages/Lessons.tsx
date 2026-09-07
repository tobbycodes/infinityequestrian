import React from "react";
import { ShieldCheck, MapPin, Sparkles, Compass, CheckCircle2, ArrowRight } from "lucide-react";

interface LessonsPageProps {
  onEnquireClick: (serviceId?: string) => void;
}

export default function LessonsPage({ onEnquireClick }: LessonsPageProps) {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Editorial Header */}
      <section className="relative py-24 px-6 md:px-12 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/public/assets/images/dressage_chestnut_arena_1788478530930.jpg" 
            alt="Chestnut horse performing dressage with perfect biomechanics" 
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-[#070e1c]/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block">
            Lessons, Coaching & Hoofcare
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight uppercase">
            Absolute patience meets <br />
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-secondary not-italic capitalize leading-[0.3]">classical riding mechanics</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you want to solve groundwork tension, master ridden self-carriage, or ensure healthy hoof movement, we travel directly to your property across Sunshine Coast & Gympie.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onEnquireClick("lessons-groundwork")}
              className="bg-brand-secondary text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-[#FAF8F5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl cursor-pointer"
            >
              Book Private Lesson
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        
        {/* Service 1: Groundwork & Ridden Lessons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">
              01 • Private Training
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary leading-tight">
              Groundwork Mastery & Classical Ridden Mechanics
            </h2>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              We work with riders of all disciplines to build structural health, confidence, and absolute trust. Every session is designed to solve communication gaps by combining the natural linguistics of horses with classical equitation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  <strong>Groundwork Foundations:</strong> Mastering lead-rope feel, spatial boundary awareness, and pressure-release diagnostics.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  <strong>Classical Position & Mechanics:</strong> Re-aligning the rider's seat, hand position, and balance to invite effortless self-carriage.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  <strong>Addressing Fears:</strong> Safely resolving shying, herd-bound behaviors, tension, and rushing under saddle.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-4">
              <div>
                <span className="font-serif text-2xl font-bold text-brand-primary">$111 AUD / hr</span>
                <span className="font-sans text-[10px] text-brand-primary/60 block uppercase tracking-wider mt-0.5">Mobile travel included (base zones)</span>
              </div>
              <button
                onClick={() => onEnquireClick("lessons-groundwork")}
                className="bg-brand-primary hover:bg-brand-primary/95 text-white font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-sm transition-all cursor-pointer"
              >
                Inquire Now
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-brand-border p-3 bg-white rounded-sm shadow-sm">
              <img 
                src="/public/assets/images/pip_hugging_horse_1788478505449.jpg" 
                alt="Pip Easton riding a bay horse with refined, light contact" 
                className="w-full aspect-4/3 object-cover rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Service 2: Barefoot Trimming */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">
              02 • Specialist Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary leading-tight">
              Barefoot Trimming & Hoof Rehabilitation
            </h2>
            <p className="font-sans text-sm text-brand-primary/80 leading-relaxed font-light">
              Led by master farrier and horseman Francois Ignatius. We perform balanced anatomical trims that evaluate the horse's entire posture, limb alignment, and natural movement patterns rather than just looking at the hoof capsule.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  <strong>Hoof Rehab:</strong> Helping horses transition successfully from steel shoes to barefoot, or treating laminitis, seedy toe, and thrush.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  <strong>Postural Balance:</strong> Adjusting the heel and toe heights to encourage natural, healthy biomechanics in the legs and back.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  <strong>Cooperative Handling:</strong> Working patiently with nervous, young, or arthritic horses who struggle to stand for trim work.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-4">
              <div>
                <span className="font-serif text-2xl font-bold text-brand-primary">$80 AUD / horse</span>
                <span className="font-sans text-[10px] text-brand-primary/60 block uppercase tracking-wider mt-0.5">Surcharges may apply for extended travel</span>
              </div>
              <button
                onClick={() => onEnquireClick("barefoot-trimming")}
                className="bg-brand-primary hover:bg-brand-primary/95 text-white font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-sm transition-all cursor-pointer"
              >
                Book Trimming
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="border border-brand-border p-3 bg-white rounded-sm shadow-sm">
              <img 
                src="/public/assets/images/covered_arena_clinic_1788478551562.jpg" 
                alt="Francois Ignatius performing hoofcare and groundwork" 
                className="w-full aspect-4/3 object-cover rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
