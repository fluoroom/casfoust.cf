import React from 'react'
import Layout from '../components/Layout'
import Twitch from '../components/TwitchPlayer'
import Icecast from '../components/Icecast'

const IndexPage = () => {
  return (
    <Layout>
      <Icecast />
      <Twitch channel='casfoust' />
    </Layout>
  )
}

export default IndexPage
