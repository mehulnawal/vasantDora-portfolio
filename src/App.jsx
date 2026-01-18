import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useSmoothScroll } from './components/hooks/useSmoothScroll';
import { Home } from './components/home';
import { Navbar } from './components/navbar';

function AnimatedRoutes() {
  const location = useLocation();
  useSmoothScroll(); // Smooth scroll initialization

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen transition-colors duration-500">
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </div>
    </div>
  );
}