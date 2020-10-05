import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

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
        <Sidebar showSidebar={showSidebar}>
          <div className='space-y-8 text-gray-yellow-100 pl-4 pt-2'>
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
          </div>
        </Sidebar>

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

type HeaderProps = {
  className?: string
  children?: React.ReactNode
}
function Header({ className, children }: HeaderProps) {
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
function HamburgerIcon(props: React.SVGAttributes<SVGElement>) {
  const { className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={clsx('w-6 h-6 text-gray-red-100', className)}
      {...rest}
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
function CloseIcon(props: React.SVGAttributes<SVGElement>) {
  const { className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={clsx('w-6 h-6 text-gray-red-100', className)}
      {...rest}
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

type MainProps = {
  className?: string
  children?: React.ReactNode
}
function Main({ className, children }: MainProps) {
  return (
    <main
      className={clsx('flex-1 overflow-x-hidden overflow-y-auto', className)}
    >
      {children}
    </main>
  )
}

type SidebarProps = {
  showSidebar: boolean
  className?: string
  children?: React.ReactNode
}
type AnimationStatus = 'closing' | 'closed' | 'open'
function Sidebar({ showSidebar, className, children }: SidebarProps) {
  const [animationStatus, setAnimationStatus] = useState<AnimationStatus>(() =>
    showSidebar ? 'open' : 'closed'
  )

  useEffect(() => {
    setAnimationStatus(showSidebar ? 'open' : 'closing')
  }, [showSidebar])

  return (
    <aside
      css={css`
        width: 16rem;
        margin-left: ${showSidebar ? 0 : -16}rem;
        transition: margin-left 0.5s ease-in-out;
        visibility: ${animationStatus === 'closed' ? 'hidden' : 'visible'};
      `}
      className={clsx(
        'static h-screen inset-y-0 left-0 bg-matisse-blue-400 overflow-y-auto',
        className
      )}
      onTransitionEnd={() => {
        if (animationStatus === 'closing') {
          setAnimationStatus('closed')
        }
      }}
    >
      {children}
    </aside>
  )
}

type FooterProps = {
  className?: string
  children?: React.ReactNode
}
function Footer({ className, children }: FooterProps) {
  return <footer className={className}>{children}</footer>
}
