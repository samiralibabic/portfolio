import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
`;

export const ScrollToTopStyled = styled(ScrollToTop)`
    right: calc(20px + env(safe-area-inset-right)) !important;
    bottom: calc(24px + env(safe-area-inset-bottom)) !important;
    width: 44px !important;
    height: 44px !important;
    border-radius: 14px !important;
    background: linear-gradient(135deg, rgba(129, 69, 236, 0.95), rgba(33, 169, 197, 0.95)) !important;
    box-shadow: 0 12px 30px rgba(6, 12, 26, 0.55), 0 2px 10px rgba(40, 67, 117, 0.35) !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: #f7f8ff !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease !important;

    &:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 16px 32px rgba(6, 12, 26, 0.65), 0 4px 12px rgba(40, 67, 117, 0.45) !important;
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;
