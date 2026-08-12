/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothCursor } from './components/SmoothCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { TrustedBy } from './components/TrustedBy';
import { Timeline } from './components/Timeline';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-[#1565FF] selection:text-white">
      <SmoothCursor />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Differentials />
        <About />
        <Services />
        <Timeline />
        <Portfolio />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
