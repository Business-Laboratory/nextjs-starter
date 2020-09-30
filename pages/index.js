import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>Layout examples</title>
      </Head>

      <Header>
        <button
          className='ml-2'
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {showSidebar ? (
            <CloseIcon aria-label='Close sidebar' />
          ) : (
            <HamburgerIcon aria-label='Open sidebar' />
          )}
        </button>
        <Link href='/'>
          <a className='font-display font-bold text-2xl text-gray-red-100 ml-2'>
            Home
          </a>
        </Link>
        {/* TODO: add avatar */}
      </Header>

      <div className='flex-1 flex flex-row overflow-hidden'>
        {showSidebar ? (
          <Sidebar className='space-y-8 text-white pl-4 pt-2'>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          </Sidebar>
        ) : null}

        <Main>
          <article>
            <section className='space-y-8 pl-4 pt-2'>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
              <p>Content</p>
            </section>
          </article>
          <Footer>Hi, I'm the footer</Footer>
        </Main>
      </div>
    </div>
  )
}

function Header({ className, children }) {
  return (
    <header
      className={clsx(
        'w-full h-12 flex flex-row items-center bg-copper-400',
        className
      )}
    >
      {children}
    </header>
  )
}

// taken from https://heroicons.com/
function HamburgerIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='w-6 h-6 text-gray-red-100'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}
function CloseIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className='w-6 h-6 text-gray-red-100'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}

function Main({ className, children }) {
  return (
    <main
      className={clsx('flex-1 overflow-x-hidden overflow-y-auto', className)}
    >
      {children}
    </main>
  )
}

function Sidebar({ className, children }) {
  return (
    <aside
      className={clsx(
        'static h-screen inset-y-0 left-0 w-64 bg-gray-900 overflow-y-auto',
        className
      )}
    >
      {children}
    </aside>
  )
}

function Footer({ children }) {
  return <footer>{children}</footer>
}
