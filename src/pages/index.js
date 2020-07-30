import React from "react"
import Layout from "../components/layout"
import Twitch from '../components/twitchPlayer'
import Icecast from '../components/icePlayer'

const IndexPage = () => {
  return(
  <Layout>
    <Icecast/>
    <Twitch channel="casfoust"/>
  </Layout>
  )
  }

export default IndexPage
