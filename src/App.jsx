import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import B2B from './pages/B2B';
import Contact from './pages/Contact';
import logo from './images/logo.webp';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isSplashExiting, setIsSplashExiting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const exitDelay = reducedMotion ? 500 : 1900;
    const removeDelay = reducedMotion ? 650 : 2550;
    const exitTimer = window.setTimeout(() => setIsSplashExiting(true), exitDelay);
    const removeTimer = window.setTimeout(() => setShowSplash(false), removeDelay);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-charcoal bg-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/b2b-hospitality" element={<B2B />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {showSplash && (
        <div
          className={`splash-screen${isSplashExiting ? ' splash-screen--exiting' : ''}`}
          role="status"
          aria-label="Aesthetic Homez is loading"
        >
          <div className="splash-screen__glow" />
          <div className="splash-screen__content">
            <span className="splash-screen__orbit splash-screen__orbit--outer" />
            <span className="splash-screen__orbit splash-screen__orbit--inner" />
            <img className="splash-screen__logo" src={logo} alt="Aesthetic Homez" />
            <p className="splash-screen__tagline">Where fabrics speak luxury</p>
            <span className="splash-screen__rule" />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;