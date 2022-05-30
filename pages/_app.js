import { ThemeProvider } from 'styled-components';
import theme from 'global-styles/theme';
import GlobalStyle from 'global-styles/global';
import Head from 'next/head';

function MyOPApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="favicon/favicon.ico"
        />
        <title>My Open Politica App</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyOPApp;
