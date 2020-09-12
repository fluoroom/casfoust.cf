/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Seo from './SEO'

import BGimg from '../images/bg.png'
import './layout.css'

const Bg = styled.div`
z-index: -5;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-repeat: repeat;
    background-size: 500px;
    background-image: url('${BGimg}');
    background-attachment: fixed;
`
const Layout = ({ children }) => (
  <>
    <Seo />
    <Bg />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
