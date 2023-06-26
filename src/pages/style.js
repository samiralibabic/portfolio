import styled from "styled-components";
import { Section } from "../styles/GlobalComponents";

export const StaticPageWrapper = styled(Section)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 2rem 48px 40px;
    margin: 1rem auto;
    box-sizing: content-box;
`

// a 2 collumn grid
export const LegalContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`