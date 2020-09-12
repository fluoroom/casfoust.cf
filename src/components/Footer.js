import React from 'react'

const Footer = () => (
  <footer>
    <p>
      &copy; 2020 casfoust.
      <br />
      all rights reserved
    </p>
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
