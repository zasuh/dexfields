import * as React from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import colors from '../utils/colors';
import Layout from '../components/layout/Layout';

const theme = {
  colors,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
