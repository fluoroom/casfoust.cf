import React from 'react'

const Splitter = ({ children }) => {
  const bigamount = 90
  const amount = bigamount / 1000
  const duration = 5000

  return (
    <>
      <style jsx>{`
        @keyframes animate-red{
            0% {
                transform: translate(0, 0)
             }
             60%{
                transform: translate(0,0)
             }
             98%{
                transform: translateX(${amount}em)
             }
             100%{
                transform: translate(0, 0)
             }
        }
        @keyframes animate-blue{
            0% {
                transform: translate(0, 0)
             }
             60% {
                transform: translate(0,0)
             }
             98% {
                transform: translateX(-${amount}em)
             }
             100% {
                transform: translate(0, 0)
             }
        }
        .red{
            color:#f00;
            animation:animate-red ${duration}ms infinite;
        }
        .green{
            color:#0f0;
        }
        .blue{
            color:#00f;
            animation:animate-blue ${duration}ms infinite;
        }
        #wrapper{
            position:relative;
            display:inline-block;
            mix-blend-mode:difference;
            overflow:visible;
        }
        .hidden{
            visibility:hidden;
        }
        .channel-split{
            position:absolute;
            display: block;
            bottom:0;
            mix-blend-mode:difference;
            overflow:visible;
        }`}
      </style>
      <div id='wrapper'>
        <div className='hidden'>
          {children}
        </div>
        <div className='channel-split red'>
          {children}
        </div>
        <div className='channel-split green' id='text'>
          {children}
        </div>
        <div className='channel-split blue'>
          {children}
        </div>
      </div>
    </>
  )
}

export default Splitter
