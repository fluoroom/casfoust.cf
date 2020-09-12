import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Nav = () => {
  const data = useStaticQuery(graphql`
   query NavLinks{
    allNavlink{
     nodes{
        name
        url
     }}}
 `)
  return (
    <>
      <nav>
        <ul>
          {data.allNavlink.nodes.map((link) => (
            <li key={link.name}><a href={link.url}>{link.name}</a></li>
          ))}
        </ul>
      </nav>
      <style jsx>
        {`
        ul{
            padding:0.5em 1em;
            display: inline-block;
            border:1px dotted #888;
            background-color: rgba(0,0,0,0.5);
        }
        li, a{
            display:inline-block;
        }
        a{
            margin:0em 1em 0em 1em;
            color:rgba(255,255,255,0.8);
        }
        a:hover{
                text-decoration: underline;
              color:rgba(255,255,255,1);
        }
        @media (max-width:370px){
          a{
            margin:0em 0.5em 0em 0.5em;
        }
        }
        `}
      </style>
    </>
  )
}
export default Nav
