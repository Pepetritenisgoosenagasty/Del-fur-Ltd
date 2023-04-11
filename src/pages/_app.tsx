import '@/styles/globals.css'
import { createEmotionCache, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals';
import type { AppProps } from 'next/app'
import { theme } from '../../theme'
import SimpleReactLightbox from 'simple-react-lightbox'

const myCache = createEmotionCache({ key: 'my-prefix' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={theme}
    emotionCache={myCache}
  >
    <ModalsProvider>
    <SimpleReactLightbox>
  <Component {...pageProps} />
  </SimpleReactLightbox>
    </ModalsProvider>
  </MantineProvider>
  )
}
