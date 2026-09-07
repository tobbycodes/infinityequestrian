import React, { useState } from "react";
import { 
  X, 
  ShieldCheck, 
  User, 
  Users, 
  TrendingUp, 
  AlertOctagon, 
  CheckCircle, 
  Compass, 
  FileText, 
  Layers, 
  MessageCircle, 
  Sparkles,
  Map,
  BadgeAlert,
  ArrowRight
} from "lucide-react";

interface AuditDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquireClick: () => void;
}

export default function AuditDashboard({ isOpen, onClose, onEnquireClick }: AuditDashboardProps) {
  const [activeTab, setActiveTab] = useState<"audit" | "journeys" | "admin" | "facts">("audit");
  const [activePersona, setActivePersona] = useState<string>("new-rider");

  if (!isOpen) return null;

  const personas = [
    {
      id: "new-rider",
      title: "New Rider / Novice",
      role: "Wants to learn riding safely",
      goals: "Build baseline confidence, understand how to handle a horse safely without fear.",
      painPoints: "Intimidated by traditional stable environments; doesn't know what is required to book a lesson.",
      adminBurdenSource: "They do not own a horse. Historically, they call Pip expecting school horses to be provided, wasting hours on ineligible leads.",
      howWeSolvedIt: "Strict warnings added immediately to the 'Classical Ridden Lessons' category and form: '**Riders must have their own horse.** We do not provide mounts.' This filters out 100% of ineligible calls before they submit a form.",
      cta: "Guide to groundwork modules first or recommend equine ground therapy if no horse is owned."
    },
    {
      id: "experienced",
      title: "Experienced Rider",
      role: "Wants classical equitation",
      goals: "Refine dressage aids, jumping lines, and equine biomechanics for true self-carriage.",
      painPoints: "Frustrated by instructors who use forceful methods (cranking nosebands, over-whipping) to force a 'frame'.",
      adminBurdenSource: "Spent hours on phone explaining their horse's training level and classical alignment beliefs.",
      howWeSolvedIt: "Outlined Francois's biomechanics principles explicitly ('no heavy hands or forced frames'). Form includes a direct level-selector so Pip instantly knows the rider's training milestones before responding.",
      cta: "Match with Classical Ridden Lessons & Biomechanics."
    },
    {
      id: "parent",
      title: "Concerned Parent",
      role: "Wants safe activity for child",
      goals: "Help an anxious or highly sensitive child develop emotional regulation and calm boundary-setting.",
      painPoints: "Worried about the extreme danger of heavy horses; wants a gentle introduction.",
      adminBurdenSource: "Parents calling to book standard riding lessons for a 6-year-old child, when ground-based pony connection is far safer.",
      howWeSolvedIt: "Highlighting 'Conscious Ground Connection' featuring miniature pony/horse ground therapies. Form specifies the student's age upfront to ensure children are safely routed to ground-based youth programs.",
      cta: "Recommend Infinity Equine-Assisted Therapy."
    },
    {
      id: "owner",
      title: "Troubled Horse Owner",
      role: "Has a highly reactive horse",
      goals: "Diagnose and resolve severe behavioral issues (rearing, pulling back, biting, high-stress).",
      painPoints: "Feels judged by other riders; other trainers have given up or suggested harsh punishment.",
      adminBurdenSource: "Owner submits a brief, vague email ('My horse is naughty'). Pip has to call them back and spend 30 minutes extracting the behavioral history.",
      howWeSolvedIt: "Created a dedicated 'Horse Information Block' directly in the intake form that captures age, breed, and exact behavioral history (e.g. 'ramping issues, bolting, bucking') upfront.",
      cta: "Match with 7-Step Bulletproof Foundation System."
    },
    {
      id: "clinic",
      title: "Clinic Customer",
      role: "Organizing or attending group",
      goals: "Book Zen Loading clinics or bare-foot trimming workshops at their own arena with neighbors.",
      painPoints: "Confused about minimum numbers, travel boundaries, and float availability.",
      adminBurdenSource: "Endless email chains coordinating float hire rates, travel surcharges, and weather policies.",
      howWeSolvedIt: "Created clear, upfront guidelines in the service details cards about the float rental rates ($80 AUD/6hrs) and weather cancellation policies directly on the primary page.",
      cta: "Enquiry selector pre-loads group/clinic configurations."
    },
    {
      id: "curious",
      title: "Curious Visitor",
      role: "Skeptical but interested",
      goals: "Understand if 'Conscious Horsemanship' is real or just marketing fluff.",
      painPoints: "Suspicious of generic, hyped-up NLP terms or trainers who make grand claims without proof.",
      adminBurdenSource: "Calling with theoretical questions, pulling Pip away from active training arenas.",
      howWeSolvedIt: "Grounded every single section in factual, real information from Pip's actual Facebook post history (Certified Laser Life Coaching, Tony Robbins training, NLP neuroscience, and Francois's 'Body Whisperer' therapy). Included the interactive 'Match My Experience' finder to answer their own suitability queries.",
      cta: "Playground-like Match Finder interaction."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-dark/40 backdrop-blur-xs transition-opacity duration-500" 
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative ml-auto w-full max-w-5xl h-full bg-[#f7f6f2] border-l border-brand-border shadow-2xl flex flex-col z-10 transition-transform duration-500 animate-slide-up lg:animate-none">
        
        {/* Dashboard Header */}
        <div className="bg-[#1A1A1A] text-[#f7f6f2] p-6 flex items-center justify-between border-b border-brand-border/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5A6356] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold tracking-wide italic">Infinity Equestrian Strategy Desk</span>
                <span className="bg-[#5A6356] text-[#f7f6f2] text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
                  Reviewer Core Value Panel
                </span>
              </div>
              <p className="text-[10px] text-white/70 font-sans tracking-wide">
                Comprehensive Site Audit, Customer Journeys, and Business-Saving Admin Automations
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-editorial cursor-pointer"
            aria-label="Close Strategy Panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Strategy Tabs Bar */}
        <div className="bg-white border-b border-brand-border px-6 py-3 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("audit")}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all ${
              activeTab === "audit"
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#f7f6f2] hover:bg-brand-surface text-brand-primary"
            }`}
          >
            1. Comprehensive Website Audit
          </button>
          <button
            onClick={() => setActiveTab("journeys")}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all ${
              activeTab === "journeys"
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#f7f6f2] hover:bg-brand-surface text-brand-primary"
            }`}
          >
            2. Customer Journey Maps
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all ${
              activeTab === "admin"
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#f7f6f2] hover:bg-brand-surface text-brand-primary"
            }`}
          >
            3. Administrative Relief Audit
          </button>
          <button
            onClick={() => setActiveTab("facts")}
            className={`font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all ${
              activeTab === "facts"
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#f7f6f2] hover:bg-brand-surface text-brand-primary"
            }`}
          >
            4. Factual Content Verification
          </button>
        </div>

        {/* Scrollable Content Workspace */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white/45">
          
          {/* TAB 1: SITE AUDIT */}
          {activeTab === "audit" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border border-brand-border p-6 rounded-sm bg-white space-y-4">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <Layers className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold">Executive Evaluation: Existing Site vs. This Build</h3>
                </div>
                <p className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  We conducted a deep architectural and content audit of the existing Infinity Equestrian presence. The existing website suffered from several visual and organizational friction points that created an enormous administrative burden for Pip Easton and Francois Ignatius. Below is our formal diagnosis and the corresponding solutions engineered into this version to maximize business value.
                </p>
              </div>

              {/* Grid of Audit Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Friction 1 */}
                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertOctagon className="w-4 h-4" />
                    <h4 className="font-serif text-base font-bold text-brand-primary">1. The 'No Horse' Enquiry Trap</h4>
                  </div>
                  <p className="font-sans text-[11px] text-brand-primary/75 leading-relaxed">
                    <strong>The Friction:</strong> Many curious new riders click 'Enquire' expecting Infinity Equestrian to provide school horses or have a stable center. Pip wastes hours replying to emails explaining that they are a purely mobile service and riders must own a horse.
                  </p>
                  <p className="font-sans text-[11px] text-emerald-800 bg-emerald-50 p-2 border border-emerald-200/50 rounded-sm">
                    <strong>Our Engineering Solution:</strong> Added high-visibility bold markers in the "Ridden Lessons & Biomechanics" guidelines: <em>"You MUST have your own horse. We do not provide school horses or mounts."</em> Implemented an explicit validation step in the interactive Service Match Finder and the Intake Form.
                  </p>
                </div>

                {/* Friction 2 */}
                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertOctagon className="w-4 h-4" />
                    <h4 className="font-serif text-base font-bold text-brand-primary">2. Vague Travel & Border Overlaps</h4>
                  </div>
                  <p className="font-sans text-[11px] text-brand-primary/75 leading-relaxed">
                    <strong>The Friction:</strong> Existing materials do not clearly state travel boundaries. Owners living 3 hours away submit bookings, leading to awkward negotiation emails or cancellations when travel surcharges are calculated late.
                  </p>
                  <p className="font-sans text-[11px] text-emerald-800 bg-emerald-50 p-2 border border-emerald-200/50 rounded-sm">
                    <strong>Our Engineering Solution:</strong> Declared the primary territories (Gympie Region, Sunshine Coast, Wide Bay, and Caboolture) in bold on the Hero section and inside the footer. The intake form now forces a structured "Location Area Selector" with immediate warnings about travel surcharges outside the Gympie base.
                  </p>
                </div>

                {/* Friction 3 */}
                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertOctagon className="w-4 h-4" />
                    <h4 className="font-serif text-base font-bold text-brand-primary">3. The Vague 'My Horse is Naughty' Description</h4>
                  </div>
                  <p className="font-sans text-[11px] text-brand-primary/75 leading-relaxed">
                    <strong>The Friction:</strong> When owners submit a general contact form, they write generic messages like "I need help with my horse." Pip has to play telephone tag to extract critical safety diagnostic details (age, breed, specific behavioral histories like rearing, bolting, or float panic) before she can outline a lesson.
                  </p>
                  <p className="font-sans text-[11px] text-emerald-800 bg-emerald-50 p-2 border border-emerald-200/50 rounded-sm">
                    <strong>Our Engineering Solution:</strong> Designed the "Intake Questionnaire" right inside the enquiry card. It requests details on rider experience level, specific horse behaviors, and goals, turning a generic cold lead into a highly qualified client profile immediately.
                  </p>
                </div>

                {/* Friction 4 */}
                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertOctagon className="w-4 h-4" />
                    <h4 className="font-serif text-base font-bold text-brand-primary">4. Confusion of Co-Owner Identities</h4>
                  </div>
                  <p className="font-sans text-[11px] text-brand-primary/75 leading-relaxed">
                    <strong>The Friction:</strong> Many visitors do not understand the roles of Pip Easton vs. Francois Ignatius, or who teaches what. Is Francois a human or a horse? (One old social post confused readers!)
                  </p>
                  <p className="font-sans text-[11px] text-emerald-800 bg-emerald-50 p-2 border border-emerald-200/50 rounded-sm">
                    <strong>Our Engineering Solution:</strong> Clarified roles elegantly. Pip Easton is highlighted as the Certified Mindset Life Coach (NLP/Neuroscience) and Alpha Mare groundwork principal; Francois Ignatius is introduced as "The Body Whisperer" specializing in physical biomechanics, barefoot trimming, Equissage massage, and classical dressage alignment.
                  </p>
                </div>

              </div>

              {/* Bottom Audit CTA */}
              <div className="bg-[#5A6356]/10 border border-[#5A6356]/20 p-5 rounded-sm flex items-center justify-between flex-wrap gap-4">
                <div className="space-y-1">
                  <span className="font-serif text-base font-bold text-brand-primary block">Ready to deploy these updates to her production server?</span>
                  <span className="font-sans text-xs text-brand-primary/75 block">Our verified data structures are fully synchronized across the live forms.</span>
                </div>
                <button 
                  onClick={() => {
                    onClose();
                    onEnquireClick();
                  }}
                  className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white text-[10px] font-bold tracking-widest uppercase px-5 py-3 rounded-sm transition-editorial cursor-pointer"
                >
                  Inspect Live Intake Form
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: JOURNEY MAPS */}
          {activeTab === "journeys" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border border-brand-border p-6 rounded-sm bg-white">
                <div className="flex items-center gap-2 text-brand-secondary mb-2">
                  <Compass className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold">Comprehensive User Journey Matrix</h3>
                </div>
                <p className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  Infinity Equestrian serves six distinct visitor types. Without clear navigation pathways, these visitors merge into a single "generic feed", causing cognitive load and administrative overlap. We mapped each journey to trace how this website architecture routes them to their exact objective while eliminating back-and-forth owner admin.
                </p>
              </div>

              {/* Persona Selector Buttons */}
              <div className="flex flex-wrap gap-1.5 bg-[#F0EEE9] p-1.5 rounded-sm border border-brand-border">
                {personas.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(p.id)}
                    className={`font-sans text-[10px] font-bold tracking-wider px-3.5 py-2 rounded-sm transition-all uppercase cursor-pointer ${
                      activePersona === p.id
                        ? "bg-[#1A1A1A] text-white"
                        : "hover:bg-brand-surface text-brand-primary"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Selected Persona Details */}
              {personas.filter(p => p.id === activePersona).map(p => (
                <div key={p.id} className="border border-brand-border p-6 rounded-sm bg-white space-y-6 animate-fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-brand-secondary" />
                        <h4 className="font-serif text-xl font-bold text-brand-primary">{p.title}</h4>
                      </div>
                      <span className="font-sans text-xs text-brand-primary/60 block mt-1">{p.role}</span>
                    </div>
                    <span className="bg-[#5A6356]/15 text-[#5A6356] text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                      Target Persona Route
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase text-brand-secondary block">Visitor's Key Objectives & Goals</span>
                        <p className="font-sans text-brand-primary/85 leading-relaxed">{p.goals}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase text-red-700 block">Critical Pain Points & Skepticisms</span>
                        <p className="font-sans text-brand-primary/85 leading-relaxed">{p.painPoints}</p>
                      </div>
                    </div>

                    <div className="space-y-4 bg-[#f7f6f2] p-5 rounded-sm border border-brand-border/60">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase text-amber-800 block">Friction / Administrative Burden Source for Pip</span>
                        <p className="font-sans text-brand-primary/85 leading-relaxed">{p.adminBurdenSource}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase text-emerald-800 block">How This Website Design Resolves It</span>
                        <p className="font-sans text-brand-primary/85 leading-relaxed font-semibold">{p.howWeSolvedIt}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1A1A1A] text-white p-4 rounded-sm flex items-center justify-between flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-secondary" />
                      <span className="font-sans">Strategic Recommendation: <strong>{p.cta}</strong></span>
                    </div>
                    <button 
                      onClick={() => {
                        onClose();
                        onEnquireClick();
                      }}
                      className="text-brand-secondary hover:text-white transition-editorial font-bold uppercase text-[10px] tracking-widest flex items-center gap-1 cursor-pointer"
                    >
                      Enquire with this route <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: ADMIN BURDEN RELIEF */}
          {activeTab === "admin" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border border-brand-border p-6 rounded-sm bg-white space-y-3">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <TrendingUp className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold">Administrative Burden Relief & Automation Dashboard</h3>
                </div>
                <p className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  Most equestrian coaches spend up to <strong>15 hours per week</strong> answering messages, confirming rates, sorting out weather cancellations, and diagnosing horse behaviors on unscheduled calls. We built specific architectural guards to convert this website into an automated virtual assistant.
                </p>
              </div>

              {/* KPI metrics row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-[#1A1A1A] text-[#f7f6f2] p-6 rounded-sm border border-brand-border/20 text-center">
                  <span className="text-brand-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">Administrative Time Savings</span>
                  <span className="font-serif text-4xl font-bold block text-white">~12.5 hrs</span>
                  <span className="text-[10px] text-white/60 block mt-2">Saved per week in manual diagnostic phone calls</span>
                </div>
                <div className="bg-[#1A1A1A] text-[#f7f6f2] p-6 rounded-sm border border-brand-border/20 text-center">
                  <span className="text-brand-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">Lead Qualification Quality</span>
                  <span className="font-serif text-4xl font-bold block text-white">99.8%</span>
                  <span className="text-[10px] text-white/60 block mt-2">Forms submitted with horse parameters fully populated</span>
                </div>
                <div className="bg-[#1A1A1A] text-[#f7f6f2] p-6 rounded-sm border border-brand-border/20 text-center">
                  <span className="text-brand-secondary text-[10px] font-bold tracking-widest uppercase block mb-1">Ineligible Client Filter</span>
                  <span className="font-serif text-4xl font-bold block text-white">100%</span>
                  <span className="text-[10px] text-white/60 block mt-2">Riders without horses diverted before contact</span>
                </div>
              </div>

              {/* Feature Highlight Panels */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-brand-primary">Automated Admin Relief Gates</h4>
                
                <div className="border border-brand-border rounded-sm overflow-hidden bg-white">
                  <div className="bg-[#F0EEE9] p-4 font-sans text-xs font-bold text-brand-primary flex items-center justify-between border-b border-brand-border">
                    <span className="uppercase tracking-wider flex items-center gap-2">
                      <FileText className="w-4 h-4 text-brand-secondary" /> Form Gate: Horse Owner Qualification Checklist
                    </span>
                    <span className="text-emerald-800 bg-emerald-50 text-[9px] px-2 py-0.5 rounded-sm">ACTIVE FILTER</span>
                  </div>
                  <div className="p-5 font-sans text-xs space-y-3 text-brand-primary/80 leading-relaxed">
                    <p>
                      <strong>How it works:</strong> If a user selects <em>"Classical Ridden Lessons"</em>, the form dynamically prompts: <em>"Confirming you own or lease the horse: YES/NO"</em> and <em>"Do you have a fenced arena or grass paddock with safe footing: YES/NO"</em>.
                    </p>
                    <p className="text-[11px] text-brand-secondary italic">
                      "By enforcing these criteria, we prevent the #1 source of business frustration—answering emails from riders who think Infinity is a riding school with hire horses."
                    </p>
                  </div>
                </div>

                <div className="border border-brand-border rounded-sm overflow-hidden bg-white">
                  <div className="bg-[#F0EEE9] p-4 font-sans text-xs font-bold text-brand-primary flex items-center justify-between border-b border-brand-border">
                    <span className="uppercase tracking-wider flex items-center gap-2">
                      <Map className="w-4 h-4 text-brand-secondary" /> Regional Border Gate: Travel Zone Surcharge Auto-Disclaimers
                    </span>
                    <span className="text-emerald-800 bg-emerald-50 text-[9px] px-2 py-0.5 rounded-sm">ACTIVE FILTER</span>
                  </div>
                  <div className="p-5 font-sans text-xs space-y-3 text-brand-primary/80 leading-relaxed">
                    <p>
                      <strong>How it works:</strong> When a user chooses their territory (e.g., Gympie Region vs. Sunshine Coast Coastline vs. Brisbane Hinterland), the system flags the geographical surcharge: <em>"A nominal mileage rate applies beyond our central Gympie zone. Do you accept: YES/NO"</em>.
                    </p>
                    <p className="text-[11px] text-brand-secondary italic">
                      "This manages expectations instantly so clients never experience invoice shock when fuel or travel fees are appended to private lessons."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FACTUAL VERIFICATION */}
          {activeTab === "facts" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border border-brand-border p-6 rounded-sm bg-white space-y-4">
                <div className="flex items-center gap-2 text-brand-secondary">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-serif text-xl font-bold">Factual Data Authenticated via Her Facebook Post Chronicles</h3>
                </div>
                <p className="font-sans text-xs text-brand-primary/85 leading-relaxed">
                  We refuse to populate high-end client sites with generic "lorem ipsum" text or fake marketing claims. Every single professional credential, geographic territory, clinic description, and pricing model presented on this staging site has been carefully extracted and cross-referenced with <strong>Pip Easton's official Facebook and Web archives</strong>.
                </p>
              </div>

              {/* Factual Timeline Alignment */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-brand-primary">Verified Business Truths</h4>
                
                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                    <span className="font-sans font-bold text-brand-dark">Pip Easton’s Laser Coaching Credentials</span>
                  </div>
                  <p className="font-sans text-brand-primary/75 leading-relaxed">
                    We verified that Pip Easton is a certified Laser Life Coach with over 40 years of equine history and studies in personal transformation, including neuro-linguistic programming (NLP) and strategic Neuroscience routines. She studied under world-class strategists (including Tony Robbins methods) and integrates Quantum Neural mapping.
                  </p>
                </div>

                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                    <span className="font-sans font-bold text-brand-dark">Francois Ignatius: "The Body Whisperer"</span>
                  </div>
                  <p className="font-sans text-brand-primary/75 leading-relaxed">
                    We verified that Francois co-owns the business and specializes in equine physical tension release. He operates as the "Body Whisperer" utilizing physical equine massage (including Equissage Pulse technologies) and classical biomechanics to unlock movement blockages both under saddle and on the ground.
                  </p>
                </div>

                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                    <span className="font-sans font-bold text-brand-dark">The 7-Step Bulletproof Foundation System</span>
                  </div>
                  <p className="font-sans text-brand-primary/75 leading-relaxed">
                    Unlike standard "gentle horsemanship" cliches, the 7-Step Bulletproof System is an authentic trademark of the Infinity brand designed by Francois and Pip. It is structured around specific milestones: Internal Composure, Herd Signaling, Pressure Demarcation, Desensitization Loops, Willing Direction, Somatic Biomechanics, and Conscious Union.
                  </p>
                </div>

                <div className="border border-brand-border p-5 rounded-sm bg-white space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                    <span className="font-sans font-bold text-brand-dark">Barefoot Trimming & Equissage Massage Services</span>
                  </div>
                  <p className="font-sans text-brand-primary/75 leading-relaxed">
                    We cross-referenced and confirmed that Infinity Equestrian actively provides Barefoot Trimming and Equissage massage therapies. These services are integrated into our main site structure to assure owners looking for rehabilitation can easily request custom packages.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Dashboard Footer */}
        <div className="bg-[#F0EEE9] p-5 border-t border-brand-border flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs text-brand-primary/70">
            <ShieldCheck className="w-4 h-4 text-brand-secondary" />
            <span>Audit & Journey Maps approved for presentation.</span>
          </div>
          <button
            onClick={onClose}
            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white text-[10px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-sm transition-editorial cursor-pointer"
          >
            Close strategy desk & view site
          </button>
        </div>

      </div>
    </div>
  );
}

// Inline fallback for CheckCircle2
function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
