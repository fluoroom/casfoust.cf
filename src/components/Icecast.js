import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import AudioPlayer from './AudioPlayer'
import RadioStatus from './RadioStatus'

const Icecast = () => {
  const stream = useStaticQuery(graphql`
        query Icecast {
            icecast {
                host
                port
            }
        }`)
  const source = `${stream.icecast.host}:${stream.icecast.port}/stream`
  const datasource = `${stream.icecast.host}:${stream.icecast.port}/status-json.xsl`
  const [radiostatus, setradiostatus] = useState([])

  useEffect(() => {
    function getradiodata () {
      fetch(datasource)
        .then((result) => result.json()).then((result) => {
          if (result.icestats.source) {
            if (radiostatus !== 2) { setradiostatus(2) }
          } else if (radiostatus !== 1) { setradiostatus(1) }
        }).catch(() => {
          if (radiostatus !== 0) { setradiostatus(0) }
        })
    }
    getradiodata()
    const interval = setInterval(() => getradiodata(), 5000)
    return () => {
      clearInterval(interval)
    }
  }, [radiostatus])

  return (
    <>
      <RadioStatus status={radiostatus} />
      <AudioPlayer title="hola" status={radiostatus} src={source} />
    </>
  )
}

export default Icecast
