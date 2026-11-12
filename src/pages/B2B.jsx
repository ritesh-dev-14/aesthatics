// import React from 'react';
// import { motion } from 'framer-motion';
// import { Building2, Briefcase, Landmark } from 'lucide-react';

// export default function B2B() {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <section className="py-24 px-6 md:px-12 bg-charcoal text-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-serif text-gold mb-6">B2B & Hospitality Solutions</h1>
//           <p className="text-lg text-gray-300 leading-relaxed font-light">
//             We operate with a B2B-first approach, serving interior designers, architects, hoteliers, and commercial real estate developers globally with bespoke fabric solutions that add comfort, style, and lasting value.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto -mt-10 relative z-10">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-10 bg-white shadow-xl border-t-4 border-gold">
//             <Building2 className="w-12 h-12 text-gold mb-6" />
//             <h3 className="text-2xl font-serif mb-4">Hotels & Resorts</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">Fire-retardant, highly durable, and aesthetically superior fabrics tailored for the high demands of the hospitality sector. We understand the need for both luxury and longevity.</p>
//           </div>
//           <div className="p-10 bg-white shadow-xl border-t-4 border-gold">
//             <Briefcase className="w-12 h-12 text-gold mb-6" />
//             <h3 className="text-2xl font-serif mb-4">Commercial Spaces</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">Sleek blinds and durable upholstery perfect for corporate offices, theaters, and retail environments. Designed to handle high foot traffic while maintaining a premium look.</p>
//           </div>
//           <div className="p-10 bg-white shadow-xl border-t-4 border-gold">
//             <Landmark className="w-12 h-12 text-gold mb-6" />
//             <h3 className="text-2xl font-serif mb-4">Luxury Residences</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">Collaborating directly with architects and interior designers to bring bespoke residential visions to reality. We provide customized designs tailored for exclusive homes.</p>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Briefcase, 
  Landmark, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  FileText,
  Clock,
  Globe2,
  X
} from 'lucide-react';
import image1 from '../images/image1.webp';
import image6 from '../images/image6.webp';
import image10 from '../images/image10.webp';

const SECTORS = [
  {
    id: "hospitality",
    title: "Hotels & Resorts",
    subtitle: "High-Performance Luxury for Global Hospitality",
    icon: Building2,
    badge: "Contract Grade",
    desc: "Fire-retardant, blackout, and acoustic draperies engineered for high-turnover luxury suites and public lobbies without compromising on tactile warmth.",
    specs: [
      { label: "Fire Safety", val: "NFPA 701 & BS 5867 Pass" },
      { label: "Acoustics", val: "NRC Rating 0.85+" },
      { label: "Durability", val: "100,000+ Martindale Rubs" },
      { label: "Lead Time", val: "Express 3-4 Weeks Global" }
    ],
    features: [
      "Custom color-matching to Pantone & RAL standards",
      "Motorized blackout track integration (Somfy, Lutron compatible)",
      "Stain-shield and antimicrobial liquid barrier treatments"
    ],
    image: image10
  },
  {
    id: "commercial",
    title: "Commercial & Corporate",
    subtitle: "Architectural Window & Seating Systems",
    icon: Briefcase,
    badge: "Heavy Traffic",
    desc: "Sleek roller blinds, acoustic wall panelings, and ultra-durable upholstery crafted to optimize natural light while reducing glare in modern corporate environments.",
    specs: [
      { label: "Light Control", val: "1% to 10% Solar Openness" },
      { label: "Sustainability", val: "OEKO-TEX & GREENGUARD Gold" },
      { label: "Upholstery Rating", val: "Heavy Duty Commercial" },
      { label: "Warranty", val: "10-Year Commercial Structural" }
    ],
    features: [
      "Solar-reflective coatings for LEED points",
      "High-tensile woven vinyl & flame-retardant synthetic weaves",
      "Bulk volume pricing models for multi-floor developments"
    ],
    image: image6
  },
  {
    id: "residential",
    title: "Luxury Residential",
    subtitle: "Turnkey Bespoke Fabric Curation for Designers",
    icon: Landmark,
    badge: "Architectural",
    desc: "Collaborating directly with architects, interior stylists, and high-net-worth clients to produce custom silk draperies, chenille upholstery, and motorization solutions.",
    specs: [
      { label: "Customization", val: "Bespoke Weaving & Dyeing" },
      { label: "Materials", val: "Pure Linen, Velvet, Mulberry Silk" },
      { label: "Workroom", val: "Hand-finished Couture Edge" },
      { label: "Consultation", val: "Dedicated Trade Account Lead" }
    ],
    features: [
      "Exclusive trade pricing structure & dedicated account executive",
      "Full sample swatch kit dispatch within 24 hours",
      "On-site technical site measuring and installation support"
    ],
    image: image1
  }
];

const METRICS = [
  { label: "Global Projects", value: "450+", icon: Globe2 },
  { label: "Fire-Rated Certs", value: "100%", icon: ShieldCheck },
  { label: "Trade Turnaround", value: "14 Days", icon: Clock },
  { label: "Custom Swatches", value: "2,000+", icon: Layers },
];

export default function B2B() {
  const [activeTab, setActiveTab] = useState(SECTORS[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentSector = SECTORS.find(s => s.id === activeTab) || SECTORS[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#C5A059] selection:text-white"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-36 px-6 md:px-12 border-b border-black/5 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C5A059]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-black/10 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Architectural & Trade Portal
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif text-[#1A1A1A] font-light tracking-tight mb-8 leading-[1.15]"
          >
            B2B & Contract <br />
            <span className="italic font-normal text-[#C5A059]">Hospitality Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Empowering architects, developers, and interior design firms globally with fire-rated, acoustic-certified, and custom-milled high-performance textile solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-semibold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Request Trade Account & Specs
            </button>
            <a 
              href="#sectors"
              className="px-8 py-4 bg-[#FAF8F5] hover:bg-gray-100 text-[#1A1A1A] border border-black/10 font-semibold text-xs uppercase tracking-widest rounded-xl transition-all"
            >
              Explore Sectors
            </a>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 relative z-10">
          {METRICS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-[#FAF8F5] border border-black/5 rounded-2xl p-6 text-center shadow-sm"
              >
                <Icon className="w-5 h-5 text-[#C5A059] mx-auto mb-3 opacity-90" />
                <div className="text-3xl font-serif text-[#1A1A1A] font-semibold mb-1">{m.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{m.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sector Deep Dive Section */}
      <section id="sectors" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1A1A1A] mb-4">Tailored Solutions by Sector</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-light">
            Engineered to fulfill demanding technical specifications without sacrificing luxury aesthetics.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center gap-3 mb-16 overflow-x-auto pb-4">
          {SECTORS.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all duration-300 font-medium whitespace-nowrap ${
                  isActive
                    ? "bg-[#1A1A1A] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-black border border-black/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A059]" : "text-[#C5A059]"}`} />
                {sec.title}
              </button>
            );
          })}
        </div>

        {/* Selected Sector Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSector.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-10 items-stretch bg-white border border-black/5 rounded-3xl p-6 md:p-10 shadow-xl"
          >
            {/* Sector Image & Badge */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-full bg-gray-100">
              <img 
                src={currentSector.image} 
                alt={currentSector.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-[#1A1A1A] border border-black/5 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-semibold shadow-sm">
                  {currentSector.badge}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-serif text-white mb-1">{currentSector.title}</h3>
                <p className="text-xs text-gray-200 font-light">{currentSector.subtitle}</p>
              </div>
            </div>

            {/* Sector Information & Specs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <p className="text-gray-600 text-base leading-relaxed font-light mb-8">
                  {currentSector.desc}
                </p>

                {/* Technical Specifications Grid */}
                <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Technical Compliance & Specs
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentSector.specs.map((sp, idx) => (
                    <div key={idx} className="bg-[#FAF8F5] border border-black/5 rounded-xl p-4">
                      <div className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">{sp.label}</div>
                      <div className="text-sm font-semibold text-[#1A1A1A]">{sp.val}</div>
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <h4 className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-4">Contract Benefits</h4>
                <ul className="space-y-3">
                  {currentSector.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  Ready to specify <span className="text-[#1A1A1A] font-medium">{currentSector.title}</span> on your next RFP?
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] hover:text-[#C5A059] transition-colors"
                >
                  Request Trade Catalogue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Trade Consultation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white border border-black/5 rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">Trade & Contract Portal</span>
                <h3 className="text-2xl font-serif text-[#1A1A1A]">Request Architectural Specification Kit</h3>
                <p className="text-xs text-gray-500 mt-1">Receive technical cut-sheets, fire certification documentation, and physical sample boxes.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5">Full Name</label>
                    <input type="text" placeholder="Sarah Jenkins" className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5">Work Email</label>
                    <input type="email" placeholder="s.jenkins@studio.com" className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5">Company / Firm</label>
                    <input type="text" placeholder="Gensler / Studio Name" className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059]" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5">Project Sector</label>
                    <select className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]">
                      <option>Hospitality & Resort</option>
                      <option>Corporate & Commercial</option>
                      <option>High-End Residential</option>
                      <option>Other Architectural Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-1.5">Project Details / Estimated Yardage</label>
                  <textarea rows={3} placeholder="Tell us about your upcoming procurement requirements, deadline, or required certifications..." className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] resize-none" />
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C5A059] text-white font-semibold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-colors mt-2"
                >
                  Submit Trade Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}