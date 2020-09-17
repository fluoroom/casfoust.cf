import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLink = styled(props => <Link {...props} />)`
  opacity:0.8;
  &:hover{
      text-decoration:underline;
      opacity:1;
  }
`;

const Nav = (noPatches) => {
  return (
    <>
      
      <p className="patcheslink"><StyledLink to="/patches/">microKORG Patches!</StyledLink></p>
      <style jsx>
        {`
        .patcheslink{
            display:inline-block;
            padding:0.5em 1em;
            border:1px dotted #ccc;
            background-color:rgba(0,0,0,0.5);
          }
        `}
      </style>
    </>
  )
}
export default Nav
