import styled from 'styled-components';

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 12px;
  
  @media ${props => props.theme.breakpoints.lg} {
    gap: 10px;
  }
  
  @media ${props => props.theme.breakpoints.md} {
    gap: 8px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    gap: 6px;
  }
`;

export const SocialIcon = styled.a`
  color: white;
  padding: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    color: #aaa;
    cursor: pointer;
    transform: translateY(-2px);
  }
  
  @media ${props => props.theme.breakpoints.lg} {
    width: 45px;
    height: 45px;
    padding: 7px;
  }
  
  @media ${props => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    padding: 6px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    width: 36px;
    height: 36px;
    padding: 5px;
  }
`; 