import type { MetadataRoute } from 'next'

const SITE_URL = 'https://docs.yorick.gg'

const staticPages = [
  '',
  '/about',
  '/FiveM/Server/Linux/Create-server',
  '/FiveM/Server/Linux/Database',
  '/FiveM/Server/Linux/Domain-setup',
  '/FiveM/Server/Linux/Resources',
  '/FiveM/Server/Linux/Auto-update',
  '/FiveM/Server/Windows/Create-server',
  '/FiveM/Server/Windows/Database',
  '/FiveM/Server/Windows/Portforwarding',
  '/FiveM/Server/Windows/Resources',
  '/FiveM/Server/Windows/Server-Banner',
  '/FiveM/Server/Windows/Winrar',
  '/FiveM/Client/Update-Channel',
  '/txAdmin/Bot',
  '/txAdmin/Create-account',
  '/txAdmin/Master-Account',
  '/txAdmin/Update',
  '/General/Xampp',
  '/Security/Backdoors',
  '/Security/Sandboxing',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))
}
