export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'
import { appConfig } from '../config/app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: new URL('/sitemap.xml', appConfig.url).toString(),
  }
}
