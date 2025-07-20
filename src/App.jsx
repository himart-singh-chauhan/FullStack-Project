import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import HowItStarted from './pages/HowItStarted';
import Community from './pages/Community';
import Perks from './pages/Perks';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Join from './pages/Join';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-started" element={<HowItStarted />} />
            <Route path="/community" element={<Community />} />
            <Route path="/perks" element={<Perks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </AnimatePresence>
        <FloatingCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
