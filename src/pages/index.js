import React from 'react'
import Layout from '../components/Layout'
import Twitch from '../components/TwitchPlayer'
import Icecast from '../components/Icecast'
import PatchesLink from '../components/PatchesLink'

const IndexPage = () => {
  return (
    <Layout>
      <Icecast />
      <Twitch channel='casfoust' maxWidth="852" />
      <PatchesLink/>
    </Layout>
  )
}

export default IndexPage
