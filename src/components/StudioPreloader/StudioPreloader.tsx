import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StudioPreloader.css';

export default function StudioPreloader() {
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Check if preloader has already run this session
    const hasSeen = sessionStorage.getItem('rf_preloaded');
    if (hasSeen) {
      setLoading(false);
      return;
    }

    // Fast counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('rf_preloaded', 'true');
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="studio-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Top shutter door */}
          <motion.div
            className="preloader-shutter preloader-shutter--top"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* Bottom shutter door */}
          <motion.div
            className="preloader-shutter preloader-shutter--bottom"
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* Central content */}
          <motion.div
            className="preloader-content"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="preloader-meta">
              <span className="preloader-tag">STUDIO // SPECIFICATION</span>
              <span className="preloader-coord">28°32&apos;N · 77°23&apos;E</span>
            </div>

            <div className="preloader-brand">
              <h1 className="preloader-title">RENDER FORUM</h1>
              <p className="preloader-subtitle">ARCHITECTURE &middot; INTERIORS &middot; SPATIAL FORM</p>
            </div>

            <div className="preloader-status">
              <div className="preloader-progress-bar">
                <div
                  className="preloader-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="preloader-counter">
                <span>{progress < 10 ? `0${progress}` : progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
