import styled from 'styled-components';

export const LeftSection = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ProofChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 20px;
    gap: 6px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 16px;
    gap: 6px;
    justify-content: flex-start;
  }
`;

export const ProofChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  white-space: nowrap;
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 5px 10px;
    font-size: 13px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 4px 8px;
    font-size: 11px;
  }
`;

export const SecondaryButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 10px 16px;
    font-size: 14px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 13px;
    width: 100%;
  }
`;
