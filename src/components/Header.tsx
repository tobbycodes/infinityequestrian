import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onEnquireClick: () => void;
  onFinderClick: () => void;
}

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  onEnquireClick, 
  onFinderClick 
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll on body when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    navigateTo("home");
  };

  const isLightStyle = isScrolled || isOpen || currentPage !== "home";

  // Helper for navigation button styles with absolute contrast safety
  const getNavButtonClass = (isActive: boolean) => {
    const baseClass = "font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer pb-1.5 border-b-2";
    if (isActive) {
      if (isLightStyle) {
        return `${baseClass} text-brand-primary font-bold border-brand-secondary`;
      } else {
        return `${baseClass} text-white font-bold border-brand-secondary`;
      }
    } else {
      if (isLightStyle) {
        return `${baseClass} text-brand-primary/80 hover:text-brand-secondary border-transparent`;
      } else {
        return `${baseClass} text-white/80 hover:text-white border-transparent`;
      }
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isOpen ? "z-[250] bg-[#FAF8F5] border-b border-brand-border/60 py-4 shadow-sm" : "z-50"
      } ${
        !isOpen && isLightStyle
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-brand-border/60 py-4 shadow-xs"
          : !isOpen ? "bg-transparent py-6" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Branding Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3 text-left group focus-visible:outline-2 focus-visible:outline-brand-secondary focus-visible:outline-offset-2 rounded"
          aria-label="Infinity Equestrian Home"
        >
          <div className={`w-11 h-11 rounded-sm border bg-[#0b1528] overflow-hidden flex items-center justify-center shadow-md transition-all duration-300 ${isLightStyle ? "border-brand-border group-hover:border-brand-secondary" : "border-white/20 group-hover:border-white"}`}>
            <img 
              src="/assets/images/infinity_logo_1788471531048.jpg" 
              alt="Infinity Equestrian Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-display text-lg md:text-xl font-bold tracking-[0.15em] uppercase leading-none block transition-colors duration-300 ${isLightStyle ? "text-brand-primary" : "text-white"}`}>
              Infinity
            </span>
            <span className={`font-sans text-[10px] tracking-[0.25em] uppercase block mt-1 leading-none transition-all duration-300 ${isLightStyle ? "text-brand-secondary group-hover:text-brand-primary" : "text-white/70 group-hover:text-white"}`}>
              Equestrian
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10" aria-label="Main Desktop Navigation">
          <button
            onClick={() => navigateTo("home")}
            className={getNavButtonClass(currentPage === "home")}
          >
            Home
          </button>

          {/* Premium Experiences Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              className={`${getNavButtonClass(
                ["lessons", "clinics", "equine-mirror", "life-coaching"].includes(currentPage)
              )} flex items-center gap-1.5`}
            >
              Experiences <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Smooth animated dropdown panel matching #FAF8F5 background */}
            <div
              onMouseLeave={() => setIsDropdownOpen(false)}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#FAF8F5] border border-brand-border rounded-sm shadow-xl p-4 transition-all duration-300 origin-top z-50 ${
                isDropdownOpen 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => navigateTo("lessons")}
                  className="w-full text-left font-sans text-[11px] md:text-xs font-semibold tracking-wider uppercase text-brand-primary hover:text-black hover:bg-[#E4E2DC]/80 px-3 py-2.5 rounded-sm transition-all text-nowrap"
                >
                  Lessons & Hoofcare
                </button>
                <button
                  onClick={() => navigateTo("clinics")}
                  className="w-full text-left font-sans text-[11px] md:text-xs font-semibold tracking-wider uppercase text-brand-primary hover:text-black hover:bg-[#E4E2DC]/80 px-3 py-2.5 rounded-sm transition-all text-nowrap"
                >
                  Equestrian Clinics
                </button>
                <button
                  onClick={() => navigateTo("equine-mirror")}
                  className="w-full text-left font-sans text-[11px] md:text-xs font-semibold tracking-wider uppercase text-brand-primary hover:text-black hover:bg-[#E4E2DC]/80 px-3 py-2.5 rounded-sm transition-all text-nowrap"
                >
                  The Equine Mirror
                </button>
                <button
                  onClick={() => navigateTo("life-coaching")}
                  className="w-full text-left font-sans text-[11px] md:text-xs font-semibold tracking-wider uppercase text-brand-primary hover:text-black hover:bg-[#E4E2DC]/80 px-3 py-2.5 rounded-sm transition-all text-nowrap"
                >
                  Life & Mindset Coaching
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateTo("about")}
            className={getNavButtonClass(currentPage === "about")}
          >
            About Us
          </button>

          <button
            onClick={() => navigateTo("contact")}
            className={getNavButtonClass(currentPage === "contact")}
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => {
              navigateTo("home");
              setTimeout(() => {
                const element = document.getElementById("finder");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="font-sans text-xs font-semibold tracking-widest uppercase py-3 px-5 rounded-sm border border-[#1a1a1a]/25 bg-[#FAF8F5] text-[#1a1a1a] hover:bg-[#E4E2DC] transition-all duration-300 cursor-pointer shadow-xs"
          >
            Find My Fit
          </button>
          <button
            onClick={() => {
              if (currentPage === "contact") {
                const element = document.getElementById("enquiry-form-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              } else {
                navigateTo("contact");
              }
            }}
            className="font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-sm border border-[#1a1a1a]/25 bg-[#FAF8F5] text-[#1a1a1a] hover:bg-[#E4E2DC] transition-all duration-300 shadow-sm flex items-center gap-1 cursor-pointer"
          >
            Enquire Now <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 focus-visible:outline-2 focus-visible:outline-brand-secondary rounded-sm transition-colors duration-300 ${isLightStyle ? "text-brand-primary" : "text-white"}`}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Panel with maximum layer priority and completely solid #FAF8F5 background */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[72px] bg-[#FAF8F5] z-[240] lg:hidden border-t border-brand-border/40 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-[calc(100vh-72px)] p-6 sm:p-8 justify-between overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {/* Home Card */}
            <button
              onClick={() => navigateTo("home")}
              className={`w-full text-left font-serif text-lg font-bold transition-all duration-300 cursor-pointer rounded-sm p-4 border flex items-center justify-between ${
                currentPage === "home" 
                  ? "bg-white text-brand-secondary border-brand-secondary/80 shadow-xs" 
                  : "bg-white/60 text-[#1a1a1a] border-brand-border/30 hover:bg-white"
              }`}
            >
              <span>Home</span>
              <span className={`text-[9px] font-sans tracking-widest uppercase font-bold ${currentPage === "home" ? "text-brand-secondary" : "text-brand-primary/40"}`}>
                {currentPage === "home" ? "Current" : "Explore"}
              </span>
            </button>
            
            {/* Our Offerings Card List */}
            <div className="bg-white/65 border border-brand-border/30 rounded-sm p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-brand-border/20 pb-2 mb-2">
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#4A5346] uppercase">Our Offerings</span>
                <span className="font-sans text-[9px] tracking-widest text-brand-primary/40 uppercase">Experiences</span>
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <button
                  onClick={() => navigateTo("lessons")}
                  className={`w-full text-left font-serif text-base font-semibold py-2.5 px-3 rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    currentPage === "lessons" 
                      ? "bg-brand-secondary/10 text-brand-secondary" 
                      : "text-[#1a1a1a] hover:bg-[#E4E2DC]/40"
                  }`}
                >
                  <span>Lessons & Hoofcare</span>
                  {currentPage === "lessons" && <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                </button>
                
                <button
                  onClick={() => navigateTo("clinics")}
                  className={`w-full text-left font-serif text-base font-semibold py-2.5 px-3 rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    currentPage === "clinics" 
                      ? "bg-brand-secondary/10 text-brand-secondary" 
                      : "text-[#1a1a1a] hover:bg-[#E4E2DC]/40"
                  }`}
                >
                  <span>Equestrian Clinics</span>
                  {currentPage === "clinics" && <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                </button>
                
                <button
                  onClick={() => navigateTo("equine-mirror")}
                  className={`w-full text-left font-serif text-base font-semibold py-2.5 px-3 rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    currentPage === "equine-mirror" 
                      ? "bg-brand-secondary/10 text-brand-secondary" 
                      : "text-[#1a1a1a] hover:bg-[#E4E2DC]/40"
                  }`}
                >
                  <span>The Equine Mirror</span>
                  {currentPage === "equine-mirror" && <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                </button>
                
                <button
                  onClick={() => navigateTo("life-coaching")}
                  className={`w-full text-left font-serif text-base font-semibold py-2.5 px-3 rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    currentPage === "life-coaching" 
                      ? "bg-brand-secondary/10 text-brand-secondary" 
                      : "text-[#1a1a1a] hover:bg-[#E4E2DC]/40"
                  }`}
                >
                  <span>Life & Mindset Coaching</span>
                  {currentPage === "life-coaching" && <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                </button>
              </div>
            </div>

            {/* About Us Card */}
            <button
              onClick={() => navigateTo("about")}
              className={`w-full text-left font-serif text-lg font-bold transition-all duration-300 cursor-pointer rounded-sm p-4 border flex items-center justify-between ${
                currentPage === "about" 
                  ? "bg-white text-brand-secondary border-brand-secondary/80 shadow-xs" 
                  : "bg-white/60 text-[#1a1a1a] border-brand-border/30 hover:bg-white"
              }`}
            >
              <span>About Us</span>
              <span className={`text-[9px] font-sans tracking-widest uppercase font-bold ${currentPage === "about" ? "text-brand-secondary" : "text-brand-primary/40"}`}>
                {currentPage === "about" ? "Current" : "Our Story"}
              </span>
            </button>

            {/* Contact Card */}
            <button
              onClick={() => navigateTo("contact")}
              className={`w-full text-left font-serif text-lg font-bold transition-all duration-300 cursor-pointer rounded-sm p-4 border flex items-center justify-between ${
                currentPage === "contact" 
                  ? "bg-white text-brand-secondary border-brand-secondary/80 shadow-xs" 
                  : "bg-white/60 text-[#1a1a1a] border-brand-border/30 hover:bg-white"
              }`}
            >
              <span>Contact</span>
              <span className={`text-[9px] font-sans tracking-widest uppercase font-bold ${currentPage === "contact" ? "text-brand-secondary" : "text-brand-primary/40"}`}>
                {currentPage === "contact" ? "Current" : "Enquire"}
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => {
                navigateTo("home");
                setTimeout(() => {
                  const element = document.getElementById("finder");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 300);
              }}
              className="w-full text-center font-sans text-xs font-bold tracking-widest bg-[#FAF8F5] text-[#1a1a1a] border border-[#1a1a1a]/30 uppercase py-3.5 px-6 rounded-sm hover:bg-[#E4E2DC] transition-all duration-300 shadow-xs cursor-pointer"
            >
              Experience Finder
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="w-full text-center font-sans text-xs font-bold tracking-widest bg-brand-primary text-white py-4 px-6 rounded-sm hover:bg-brand-primary/90 transition-all duration-300 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Direct Enquiry <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
            <p className="text-center font-sans text-[10px] tracking-wider text-brand-primary/50 mt-4">
              Sunshine Coast, Queensland • Based in Gympie
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
