import { Link } from "gatsby"
import React from "react" 
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Title=styled.h1`
font-family: pervitinadex;
	font-size: 3.5em;
	opacity:1;
  margin-left: -0.35em;
  text-transform:uppercase;
  transition: opacity 100ms ease;
  &:hover{
    opacity:0.95;
  }
`

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
  return(
  <header>
      <Title><Link to="/">{data.site.siteMetadata.title}</Link></Title>
      <p>{data.site.siteMetadata.description}</p>
  </header>)
}
export default Header
