import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.lg} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 24px;
    padding-right: 40px; /* Add padding to prevent scrolling beyond last item */
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-bottom: 16px;
    padding-right: 32px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 8px;
    padding-right: 24px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.lg} {
    display: flex;
    min-width: ${({ final }) => final ? `100%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 200px;

  @media ${props => props.theme.breakpoints.lg} {
    max-width: 180px;
    margin-left: 28px;
    min-width: 170px;
    background: #0E131F;
    padding: 8px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
  
  @media ${props => props.theme.breakpoints.md} {
    max-width: 160px;
    margin-left: 24px;
    min-width: 150px;
    padding: 6px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    max-width: 140px;
    margin-left: 16px;
    min-width: 130px;
    padding: 4px;
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 4px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 24px;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 15px;
    line-height: 22px;
    padding-right: 20px;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 20px;
    padding-right: 16px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 8px;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.lg} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-bottom: 40px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-bottom: 32px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`

export const ProfileSectionContainer = styled.div`
  background: rgba(17, 25, 40, 0.7);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 1.5rem 1rem;
    margin-bottom: 1.5rem;
  }
`

export const ProfilePhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media ${props => props.theme.breakpoints.md} {
    gap: 1.8rem;
    margin-bottom: 2rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
  }
`

export const ProfilePhoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background-image: linear-gradient(#0F1624, #0F1624), 
                    linear-gradient(120deg, #13ADC7 0%, #945DD6 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.03);
    background-image: linear-gradient(#0F1624, #0F1624), 
                      linear-gradient(120deg, #945DD6 0%, #13ADC7 100%);
  }
  
  @media ${props => props.theme.breakpoints.md} {
    width: 150px;
    height: 150px;
    border-width: 2.5px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    width: 130px;
    height: 130px;
    margin-bottom: 0.5rem;
    border-width: 2px;
  }
`

export const ProfileTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ProfileSectionText = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
  padding-bottom: 0;
  margin-top: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    padding: 0 1rem;
  }
`
