import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import RgbSplitter from './RgbSplitter'

import Nav from './Nav'

const Title = styled.h1`
font-family: pervitinadex;
  font-size: 3.5em;
  opacity:1;
  margin-left: -0.35em;
  text-transform:uppercase;
  transition: opacity 100ms ease;
  overflow:visible;
  &:hover{
    opacity:0.95;
  }`
const Description = styled.p`
margin-bottom:1.5em`

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <header>
      <Title><Link to="/"><RgbSplitter>{data.site.siteMetadata.title}</RgbSplitter></Link></Title>
      <Description>{data.site.siteMetadata.description}</Description>
      <Nav />
    </header>
  )
}
export default Header
