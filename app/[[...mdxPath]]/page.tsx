import type { Metadata } from 'next'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'
import { notFound } from 'next/navigation'

const SITE_URL = 'https://docs.yorick.gg'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const SECTION_LABELS: Record<string, string> = {
  FiveM: 'FXServer',
  txAdmin: 'txAdmin',
  Security: 'Security',
  General: 'General',
}

function isNonContentPath(segments?: string[]): boolean {
  if (!segments || segments.length === 0) return false
  const joined = segments.join('/')
  if (/\.\w+$/.test(joined)) return true
  const blocked = ['_vercel', '.well-known', '_next', 'api', 'favicon.ico']
  return blocked.includes(segments[0])
}

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>
}): Promise<Metadata> {
  const params = await props.params
  if (isNonContentPath(params.mdxPath)) return {}

  let metadata: Record<string, unknown>
  try {
    ;({ metadata } = await importPage(params.mdxPath))
  } catch {
    return {}
  }

  const title = (metadata.title as string) || 'Yorick Docs'
  const description =
    (metadata.description as string) ||
    'FXServer & txAdmin community documentation'
  const section = SECTION_LABELS[params.mdxPath?.[0] ?? ''] || ''

  const ogUrl = new URL('/api/og', SITE_URL)
  ogUrl.searchParams.set('title', title)
  ogUrl.searchParams.set('description', description)
  if (section) ogUrl.searchParams.set('section', section)

  return {
    ...metadata,
    openGraph: {
      title,
      description,
      siteName: 'Yorick Docs',
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: `${title} | Yorick Docs`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl.toString()],
    },
  }
}

const Wrapper = useMDXComponents().wrapper!

export default async function Page(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params
  if (isNonContentPath(params.mdxPath)) notFound()

  let result
  try {
    result = await importPage(params.mdxPath)
  } catch {
    notFound()
  }

  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
