import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ArchitecturalGrid from './components/ArchitecturalGrid/ArchitecturalGrid';
import StudioPreloader from './components/StudioPreloader/StudioPreloader';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';

// Lazy-load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Expertise = lazy(() => import('./pages/Expertise'));
const Studio = lazy(() => import('./pages/Studio'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><Home /></Suspense></PageTransition>} />
        <Route path="/about" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><About /></Suspense></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><Projects /></Suspense></PageTransition>} />
        <Route path="/projects/:slug" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><ProjectDetail /></Suspense></PageTransition>} />
        <Route path="/expertise" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><Expertise /></Suspense></PageTransition>} />
        <Route path="/studio" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><Studio /></Suspense></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><Contact /></Suspense></PageTransition>} />
        <Route path="*" element={<PageTransition><Suspense fallback={<div className="page-loading" />}><NotFound /></Suspense></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <StudioPreloader />
        <ArchitecturalGrid />

        <a href="#main-content" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
          Skip to main content
        </a>
        <Navbar />
        <AppRoutes />
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
