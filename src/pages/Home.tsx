import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { Differentials } from '../components/Differentials';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Timeline } from '../components/Timeline';
import { Portfolio } from '../components/Portfolio';
import { PricingTeaser } from '../components/PricingTeaser';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Differentials />
      <About />
      <Services />
      <Timeline />
      <Portfolio />
      <PricingTeaser />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
};
