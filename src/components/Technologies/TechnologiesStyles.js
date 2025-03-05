import styled from 'styled-components'

export const TechGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always show 2 columns on desktop */
  gap: 3rem; /* Increased gap to match projects section */
  padding: 3rem;
  max-width: 1000px; /* Limit the overall width */
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr); /* Keep 2 columns on tablet */
    gap: 2rem;
    padding: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
    gap: 2rem; /* Reduced gap for mobile */
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 20px;
  width: 100%;

  @media ${props => props.theme.breakpoints.sm}{
    padding: 10px 10px 15px;
  }
`

export const ListTitle = styled.h4`
  display: flex;
  padding: 15px 0;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 22px;
    line-height: 26px;
    padding: 12px 0;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
    padding: 10px 0;
  }
`

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 15px;
    line-height: 22px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 20px;
  }
`

export const ListItem = styled.li`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 0 10px;

  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 6px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 4px;
    flex-direction: row;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
