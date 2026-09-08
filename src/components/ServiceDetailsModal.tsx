import React, { useEffect } from "react";
import { X, Check, MapPin, DollarSign, Clock, HelpCircle, AlertCircle, Info, Flame } from "lucide-react";
import { Service } from "../types";

interface ServiceDetailsModalProps {
  service: Service | null;
  onClose: () => void;
  onEnquire: (serviceId: string) => void;
}

export default function ServiceDetailsModal({ service, onClose, onEnquire }: ServiceDetailsModalProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1A1A1A]/85 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#f7f6f2] border border-brand-border text-brand-primary w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden z-10 animate-slide-up max-h-[90vh] flex flex-col">
        {/* Header Ribbon */}
        <div className="bg-brand-primary px-6 py-3 flex items-center justify-between border-b border-brand-border/20 text-[#f7f6f2]">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase">
            Experience Guideline Suite • Verified Business Information
          </span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-editorial p-1 focus-visible:outline-white focus-visible:outline-2 rounded-sm"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-10 flex-1">
          {/* Top Hero Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 border-b border-brand-border pb-8">
            <div className="md:col-span-4 h-48 md:h-full min-h-[180px] rounded-sm overflow-hidden border border-brand-border relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-brand-secondary/10 text-brand-secondary text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase">
                  {service.category}
                </span>
                <span className="text-[11px] text-brand-primary/60 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {service.location}
                </span>
              </div>
              <h2 id="modal-title" className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-1 leading-tight">
                {service.title}
              </h2>
              <p className="font-sans text-xs text-brand-secondary font-semibold tracking-wider uppercase mb-3">
                {service.tagline}
              </p>
              <p className="font-serif text-base text-brand-primary/80 italic">
                "{service.headline}"
              </p>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              {/* What is it? */}
              <section>
                <h3 className="font-serif text-lg font-bold text-brand-dark flex items-center gap-2 mb-2 border-b border-brand-border pb-1">
                  <Info className="w-4 h-4 text-brand-secondary" /> What is it?
                </h3>
                <p className="font-sans text-xs text-brand-primary/80 leading-relaxed">
                  {service.whatHappens}
                </p>
              </section>

              {/* Who is it for? */}
              <section>
                <h3 className="font-serif text-lg font-bold text-brand-dark flex items-center gap-2 mb-2 border-b border-brand-border pb-1">
                  <Clock className="w-4 h-4 text-brand-secondary" /> Who is this suitable for?
                </h3>
                <p className="font-sans text-xs text-brand-primary/80 leading-relaxed">
                  {service.suitability}
                </p>
              </section>

              {/* What happens / What to expect */}
              <section>
                <h3 className="font-serif text-lg font-bold text-brand-dark flex items-center gap-2 mb-2 border-b border-brand-border pb-1">
                  <Flame className="w-4 h-4 text-brand-secondary" /> Coaching Expectation Strategy
                </h3>
                <p className="font-sans text-xs text-brand-primary/80 leading-relaxed">
                  {service.expectations}
                </p>
              </section>

              {/* Before You Book */}
              <section className="bg-brand-surface p-4 border border-brand-border/60 rounded-sm">
                <h4 className="font-sans text-[11px] font-bold tracking-widest text-brand-accent uppercase flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4" /> Crucial Booking Policies
                </h4>
                <ul className="space-y-2">
                  {service.beforeYouBook.map((item, idx) => (
                    <li key={idx} className="font-sans text-xs text-brand-primary/80 flex items-start gap-2">
                      <span className="text-brand-secondary font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Quick-Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Practical Info Box */}
              <div className="bg-white border border-brand-border p-6 rounded-sm space-y-4">
                <h4 className="font-serif text-base font-bold text-brand-dark border-b border-brand-border pb-2">
                  Practical Specifics
                </h4>

                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-primary/50 uppercase block">
                    Duration / Length
                  </span>
                  <span className="text-xs font-semibold text-brand-primary block mt-0.5">
                    {service.duration}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-primary/50 uppercase block">
                    Fee Structure (AUD)
                  </span>
                  <span className="text-sm font-bold text-brand-secondary block mt-0.5">
                    {service.price}
                  </span>
                  {service.priceNote && (
                    <span className="text-[10px] text-brand-primary/50 leading-tight block mt-0.5">
                      {service.priceNote}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest text-brand-primary/50 uppercase block">
                    Verified Requirements
                  </span>
                  <ul className="mt-1.5 space-y-1">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-brand-primary/85 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-brand-secondary mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service FAQs */}
              {service.faqs.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-serif text-base font-bold text-brand-dark flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-brand-secondary" /> Service FAQ
                  </h4>
                  {service.faqs.map((f, i) => (
                    <div key={i} className="bg-white border border-brand-border/60 p-4 rounded-sm">
                      <h5 className="font-sans text-xs font-bold text-brand-primary mb-1">
                        {f.question}
                      </h5>
                      <p className="font-sans text-xs text-brand-primary/75 leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="bg-brand-surface border-t border-brand-border px-6 py-4 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-primary/50 font-sans tracking-wide">
            Need to ask another question? The form below is pre-structured for this service.
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none border border-brand-border text-brand-primary font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-sm hover:bg-white transition-editorial cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onEnquire(service.id);
                onClose();
                const contactSection = document.getElementById("enquire");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex-1 sm:flex-none bg-brand-primary text-white font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm hover:bg-brand-secondary transition-editorial shadow-xs cursor-pointer"
            >
              Select & Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
