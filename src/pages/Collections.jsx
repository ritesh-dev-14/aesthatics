// import React from 'react';
// import { motion } from 'framer-motion';

// const COLLECTIONS = [
//   {
//     title: "Luxury Curtains",
//     desc: "From sheer elegance to blackout drapes, customized to perfection.",
//     image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
//   },
//   {
//     title: "Premium Upholstery",
//     desc: "Durable, stylish fabrics that bring furniture to life.",
//     image: "https://images.unsplash.com/photo-1617806118233-18e1c0935474?auto=format&fit=crop&q=80"
//   },
//   {
//     title: "Designer Blinds",
//     desc: "Modern window treatments balancing privacy and natural light.",
//     image: "https://images.unsplash.com/photo-1594541249767-16086f6d5386?auto=format&fit=crop&q=80"
//   }
// ];

// export default function Collections() {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Seasonal Collections</h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">Discover our modern catalogs featuring the latest trends in luxury fabrics, tailored for residential and commercial spaces.</p>
//           <div className="h-1 w-24 bg-gold mx-auto mt-6" />
//         </div>

//         <div className="grid md:grid-cols-3 gap-10">
//           {COLLECTIONS.map((item, idx) => (
//             <motion.div 
//               key={idx} 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: idx * 0.2 }}
//               className="group cursor-pointer bg-cream pb-6 shadow-sm hover:shadow-xl transition-shadow"
//             >
//               <div className="overflow-hidden mb-6 aspect-[4/5]">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//               </div>
//               <div className="px-6">
//                 <h3 className="text-2xl font-serif text-charcoal mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image2 from '../images/image2.png';
import image3 from '../images/image3.JPG';
import image5 from '../images/image5.png';
import image8 from '../images/image8.png';

const CATEGORIES = ["All", "Curtains", "Upholstery", "Blinds", "Accessories"];

const COLLECTIONS = [
  {
    id: 1,
    title: "Luxury Sheer & Blackout Curtains",
    category: "Curtains",
    subtitle: "Artisanal Drapes & Light Control",
    desc: "Crafted from fine Belgian linen and silk blends. Designed to diffuse daylight gracefully or provide total darkness with thermal insulation.",
    image: image8,
    priceRange: "From $240 / panel",
    badge: "Bestseller",
    specs: ["100% Belgian Linen & Silk", "Custom Drop & Heading Styles", "Thermal & Acoustic Lining Available"],
    colors: ["#E6E2DD", "#C4B5A5", "#3A3835"]
  },
  {
    id: 2,
    title: "Velvet & Bouclé Upholstery",
    category: "Upholstery",
    subtitle: "Tactile Elegance for Furniture",
    desc: "Heavyweight fabrics engineered for high traffic while offering unmatched softness and rich depth of color.",
    image: image5,
    priceRange: "From $85 / yard",
    badge: "New Release",
    specs: ["Martindale Rub Count > 50,000", "Stain & Liquid Repellent Finish", "Eco-Certified Oeko-Tex Standard"],
    colors: ["#2C3E35", "#8C6D53", "#D9C8B4"]
  },
  {
    id: 3,
    title: "Architectural Roman Blinds",
    category: "Blinds",
    subtitle: "Precision Light Sculpting",
    desc: "Sleek, tailored window coverings providing crisp horizontal folds and effortless motorized control options.",
    image: image3,
    priceRange: "From $180 / unit",
    badge: "Smart Home Compatible",
    specs: ["Manual or Smart Motorized Drive", "UV Protection & Heat Reduction", "Custom Sizing & Border Trims"],
    colors: ["#F5F5F0", "#A8A39D", "#1C1B1A"]
  },
  {
    id: 4,
    title: "Bespoke Silk Throw Cushions",
    category: "Accessories",
    subtitle: "Decorative Accent Touches",
    desc: "Hand-finished accent pillows featuring metallic weaves, subtle geometric piping, and hypoallergenic duck-down filling.",
    image: image2,
    priceRange: "From $65 / set",
    badge: "Handcrafted",
    specs: ["Hidden Zipper Closure", "Includes Premium Down Insert", "Dry Clean Recommended"],
    colors: ["#D4AF37", "#4A3B32", "#E8E5DF"]
  }
];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredCollections = activeCategory === "All"
    ? COLLECTIONS
    : COLLECTIONS.filter(item => item.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="py-24 bg-[#FAF8F5] min-h-screen text-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium block mb-3"
          >
            Haute Couture Textiles
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-light text-[#1A1A1A] mb-5 tracking-tight"
          >
            Seasonal Collections
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed text-base md:text-lg"
          >
            Explore our curation of high-performance fabrics, tactile weaves, and custom window architectures tailored for elevated living.
          </motion.p>
          <div className="h-[2px] w-16 bg-[#C5A059] mx-auto mt-8 opacity-70" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs md:text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1A1A1A] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-black border border-gray-200/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredCollections.map((item) => (
              <motion.div 
                layout
                key={item.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge Overlay */}
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#1A1A1A] font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  )}

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-4 left-4 right-4 text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block w-full py-2.5 bg-white/95 backdrop-blur-md text-xs uppercase tracking-widest font-medium text-[#1A1A1A] rounded-lg shadow">
                      Explore Fabric Details &rarr;
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-semibold">{item.category}</span>
                      <span className="text-xs text-gray-400 font-medium">{item.priceRange}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2 font-medium group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Swatches */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">Palette Shades</span>
                    <div className="flex space-x-1.5">
                      {item.colors.map((color, i) => (
                        <span 
                          key={i} 
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 grid md:grid-cols-2"
            >
              <div className="relative aspect-[4/5] md:aspect-auto">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">{selectedItem.category}</span>
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-black text-xl font-light leading-none p-1"
                    >
                      ✕
                    </button>
                  </div>
                  <h2 className="text-3xl font-serif text-[#1A1A1A] mb-2">{selectedItem.title}</h2>
                  <p className="text-xs text-gray-400 tracking-wide uppercase mb-4">{selectedItem.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedItem.desc}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-black">Specifications</h4>
                    <ul className="space-y-1.5">
                      {selectedItem.specs.map((spec, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mr-2" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Estimated Pricing</span>
                    <span className="text-lg font-serif text-[#1A1A1A] font-semibold">{selectedItem.priceRange}</span>
                  </div>
                  <button className="w-full py-4 bg-[#1A1A1A] hover:bg-[#C5A059] text-white text-xs uppercase tracking-widest font-semibold rounded-xl transition-colors duration-300">
                    Request Fabric Swatches
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}