import styled from "styled-components";
import { Section, SectionText, NavLink } from "./GlobalComponents";

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

export const LegalSectionText = styled(SectionText)`
	padding-bottom: 1rem;
	margin-top: 2rem;
`

export const LegalSectionH3 = styled(SectionText)`
	font-size: 2rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`

export const LegalSectionH4 = styled(SectionText)`
	font-size: 1.5rem;
	padding-bottom: 1rem;
`

export const LegalSectionList = styled.ul`
	padding-left: 1rem;
	padding: 1rem;
`

export const LegalSectionListItem = styled.li`
	color: rgba(255,255,255,0.75);
    padding: 1rem;
    list-style: disc;
`

export const LegalNavLink = styled(NavLink)`
	font-size: 1.5rem;
		@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`