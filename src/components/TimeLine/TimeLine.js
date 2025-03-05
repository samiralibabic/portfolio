import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'next-i18next';

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
  ProfilePhoto,
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

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);

  let years = today.getFullYear() - birthDateObj.getFullYear();
  let months = today.getMonth() - birthDateObj.getMonth();
  let days = today.getDate() - birthDateObj.getDate();
  const hours = today.getHours() - birthDateObj.getHours();
  const minutes = today.getMinutes() - birthDateObj.getMinutes();
  const seconds = today.getSeconds() - birthDateObj.getSeconds();
  // If the current day of the month is less than the birth day, subtract one month
  if (days < 0) {
    months--;
    // Calculate the number of days remaining in the previous month
    const daysInPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += daysInPrevMonth;
  }

  // If the current month is less than the birth month, subtract one year
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days, hours, minutes, seconds };
};

const Timeline = () => {
  const { t } = useTranslation('common');
  const [activeItem, setActiveItem] = useState(0);
  const [age, setAge] = useState(null);
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

  useEffect(() => {
    setAge(calculateAge('1984-10-16'));
    const interval = setInterval(() => {
      setAge(calculateAge('1984-10-16'));
    }, 1000);

    return () => {
      clearInterval(interval);
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
        <ProfilePhoto src="/profile-photo.png" alt="Samir Alibabic" />
        <ProfileTextContainer>
          <ProfileSectionText
            dangerouslySetInnerHTML={age && {
              __html: t('about.ageText', {
                years: age.years,
                months: age.months,
                days: age.days,
                hours: age.hours,
                minutes: age.minutes,
                seconds: age.seconds,
                defaultValue: `Since I've been born ${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, and ${age.seconds} seconds ago, I've managed to accomplish the following:`
              }),
            }}/>
        </ProfileTextContainer>
      </ProfilePhotoContainer>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel_item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <CarouselItemText>{t(`timeline.${index}`, { defaultValue: item.text })}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
