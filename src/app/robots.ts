import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/nathalie', '/bernard'],
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://lesailes.fr/sitemap.xml',
  }
}