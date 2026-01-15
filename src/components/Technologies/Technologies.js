import React, { useEffect, useId, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Section } from '../../styles/GlobalComponents';
import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerIntro,
  DrawerList,
  DrawerListItem,
  DrawerNote,
  DrawerTitle,
  OverlayBackdrop,
} from './TechnologiesStyles';

const Technologies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#build-details') {
        setIsOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleOpenRequest = () => {
      setIsOpen(true);
    };

    window.addEventListener('build-details:open', handleOpenRequest);

    return () => {
      window.removeEventListener('build-details:open', handleOpenRequest);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      if (window.location.hash === '#build-details') {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
      }
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Section id="build-details" nopadding>
      {isOpen && (
        <OverlayBackdrop onClick={() => setIsOpen(false)}>
          <Drawer
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <DrawerHeader>
              <DrawerTitle id={titleId}>{t('buildDetails.title', 'Build details')}</DrawerTitle>
              <CloseButton
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t('buildDetails.close', 'Close build details')}
              >
                ×
              </CloseButton>
            </DrawerHeader>
            <DrawerBody>
              <DrawerIntro>
                I build and run digital products end-to-end — from idea to production. I’m not tied to a
                specific tech stack; tools are chosen based on what the problem needs.
              </DrawerIntro>
              <DrawerList>
                <DrawerListItem>What I do: plan, build, operate, measure, improve</DrawerListItem>
                <DrawerListItem>How I work: pragmatic, fast, focused on outcomes</DrawerListItem>
                <DrawerListItem>Usually today: web products (often TypeScript)</DrawerListItem>
                <DrawerListItem>Also: mobile/desktop/embedded when it’s the right interface</DrawerListItem>
              </DrawerList>
              <DrawerNote>
                Implementation can be AI-assisted — responsibility, decisions, and review are mine.
              </DrawerNote>
            </DrawerBody>
          </Drawer>
        </OverlayBackdrop>
      )}
    </Section>
  );
};

export default Technologies;
