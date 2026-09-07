import React, { useState } from "react";
import { ChevronRight, RotateCcw, CheckCircle, Sparkles, MapPin } from "lucide-react";
import { Service } from "../types";

interface ServiceFinderProps {
  services: Service[];
  onSelectService: (serviceId: string) => void;
  onOpenDetails: (service: Service) => void;
}

interface QuestionStep {
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    nextValue: string;
  }[];
}

export default function ServiceFinder({ services, onSelectService, onOpenDetails }: ServiceFinderProps) {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    ownHorse: "",
    goalType: "",
  });

  const handleReset = () => {
    setSelections({ ownHorse: "", goalType: "" });
    setStep(1);
  };

  const getRecommendedService = (): Service | null => {
    const { ownHorse, goalType } = selections;
    if (ownHorse === "yes") {
      if (goalType === "float") {
        return services.find(s => s.id === "zen-float-loading") || services[1];
      }
      if (goalType === "ridden") {
        return services.find(s => s.id === "ridden-lessons-equitation") || services[2];
      }
      if (goalType === "barefoot") {
        return services.find(s => s.id === "barefoot-trimming") || services[2];
      }
      if (goalType === "massage") {
        return services.find(s => s.id === "equissage-massage-therapy") || services[3];
      }
      return services.find(s => s.id === "bulletproof-foundation") || services[0];
    } else {
      if (goalType === "mindset") {
        return services.find(s => s.id === "mindset-life-coaching") || services[4];
      }
      return services.find(s => s.id === "equine-assisted-therapy") || services[5];
    }
  };

  // Steps structure
  const step1: QuestionStep = {
    title: "Do you currently own or have regular access to a horse?",
    subtitle: "Ridden, physical therapy, and groundwork lessons strictly require your own horse and paddock.",
    options: [
      {
        label: "Yes, I have my own horse",
        description: "Groundwork, biomechanics, ridden coaching, barefoot trimming, or Equissage massage.",
        nextValue: "yes",
      },
      {
        label: "No, I do not have a horse",
        description: "Interested in online coaching, remote life strategy, or local equine-assisted therapy.",
        nextValue: "no",
      },
    ],
  };

  const step2WithHorse: QuestionStep = {
    title: "What is your main training focus or challenge?",
    subtitle: "Identify the core barrier you are experiencing with your horse.",
    options: [
      {
        label: "Float Loading & Traveling",
        description: "My horse panics, refuses to load, or rushes backward out of trailers.",
        nextValue: "float",
      },
      {
        label: "Riding Mechanics & Dressage",
        description: "Improving carriage, building correct topline muscles, or refined equitation aids.",
        nextValue: "ridden",
      },
      {
        label: "Hoof Care & Barefoot Trimming",
        description: "Anatomical barefoot trimming, transitioning from shoes, or hoof rehabilitation.",
        nextValue: "barefoot",
      },
      {
        label: "Muscle Soreness & Tension Relief",
        description: "Deep somatic massage, equine recovery, or Equissage Pulse therapy for stiffness.",
        nextValue: "massage",
      },
      {
        label: "Ground Respect & Safety Foundations",
        description: "Establishing mutual language, boundary management, or basic leadership cues.",
        nextValue: "foundation",
      },
    ],
  };

  const step2NoHorse: QuestionStep = {
    title: "What are you hoping to cultivate or overcome?",
    subtitle: "Choose the environment that feels most aligned to your personal goals.",
    options: [
      {
        label: "Mindset, Fear, or Performance Coaching",
        description: "Addressing anxiety after an accident, show nerves, or setting life targets (Remote).",
        nextValue: "mindset",
      },
      {
        label: "Somatic, Experiential Ground Connection",
        description: "Hands-on non-riding therapy with horses at our Sunshine Coast Sanctuary.",
        nextValue: "therapy",
      },
    ],
  };

  const currentQuestion = step === 1 ? step1 : selections.ownHorse === "yes" ? step2WithHorse : step2NoHorse;
  const recommendedService = step === 3 ? getRecommendedService() : null;

  const handleSelectOption = (val: string) => {
    if (step === 1) {
      setSelections(prev => ({ ...prev, ownHorse: val }));
      setStep(2);
    } else if (step === 2) {
      setSelections(prev => ({ ...prev, goalType: val }));
      setStep(3);
    }
  };

  return (
    <div className="w-full bg-brand-surface border border-brand-border/80 rounded-sm p-6 md:p-10 lg:p-12 transition-editorial shadow-xs">
      {/* Title Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-brand-primary text-[#f7f6f2] p-2.5 rounded-sm">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-secondary uppercase block">
            Self-Selection Assistant
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-primary">
            Find Your Infinity Experience
          </h3>
        </div>
      </div>

      {step < 3 ? (
        <div>
          {/* Progress Indicator */}
          <div className="flex gap-2 mb-6">
            <span className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? "bg-brand-secondary" : "bg-brand-border"}`} />
            <span className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? "bg-brand-secondary" : "bg-brand-border"}`} />
            <span className="h-1.5 flex-1 rounded-full bg-brand-border" />
          </div>

          <p className="font-sans text-xs font-semibold tracking-wider text-brand-secondary mb-2 uppercase">
            Step {step} of 2
          </p>
          <h4 className="font-serif text-xl md:text-2xl text-brand-primary font-medium mb-2 leading-tight">
            {currentQuestion.title}
          </h4>
          <p className="font-sans text-xs text-brand-primary/75 mb-8">
            {currentQuestion.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelectOption(option.nextValue)}
                className="text-left bg-white border border-brand-border p-6 rounded-sm hover:border-brand-secondary hover:shadow-xs transition-editorial group focus-visible:outline-brand-secondary focus-visible:outline-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-serif text-lg font-bold text-brand-primary group-hover:text-brand-secondary transition-editorial">
                    {option.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-brand-primary/40 group-hover:text-brand-secondary transition-editorial transform group-hover:translate-x-1" />
                </div>
                <p className="font-sans text-xs text-brand-primary/70 leading-relaxed">
                  {option.description}
                </p>
              </button>
            ))}
          </div>

          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="mt-8 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-brand-primary/60 hover:text-brand-primary transition-editorial uppercase"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Back to Step 1
            </button>
          )}
        </div>
      ) : (
        recommendedService && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 h-64 lg:h-80 rounded-sm overflow-hidden border border-brand-border/60 relative">
                <img
                  src={recommendedService.image}
                  alt={recommendedService.title}
                  className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-editorial duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-xs">
                  Highly Matched
                </div>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-brand-secondary/15 text-brand-secondary text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-sm uppercase">
                    {recommendedService.category}
                  </span>
                  <span className="text-xs text-brand-primary/60 font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {recommendedService.location}
                  </span>
                </div>

                <h4 className="font-serif text-2xl md:text-3xl font-bold text-brand-primary mb-2">
                  {recommendedService.title}
                </h4>
                <p className="font-sans text-xs font-semibold text-brand-secondary tracking-wide mb-4">
                  {recommendedService.headline}
                </p>
                <p className="font-sans text-xs text-brand-primary/80 leading-relaxed mb-6">
                  {recommendedService.whatHappens}
                </p>

                {/* Practical info boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-brand-border/60 pt-6 mb-8">
                  <div>
                    <span className="font-sans text-[10px] font-bold tracking-widest text-brand-primary/50 uppercase block">
                      Suitability & Fit
                    </span>
                    <span className="font-sans text-xs font-semibold text-brand-primary block mt-1">
                      {recommendedService.suitability}
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold tracking-widest text-brand-primary/50 uppercase block">
                      Core Requirement
                    </span>
                    <span className="font-sans text-xs font-bold text-brand-accent flex items-center gap-1.5 mt-1">
                      <Sparkles className="w-4 h-4 flex-shrink-0" />
                      {[
                        "ridden-lessons-equitation",
                        "zen-float-loading",
                        "barefoot-trimming",
                        "equissage-massage-therapy"
                      ].includes(recommendedService.id)
                        ? "Must Have Your Own Horse"
                        : "No Horse Required"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      onSelectService(recommendedService.id);
                      const contactSection = document.getElementById("enquire");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-brand-primary text-white text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-brand-secondary transition-editorial flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <CheckCircle className="w-4 h-4" /> Select & Enquire
                  </button>
                  <button
                    onClick={() => onOpenDetails(recommendedService)}
                    className="border border-brand-border text-brand-primary text-xs font-bold tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-brand-surface transition-editorial cursor-pointer"
                  >
                    View Experience Guidelines
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-xs text-brand-primary/50 hover:text-brand-secondary uppercase font-semibold transition-editorial ml-auto cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Start Over
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
