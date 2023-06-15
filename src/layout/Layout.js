import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import ScrollToTop from 'react-scroll-to-top'
import { FaArrowUp } from 'react-icons/fa'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
     <ScrollToTop component={<FaArrowUp />} 
     style={{right: '10px', bottom: '80px', width: '30px', height: '30px',
     display: 'flex', justifyContent: 'center', alignItems: 'center'}} />
    </Container>
  )
}
