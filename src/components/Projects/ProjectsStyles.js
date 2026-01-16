import styled from 'styled-components';

export const ImgOverlay = styled.div`
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Semi-transparent black overlay */
    border-radius: 12px 12px 0 0;
    transition: background 0.3s ease;
    pointer-events: none; /* Ensure it doesn't block clicks */
    z-index: 2; /* Ensure overlay is above the image */
  }
`

export const BlogCard = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 0;
  background: #1D1D1D;
  transition: box-shadow 0.3s ease;
  position: relative;
  overflow: hidden; /* Keep the banner within the card's boundaries */
  
  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  }
  
  /* Apply hover effects to the entire card */
  &:hover ${ImgOverlay}::after {
    background: rgba(0, 0, 0, 0);
  }
  
  &:hover img {
    filter: grayscale(0%) !important;
    transform: scale(1.05);
    transition: filter 0.5s ease, transform 0.5s ease;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: ${(props) => props.nopadding ? '0' : '3rem'};
  grid-auto-flow: dense;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.nopadding ? '0' : '2rem'};
    padding-bottom: 0;
    align-items: center;
  }
`

export const GridColumn = styled.div`
  display: grid;
  grid-template-columns: minmax(0,1fr);
  row-gap: 30px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 450px;
  }
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 20px;
  padding: 0 15px;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #FFFFFF;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2.5rem' : '1.8rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(90deg, #d0bb57, #e6a919);
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 25px;
  color: rgba(255, 255, 255, 0.75);
  font-style: 2rem;
  line-height: 24px;
  margin-bottom: 15px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 15px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 20px 25px;
  margin: 0;
`

export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.4rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 5px 12px;
  border-radius: 20px;
  list-style: none;
`

export const ProjectStatusBanner = styled.div`
  position: absolute;
  top: 30px;
  right: -30px;
  color: white;
  padding: 3px 30px;
  transform: rotate(45deg);
  font-weight: bold;
  z-index: 2;
  font-size: 10px;
  letter-spacing: 1px;
  pointer-events: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  min-width: 150px;
  background-color: ${props => {
    switch (props.status) {
      case 'discontinued':
        return '#FF0000';
      case 'sold':
        return '#00A86B';
      default:
        return '#FF0000';
    }
  }};
`

export const ProjectsControlsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0 0;

  html.no-js & {
    display: none;
  }
`;

export const ProjectGroupsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 28px auto 0;

  html.js &[data-expanded='false'] {
    display: none;
  }
`;

export const ProjectGroupDetails = styled.details`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  padding: 10px 14px;
  margin-bottom: 14px;
`;

export const ProjectGroupSummary = styled.summary`
  cursor: pointer;
  list-style: none;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.92);
  padding: 6px 2px;
  user-select: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const ProjectGroupContent = styled.div`
  margin-top: 16px;
`;
