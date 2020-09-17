import React from 'react'
import BGimg from '../images/bg.png'


const Footer = (notSticky) => {
  return (
  <footer>
    <p>
      &copy; 2020 casfoust.
      <br />
      all rights reserved
      </p>
    <style jsx>
      {`
        footer {
          position: relative;
          margin: 2em auto 2em auto;
          z-index: 99;
        }
        p {
          font-size: 0.8em;
          line-height: 1.2em;
        }
      `}
    </style>
  </footer>)
}

export default Footer
