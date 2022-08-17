import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import theme from '../styles/theme'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name="description"
            content={
              'Cuaca weather app by Dian Yehezkiel. Powered by Open Weather API.'
            }
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body style={{minHeight: '100vh'}}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document