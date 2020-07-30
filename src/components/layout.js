/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from './footer'
import "./layout.css"
import styled from "styled-components"
import BGimg from '../images/bg.png'

const BG= styled.div`
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
    <BG/>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )


export default Layout
