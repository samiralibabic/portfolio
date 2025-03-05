// Utility function to determine locale based on domain
export function getLocaleFromDomain() {
  if (typeof window === 'undefined') return 'en'; // Default for server-side
  
  try {
    const mapping = JSON.parse(process.env.NEXT_PUBLIC_LOCALE_DOMAIN_MAPPING || '{}');
    const hostname = window.location.hostname;
    
    // Find the matching domain
    for (const domain in mapping) {
      if (hostname === domain || hostname.endsWith(`.${domain}`)) {
        return mapping[domain];
      }
    }
  } catch (e) {
    console.error('Error parsing locale domain mapping:', e);
  }
  
  return 'en'; // Default fallback
} 