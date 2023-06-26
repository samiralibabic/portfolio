import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, ScrollToTopStyled } from './LayoutStyles'
import { FaArrowUp } from 'react-icons/fa'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
     <ScrollToTopStyled component={<FaArrowUp />} />
    </Container>
  )
}
