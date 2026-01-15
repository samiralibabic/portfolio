import styled from 'styled-components';

export const OverlayBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(8, 12, 20, 0.72);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    align-items: flex-end;
    padding: 0;
  }
`;

export const Drawer = styled.div`
  background: ${(props) => props.theme.colors.background1};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  width: min(560px, 92vw);
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    border-radius: 18px 18px 0 0;
    max-height: 75vh;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DrawerTitle = styled.h3`
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const CloseButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: 2px;
  }
`;

export const DrawerBody = styled.div`
  color: rgba(255, 255, 255, 0.78);
  font-size: 16px;
  line-height: 26px;
`;

export const DrawerIntro = styled.p`
  margin: 0 0 16px 0;
`;

export const DrawerList = styled.ul`
  margin: 0 0 16px 18px;
  padding: 0;
`;

export const DrawerListItem = styled.li`
  margin-bottom: 10px;
`;

export const DrawerNote = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;
