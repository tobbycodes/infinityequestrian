import React, { useState } from "react";
import { Sparkles } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AuditDashboard from "./components/AuditDashboard";
import ServiceDetailsModal from "./components/ServiceDetailsModal";

// Sub-pages
import HomePage from "./components/pages/Home";
import LessonsPage from "./components/pages/Lessons";
import ClinicsPage from "./components/pages/Clinics";
import EquineMirrorPage from "./components/pages/EquineMirror";
import LifeCoachingPage from "./components/pages/LifeCoaching";
import AboutPage from "./components/pages/About";
import ContactPage from "./components/pages/Contact";

import { SERVICES_DATA, GENERAL_FAQS } from "./data";
import { Service } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("");
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  
  // FAQ state
  const [faqSearch, setFaqSearch] = useState("");
  const [activeFaqTab, setActiveFaqTab] = useState<string>("All");

  const faqCategories = ["All", "Lessons & Travel", "Float Training", "Mindset & Therapy", "Policies & Booking"];

  // Filter FAQs based on search and active tab
  const filteredFaqs = GENERAL_FAQS.filter(faq => {
    const matchesTab = activeFaqTab === "All" || faq.category === activeFaqTab;
    const matchesSearch = 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleEnquireClick = () => {
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnquireClickWithService = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinderClick = () => {
    setCurrentPage("home");
    setTimeout(() => {
      const element = document.getElementById("finder");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleServiceSelectForEnquiry = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  // Render correct sub-page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage 
            onEnquireClick={handleEnquireClick}
            onFinderClick={handleFinderClick}
            onServiceSelect={handleServiceSelectForEnquiry}
            selectedServiceId={selectedServiceId}
            setActiveModalService={setActiveModalService}
            faqSearch={faqSearch}
            setFaqSearch={setFaqSearch}
            activeFaqTab={activeFaqTab}
            setActiveFaqTab={setActiveFaqTab}
            filteredFaqs={filteredFaqs}
            faqCategories={faqCategories}
          />
        );
      case "lessons":
        return <LessonsPage onEnquireClick={handleEnquireClickWithService} />;
      case "clinics":
        return <ClinicsPage onEnquireClick={handleEnquireClickWithService} />;
      case "equine-mirror":
        return <EquineMirrorPage onEnquireClick={handleEnquireClickWithService} />;
      case "life-coaching":
        return <LifeCoachingPage onEnquireClick={handleEnquireClickWithService} />;
      case "about":
        return <AboutPage />;
      case "contact":
        return (
          <ContactPage 
            selectedServiceId={selectedServiceId} 
            onServiceSelect={handleServiceSelectForEnquiry} 
          />
        );
      default:
        return (
          <HomePage 
            onEnquireClick={handleEnquireClick}
            onFinderClick={handleFinderClick}
            onServiceSelect={handleServiceSelectForEnquiry}
            selectedServiceId={selectedServiceId}
            setActiveModalService={setActiveModalService}
            faqSearch={faqSearch}
            setFaqSearch={setFaqSearch}
            activeFaqTab={activeFaqTab}
            setActiveFaqTab={setActiveFaqTab}
            filteredFaqs={filteredFaqs}
            faqCategories={faqCategories}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0b1528] selection:bg-[#c5a880]/30 selection:text-[#0b1528] flex flex-col justify-between">
      <div>
        {/* Header component */}
        <Header 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onEnquireClick={handleEnquireClick} 
          onFinderClick={handleFinderClick}
        />

        {/* Dynamic page content */}
        <main>{renderPage()}</main>
      </div>

      {/* Footer component */}
      <Footer />

      {/* Floating Audit & Strategy Badge */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAuditOpen(true)}
          className="bg-brand-primary hover:bg-brand-primary/95 text-white border border-brand-secondary/40 shadow-2xl px-4 py-3.5 rounded-full flex items-center gap-2.5 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer font-sans"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-secondary rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-secondary rounded-full" />
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#FAF8F5]">
            🔍 Strategy Desk & Journeys
          </span>
        </button>
      </div>

      {/* Interactive Audit & Journey Maps Dashboard Panel */}
      <AuditDashboard 
        isOpen={isAuditOpen} 
        onClose={() => setIsAuditOpen(false)} 
        onEnquireClick={handleEnquireClick}
      />

      {/* Service Details Modal Dialog */}
      {activeModalService && (
        <ServiceDetailsModal 
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onEnquire={(serviceId) => {
            handleServiceSelectForEnquiry(serviceId);
            setActiveModalService(null);
            handleEnquireClick();
          }}
        />
      )}
    </div>
  );
}
