import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Testimonials = () => {
  const { t } = useTranslation('common');
  
  useEffect(() => {
    // Load iframe resizer for existing testimonials display
    const iframeScript = document.createElement('script');
    iframeScript.type = 'text/javascript';
    iframeScript.src = 'https://testimonial.to/js/iframeResizer.min.js';
    document.head.appendChild(iframeScript);

    iframeScript.onload = () => {
      if (typeof iFrameResize === 'function') {
        iFrameResize({ log: false, checkOrigin: false }, '#testimonialto-samiralibabic-tag-all-dark');
      }
    };

    // Load widget embed script for testimonial collection
    const widgetScript = document.createElement('script');
    widgetScript.type = 'text/javascript';
    widgetScript.src = 'https://testimonial.to/js/widget-embed.js';
    widgetScript.async = true;
    document.head.appendChild(widgetScript);

    return () => {
      if (iframeScript.parentNode) {
        document.head.removeChild(iframeScript);
      }
      if (widgetScript.parentNode) {
        document.head.removeChild(widgetScript);
      }
    };
  }, []);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>{t('testimonials.title')}</SectionTitle>
      
      {/* Existing testimonials display */}
      <iframe
        id='testimonialto-samiralibabic-tag-all-dark'
        src="https://embed-v2.testimonial.to/w/samiralibabic?theme=dark&card=base&loadMore=on&initialCount=20&tag=all"
        frameBorder="0"
        scrolling="no"
        width="100%"
        title="Testimonials"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      
      {/* Testimonial collection widget */}
      <div style={{ marginTop: '60px' }}>
        <div className="testimonial-to-embed" 
             data-url="https://embed-v2.testimonial.to/c/samiralibabic?theme=dark&transparentBg" 
             data-allow="camera;microphone" 
             data-resize="true">
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;