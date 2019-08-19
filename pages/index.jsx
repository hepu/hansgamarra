import React from 'react'
import Head from 'next/head'

import Home from '../templates/home'

import globalStyle from '../styles/global'

export default () => (
  <>
    <Head>
      <title>Hans Gamarra</title>
      <meta name="viewport" content="width=device-width" />
      <link
        rel="icon"
        type="image/png"
        href="http://gravatar.com/avatar/c4fdcb877976f80919da60bc564ba6eb.png?filetype=png&amp;rating=pg&amp;secure=false&amp;size=15"
      />
      <meta
        property="og:image"
        content="http://gravatar.com/avatar/c4fdcb877976f80919da60bc564ba6eb.png?filetype=png&amp;rating=pg&amp;secure=false&amp;size=200"
      />
      <meta property="og:title" content="Hans Gamarra" />
      <meta
        property="og:description"
        content="Drummer / Systems Engineer from Barranquilla, Colombia"
      />
      <meta property="og:url" content="http://hansgamarra.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hans Gamarra" />
      {globalStyle}
    </Head>

    <Home />
  </>
)
