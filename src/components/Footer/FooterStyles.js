import styled from "styled-components"
import { NavLink } from "../../styles/GlobalComponents"

export const FooterWrapper = styled.section`
	width: 100%;
	max-width: 1040px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	box-sizing: border-box;
	position: relative;
	z-index: 1;
	overflow: hidden;
	grid-template-columns: 1fr;
	padding: 2rem;
	gap: 20px;

	@media ${props => props.theme.breakpoints.sm} {
		padding: 0 16px 48px;
		width: calc(100vw - 32px);
	}
`

export const LinkItem = styled.p`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	word-break: break-word;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 20px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
	max-width: 1040px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${props => props.theme.breakpoints.md} {
		display: flex;
		justify-content: space-between;
	}

	@media ${props => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`

export const CompanyContainer = styled.div`
	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	margin-right: auto;
	
	@media ${props => props.theme.breakpoints.md} {
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`

export const BuildDetailsLink = styled(NavLink)`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	color: rgba(255, 255, 255, 0.75);
	font-size: 14px;
	letter-spacing: 0.02em;
	padding: 4px 0;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	transition: color 0.2s ease, border-color 0.2s ease;

	&:hover {
		color: #ffffff;
		border-color: rgba(255, 255, 255, 0.6);
	}

	&:focus {
		outline: 2px solid rgba(255, 255, 255, 0.4);
		outline-offset: 2px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
		gap: 32px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 24px;
	}
	
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 24px 0 16px;
		flex-direction: column;
		gap: 24px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 300px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
export const LegalLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

export const LegalNavLink = styled(NavLink)`
	margin-right: 3rem;
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

export const ContactSection = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 320px;
	width: 100%;
	flex-shrink: 0;
	
	@media ${props => props.theme.breakpoints.sm} {
		max-width: 100%;
	}
`

export const ContactButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 12px 24px;
	background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
	border: none;
	border-radius: 50px;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.3s ease;
	margin: 16px 0;
	width: fit-content;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 20px rgba(19, 173, 199, 0.4);
	}

	@media ${props => props.theme.breakpoints.sm} {
		padding: 10px 20px;
		font-size: 14px;
		width: 100%;
		justify-content: center;
	}
`

export const ContactHints = styled.div`
	margin-top: 8px;
	padding: 12px;
	background: rgba(255, 255, 255, 0.03);
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.08);

	@media ${props => props.theme.breakpoints.sm} {
		padding: 10px;
	}
`

export const ContactHintItem = styled.p`
	font-size: 14px;
	line-height: 22px;
	color: rgba(255, 255, 255, 0.65);
	margin: 4px 0;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 12px;
		line-height: 18px;
	}
`

export const NowSection = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	flex-shrink: 0;
	
	@media ${props => props.theme.breakpoints.sm} {
		max-width: 100%;
	}
`

export const NowText = styled.p`
	font-size: 16px;
	line-height: 26px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 8px;

	@media ${props => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 22px;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 13px;
		line-height: 20px;
	}
`
