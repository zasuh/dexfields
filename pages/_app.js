import * as React from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import colors from '../utils/colors';

const theme = {
  colors,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
