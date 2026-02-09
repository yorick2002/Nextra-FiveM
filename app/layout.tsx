import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/react'
import 'nextra-theme-docs/style.css'
import './custom.css'

const SITE_URL = 'https://docs.yorick.gg'
const SITE_NAME = 'Yorick Docs'
const SITE_DESCRIPTION =
  'Community-driven documentation for FXServer setup, txAdmin, security best practices, and more.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Yorick', url: 'https://github.com/yorick2002' }],
  creator: 'Yorick',
  publisher: 'Yorick',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'FXServer',
    'txAdmin',
    'FXServer setup',
    'FXServer guide',
    'FXServer documentation',
    'server setup',
    'Linux FXServer',
    'Windows FXServer',
    'FiveM',
    'FiveM server'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: '@yorick2002'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: SITE_URL
  }
}

const logo = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 10, display: 'inline-block', verticalAlign: 'middle' }}
  >
    <rect width="120" height="120" rx="24" fill="#0F172A" />
    <path d="M26 20 L60 52" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
    <path d="M94 20 L60 52" stroke="#F97316" strokeWidth="10" strokeLinecap="round" />
    <path d="M60 52 L60 100" stroke="#A855F7" strokeWidth="10" strokeLinecap="round" />
  </svg>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', fontWeight: 700 }}>
        {logo}
        Yorick Docs
      </span>
    }
    projectLink="https://github.com/yorick2002/Nextra-FiveM"
  />
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
        faviconGlyph="Y"
        color={{ hue: 210, saturation: 100 }}
        backgroundColor={{ dark: 'rgb(15, 23, 42)', light: 'rgb(250, 250, 250)' }}
      />
      <body>
        <Layout
          banner={null}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/yorick2002/Nextra-FiveM/tree/main/content"
          editLink="Edit this page on GitHub"
          feedback={{ content: 'Question? Give us feedback →', labels: 'feedback' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
        <Analytics mode="production" />
      </body>
    </html>
  )
}
