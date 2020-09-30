import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Layout examples</title>
      </Head>

      <Header>
        <Link href='/'>
          <a className='font-display font-bold text-2xl text-gray-red-100 ml-4'>
            Home
          </a>
        </Link>
      </Header>

      <Main>
        <article>
          <section></section>
        </article>
      </Main>

      <Sidebar>
        <nav></nav>
      </Sidebar>

      <Footer>
        <p>This is my footer</p>
      </Footer>
    </div>
  )
}

function Header({ children }) {
  return (
    <header className='w-full h-12 flex flex-row items-center bg-copper-400'>
      {children}
    </header>
  )
}

function Main({ children }) {
  return <main>{children}</main>
}

function Sidebar({ children }) {
  return <aside>{children}</aside>
}

function Footer({ children }) {
  return <footer>{children}</footer>
}
