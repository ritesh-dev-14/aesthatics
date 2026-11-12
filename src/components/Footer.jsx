// import React from 'react';
// import { COMPANY_INFO } from '../data/constants';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-charcoal text-white py-12 px-6 md:px-12 border-t-4 border-gold">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <div>
//           <h2 className="font-serif text-2xl text-gold mb-4">{COMPANY_INFO.name}</h2>
//           <p className="text-gray-400 text-sm">{COMPANY_INFO.tagline}</p>
//           <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">By {COMPANY_INFO.parent}</p>
//         </div>
//         <div>
//           <h3 className="font-serif text-lg mb-4 text-white">Contact</h3>
//           <p className="text-gray-400 text-sm">{COMPANY_INFO.location}</p>
//           <p className="text-gray-400 text-sm mt-2">{COMPANY_INFO.email}</p>
//           <p className="text-gray-400 text-sm mt-2">{COMPANY_INFO.phone}</p>
//         </div>
//         <div>
//           <h3 className="font-serif text-lg mb-4 text-white">India's Textile Hub</h3>
//           <p className="text-gray-400 text-sm leading-relaxed">
//             Proudly manufactured and exported from Panipat. Premium quality curtains, upholstery, and designer blinds for luxury spaces.
//           </p>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
//         <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
//         <div className="mt-4 md:mt-0 space-x-4">
//           <Link to="/about" className="hover:text-gold transition">About</Link>
//           <Link to="/contact" className="hover:text-gold transition">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }




import React from 'react';
import { COMPANY_INFO } from '../data/constants';
import { Link } from 'react-router-dom';
import { Camera, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../images/logo.webp';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-20 pb-10 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <img src={logo} alt={COMPANY_INFO.name} className="h-16 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          <p className="text-gray-400 text-sm leading-relaxed pr-4">
            {COMPANY_INFO.tagline}. Proudly manufactured and exported from Panipat, India's textile hub. Premium curtains, upholstery, and blinds.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-[#111] transition-colors duration-300">
              <Camera size={18} aria-hidden="true" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-[#111] transition-colors duration-300">
              <span className="text-lg font-bold leading-none" aria-hidden="true">f</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-[#111] transition-colors duration-300">
              <span className="text-xs font-bold leading-none" aria-hidden="true">in</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {['Home', 'About', 'Collections', 'B2B & Hospitality', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                  className="text-gray-400 hover:text-gold flex items-center group transition-colors text-sm"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Column */}
        <div>
          <h3 className="text-white font-serif text-xl mb-6">Our Collections</h3>
          <ul className="space-y-4">
            {['Luxury Curtains', 'Premium Upholstery', 'Designer Blinds', 'Custom B2B Solutions'].map((item) => (
              <li key={item}>
                <Link to="/collections" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-white font-serif text-xl mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin size={18} className="text-gold mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-sm">{COMPANY_INFO.name} <br/>By {COMPANY_INFO.parent}</p>
                <p className="text-gray-400 text-sm mt-1">{COMPANY_INFO.location}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="text-gold mr-3 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                {COMPANY_INFO.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-400 text-sm hover:text-gold transition-colors">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="text-gold mr-3 flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 text-sm hover:text-gold transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xs text-gray-500">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}