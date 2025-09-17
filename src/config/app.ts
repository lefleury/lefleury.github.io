export const appConfig = {
  name: 'Le Fleury',
  description: 'Restaurant — menus & infos.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lefleury.github.io',
  routes: ['/', '/menus', '/a-propos'] as const,
} as const
