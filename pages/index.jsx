import React from 'react';
// import Link from 'next/link';
import Head from 'next/head';

import Home from '../templates/home';

import globalStyle from '../styles/global';

export default () => (
  <>
    <Head>
      <title>Hans Gamarra</title>
      {globalStyle}
    </Head>

    <Home />
  </>
);
