import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  ProfilePhotoContainer,
  ProfileTextContainer,
  ProfileSectionText
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const { t } = useTranslation('common');
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      // Calculate the maximum scroll position
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      
      // Calculate the desired scroll position
      let scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.5 * (i / TimeLineData.length)
      );
      
      // Ensure we don't scroll beyond the maximum
      scrollLeft = Math.min(scrollLeft, maxScrollLeft);

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      // Calculate the maximum scroll position
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      
      // Calculate the current scroll position as a percentage
      const scrollPercentage = Math.min(
        carouselRef.current.scrollLeft / maxScrollLeft,
        1.0
      );
      
      // Calculate the active item based on the scroll percentage
      const index = Math.min(
        Math.round(scrollPercentage * (TimeLineData.length - 1)),
        TimeLineData.length - 1
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Ensure the carousel is properly initialized
  useEffect(() => {
    if (carouselRef.current) {
      // Set initial scroll position to 0
      carouselRef.current.scrollLeft = 0;
      
      // Update the active item
      setActiveItem(0);
    }
  }, [TimeLineData.length]);

  return (
    <Section>
      <SectionDivider />
      <SectionTitle main>{t('about.title')}</SectionTitle>
      <ProfilePhotoContainer>
        <div style={{ position: 'relative', width: '180px', height: '180px' }}>
          <Image 
            src="/profile-photo.png" 
            alt="Samir Alibabic" 
            fill
            sizes="180px"
            priority
            style={{ 
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid transparent',
              backgroundImage: 'linear-gradient(#0F1624, #0F1624), linear-gradient(120deg, #13ADC7 0%, #945DD6 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          />
        </div>
        
        <ProfileTextContainer>
          <ProfileSectionText>
            {t('about.bioLine1')}
            <br />
            {t('about.bioLine2')}
            <br />
            {t('about.bioLine3')}
          </ProfileSectionText>
        </ProfileTextContainer>
      </ProfilePhotoContainer>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <CarouselMobileScrollNode role="list">
          {TimeLineData.map((item, index) => (
            <CarouselItem
              key={index}
              index={index}
              id={`carousel_item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              role="listitem"
            >
              <CarouselItemTitle>{item.year}</CarouselItemTitle>
              <CarouselItemText>{t(`timeline.${index}`, { defaultValue: item.text })}</CarouselItemText>
            </CarouselItem>
          ))}
        </CarouselMobileScrollNode>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
            aria-label={`Navigate to ${item.year}`}
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
