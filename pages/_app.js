import '../styles/index.css'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
