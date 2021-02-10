import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

type ComponentWithPageLayout = {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType
  }
}

function App({ Component, pageProps }: AppProps & ComponentWithPageLayout) {
  // get a page root if one was set
  const PageLayout =
    Component.PageLayout ||
    (({ children }: { children: React.ReactNode }) => <>{children}</>)

  return (
    <>
      <GlobalStyles />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default App
