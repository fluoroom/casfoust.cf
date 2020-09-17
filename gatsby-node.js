/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const navlinks = [
    { name: 'spotify', url: 'https://open.spotify.com/artist/6b5pAL3DdXENmnTCMmLaq1' },
    { name: 'soundcloud', url: 'http://soundcloud.com/casfoust' },
    { name: 'facebook', url: 'https://www.facebook.com/casfoustmusic' },
    { name: 'microKORG patches!', url: '/patches' }
  ]
  navlinks.forEach(navlink => {
    const node = {
      name: navlink.name,
      url: navlink.url,
      id: createNodeId(`Navlink-${navlink.name}`),
      internal: {
        type: 'Navlink',
        contentDigest: createContentDigest(navlink)
      }
    }
    actions.createNode(node)
  })
  const icecast = {
    host: 'http://korgalias.ddns.net',
    port: '8443'
  }
  const IceNode = {
    host: icecast.host,
    port: icecast.port,
    id: createNodeId(`ice-${icecast.port}`),
    internal: {
      type: 'Icecast',
      contentDigest: createContentDigest(icecast)
    }
  }
  actions.createNode(IceNode)
}
