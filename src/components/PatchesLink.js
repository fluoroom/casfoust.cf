import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLink = styled(props => <Link {...props} />)`
  color:rgba(255,255,255,0.8);
  padding:0.5em 1em;
  border:1px dotted #ccc;
  background-color:rgba(0,0,0,0.5);
  &:hover{
    text-decoration:underline;
    color:rgba(255,255,255,1);
  }
`;

const Nav = (noPatches) => {
  return (
    <>
      
      <p className="patcheslink"><StyledLink to="/patches/">microKORG Patches!</StyledLink></p>
      <style jsx>
        {`
        `}
      </style>
    </>
  )
}
export default Nav
