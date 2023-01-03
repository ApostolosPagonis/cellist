import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

import type { AppProps } from 'next/app'
import LinkExternalResource from '../src/components/public-embeds/LinkExternalResource'
import Head from 'next/head'
import store from '../src/store/store'
import { makeStaticProps } from '../src/lib/getStatic'
import { useEffect, useMemo } from 'react'
import translate from '../src/translation'
import { observer } from 'mobx-react-lite'
import { ThemeProvider, createTheme } from '@mui/material'
import getDesignTokents from '../themes'
import Header from '../src/components/Header';
import globals from '../src/globals';
import usePage from '../src/hooks/usePage';
import useIsBig from '../src/hooks/usIsBig';
import VideoPlayer from '../src/components/VideoPlayer';

const defaultLocale = makeStaticProps()().props.locale;

const App = observer(({ Component, pageProps }: AppProps) => {
  const ppl: unknown = pageProps?.locale;
  const lang = typeof ppl === "string" ? ppl : undefined;

  // Pass initial values for ssr and first client render.
  store.initialize({lang: lang || defaultLocale});

  // Load stuff from local storage
  useEffect(() => {
    store.loadFromLocal();
  }, []);

  // React to path change
  useEffect(() => {
    if (!lang) return;

    store.lang = lang;
    document.documentElement.lang = lang;
  }, [lang]);

  const theme = useMemo(() => {
    return createTheme(getDesignTokents(store.colorMode));
  }, [store.colorMode]);

  const page = usePage();

  const big = useIsBig();

  return <ThemeProvider theme={theme} >
    <CssBaseline enableColorScheme />
    <Head>
      <title>{translate("title")}</title>

      {/* TODO: Add description */}
      {/* <meta name="description" content="[description]" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <LinkExternalResource rel="icon" href="/favicon.ico" />

      {/* min-width on all items avoids flexbox funkiness. */}
      {/* https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size */}
      <style>{`
        * {
          min-width: 0;
          --swiper-theme-color: #fff;
        }
      `}</style>
    </Head>
    <div style={{
      // display: "grid",
      // gridTemplateRows: "auto 1fr",
      position: "absolute",
      left: 0, top: 0, right: 0, bottom: 0,

      background: page === "bio" ?
        `${big ? "center" : "left"} / cover no-repeat url(${globals.functions.prependPublicPrefix('/tolis-bio.jpg')})` :
        // Noise for background image found here imagedoc-darknoise.png
        // https://searchfox.org/mozilla-central/source/toolkit/themes/shared/media
        undefined
    }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <Header />
        <main style={{position: "relative"}}>
          <Component {...pageProps} />
          <VideoPlayer />
        </main>
      </div>
    </div>
  </ThemeProvider>;
});

export default App