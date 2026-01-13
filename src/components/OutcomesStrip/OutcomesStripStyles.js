import styled from 'styled-components';

export const OutcomesContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px 48px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 20px 32px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px;
  }
`;

export const OutcomesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px 24px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 12px;
    padding: 16px 20px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 10px;
    padding: 14px 16px;
  }
`;

export const OutcomesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  white-space: nowrap;
  
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    padding: 6px 12px;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 13px;
    padding: 8px 12px;
    white-space: normal;
    text-align: center;
    justify-content: center;
  }
`;

export const OutcomesIcon = styled.span`
  font-size: 18px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;
