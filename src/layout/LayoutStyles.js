import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
`;

export const ScrollToTopStyled = styled(ScrollToTop)`
    right: 10px;
    bottom: 80px;
    width: 30px;
    height: 30px;
    display: 'flex';
    justifyContent: 'center';
    alignItems: 'center'
`
