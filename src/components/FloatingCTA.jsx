import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled && !isDismissed && location.pathname !== '/join');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, location.pathname]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-2xl shadow-2xl max-w-sm">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            <div className="pr-6">
              <h3 className="font-bold text-lg mb-2">Ready to Join?</h3>
              <p className="text-red-100 text-sm mb-4">
                Start your journey with our community today!
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/join"
                  className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center space-x-2 hover:bg-gray-50 transition-colors"
                >
                  <span>Join Now</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
