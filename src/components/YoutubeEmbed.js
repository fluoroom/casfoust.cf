/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect, useState } from 'react'

const Player = ({ videoId, maxWidth }) => {
  const [dimensions, setDimensions] = useState({})
  const src = 'https://www.youtube.com/embed/'+videoId;
  useLayoutEffect(() => {
    function bodyWidth () {
      var e = window
      var a = 'inner'
      if (!('innerWidth' in window)) {
        a = 'client'
        e = document.documentElement || document.body
      }
      if (e[a + 'Width'] < maxWidth) {
        return e[a + 'Width']
      } else {
        return maxWidth
      }
    }
    setDimensions({
      width: bodyWidth(),
      height: bodyWidth() / 1.775
    })
  }, [])

  return (
    <>
    <style jsx>{`
    .iframe{
      margin-bottom: 1em;
    }
    `}</style>
    <iframe width={dimensions.width} height={dimensions.height} src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="iframe"></iframe>
    </>
  )
}

export default Player
