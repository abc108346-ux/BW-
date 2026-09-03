import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();
  const metaEnv = (import.meta as unknown as { env?: Record<string, string | undefined> })?.env;
  const gaId = metaEnv?.VITE_GA_MEASUREMENT_ID || '';

  useEffect(() => {
    if (!gaId) return;

    // Check if script is already added
    const existingScript = document.getElementById('ga-gtag');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'ga-gtag';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        page_path: location.pathname + location.search,
      });
    } else if (window.gtag) {
      window.gtag('config', gaId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [gaId, location]);

  return null;
};
