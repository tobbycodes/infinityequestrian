import React from "react";
import { Phone, Mail, MapPin, Calendar, Clock, ShieldCheck } from "lucide-react";
import EnquiryForm from "../EnquiryForm";
import { SERVICES_DATA } from "../../data";

interface ContactPageProps {
  selectedServiceId: string;
  onServiceSelect: (serviceId: string) => void;
}

export default function ContactPage({ selectedServiceId, onServiceSelect }: ContactPageProps) {
  return (
    <div className="pt-24 bg-[#FAF8F5]">
      {/* Editorial Header */}
      <section className="relative py-24 px-6 md:px-12 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/public
            /assets/images/founders_beach_horse_1788478486991.jpg" 
            alt="Sunshine Coast equestrian training location" 
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05] object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-[#070e1c]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-[#070e1c]/40" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-brand-secondary uppercase block">
            Servicing Gympie & Sunshine Coast
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight uppercase">
            Begin your connected journey <br />
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-brand-secondary not-italic capitalize leading-[0.3]">with your horse today</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Have questions about our signature Bulletproof System, float loading, or barefoot hoofcare? We travel directly to your property. Fill out our detailed form to establish custom fit.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Card split */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Column 1: Contact Details & Map */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
          <div className="space-y-4">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Contact Details</span>
            <h2 className="font-serif text-3xl font-bold text-brand-primary">Direct Communication</h2>
            <p className="font-sans text-sm text-brand-primary/70 leading-relaxed font-light">
              We respond to all genuine booking enquiries within 24–48 business hours. For urgent float-loading emergencies or hoof care needs, feel free to call us directly.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm border border-brand-border bg-white flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-brand-secondary" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Call / SMS</span>
                <a href="tel:0407087799" className="font-serif text-lg font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                  0407 087 799
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm border border-brand-border bg-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-brand-secondary" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Email Address</span>
                <a href="mailto:pipeaston@bigpond.com" className="font-serif text-lg font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                  pipeaston@bigpond.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm border border-brand-border bg-white flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-brand-secondary" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block">Based Location</span>
                <span className="font-serif text-lg font-bold text-brand-primary block">
                  Gympie, Sunshine Coast, QLD
                </span>
                <span className="font-sans text-xs text-brand-primary/60 block mt-0.5">
                  Servicing Sunshine Coast, Wide Bay, Hervey Bay, Caboolture & surroundings.
                </span>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="border border-brand-border rounded-sm overflow-hidden h-64 bg-neutral-100 relative shadow-xs">
            {/* Visual map backdrop using a real public maps image or high-quality illustration */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-white to-[#FAF8F5] z-10">
              <MapPin className="w-8 h-8 text-brand-secondary mb-3 animate-bounce" />
              <h4 className="font-serif text-lg font-bold text-brand-primary">Our Servicing Territories</h4>
              <p className="font-sans text-xs text-brand-primary/70 max-w-xs mt-1 leading-relaxed font-light">
                Sunshine Coast & Gympie, Queensland, Australia. We travel directly to your paddock, property, or private arena.
              </p>
              <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-brand-secondary mt-4 border border-brand-border px-3 py-1 rounded-sm">
                Mobile Servicing Area Map
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Enquiry Form */}
        <div id="enquiry-form-section" className="lg:col-span-7 bg-brand-surface border border-brand-border p-8 md:p-12 rounded-sm shadow-xs">
          <div className="mb-8">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-secondary uppercase block mb-1">Secure Reservation</span>
            <h3 className="font-serif text-2xl font-bold text-brand-primary">Enquire For Training & Trimming</h3>
            <p className="font-sans text-xs text-brand-primary/75 leading-relaxed mt-2 font-light">
              To match you with the perfect lesson, clinic, or barefoot trimming routing, please provide a few details about your horse and experience levels. Francois or Pip will contact you to confirm timing.
            </p>
          </div>

          <EnquiryForm 
            services={SERVICES_DATA}
            selectedServiceId={selectedServiceId} 
          />
        </div>

      </section>
    </div>
  );
}
