/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect, useState } from 'react'

const Player = ({ channel }) => {
  const [dimensions, setDimensions] = useState({})
  const [hostname, setHostname] = useState('casfoust.cf')
  const src = 'https://player.twitch.tv/?channel=' + channel + '&parent=' + hostname + '&muted=false&autoplay=true'
  useLayoutEffect(() => {
    setHostname(window.location.hostname)
    function bodyWidth () {
      var e = window
      var a = 'inner'
      if (!('innerWidth' in window)) {
        a = 'client'
        e = document.documentElement || document.body
      }
      if (e[a + 'Width'] < 852) {
        return e[a + 'Width']
      } else {
        return 852
      }
    }
    setDimensions({
      width: bodyWidth(),
      height: bodyWidth() / 1.775
    })
  }, [])

  return (
    <iframe
      src={src}
      height={dimensions.height}
      width={dimensions.width}
      frameBorder='0'
      scrolling='no'
      allowFullScreen='true'
    />
  )
}

export default Player
