import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    document.head.appendChild(script);

    script.onload = () => {
      iFrameResize({ log: false, checkOrigin: false }, '#testimonialto-samiralibabic-tag-all-dark');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id='testimonialto-samiralibabic-tag-all-dark'
      src="https://embed-v2.testimonial.to/w/samiralibabic?theme=dark&card=base&loadMore=on&initialCount=20&tag=all"
      frameBorder="0"
      scrolling="no"
      width="100%"
    />
  );
};

export default Testimonials;