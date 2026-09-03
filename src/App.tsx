/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SmoothCursor } from './components/SmoothCursor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CookieConsent } from './components/CookieConsent';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { PortfolioPage } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isCookieVisible, setIsCookieVisible] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalytics />
      <div className="min-h-screen bg-[#000] text-white selection:bg-[#1565FF] selection:text-white">
        <SmoothCursor />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/precos" element={<Pricing />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions hidden={isCookieVisible} />
        <CookieConsent onVisibilityChange={setIsCookieVisible} />
      </div>
    </BrowserRouter>
  );
}
