import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showScrollToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className='fixed bottom-8 right-8 z-50'
        >
          <motion.button
            onClick={scrollToTop}
            className='relative group w-14 h-14 bg-white/90 backdrop-blur-xl text-emerald-600 rounded-full shadow-2xl border border-gray-200/50 hover:border-emerald-200 transition-all duration-300 overflow-hidden'
            whileHover={{
              scale: 1.15,
              y: -5,
              backgroundColor: 'rgba(16, 185, 129, 1)',
              color: 'white'
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-pulse"></div>

            {/* Icon */}
            <motion.div
              className="relative z-10 w-full h-full flex items-center justify-center"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
