import React from "react"
import {Link} from 'gatsby'
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

const Nav=()=>{
 const data= useStaticQuery(graphql`
   query NavLinks{
    allNavlink{
     nodes{
        name
        url
     }}}
 `)
return(
    <>
    <nav>
    <ul>
        {data.allNavlink.nodes.map(link=>(
            <li key={link.name}><a href={link.url}>{link.name}</a></li>
        ))}
    </ul></nav>
    <style jsx>{`
        ul{
            padding:0.5em 1em;
            display: inline-block;
            border:1px dotted #888;
            background-color: rgba(0,0,0,0.5);
        }
        li, a{
            display:inline-block;
        }`}
    </style></>
)
}
export default Nav