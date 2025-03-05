import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 1rem;
    padding: 1rem;
    padding-top: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.75rem;
    padding-top: 1.25rem;
    grid-row-gap: 0.75rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    padding-top: 1rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  display: inline-block;
  
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 1 / 1 / 2 / 2;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 0.75rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0.4rem 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;