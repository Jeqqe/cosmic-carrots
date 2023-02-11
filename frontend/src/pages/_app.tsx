/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { type AppType } from 'next/dist/shared/lib/utils';

import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => (
  <div className='flex flex-col'>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
