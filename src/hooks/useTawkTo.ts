import { useEffect } from 'react';
import { globalConfig } from '../config/global';

export const useTawkTo = () => {
  useEffect(() => {
    if (!globalConfig.tawkTo.enabled || !globalConfig.tawkTo.propertyId) {
      return;
    }

    // Load Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/' + globalConfig.tawkTo.propertyId + '/' + globalConfig.tawkTo.widgetId;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Initialize Tawk.to
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${globalConfig.tawkTo.propertyId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
};