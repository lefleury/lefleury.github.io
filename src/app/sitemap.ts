export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'
import { appConfig } from '../config/app'

export default function sitemap(): MetadataRoute.Sitemap {
  return appConfig.routes.map((p) => ({
    url: new URL(p, appConfig.url).toString(),
  }))
}
