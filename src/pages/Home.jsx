import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.JPG";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image12 from "../images/image12.png";

const collections = [
  {
    number: '01',
    name: 'Curtains',
    detail: 'Light, framed beautifully.',
    image: image8,
  },
  {
    number: '02',
    name: 'Upholstery',
    detail: 'Made for everyday living.',
    image: image5,
  },
  {
    number: '03',
    name: 'Blinds',
    detail: 'A softer way to shape light.',
    image: image6,
  },
];

const spaces = [
  {
    name: 'Curtains',
    detail: 'Let the light in, just so.',
    image: image9,
    alt: 'Soft daylight filtered through elegant curtains',
  },
  {
    name: 'Upholstery',
    detail: 'Comfort in every detail.',
    image: image7,
    alt: 'Warm, textured upholstery in a thoughtfully designed room',
  },
  {
    name: 'Blinds',
    detail: 'A little more control over the light.',
    image: image3,
    alt: 'Sunlight and considered window treatments in a modern interior',
  },
  {
    name: 'Living',
    detail: 'Made for the moments in between.',
    image: image1,
    alt: 'A calm, naturally layered living space',
  },
  {
    name: 'Hospitality',
    detail: 'A warm welcome, in every room.',
    image: image12,
    alt: 'A refined interior designed for guests',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function CollectionCard({ item, index }) {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 90%', 'end 10%'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['7%', '-7%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.45, 1], reduceMotion ? [1, 1, 1] : [1.08, 1, 1.04]);
  const imageReveal = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduceMotion ? ['inset(0)', 'inset(0)', 'inset(0)'] : ['inset(12% 0 12% 0)', 'inset(0)', 'inset(0)']
  );

  return (
    <motion.article
      ref={cardRef}
      className={`collection-card${index === 1 ? ' collection-card--offset' : ''}`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/collections" className="collection-card__link">
        <div className="collection-card__image">
          <motion.img
            src={item.image}
            alt={`${item.name} fabric collection`}
            loading="lazy"
            style={{ y: imageY, scale: imageScale, clipPath: imageReveal }}
          />
          <span className="collection-card__arrow"><ArrowUpRight size={20} /></span>
          <span className="collection-card__image-label">Aesthetic Homez</span>
        </div>
        <div className="collection-card__caption">
          <span className="collection-card__number">{item.number}</span>
          <div>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function EditorialSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const firstLineX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : ['12%', '-12%']);
  const secondLineX = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : ['-10%', '10%']);

  return (
    <section ref={sectionRef} className="editorial-section" aria-label="Our design philosophy">
      <div className="editorial-heading">
        <p className="editorial-kicker">Aesthetic Homez · Panipat, India</p>
        <p className="editorial-intro">
          We believe the feeling of a room is found in the details you can touch,
          and the light you let in.
        </p>
      </div>

      <div className="editorial-type" aria-label="A language of matter and light">
        <motion.div className="editorial-line-row" style={{ x: firstLineX }}>
          <span className="editorial-line editorial-line--first">A</span>
          <div className="editorial-image-wrap">
          <motion.img
            initial={{ opacity: 0, scale: 0.72, y: 36 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            src={image2}
            alt="Warm, thoughtfully layered living room"
          />
          </div>
          <span className="editorial-line editorial-line--first">language</span>
        </motion.div>
        <motion.p className="editorial-line editorial-line--second" style={{ x: secondLineX }}>
          of matter &amp; light.
        </motion.p>
      </div>

      <div className="editorial-footer">
        <span>Thoughtful fabrics. Considered spaces.</span>
        <span>Scroll to discover <ArrowDown size={15} aria-hidden="true" /></span>
      </div>
    </section>
  );
}

function FullscreenFeature() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  const frameScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0.86, 1]);
  const frameOpacity = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0.8, 1]);
  const frameY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [36, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.12, 1]);
  const copyOpacity = useTransform(scrollYProgress, [0.35, 0.85], reduceMotion ? [1, 1] : [0, 1]);
  const copyY = useTransform(scrollYProgress, [0.35, 0.85], reduceMotion ? [0, 0] : [24, 0]);

  return (
    <section ref={sectionRef} className="fullscreen-feature" aria-label="Aesthetic Homez interiors">
      <motion.div
        className="fullscreen-feature__frame"
        style={{ opacity: frameOpacity, scale: frameScale, y: frameY }}
      >
        <motion.img
          className="fullscreen-feature__image"
          src={image11}
          alt="A calm, sunlit living room layered with natural textures"
          loading="lazy"
          style={{ scale: imageScale }}
        />
        <div className="fullscreen-feature__shade" />
        <motion.div className="fullscreen-feature__copy" style={{ opacity: copyOpacity, y: copyY }}>
          <p className="fullscreen-feature__eyebrow">The art of feeling at home</p>
          <h2>A softer kind<br />of <em>beautiful.</em></h2>
          <Link to="/collections" className="fullscreen-feature__link">
            Explore the collection <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
        <span className="fullscreen-feature__caption">Aesthetic Homez · Made for living</span>
      </motion.div>
    </section>
  );
}

function SpacesShowcase() {
  const [activeSpace, setActiveSpace] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="spaces-section" aria-label="Explore our spaces">
      <div className="spaces-showcase">
        <div
          className="spaces-showcase__image"
          style={{ '--active-space': activeSpace }}
        >
          <div className="spaces-showcase__preview">
            <AnimatePresence mode="sync" initial={false}>
              <motion.img
                key={spaces[activeSpace].image}
                src={spaces[activeSpace].image}
                alt={spaces[activeSpace].alt}
                initial={{
                  opacity: 0,
                  clipPath: reduceMotion ? 'inset(0)' : 'inset(0 0 100% 0)',
                  scale: reduceMotion ? 1 : 1.035,
                }}
                animate={{ opacity: 1, clipPath: 'inset(0)', scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <span className="spaces-showcase__count">
              0{activeSpace + 1} <span>/</span> 0{spaces.length}
            </span>
          </div>
        </div>

        <div className="spaces-showcase__list" aria-label="Spaces and collections">
          {spaces.map((space, index) => (
            <button
              className={`spaces-showcase__item${activeSpace === index ? ' is-active' : ''}`}
              key={space.name}
              type="button"
              onMouseEnter={() => setActiveSpace(index)}
              onFocus={() => setActiveSpace(index)}
              onClick={() => setActiveSpace(index)}
              aria-pressed={activeSpace === index}
            >
              <span className="spaces-showcase__copy">
                <span className="spaces-showcase__name">{space.name}</span>
              </span>
              <span className="spaces-showcase__arrow">
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </button>
          ))}
          <Link to="/collections" className="spaces-showcase__link">
            Discover our collections <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['0%', '16%']);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.12]);

  return (
    <div className="home-page">
      <section ref={heroRef} className="home-hero">
        <motion.img
          className="home-hero__image"
          style={{ y: heroImageY, scale: heroImageScale }}
          src={image1}
          alt="Sunlit living room dressed in natural textures"
          fetchPriority="high"
        />
        <div className="home-hero__shade" />
        <div className="home-hero__content">
          <motion.p
            className="home-hero__eyebrow"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.25, duration: reduceMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Fabrics for the feeling of home
          </motion.p>
          <h1 className="home-hero__title" aria-label="Make room for beautiful living">
            <span className="home-hero__title-line">
              <motion.span
                initial={{ y: reduceMotion ? 0 : '110%', opacity: reduceMotion ? 1 : 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0.01 : 1, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              >
                Make room for
              </motion.span>
            </span>
            <span className="home-hero__title-line">
              <motion.span
                initial={{ y: reduceMotion ? 0 : '110%', opacity: reduceMotion ? 1 : 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.58, duration: reduceMotion ? 0.01 : 1.05, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              >
                <em>beautiful living.</em>
              </motion.span>
            </span>
          </h1>
          <motion.div
            className="home-hero__bottom"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.95, duration: reduceMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Considered curtains, upholstery &amp; blinds, made with care in Panipat.</p>
            <Link to="/collections" className="home-round-link" aria-label="Explore our collections">
              <ArrowUpRight size={21} />
            </Link>
          </motion.div>
        </div>
        <a className="home-hero__scroll" href="#our-story">
          <span>Scroll to explore</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
        <span className="home-hero__index">01 / 04</span>
      </section>

      <div id="our-story">
        <EditorialSection />
      </div>

      <SpacesShowcase />

      <FullscreenFeature />

      <section className="collection-section">
        <div className="collection-heading">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
          >
            <p className="section-eyebrow">Made to feel like you</p>
            <h2>Textures that<br /><em>make a home.</em></h2>
          </motion.div>
          <motion.p
            className="collection-heading__note"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
          >
            From the first touch to the last light of day, find the details that
            make your space your own.
          </motion.p>
        </div>

        <div className="collection-grid">
          {collections.map((item, index) => (
            <CollectionCard item={item} index={index} key={item.number} />
          ))}
        </div>
        <div className="collection-cta">
          <Link to="/collections" className="text-link">
            Explore all collections <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="craft-section">
        <motion.div
          className="craft-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={image4}
            alt="A calm, naturally layered interior"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="craft-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
        >
          <p className="section-eyebrow">Rooted in Panipat</p>
          <h2>Thoughtful by nature.<br /><em>Beautiful by design.</em></h2>
          <p className="craft-copy__body">
            We bring together thoughtful design and textile craftsmanship to
            create fabrics for the way people really live. Personal, enduring,
            and made to be lived with.
          </p>
          <Link to="/about" className="text-link">
            Get to know us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
        <span className="craft-caption">Considered materials, made for living.</span>
      </section>

      <section className="home-contact">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
        >
          <p className="section-eyebrow">A space of your own</p>
          <h2>Let’s make something<br /><em>feel like home.</em></h2>
          <Link to="/contact" className="home-contact__button">
            Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
