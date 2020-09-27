import React from 'react'
import Layout from '../components/Layout'
import Twitch from '../components/TwitchPlayer'
import Icecast from '../components/Icecast'
import styled from 'styled-components'
import { Link } from "gatsby"

const StyledLink = styled(props => <Link {...props} />)`
  color:rgba(255,255,255,0.8);
  display:inline-block;
  padding:0.5em 1em;
  border:1px dashed #ccc;
  background-color:rgba(0,0,0,0.5);
  &:hover{
    text-decoration:underline;
    color:rgba(255,255,255,1);
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Icecast />
      <Twitch channel='casfoust' maxWidth="852" />
      <StyledLink to="/patches/">microKORG Patches!</StyledLink>
    </Layout>
  )
}

export default IndexPage
