import '@/styles/globals.css'
import { createEmotionCache, MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { theme } from '../../theme'

const myCache = createEmotionCache({ key: 'my-prefix' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={theme}
    emotionCache={myCache}
  >
  <Component {...pageProps} />
  </MantineProvider>
  )
}
