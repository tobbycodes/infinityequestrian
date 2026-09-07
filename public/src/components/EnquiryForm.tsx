import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Copy, FileText, Sparkles, Loader2, MapPin } from "lucide-react";
import { Service } from "../types";

interface EnquiryFormProps {
  services: Service[];
  selectedServiceId: string;
}

export default function EnquiryForm({ services, selectedServiceId }: EnquiryFormProps) {
  const [selectedService, setSelectedService] = useState(selectedServiceId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ownHorse, setOwnHorse] = useState("");
  const [experience, setExperience] = useState("");
  const [locationArea, setLocationArea] = useState("");
  const [goals, setGoals] = useState("");
  const [horseDetails, setHorseDetails] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Sync state if selectedServiceId changes from parent finder
  useEffect(() => {
    if (selectedServiceId) {
      setSelectedService(selectedServiceId);
    }
  }, [selectedServiceId]);

  const serviceNeedsHorse = [
    "ridden-lessons-equitation",
    "zen-float-loading",
    "barefoot-trimming",
    "equissage-massage-therapy"
  ].includes(selectedService);

  const getStructuredDraftText = () => {
    const serviceName = services.find(s => s.id === selectedService)?.title || "General Enquiry";
    return `--- INFINITY EQUESTRIAN ENQUIRY STRUCTURE ---
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceName}
Owns Horse: ${ownHorse === "yes" ? "Yes" : "No"}
Experience Level: ${experience}
Location Area: ${locationArea}
Primary Goals: ${goals}
${serviceNeedsHorse ? `Horse Details (Anxiety/Issues): ${horseDetails}` : ""}
--------------------------------------------`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(getStructuredDraftText());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !ownHorse || !experience || !locationArea || !goals) {
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setOwnHorse("");
    setExperience("");
    setLocationArea("");
    setGoals("");
    setHorseDetails("");
    setIsSuccess(false);
  };

  return (
    <div className="w-full bg-white border border-brand-border rounded-sm p-6 md:p-10 transition-all shadow-xs">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-2 border-b border-brand-border pb-4 mb-6">
            <div className="bg-brand-primary text-white p-2 rounded-sm">
              <FileText className="w-5 h-5 text-brand-secondary" />
            </div>
            <div>
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">
                Digital Front Desk
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-primary">
                Submit a Structured Enquiry
              </h3>
            </div>
          </div>

          <p className="font-sans text-xs text-brand-primary/70 leading-relaxed mb-6 font-light">
            This digital desk helps Pip & Francois understand your exact horse-riding experience and training constraints before contact. This ensures a higher-quality response and saves hours of back-and-forth administration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
                Full Name <span className="text-brand-secondary">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Eleanor Vance"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-3 font-sans text-xs text-brand-primary outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
                Email Address <span className="text-brand-secondary">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="e.g. eleanor@domain.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-3 font-sans text-xs text-brand-primary outline-none transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
                Contact Phone <span className="text-brand-secondary">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="e.g. +61 400 000 000"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-3 font-sans text-xs text-brand-primary outline-none transition-all"
              />
            </div>

            {/* Experience or Course interested in */}
            <div>
              <label htmlFor="service" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
                Experience Interested In <span className="text-brand-secondary">*</span>
              </label>
              <select
                id="service"
                value={selectedService}
                onChange={e => setSelectedService(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-3 font-sans text-xs text-brand-primary outline-none cursor-pointer transition-all"
              >
                <option value="">-- Select an Experience --</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value="general">General Custom Enquiries</option>
              </select>
            </div>
          </div>

          {/* Qualification Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Owns Horse */}
            <div>
              <label className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-2">
                Do you own a horse? <span className="text-brand-secondary">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 font-sans text-xs text-brand-primary cursor-pointer">
                  <input
                    type="radio"
                    name="ownHorse"
                    required
                    checked={ownHorse === "yes"}
                    onChange={() => setOwnHorse("yes")}
                    className="accent-brand-secondary h-4 w-4"
                  />
                  Yes, I do
                </label>
                <label className="flex items-center gap-2 font-sans text-xs text-brand-primary cursor-pointer">
                  <input
                    type="radio"
                    name="ownHorse"
                    required
                    checked={ownHorse === "no"}
                    onChange={() => setOwnHorse("no")}
                    className="accent-brand-secondary h-4 w-4"
                  />
                  No, I do not
                </label>
              </div>
            </div>

            {/* Rider level */}
            <div>
              <label htmlFor="experience-level" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
                Rider Experience Level <span className="text-brand-secondary">*</span>
              </label>
              <select
                id="experience-level"
                required
                value={experience}
                onChange={e => setExperience(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-2.5 font-sans text-xs text-brand-primary outline-none cursor-pointer transition-all"
              >
                <option value="">-- Select --</option>
                <option value="Beginner / Novice">Beginner / Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced / Professional">Advanced / Professional</option>
                <option value="Non-Riding Personal Client">Non-Riding Personal Client</option>
              </select>
            </div>

            {/* Location Area */}
            <div>
              <label htmlFor="location-area" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
                Your Location/Service Area <span className="text-brand-secondary">*</span>
              </label>
              <select
                id="location-area"
                required
                value={locationArea}
                onChange={e => setLocationArea(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-2.5 font-sans text-xs text-brand-primary outline-none cursor-pointer transition-all"
              >
                <option value="">-- Select Location --</option>
                <option value="Gympie Region">Gympie Region</option>
                <option value="Sunshine Coast Areas">Sunshine Coast Areas</option>
                <option value="Hervey Bay Region">Hervey Bay Region</option>
                <option value="Caboolture Region">Caboolture Region</option>
                <option value="Other / Digital Client">Other / Remote / Digital</option>
              </select>
            </div>
          </div>

          {/* Conditional Alerts */}
          {!serviceNeedsHorse && ownHorse === "no" && selectedService && selectedService !== "general" && (
            <div className="bg-brand-surface border border-brand-border p-4 rounded-sm flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
              <p className="font-sans text-[11px] text-brand-primary/75 leading-relaxed">
                <strong>Course Note:</strong> Your selected experience is fully compatible with non-horse owners. Looking forward to coaching you!
              </p>
            </div>
          )}

          {serviceNeedsHorse && ownHorse === "no" && (
            <div className="bg-[#B5612D]/10 border border-[#B5612D]/20 p-4 rounded-sm flex items-start gap-2.5">
              <AlertCircleWarningIcon />
              <p className="font-sans text-[11px] text-[#B5612D] leading-relaxed">
                <strong>Attention:</strong> The selected service (ridden equitation/float training) strictly requires you to own your own horse. If you do not have a horse, we suggest exploring <strong>Equine Therapy</strong> or <strong>Mindset Coaching</strong> instead.
              </p>
            </div>
          )}

          {/* Goals / Achievements expected */}
          <div>
            <label htmlFor="goals" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase block mb-1.5">
              What are you hoping to achieve or address during your session? <span className="text-brand-secondary">*</span>
            </label>
            <textarea
              id="goals"
              required
              rows={3}
              placeholder="e.g. My horse gets highly stressed when loading; I want to travel safely without fear."
              value={goals}
              onChange={e => setGoals(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-3 font-sans text-xs text-brand-primary outline-none resize-none transition-all"
            />
          </div>

          {/* Conditional Horse details if Ridden or Float is selected */}
          {serviceNeedsHorse && (
            <div className="space-y-2 animate-fade-in">
              <label htmlFor="horse-details" className="font-sans text-xs font-bold tracking-wider text-brand-primary uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-secondary shrink-0" /> Horse Information (Name, Age, Breed, & Specific Fears)
              </label>
              <textarea
                id="horse-details"
                rows={3}
                placeholder="e.g. Max, 8yo thoroughbred, starts pulling back violently when the ramp is approached. Whips or food do not work."
                value={horseDetails}
                onChange={e => setHorseDetails(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-brand-border focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary rounded-sm p-3 font-sans text-xs text-brand-primary outline-none resize-none transition-all"
              />
              <span className="text-[10px] text-brand-primary/50 block">
                * Supplying this info reduces diagnostic time during our first call.
              </span>
            </div>
          )}

          {/* Submission and Draft Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brand-border pt-6">
            <button
              type="button"
              onClick={handleCopyDraft}
              disabled={!name || !email}
              className="flex items-center justify-center gap-1.5 text-xs font-bold tracking-widest uppercase border border-brand-border py-3.5 px-5 rounded-sm hover:bg-[#FAF8F5] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Copy className="w-4 h-4 text-brand-secondary" />
              {copiedDraft ? "Draft Copied!" : "Copy Structured Draft"}
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-brand-primary text-white hover:bg-brand-primary/95 font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm transition-all disabled:opacity-80 shadow-xs cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-brand-secondary" /> Aligning Credentials...
                </>
              ) : (
                <>
                  Submit to Front Desk <Send className="w-3.5 h-3.5 text-brand-secondary" />
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Success screen / Receipt state to build profound trust */
        <div className="text-center py-8 px-4 animate-fade-in">
          <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-secondary/20">
            <CheckCircle2 className="w-10 h-10 text-brand-secondary" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-brand-primary mb-2">
            Enquiry Received Safely
          </h3>
          <p className="font-sans text-xs text-brand-primary/70 max-w-lg mx-auto mb-8 font-light">
            Thank you, <strong>{name}</strong>. Your structured enquiry has been cataloged. Pip or Francois will review these qualifications and reach out within 24–48 hours.
          </p>

          {/* Receipt Preview */}
          <div className="bg-brand-surface border border-brand-border rounded-sm p-6 max-w-xl mx-auto text-left space-y-4 mb-8">
            <div className="flex justify-between items-center border-b border-brand-border/60 pb-3">
              <span className="font-serif text-sm font-bold text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-secondary" /> Digital Desk Ticket
              </span>
              <span className="text-[10px] text-brand-secondary font-mono font-bold uppercase">
                Status: Pending Qualification
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <span className="text-brand-primary/50 text-[10px] block uppercase font-semibold">Rider Name</span>
                <span className="text-brand-primary font-semibold">{name}</span>
              </div>
              <div>
                <span className="text-brand-primary/50 text-[10px] block uppercase font-semibold">Email</span>
                <span className="text-brand-primary font-semibold">{email}</span>
              </div>
              <div>
                <span className="text-brand-primary/50 text-[10px] block uppercase font-semibold">Service Saught</span>
                <span className="text-brand-secondary font-bold">
                  {services.find(s => s.id === selectedService)?.title || "General Enquiry"}
                </span>
              </div>
              <div>
                <span className="text-brand-primary/50 text-[10px] block uppercase font-semibold">Travel Territory</span>
                <span className="text-brand-primary font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-secondary" /> {locationArea}
                </span>
              </div>
            </div>

            <div className="border-t border-brand-border/60 pt-3 text-xs font-sans">
              <span className="text-brand-primary/50 text-[10px] block uppercase font-semibold">Submitted Challenge / Goals</span>
              <p className="text-brand-primary italic mt-1 leading-relaxed">"{goals}"</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopyDraft}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-brand-border font-sans text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm hover:bg-brand-surface transition-all cursor-pointer"
            >
              <Copy className="w-4 h-4 text-brand-secondary" /> {copiedDraft ? "Draft Copied!" : "Copy Receipt Draft"}
            </button>
            <button
              onClick={handleResetForm}
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/95 text-white font-sans text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm transition-all cursor-pointer"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AlertCircleWarningIcon() {
  return (
    <svg className="w-5 h-5 text-[#B5612D] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}
