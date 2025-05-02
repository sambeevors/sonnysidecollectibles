import type { Metadata } from 'next'

export interface PageMetadataProps {
  title?: string
  description?: string
  type?: 'website' | 'article'
  path?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description = 'Trade Sonny Angels, Yu-Gi-Oh, and Pokémon collectibles',
  type = 'website',
  path = '',
  noIndex = false,
}: PageMetadataProps): Metadata {
  const siteUrl = 'https://sonnysidecollectibles.com'
  const fullTitle = title
    ? `${title} | Sonny Side Collectibles`
    : 'Sonny Side Collectibles'
  const url = `${siteUrl}${path}`

  // We're now relying on the route-based OG image generation
  // So we don't need to specify images here anymore

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Sonny Side Collectibles',
      locale: 'en_GB',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  }
}
