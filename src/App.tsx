import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EinzelhandelPage from './pages/EinzelhandelPage';
import GrosshandelPage from './pages/GrosshandelPage';
import AboutPage from './pages/AboutPage';
import RezeptePage from './pages/RezeptePage';
import KontaktPage from './pages/KontaktPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import CookieBanner from './components/CookieBanner';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation isScrolled={isScrolled} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/einzelhandel" element={<EinzelhandelPage />} />
            <Route path="/grosshandel" element={<GrosshandelPage />} />
            <Route path="/ueber-uns" element={<AboutPage />} />
            <Route path="/rezepte" element={<RezeptePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
