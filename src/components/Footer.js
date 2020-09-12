import React from 'react'

import RgbSplitter from './RgbSplitter'

const Footer = () => (
  <footer>
    <p><RgbSplitter>
      &copy; 2020 casfoust.
      <br />
      all rights reserved
      </RgbSplitter></p>
    <style jsx>
      {`
        footer {
          position: fixed;
          bottom: 0px;
          margin: 2em auto 2em auto;
          width: 100vw;
          z-index: -1;
        }
        p {
          font-size: 0.8em;
          line-height: 1.2em;
        }
      `}
    </style>
  </footer>
)

export default Footer
