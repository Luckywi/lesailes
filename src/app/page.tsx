// src/app/page.tsx - Version avec métadonnées SEO complètes
import { Metadata } from 'next';
import HomepageClient from './HomepageClient'; // Renommer votre composant actuel

export const metadata: Metadata = {
  title: "Les Ailes | Cours de Hatha Yoga à Lyon 6 - 13 rue Curie",
  description: "Association Les Ailes : cours de Hatha Yoga à Lyon 6 avec Nathalie (mercredi) et Bernard (lundi). Professeurs certifiés FFHY. Premier cours d'essai gratuit. 13 rue Curie, 69006 Lyon.",
  keywords: [
    "cours yoga Lyon 6",
    "Hatha Yoga Lyon",
    "association yoga Lyon",
    "cours yoga Lyon 6ème",
    "yoga Lyon Curie",
    "professeur yoga certifié Lyon",
    "Les Ailes yoga",
    "cours essai gratuit yoga",
    "yoga débutant Lyon",
    "yoga seniors Lyon",
    "FFHY Lyon",
    "13 rue Curie Lyon",
    "yoga Lyon 69006",
    "cours yoga lundi mercredi Lyon"
  ].join(", "),
  authors: [{ name: "Association Les Ailes" }],
  creator: "ADMLAB",
  publisher: "Association Les Ailes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lesailes.fr'),
  alternates: {
    canonical: "https://lesailes.fr",
  },
  openGraph: {
    title: 'Les Ailes | Cours de Hatha Yoga à Lyon 6',
    description: 'Association proposant des cours de Hatha Yoga à Lyon 6 avec des professeurs certifiés FFHY. Premier cours d\'essai gratuit.',
    url: 'https://lesailes.fr',
    siteName: 'Les Ailes',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/les-ailes-logo.png',
        width: 800,
        height: 400,
        alt: 'Les Ailes - Association de Hatha Yoga Lyon 6',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Ailes | Cours de Hatha Yoga à Lyon 6',
    description: 'Cours de Hatha Yoga avec professeurs certifiés FFHY. Premier cours gratuit.',
    images: ['/les-ailes-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // À remplacer
  },
};

// Données structurées JSON-LD pour l'organisation
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Les Ailes",
  "alternateName": "Association Les Ailes",
  "description": "Association proposant des cours de Hatha Yoga à Lyon 6 avec des professeurs certifiés FFHY",
  "url": "https://lesailes.fr",
  "logo": "https://lesailes.fr/les-ailes-logo.png",
  "image": "https://lesailes.fr/les-ailes-logo.png",
  "telephone": "+33677481803",
  "email": "nathalyio@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13 rue Curie",
    "addressLocality": "Lyon",
    "postalCode": "69006",
    "addressCountry": "FR",
    "addressRegion": "Auvergne-Rhône-Alpes"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7669945,
    "longitude": 4.8623809
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "foundingDate": "2011",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lesailes.fr"
  },
  "sameAs": [
    "https://lesailes.fr/nathalie",
    "https://lesailes.fr/bernard"
  ],
  "member": [
    {
      "@type": "Person",
      "name": "Nathalie Fauconnier",
      "jobTitle": "Professeure de Hatha Yoga",
      "telephone": "+33677481803",
      "email": "nathalyio@hotmail.com"
    },
    {
      "@type": "Person", 
      "name": "Bernard Garnier",
      "jobTitle": "Professeur de Hatha Yoga",
      "telephone": "+33695311088",
      "email": "garnierbd@gmail.com"
    }
  ]
};

// Données structurées pour l'entreprise locale
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Les Ailes - Cours de Hatha Yoga",
  "description": "Association proposant des cours de Hatha Yoga à Lyon 6 avec des professeurs certifiés FFHY",
  "image": "https://lesailes.fr/les-ailes-logo.png",
  "telephone": "+33677481803",
  "email": "nathalyio@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13 rue Curie",
    "addressLocality": "Lyon",
    "postalCode": "69006",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7669945,
    "longitude": 4.8623809
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "18:20",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Wednesday",
      "opens": "18:20",
      "closes": "21:00"
    }
  ],
  "priceRange": "€€",
  "paymentAccepted": "Cash, Bank transfer",
  "currenciesAccepted": "EUR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cours de Hatha Yoga",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cours de Hatha Yoga - 1 cours/semaine",
          "description": "Accès à un cours hebdomadaire de Hatha Yoga"
        },
        "price": "395",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "395.00",
          "priceCurrency": "EUR",
          "unitText": "Annuel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Cours de Hatha Yoga - 2 cours/semaine",
          "description": "Accès à deux cours hebdomadaires de Hatha Yoga"
        },
        "price": "632",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "632.00", 
          "priceCurrency": "EUR",
          "unitText": "Annuel"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1",
    "bestRating": "5"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganization)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness)
        }}
      />
      <HomepageClient />
    </>
  );
}