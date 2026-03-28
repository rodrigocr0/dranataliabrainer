export const trackClick = () => {
  const windowAny = window as any;
  if (typeof window !== 'undefined' && windowAny.dataLayer) {
    windowAny.dataLayer.push({ event: 'click' });
  } else if (typeof window !== 'undefined') {
    // Fallback if dataLayer is not yet initialized
    windowAny.dataLayer = windowAny.dataLayer || [];
    windowAny.dataLayer.push({ event: 'click' });
  }
};
