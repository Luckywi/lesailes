import { Metadata } from 'next';
import AdmClient from './AdmClient';

export const metadata: Metadata = {
  title: "ADMLAB | Agence Web Partenaire de l'Association Les Ailes",
  description: "ADMLAB, l'agence web spécialisée qui a développé le site internet et l'identité visuelle de l'association Les Ailes à Lyon. Sites optimisés SEO, applications mobiles et solutions digitales sur mesure pour associations et PME.",
  keywords: [
    "agence web Lyon", 
    "création site internet association", 
    "développement web Lyon 6", 
    "site vitrine optimisé SEO", 
    "ADMLAB", 
    "agence digitale Lyon",
    "site web association yoga",
    "applications mobiles", 
    "identité visuelle association", 
    "conception web yoga", 
    "référencement naturel Lyon", 
    "développement sur mesure", 
    "solutions digitales associations",
    "développement applications mobiles",
    "motion design",
    "animation 3D web",
    "micro SaaS",
    "stratégie digitale Lyon",
    "site internet cours yoga",
    "agence web associations sportives"
  ].join(", "),
  openGraph: {
    title: 'ADMLAB | Agence Web Partenaire de l\'Association Les Ailes',
    description: 'ADMLAB, l\'agence web spécialisée dans la création de sites internet optimisés SEO pour associations et PME. Découvrez comment ADMLAB a transformé la présence en ligne de l\'association Les Ailes.',
    images: [
      {
        url: '/adm-logo.webp',
        width: 1200,
        height: 630,
        alt: 'ADMLAB - Agence web partenaire de l\'association Les Ailes',
      },
    ],
  },
  alternates: {
    canonical: "https://lesailes.fr/admlab",
  }
};

// Données structurées JSON-LD pour l'agence web
const jsonLdWebDesigner = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ADMLAB",
  "description": "Agence web spécialisée dans la création de sites internet optimisés SEO, applications mobiles et solutions digitales pour associations et PME",
  "url": "https://admlab.fr",
  "logo": "https://lesailes.fr/adm-logo.webp",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "areaServed": {
    "@type": "State",
    "name": "Auvergne-Rhône-Alpes"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lesailes.fr/admlab"
  },
  "offers": {
    "@type": "Offer",
    "name": "Site vitrine optimisé SEO",
    "description": "Création de site internet professionnel avec référencement optimisé pour associations et PME",
    "price": "30.00",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "30.00",
      "priceCurrency": "EUR",
      "unitText": "Mensuel"
    }
  },
  "serviceOutput": [
    {
      "@type": "WebSite",
      "url": "https://lesailes.fr",
      "name": "Les Ailes - Association de Hatha Yoga"
    },
    {
      "@type": "WebSite",
      "url": "https://www.francklebeurre-expertise.fr",
      "name": "Cabinet Franck Lebeurre Expert-Comptable"
    },
    {
      "@type": "WebSite",
      "url": "https://www.lebalzac-coiffure-decines.fr",
      "name": "Le Balzac Salon de Coiffure"
    }
  ]
};

// Données structurées JSON-LD pour les services
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "provider": {
    "@type": "Organization",
    "name": "ADMLAB",
    "url": "https://admlab.fr"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lyon"
    },
    {
      "@type": "State", 
      "name": "Auvergne-Rhône-Alpes"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Digitaux pour Associations et PME",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sites Web pour Associations",
          "description": "Création de sites vitrines optimisés SEO et adaptés aux mobiles pour associations sportives et culturelles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Applications Mobiles sur Mesure",
          "description": "Développement d'applications iOS et Android personnalisées"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solutions Métiers Digitales",
          "description": "Micro-SaaS personnalisés pour optimiser vos processus internes et la gestion client"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identité Visuelle Complète",
          "description": "Conception d'identités visuelles cohérentes et logos professionnels"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motion Design & Animations 3D",
          "description": "Animations web et visuels 3D pour des communications impactantes"
        }
      }
    ]
  }
};

// Données structurées pour la collaboration avec Les Ailes
const jsonLdCollaboration = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Développement du site web Les Ailes",
  "description": "Projet de création du site internet pour l'association Les Ailes, spécialisée dans les cours de Hatha Yoga à Lyon 6",
  "creator": {
    "@type": "Organization",
    "name": "ADMLAB",
    "url": "https://admlab.fr"
  },
  "about": {
    "@type": "Organization",
    "name": "Les Ailes",
    "description": "Association proposant des cours de Hatha Yoga à Lyon 6",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 rue Curie",
      "addressLocality": "Lyon",
      "postalCode": "69006",
      "addressCountry": "FR"
    }
  },
  "workExample": {
    "@type": "WebSite",
    "url": "https://lesailes.fr",
    "name": "Site web Les Ailes"
  }
};

export default function AdmlabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebDesigner)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdService)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCollaboration)
        }}
      />
      <AdmClient />
    </>
  );
}