import React from 'react'
import FbImg from '../images/fb.png'
import ScImg from '../images/sc.png'
import SpImg from '../images/sp.png'
import { Link } from "gatsby"

const Nav = (noPatches) => {
  return (
    <>
      <nav>
        <ul>
          <li><a href="https://open.spotify.com/artist/6b5pAL3DdXENmnTCMmLaq1"><img src={SpImg} alt="spotify"/></a></li>
          <li><a href="https://soundcloud.com/casfoust"><img src={ScImg} alt="soundcloud"/></a></li>
          <li><a href="https://facebook.com/casfoustmusic"><img src={FbImg} alt="facebook"/></a></li>
        </ul>
      </nav>
      <style jsx>
        {`
        a>img{
          width:40px;
        }
        a{
          margin:0px 20px;
        }
        a:hover{
          border-bottom:1px solid white;
        }
        ul>li{
          display:inline-block;
        }
        `}
      </style>
    </>
  )
}
export default Nav
