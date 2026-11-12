// import React from 'react';
// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       className="py-20 px-6 md:px-12 max-w-7xl mx-auto"
//     >
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Our Heritage</h1>
//         <div className="h-1 w-24 bg-gold mx-auto" />
//       </div>

//       <div className="grid md:grid-cols-2 gap-16 items-center">
//         <div className="relative">
//           <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4" />
//           <img 
//             src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&q=80" 
//             alt="Textile weaving details" 
//             className="relative z-10 w-full h-auto shadow-2xl object-cover aspect-square"
//           />
//         </div>
//         <div className="space-y-6">
//           <h2 className="text-3xl font-serif text-gold">Rooted in Panipat, Made for the World</h2>
//           <p className="text-gray-700 leading-relaxed text-lg">
//             Aesthetic Homez is a premier brand established in Panipat, India’s renowned textile hub. Brought to you by Swastik Home Decor, we carry forward a legacy of weaving excellence and refined tastes.
//           </p>
//           <p className="text-gray-600 leading-relaxed">
//             We specialize in creating exquisite curtains, durable upholstery, and designer blinds that transform ordinary spaces into luxurious sanctuaries. Our deep understanding of fabrics allows us to blend creativity with exceptional craftsmanship.
//           </p>
          
//           <div className="pt-6 border-t border-gray-200">
//             <h3 className="font-serif text-xl mb-4">Our Core Strengths</h3>
//             <ul className="grid grid-cols-2 gap-4">
//               {['Strict Quality Control', 'Premium Raw Materials', 'Customized Tailoring', 'Dedicated B2B Support'].map(item => (
//                 <li key={item} className="flex items-center text-sm text-gray-700">
//                   <span className="w-2 h-2 bg-gold mr-3" /> {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }




import React, { useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Quote, Users, Briefcase, Award, MapPin } from 'lucide-react';
import image5 from '../images/image5.webp';
import image10 from '../images/image10.webp';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function ScrollImage({ src, alt, className = '', imageClassName = '' }) {
  const imageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start 90%', 'end 10%'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['7%', '-7%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.1, 1.02]);
  const imageClip = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    reduceMotion ? ['inset(0)', 'inset(0)', 'inset(0)'] : ['inset(10% 0 10% 0)', 'inset(0)', 'inset(0)']
  );

  return (
    <motion.div
      ref={imageRef}
      className={`about-image-reveal ${className}`}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={imageClassName}
        loading="lazy"
        style={{ y: imageY, scale: imageScale, clipPath: imageClip }}
      />
    </motion.div>
  );
}

function CountUp({ value }) {
  const counterRef = useRef(null);
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(counterRef, { once: true, amount: 0.8 });
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!isInView) return undefined;
    const controls = animate(count, Number(value), {
      duration: reduceMotion ? 0.01 : 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, value]);

  return <motion.span ref={counterRef}>{roundedCount}</motion.span>;
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="about-page bg-cream overflow-hidden">
      
      {/* 1. HERO / INTRO SECTION */}
      <section className="about-intro pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="about-intro__heading text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.75 }}
            className="about-intro__eyebrow text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-2"
          >
            Our Story
          </motion.h2>
          <div className="about-intro__title-mask">
            <motion.h1 
              initial={{ opacity: 0, y: reduceMotion ? 0 : '105%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.15, duration: reduceMotion ? 0.01 : 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-serif text-charcoal mb-6"
            >
              Elegance in Every Thread
            </motion.h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.45, duration: reduceMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="about-intro__rule h-1 w-24 bg-gold mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="about-story-image relative">
            <div className="absolute inset-0 bg-gold/10 transform -translate-x-4 translate-y-4" />
            <ScrollImage
              className="relative z-10 aspect-square shadow-2xl"
              imageClassName="w-full h-full object-cover"
              src={image5}
              alt="Crafting premium home textiles"
            />
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInRight}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-charcoal">Crafting Comfort & Style for Your Home</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe in blending beauty and functionality to create premium home textiles. From luxurious fabrics to modern designs, our collection enhances every space with warmth and sophistication.
            </p>
            
            <motion.ul 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="space-y-4 pt-4"
            >
              {['Exclusive Offers & Discounts', 'Expert Tips & Guidance', 'Inspiration for a Stylish Home'].map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-center text-gray-700 group">
                  <CheckCircle2 className="w-5 h-5 text-gold mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              whileHover={reduceMotion ? undefined : { x: 5 }}
              className="about-more-link mt-8 inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white font-semibold tracking-wider uppercase text-sm hover:bg-gold transition-colors duration-300"
            >
              <Link to="/collections" className="about-more-link__anchor">
                Find Out More <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-20 bg-charcoal text-white border-y-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          >
            {[
              { num: "98", label: "Projects", icon: Briefcase },
              { num: "65", label: "People", icon: Users },
              { num: "10", label: "Brands", icon: Award },
              { num: "15", label: "Offices", icon: MapPin }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={reduceMotion ? undefined : { y: -7 }}
                className="about-stat flex flex-col items-center group"
              >
                <stat.icon className="w-8 h-8 text-gold mb-4 group-hover:-translate-y-2 transition-transform duration-300" />
                <h4 className="about-stat__number text-5xl font-serif text-white mb-2">
                  <CountUp value={stat.num} />
                </h4>
                <p className="text-sm uppercase tracking-widest text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. EXHIBITION SHOWCASE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            
            <div className="about-exhibition-image w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-charcoal/5 transform translate-x-4 -translate-y-4" />
              <ScrollImage
                className="relative z-10 h-[500px] shadow-xl"
                imageClassName="w-full h-full object-cover"
                src={image10}
                alt="A carefully styled interior featuring considered home textiles"
              />
            </div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">Showcasing Innovation & Design</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-charcoal">Elegance in Every Showcase</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We proudly participated in <strong className="font-serif text-charcoal">Asia’s Largest Home Decor Show</strong> held in Delhi, where Aesthetic Homez showcased its premium collection of curtains, blinds, and upholstery. Our innovative designs, sustainable fabrics, and craftsmanship received great appreciation from interior designers, architects, and home décor enthusiasts.
              </p>
              
              <motion.ul 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                className="space-y-3 pt-4 border-t border-gray-100"
              >
                {[
                  'Successfully showcased our latest curtain, blinds & upholstery collections',
                  'Appreciated by leading architects, designers, and décor experts',
                  'Introduced new sustainable & premium fabric innovations',
                  'Strengthened our brand presence in the luxury home décor industry',
                  'Built meaningful connections with B2B & B2C clients across India'
                ].map((item, idx) => (
                  <motion.li key={idx} variants={fadeInUp} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" /> 
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS (Grid of 6) */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-2">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal">What Our Clients Say</h3>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "Pooja Verma", company: "Verma Interiors, Haryana", quote: "Finding high-end yet affordable curtain fabrics in bulk was a challenge until we partnered with Aesthetic Homez. Their collection is extensive, and deliveries are always on time!" },
              { name: "Sandeep Sharma", company: "Sharma Decor Solutions, Punjab", quote: "We’ve been sourcing premium upholstery fabrics from Aesthetic Homez for over a year. The quality is unmatched, and our clients love the durability and designs. A truly reliable B2B partner!" },
              { name: "Vishal Thakur", company: "Thakur Designer Drapes, J&K", quote: "From blackout curtains to embroidered fabrics, we get everything we need under one roof. Aesthetic Homez is our trusted supplier for all things premium in home textiles." },
              { name: "Rakesh Tandon", company: "Tandon Furnishing Mart, Rajasthan", quote: "Aesthetic Homez has transformed the way we source fabrics. Their upholstery collections are premium-grade, and their B2B support is fantastic. A must-try for wholesalers!" },
              { name: "Meena Chauhan", company: "Chauhan Interior Hub, Uttarakhand", quote: "We recently ordered a bulk quantity of blinds for a hotel project. The quality was superior, and the customization options made our job so much easier. Excellent service!" },
              { name: "Rajesh Gupta", company: "Gupta Textiles & Drapes, Delhi", quote: "As a wholesaler, I always look for top-quality materials at competitive prices. Aesthetic Homez has been our go-to supplier for premium blinds and curtain fabrics. Highly recommended!" }
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="about-testimonial bg-white p-8 relative shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-2 border-transparent hover:border-gold group"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 group-hover:text-gold/20 transition-colors" />
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed text-sm">"{review.quote}"</p>
                <div>
                  <h4 className="font-serif text-lg text-charcoal">{review.name}</h4>
                  <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-1">{review.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}