import React from 'react'
import Head from 'next/head'

import Hero2 from '../components/hero2'

const Soon = (props) => {
  return (
    <>
      <div className="soon-container">
        <Head>
          <title>c me</title>
          <meta property="og:title" content="c me" />
        </Head>
        <Hero2></Hero2>
      </div>
      <style jsx>
        {`
          .soon-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Soon
