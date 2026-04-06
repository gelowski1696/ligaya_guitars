import { useEffect } from 'react'

const SITE_NAME = 'Ligaya Guitars'
const DEFAULT_TITLE = 'Ligaya Guitars | Crafted in the Philippines'
const DEFAULT_DESCRIPTION =
  'Discover Ligaya Guitars: electric and acoustic instruments with warm finishes, practical upgrades, and a player-first buying experience in the Philippines.'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

export default function Seo() {
  useEffect(() => {
    const origin = window.location.origin
    const canonicalUrl = `${origin}${window.location.pathname}`
    const ogImage = `${origin}/assets/logo_large.jpg`

    document.documentElement.lang = 'en-PH'
    document.title = DEFAULT_TITLE

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: DEFAULT_DESCRIPTION,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    })
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#120804',
    })
    upsertMeta('meta[name="format-detection"]', {
      name: 'format-detection',
      content: 'telephone=no',
    })
    upsertMeta('meta[name="application-name"]', {
      name: 'application-name',
      content: SITE_NAME,
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_PH',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: DEFAULT_TITLE,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: DEFAULT_DESCRIPTION,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: ogImage,
    })
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: 'Ligaya Guitars brand mark',
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: DEFAULT_TITLE,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: DEFAULT_DESCRIPTION,
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: ogImage,
    })

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })
    upsertLink('link[rel="icon"]', {
      rel: 'icon',
      href: '/assets/logo_large.jpg',
    })
    upsertLink('link[rel="apple-touch-icon"]', {
      rel: 'apple-touch-icon',
      href: '/assets/logo_large.jpg',
    })
    upsertLink('link[rel="manifest"]', {
      rel: 'manifest',
      href: '/site.webmanifest',
    })

    const structuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'MusicStore',
        name: SITE_NAME,
        url: canonicalUrl,
        image: ogImage,
        description: DEFAULT_DESCRIPTION,
        areaServed: 'PH',
        telephone: '+63 929 216 0920',
        email: 'ligayaguitars@gmail.com',
        sameAs: [
          'https://www.instagram.com/ligayaguitars/',
          'https://www.tiktok.com/@ligayaguitars',
          'https://www.facebook.com/ligaya.guitars/',
          'https://www.lazada.com.ph/shop/ligaya-guitars/',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: canonicalUrl,
      },
    ]

    let script = document.head.querySelector('script[data-seo="structured-data"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo', 'structured-data')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(structuredData)
  }, [])

  return null
}
