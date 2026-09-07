import { Service, FAQItem, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "bulletproof-foundation",
    title: "7-Step Bulletproof Foundation System",
    tagline: "The Infinity Way",
    headline: "Bridging the Language Gap Between Horse & Human",
    category: "Core Foundation",
    price: "$97 AUD",
    priceNote: "One-time digital access with lifetime resource updates ($7 starter kit also available)",
    suitability: "Riders, handlers, and horse owners of all disciplines who experience communication gaps, confidence issues, or behavioral challenges with their horses.",
    requirements: [
      "Access to a device (phone, tablet, computer) to watch the system modules",
      "A halter and lead rope for putting groundwork steps into action",
      "An open mind to learn the natural language of horses"
    ],
    whatHappens: "You will master Pip Easton's signature 7-step method which translates natural horse herd behaviors into clear training milestones. Learn to establish respectful boundaries, diagnose anxiety in your horse, and cultivate deep-seated willingness without force, whips, or bribing.",
    duration: "Self-paced training program",
    location: "Online Video Portal & Digital Manuals",
    expectations: "Expect a shift from dominant pressure-based reactions to collaborative, trust-centered leadership. You will learn to recognize subtle ear, eye, and posture cues that prevent accidents before they occur.",
    beforeYouBook: [
      "The system can be used by beginners and professional trainers alike.",
      "Instant access is granted upon checkout so you can start learning immediately."
    ],
    faqs: [
      {
        question: "Is this system suitable for green or freshly broken horses?",
        answer: "Yes, absolutely. The 7-Step Foundation is ideal for setting boundaries and establishing a safe workspace with young or green horses."
      },
      {
        question: "Does it require physical strength?",
        answer: "No. The system is designed around mental awareness, clear timing, and emotional composure rather than physical force."
      }
    ],
    ctaText: "Acquire Foundation Access",
    image: "/src/assets/images/groundwork_denim_jacket_1788481530999.jpg"
  },
  {
    id: "zen-float-loading",
    title: "Zen Float Loading & Training",
    tagline: "Stress-Free Travel Solutions",
    headline: "Solving Float Anxiety and Rushing with Absolute Patience",
    category: "Specialist Solutions",
    price: "$111 AUD / hr",
    priceNote: "Travel fees apply depending on distance from Gympie/Sunshine Coast base",
    suitability: "For horses who refuse to load, rear, rush backward out of the trailer, or panic once the tailbar is shut.",
    requirements: [
      "Your own horse and a float (or you can coordinate to rent our hire float)",
      "A safe working area (such as a round yard or fenced paddock) adjacent to the float position",
      "Your horse should be fitted with a sturdy halter and a 12ft lead rope if possible"
    ],
    whatHappens: "Pip Easton and Francois Ignatius travel directly to your property. Through slow desensitization and grounded leadership, we re-educate your horse to view the trailer as a comfortable sanctuary rather than a dark trap. We train you, the owner, to handle the loading so you can safely repeat the process alone.",
    duration: "Usually 60 to 90 minutes per session",
    location: "Mobile - We travel to your property (Sunshine Coast, Gympie, Hervey Bay, Caboolture)",
    expectations: "We do not use aggressive force, tight ropes, food bribes, or whips. Expect a quiet, slow, and methodical training experience that prioritizes your horse's heart rate and emotional state.",
    beforeYouBook: [
      "If your horse has a severe travel panic history, please outline this in the enquiry form so we can prepare.",
      "Sessions must be booked at least 1-2 weeks in advance due to travel scheduling."
    ],
    faqs: [
      {
        question: "How many sessions does it take to solve a float loading issue?",
        answer: "Most horses show major breakthroughs in 1-2 sessions, but we train *you* to carry on the daily reinforcement steps so the result sticks permanently."
      },
      {
        question: "Do you provide floats for training if I don't own one yet?",
        answer: "Yes, we can arrange double-straight-load float hire at $80 AUD for 6 hours for use during or after our sessions."
      }
    ],
    ctaText: "Enquire for Float Loading",
    image: "/src/assets/images/float_loading_training_1788478572590.jpg"
  },
  {
    id: "barefoot-trimming",
    title: "Barefoot Trimming & Hoof Rehabilitation",
    tagline: "Natural Hoofcare Solutions",
    headline: "Unlocking Natural Movement through Balanced Anatomical Trimming",
    category: "Specialist Solutions",
    price: "$80 AUD / horse",
    priceNote: "Surcharges may apply for travel beyond our core Gympie/Sunshine Coast routing zones",
    suitability: "Horse owners transitioning from steel shoes to barefoot, or dealing with laminitis, seedy toe, thrush, flared walls, or unbalanced hooves.",
    requirements: [
      "A level, firm, clean, and sheltered area to work (away from mud and wind)",
      "A reasonably cooperative horse (or you can book a preparatory 7-Step groundwork lesson for flighty horses)",
      "Access to fly spray during summer months to keep the horse comfortable and still"
    ],
    whatHappens: "Francois Ignatius evaluates your horse's posture, limb alignment, and hoof wear patterns. He performs a precision barefoot trim that respects the unique anatomy of each hoof. He also educates you on diet, moisture control, and movement strategies to build a thick, resilient hoof wall.",
    duration: "Usually 30 to 45 minutes per horse",
    location: "Mobile - We travel directly to your property / paddock",
    expectations: "A calm, patient treatment. Francois works slowly with young, arthritic, or nervous horses. No tying up or physical wrestling; we use natural alignment and groundwork to gain cooperation.",
    beforeYouBook: [
      "Please make sure your horse's legs are dry and free from thick mud before we arrive.",
      "If your horse has severe lameness history, please upload any veterinary X-rays or share notes beforehand."
    ],
    faqs: [
      {
        question: "How often should barefoot horses be trimmed?",
        answer: "We recommend a maintenance cycle of 4 to 6 weeks, depending on the season, workload, and individual growth rates."
      },
      {
        question: "Can any horse transition to barefoot?",
        answer: "With correct trimming, optimized mineral nutrition, and boots/pads during the transition phase, almost all horses can develop sound, healthy barefoot hooves."
      }
    ],
    ctaText: "Inquire for Barefoot Trimming",
    image: "/src/assets/images/barefoot_trimming_hoofcare_1788481593716.jpg"
  },
  {
    id: "equissage-massage-therapy",
    title: "Equissage Pulse Massage & Tension Release",
    tagline: "Equine Somatic Recovery",
    headline: "Releasing Muscle Tension and Accelerating Lymphatic Drainage",
    category: "Specialist Solutions",
    price: "$90 AUD / treatment",
    priceNote: "Discounted rates available when combined with barefoot trimming or multiple horses",
    suitability: "Horses recovering from heavy competition, showing signs of cold-backed stiffness, girthiness, short-striding, or general structural tension.",
    requirements: [
      "A quiet, safe tying area or stable away from high-traffic barn noise",
      "A clean, dry coat so the physical massager maintains full contact",
      "The owner or handler must be present to reassure the horse during the initial stimulation"
    ],
    whatHappens: "Francois Ignatius performs a targeted physical assessment of your horse's major muscle chains (neck, shoulders, thoracic sling, loin, and hindquarters). He applies deep somatic massage combined with the state-of-the-art Equissage Pulse technology to stimulate blood flow, relax deep tissues, and clear lactic acid build-up.",
    duration: "45 to 60 Minutes per session",
    location: "Mobile - We travel directly to your yard or arena paddock",
    expectations: "Your horse will display deep relaxation signals: licking, chewing, yawning, and lowering of the head. We work with the horse's nervous system, never forcing them into a state of flight.",
    beforeYouBook: [
      "We recommend not feeding a heavy grain meal immediately before or after the treatment.",
      "Sessions can be perfectly paired with ridden classical lessons to optimize warm-up and cool-down cycles."
    ],
    faqs: [
      {
        question: "What is Equissage Pulse therapy?",
        answer: "It is a therapeutic system that uses cycloidal vibration (three-way deep penetration) to improve blood circulation, clear lymphatic fluids, and soothe tight back muscles safely."
      },
      {
        question: "Can horses under veterinary care receive treatments?",
        answer: "Yes, but we require veterinary approval for horses recovering from acute tears, fractures, or systemic infections."
      }
    ],
    ctaText: "Book Equissage Therapy",
    image: "/src/assets/images/equissage_massage_bodywork_1788481608800.jpg"
  },
  {
    id: "ridden-lessons-equitation",
    title: "Classical Ridden Lessons & Biomechanics",
    tagline: "Mobile Dressage & Jumping",
    headline: "Topline Development and Balanced Classical Equitation",
    category: "Riding & Biomechanics",
    price: "$111 AUD",
    priceNote: "Flat rate for 60-minute private lesson plus travel surcharge beyond base radius",
    suitability: "Intermediate to advanced riders of all disciplines looking to improve self-carriage, muscle activation, and emotional symmetry with their horse.",
    requirements: [
      "**You MUST have your own horse.** We do not provide school horses or mounts for riding lessons.",
      "A fenced riding arena or a flat grass paddock with safe footing",
      "Correct riding attire: approved helmet, boots with heels, and appropriate tack"
    ],
    whatHappens: "A focused private session covering biomechanics. Pip or Francois guides you through lateral movements, transition work, and classical equitation techniques to build your horse's correct topline and engagement. The focus is always on lightness of aids and partnership.",
    duration: "60 Minutes",
    location: "Mobile - We travel to your property or arena (Sunshine Coast & Gympie regions)",
    expectations: "No heavy hands or forced frame headsets. We work from the back to the front, focusing on natural balance and structural alignment.",
    beforeYouBook: [
      "Please confirm you have your own horse. This is a strict requirement for ridden equitation lessons.",
      "We recommend grooming and warming up your horse slightly on the ground before our arrival to maximize riding time."
    ],
    faqs: [
      {
        question: "Do you teach absolute beginner riders?",
        answer: "We prefer teaching riders who already have basic independent balance under saddle and own their own horse, as our focus is on advanced biomechanics and mutual confidence."
      },
      {
        question: "What is your bad weather cancellation policy?",
        answer: "If conditions are unsafe (torrential rain, lightning, extreme heat), we will postpone and reschedule without any fee or penalty."
      }
    ],
    ctaText: "Schedule a Ridden Lesson",
    image: "/src/assets/images/classical_lessons_arena_1788481544258.jpg"
  },
  {
    id: "mindset-life-coaching",
    title: "Equestrian Mindset & Life Coaching",
    tagline: "Mental Fitness for Riders",
    headline: "Mastering Emotional Intelligence & Leadership Under Pressure",
    category: "Mindset & Growth",
    price: "Custom Packages",
    priceNote: "Inquire for weekly or monthly coaching packages",
    suitability: "Riders suffering from performance anxiety, fear after a fall, or self-doubt. Also suitable for couples and business owners looking for clarity and goal-setting.",
    requirements: [
      "A stable internet connection for FaceTime or Phone call sessions",
      "A quiet, private environment where you feel comfortable talking openly",
      "A notebook to record breakthroughs and actionable weekly routines"
    ],
    whatHappens: "Work 1-on-1 with Pip Easton, a Certified Laser Life Coach with over 30 years of coaching expertise trained in NLP and Neuroscience. We dissect the source of performance anxiety, fear, or self-sabotage, establishing clear mental routines to help you act with calm authority.",
    duration: "60 Minute phone or FaceTime calls",
    location: "Remote (Global face-to-face video coaching)",
    expectations: "Expect highly actionable neuroscience-backed techniques. This is not passive venting; it is strategic transformation of your inner beliefs and routines.",
    beforeYouBook: [
      "This service is remote. You do not need a horse or a stable to benefit from Pip's life coaching.",
      "All initial consultations are confidential."
    ],
    faqs: [
      {
        question: "Do I have to be an active rider to take life coaching sessions?",
        answer: "No. Pip's coaching extends to general confidence, relationship communication, and business alignment, utilizing principles of herd dynamics and personal psychology."
      },
      {
        question: "How many sessions are recommended?",
        answer: "We offer tailored 4-week, 8-week, and 12-week packages to build sustainable mental habits."
      }
    ],
    ctaText: "Book a Mindset Consultation",
    image: "/src/assets/images/pip_hugging_horse_1788478505449.jpg"
  },
  {
    id: "equine-assisted-therapy",
    title: "Infinity Equine-Assisted Therapy",
    tagline: "Conscious Ground Connection",
    headline: "Non-Riding Personal Discovery with Horses as Co-Coaches",
    category: "Mindset & Growth",
    price: "Inquire for quote",
    priceNote: "Customized for individuals, children, or family sessions",
    suitability: "Individuals, teenagers, and corporate teams seeking self-esteem, somatic healing, and healthy emotional boundaries. **No horse experience is required.**",
    requirements: [
      "Closed-toe boots or sturdy trainers/sneakers",
      "Comfortable outdoor clothing suited to the weather",
      "No riding is involved; all interactions take place safely on the ground"
    ],
    whatHappens: "Step into the paddock with a horse in a guided, non-riding framework. Horses act as biological mirrors—they instantly read your heart rate, muscular tension, and emotional congruence. Through structured groundwork, you will discover your natural boundaries, leadership style, and build authentic confidence.",
    duration: "60 to 75 Minutes per session",
    location: "Sunshine Coast Hinterland Sanctuary (Base gympie-adjacent private farm)",
    expectations: "A beautiful, calm, and deeply emotional experience. You will not ride. You will learn to hold your space and communicate purely through energy and presence.",
    beforeYouBook: [
      "Safety is our absolute priority. All ground activities are supervised by experienced handlers.",
      "Perfect for those who are highly anxious or even fearful around horses."
    ],
    faqs: [
      {
        question: "Is this suitable for young children?",
        answer: "Yes, we offer tailored youth sessions focusing on emotional regulation and confidence building through safe, calm miniature horse or pony interactions."
      },
      {
        question: "Can beginners participate?",
        answer: "Yes. In fact, having zero prior horse experience often leads to the most honest, unbiased breakthroughs!"
      }
    ],
    ctaText: "Inquire about Equine Therapy",
    image: "/src/assets/images/founders_beach_horse_1788478486991.jpg"
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    category: "Lessons & Travel",
    question: "Do you provide school horses for lessons?",
    answer: "No. For all ridden equitation, dressage, and jumping lessons, you must have your own horse and a safe riding space (arena or grass paddock). We operate as a mobile service and travel directly to your property."
  },
  {
    category: "Lessons & Travel",
    question: "What geographical areas do you travel to?",
    answer: "We are based in Gympie, QLD, and regularly travel to clients throughout the Sunshine Coast, Hervey Bay, and Caboolture areas. For properties outside our regular routes, a small travel surcharge may apply to cover fuel and time."
  },
  {
    category: "Float Training",
    question: "My horse is highly dangerous when loading. Can you still help?",
    answer: "Yes. Many of our clients come to us as a last resort after trying everything else. We focus on calm ground foundations first before ever approaching the ramp. Because safety is our priority, we work slowly to lower the horse's stress levels."
  },
  {
    category: "Float Training",
    question: "Do I need my own float for the session?",
    answer: "It is best to train using the actual float you intend to use for travel, as horses can recognize specific interior shapes. If you don't own one yet, we can arrange for our Double Straight-Load hire float ($80 AUD for 6 hours) to be brought to your property."
  },
  {
    category: "Policies & Booking",
    question: "What is your cancellation policy?",
    answer: "We require a minimum of 24 hours notice for any cancellations or rescheduling. Cancellations made within 24 hours of the scheduled travel time may incur a fee of 50% of the session rate."
  },
  {
    category: "Policies & Booking",
    question: "What happens if there is heavy rain or extreme weather?",
    answer: "If the weather makes riding or groundwork unsafe (heavy storms, lightning, extreme summer heat above 38°C), we will contact you to reschedule at no cost. Your safety and your horse's physical comfort are paramount."
  },
  {
    category: "Mindset & Therapy",
    question: "What is the difference between Life Coaching and Equine Therapy?",
    answer: "Life Coaching is conducted remotely over FaceTime or phone, focusing strictly on personal psychology, routines, and performance anxiety. Equine-Assisted Therapy is a physical, non-riding experience at our Hinterland base where you interact with horses on the ground to mirror your inner emotions."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Pip's 7-Step Bulletproof Foundation transformed my relationship with my green thoroughbred. He went from being spooky and reactive to trusting my cues in just three weeks of groundwork.",
    author: "Sarah M.",
    role: "OTTB Owner, Noosa",
    tag: "Core Foundation"
  },
  {
    quote: "Our horse would take up to three hours to load, shaking and striking out. Pip and Francois showed us the 'Zen Loading' technique. It was calm, silent, and in 45 minutes he walked in on a loose rein.",
    author: "Dave & Karen G.",
    role: "Breeders, Sunshine Coast",
    tag: "Zen Float Loading"
  },
  {
    quote: "I was suffering from intense performance blockages after a major fall in showjumping. Pip's coaching gave me neuro-linguistic tools that completely reshaped my reaction to pressure. Highly recommend.",
    author: "Melissa T.",
    role: "Competitive Showjumper, Gympie",
    tag: "Mindset Coaching"
  }
];

export const TRUST_STATS = {
  yearsExperience: "40+",
  clientsHelped: "1,200+",
  successRate: "98%",
  locationServed: "Gympie, Sunshine Coast & Wide Bay"
};
