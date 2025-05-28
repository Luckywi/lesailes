import { Metadata } from 'next';
import NathalieClient from './NathalieClient';

export const metadata: Metadata = {
  title: "Nathalie Fauconnier | Professeure de Hatha Yoga à Lyon 6 - Les Ailes",
  description: "Découvrez Nathalie Fauconnier, professeure certifiée FFHY de Hatha Yoga à Lyon 6. Cours du mercredi soir (18h20-19h35 et 19h45-21h00) au 13 rue Curie. Formation complète, approche bienveillante et yoga sur chaise.",
  keywords: [
    "Nathalie Fauconnier yoga Lyon",
    "professeure Hatha Yoga Lyon 6", 
    "cours yoga mercredi Lyon", 
    "yoga Lyon 6ème arrondissement",
    "professeure yoga certifiée FFHY",
    "Hatha Yoga Sri Mahesh Lyon",
    "cours yoga débutant Lyon",
    "yoga seniors Lyon",
    "yoga sur chaise Lyon",
    "pranayama Lyon",
    "association Les Ailes",
    "13 rue Curie Lyon",
    "yoga Lyon Curie",
    "formation yoga FFHY",
    "yoga bienveillant Lyon",
    "cours essai yoga Lyon"
  ].join(", "),
  openGraph: {
    title: 'Nathalie Fauconnier | Professeure de Hatha Yoga à Lyon 6',
    description: 'Professeure certifiée FFHY proposant des cours de Hatha Yoga le mercredi soir à Lyon 6. Approche bienveillante adaptée à tous les niveaux.',
    images: [
      {
        url: '/nathalie.png',
        width: 800,
        height: 600,
        alt: 'Nathalie Fauconnier - Professeure de Hatha Yoga à Lyon',
      },
    ],
  },
  alternates: {
    canonical: "https://lesailes.fr/nathalie",
  }
};

// Données structurées JSON-LD pour Nathalie en tant que personne
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nathalie Fauconnier",
  "jobTitle": "Professeure de Hatha Yoga",
  "description": "Professeure certifiée FFHY de Hatha Yoga, diplômée en 2015. Enseigne selon l'approche de Sri Mahesh dans une atmosphère bienveillante.",
  "email": "nathalyio@hotmail.com",
  "telephone": "+33677481803",
  "image": "https://lesailes.fr/nathalie.png",
  "worksFor": {
    "@type": "Organization",
    "name": "Les Ailes",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 rue Curie",
      "addressLocality": "Lyon",
      "postalCode": "69006",
      "addressCountry": "FR"
    }
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Diplôme FFHY - Professeure de Hatha Yoga",
      "credentialCategory": "Certification professionnelle",
      "dateEarned": "2015",
      "educationalLevel": "Formation complète 2006-2023",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Fédération Française de Hatha Yoga"
      }
    }
  ],
  "knowsAbout": [
    "Hatha Yoga",
    "Pranayama", 
    "Yoga sur chaise",
    "Yoga adapté aux seniors",
    "Enseignement Sri Mahesh"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Fédération Française de Hatha Yoga"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Années d'expérience enseignement",
      "value": "13 ans (depuis 2011)"
    },
    {
      "@type": "PropertyValue",
      "name": "Formation initiale",
      "value": "Animatrice d'expression corporelle et danse contemporaine"
    }
  ]
};

// Données structurées pour les cours de Nathalie
const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Cours de Hatha Yoga avec Nathalie Fauconnier",
  "description": "Cours de Hatha Yoga selon l'enseignement de Sri Mahesh. Séances dans le calme et le respect, adaptées à tous : mobile ou moins mobile, jeune et moins jeune.",
  "provider": {
    "@type": "Organization",
    "name": "Les Ailes",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 rue Curie",
      "addressLocality": "Lyon",
      "postalCode": "69006",
      "addressCountry": "FR"
    }
  },
  "instructor": {
    "@type": "Person",
    "name": "Nathalie Fauconnier",
    "telephone": "+33677481803",
    "email": "nathalyio@hotmail.com"
  },
  "courseSchedule": [
    {
      "@type": "Schedule",
      "dayOfWeek": "Wednesday",
      "startTime": "18:20",
      "endTime": "19:35",
      "scheduleTimezone": "Europe/Paris"
    },
    {
      "@type": "Schedule", 
      "dayOfWeek": "Wednesday",
      "startTime": "19:45",
      "endTime": "21:00",
      "scheduleTimezone": "Europe/Paris"
    }
  ],
  "location": {
    "@type": "Place",
    "name": "Les Ailes",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13 rue Curie",
      "addressLocality": "Lyon",
      "postalCode": "69006",
      "addressCountry": "FR"
    }
  },
  "offers": {
    "@type": "Offer",
    "name": "Cours d'essai gratuit",
    "description": "Premier cours d'essai gratuit pour découvrir l'approche de Nathalie",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Spécialité",
      "value": "Yoga sur chaise disponible"
    },
    {
      "@type": "PropertyValue",
      "name": "Public cible",
      "value": "Tous âges et niveaux de mobilité"
    }
  ]
};

// Données structurées pour les services de Nathalie
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Yoga Instruction",
  "name": "Cours de Hatha Yoga - Nathalie Fauconnier",
  "description": "Enseignement du Hatha Yoga selon l'approche Sri Mahesh. Séances bienveillantes adaptées à tous, avec possibilité de yoga sur chaise pour les personnes à mobilité réduite.",
  "provider": {
    "@type": "Person",
    "name": "Nathalie Fauconnier",
    "telephone": "+33677481803",
    "email": "nathalyio@hotmail.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceOutput": {
    "@type": "Service",
    "name": "Amélioration de la vitalité, équilibre et harmonie par le yoga"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Spécialité",
      "value": "Hatha Yoga Sri Mahesh, Yoga sur chaise"
    },
    {
      "@type": "PropertyValue", 
      "name": "Niveau",
      "value": "Tous niveaux - Seniors bienvenus"
    },
    {
      "@type": "PropertyValue",
      "name": "Approche",
      "value": "Bienveillante, calme et respectueuse"
    },
    {
      "@type": "PropertyValue",
      "name": "Structure séance",
      "value": "Détente + Postures (asana) + Respirations (pranayama)"
    }
  ]
};

export default function NathaliePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdPerson)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCourse)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdService)
        }}
      />
      <NathalieClient />
    </>
  );
}