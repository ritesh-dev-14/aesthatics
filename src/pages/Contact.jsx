// import React from 'react';
// import { motion } from 'framer-motion';
// import { COMPANY_INFO } from '../data/constants';
// import { MapPin, Phone, Mail } from 'lucide-react';

// export default function Contact() {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Get In Touch</h1>
//         <p className="text-gray-600">Partner with Aesthetic Homez for your next luxury project.</p>
//         <div className="h-1 w-24 bg-gold mx-auto mt-6" />
//       </div>

//       <div className="grid md:grid-cols-2 gap-16 bg-white p-8 md:p-12 shadow-xl border border-gray-100">
//         <div>
//           <h2 className="text-2xl font-serif mb-8 text-charcoal">Corporate Information</h2>
          
//           <div className="space-y-6">
//             <div className="flex items-start">
//               <MapPin className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
//               <div>
//                 <h4 className="font-semibold text-charcoal mb-1">{COMPANY_INFO.name}</h4>
//                 <p className="text-gray-600 text-sm">By {COMPANY_INFO.parent}</p>
//                 <p className="text-gray-600 text-sm mt-1">{COMPANY_INFO.location}</p>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <Mail className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
//               <div>
//                 <h4 className="font-semibold text-charcoal mb-1">Email Us</h4>
//                 <p className="text-gray-600 text-sm">{COMPANY_INFO.email}</p>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <Phone className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
//               <div>
//                 <h4 className="font-semibold text-charcoal mb-1">Call Us</h4>
//                 <p className="text-gray-600 text-sm">{COMPANY_INFO.phone}</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-12 p-6 bg-cream border-l-4 border-gold">
//             <p className="text-sm text-gray-600 italic">
//               "We pride ourselves on on-time delivery and dedicated support for all our B2B partners and interior design clients."
//             </p>
//           </div>
//         </div>

//         <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//           <h2 className="text-2xl font-serif mb-6 text-charcoal">Send an Inquiry</h2>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">First Name</label>
//               <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Last Name</label>
//               <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
//             </div>
//           </div>
//           <div>
//             <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Company Name (B2B)</label>
//             <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
//             <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Requirements</label>
//             <textarea rows="4" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors resize-none"></textarea>
//           </div>
//           <button className="w-full bg-charcoal text-white py-4 font-semibold tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-300 mt-4">
//             Submit
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// }





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/constants';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  MessageSquare, 
  Globe 
} from 'lucide-react';

const FAQS = [
  {
    q: "How do I request physical fabric sample books for my firm?",
    a: "Registered trade partners, architects, and interior designers can request complimentary swatch kits directly through our inquiry form or by attaching project spec sheets."
  },
  {
    q: "What are your standard manufacturing and dispatch lead times?",
    a: "Standard collection orders ship within 5-7 business days. Custom B2B woven or fire-retardant contract orders typically require 3-4 weeks depending on yardage volume."
  },
  {
    q: "Do you provide international shipping and site measurement services?",
    a: "Yes, we ship globally across North America, Europe, the Middle East, and Asia. On-site technical measurement services are available for large-scale commercial developments."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    inquiryType: 'B2B & Trade Partner',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen font-sans py-24 px-6 md:px-12 selection:bg-[#C5A059] selection:text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium block mb-3"
          >
            Client Services & Consultations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-light text-[#1A1A1A] mb-5 tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto font-light leading-relaxed text-base md:text-lg"
          >
            Partner with {COMPANY_INFO.name} for tailored architectural draperies, bespoke upholstery, and luxury residential projects.
          </motion.p>
          <div className="h-[2px] w-16 bg-[#C5A059] mx-auto mt-8 opacity-70" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column: Corporate Info & Direct Contact */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-black/5 space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059] block mb-2">Corporate Headquarters</span>
                <h2 className="text-2xl font-serif text-[#1A1A1A]">Contact Details</h2>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-black/5 flex items-center justify-center mr-5 shrink-0 text-[#C5A059] group-hover:bg-[#1A1A1A] group-hover:text-[#C5A059] transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#1A1A1A] mb-0.5">{COMPANY_INFO.name}</h4>
                    <p className="text-xs text-gray-400 mb-1">By {COMPANY_INFO.parent}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{COMPANY_INFO.location}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-black/5 flex items-center justify-center mr-5 shrink-0 text-[#C5A059] group-hover:bg-[#1A1A1A] group-hover:text-[#C5A059] transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#1A1A1A] mb-0.5">Email Support</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-gray-600 hover:text-[#C5A059] transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-black/5 flex items-center justify-center mr-5 shrink-0 text-[#C5A059] group-hover:bg-[#1A1A1A] group-hover:text-[#C5A059] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#1A1A1A] mb-0.5">Phone Inquiries</h4>
                    <div className="flex flex-col gap-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-xs text-gray-600 hover:text-[#C5A059] transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-black/5 flex items-center justify-center mr-5 shrink-0 text-[#C5A059] group-hover:bg-[#1A1A1A] group-hover:text-[#C5A059] transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-[#1A1A1A] mb-0.5">Showroom & Desk Hours</h4>
                    <p className="text-xs text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-xs text-gray-400">Saturday by Private Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Commitment Card */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border-l-4 border-[#C5A059]">
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  "We pride ourselves on on-time delivery and dedicated support for all our B2B partners and interior design clients."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-black/5 relative overflow-hidden">
            
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif text-[#1A1A1A] mb-3">Inquiry Received</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Thank you for reaching out to {COMPANY_INFO.name}. A dedicated trade representative will review your project requirements and respond within 24 business hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ firstName: '', lastName: '', company: '', email: '', inquiryType: 'B2B & Trade Partner', requirements: '' });
                    }}
                    className="px-8 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#C5A059] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex justify-between items-baseline mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059] block mb-1">Direct Procurement</span>
                      <h2 className="text-2xl font-serif text-[#1A1A1A]">Send an Inquiry</h2>
                    </div>
                    <span className="text-xs text-gray-400 font-light">* Required Fields</span>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">First Name *</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Elizabeth"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Last Name *</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Vance"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] transition-colors" 
                      />
                    </div>
                  </div>

                  {/* Company & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Company / Studio (B2B)</label>
                      <input 
                        type="text" 
                        placeholder="Atelier Interiors Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Work Email *</label>
                      <input 
                        required
                        type="email" 
                        placeholder="e.vance@atelier.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] transition-colors" 
                      />
                    </div>
                  </div>

                  {/* Inquiry Category */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Inquiry Purpose</label>
                    <select 
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                    >
                      <option>B2B & Trade Partner Inquiry</option>
                      <option>Hospitality & Resort Spec</option>
                      <option>Sample Box / Swatch Request</option>
                      <option>Custom Drapery & Blinds Quote</option>
                      <option>General Support</option>
                    </select>
                  </div>

                  {/* Requirements */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Project Requirements *</label>
                    <textarea 
                      required
                      rows="4" 
                      placeholder="Please details project scope, required fabric certifications (FR, Acoustic, Martindale), estimated volume, or target completion date..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="w-full bg-[#FAF8F5] border border-black/10 rounded-xl px-4 py-3.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A1A1A] hover:bg-[#C5A059] text-white py-4 font-semibold tracking-widest uppercase text-xs rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Trade FAQ Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-black/5">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059] block mb-2">Help Center</span>
            <h2 className="text-3xl font-serif text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-100">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                  >
                    <span className="text-base font-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#C5A059]" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 font-light leading-relaxed pt-2 pb-3">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.div>
  );
}