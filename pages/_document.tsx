import { observer } from 'mobx-react-lite';
import { Html, Head, Main, NextScript } from 'next/document'
import { makeStaticProps } from '../src/lib/getStatic'

const defaultLocale = makeStaticProps()().props.locale

const Document = observer((props?: any) => {
  const l = props?.__NEXT_DATA__?.props?.pageProps?.locale;
  const currentLocale = typeof l === "string" ? l : defaultLocale;

  if (!props?.__NEXT_DATA__?.props?.pageProps?.locale) {
    console.error("You probably forgot to add getStatic props from page.");
  }

  return (
    <Html lang={currentLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
})

export default Document