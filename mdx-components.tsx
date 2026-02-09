/**
 * MDX component mapping for Nextra Docs theme.
 * @note do not move this file without updating the import path in app/[...mdxPath]/page.tsx
 */
import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import LinkButton from './components/link_button'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    LinkButton,
    ...components
  }
}
