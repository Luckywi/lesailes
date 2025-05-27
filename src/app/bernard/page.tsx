import { Metadata } from 'next';
import BernardClient from './BernardClient';

export const metadata: Metadata = {
  title: "Bernard Garnier | Professeur de Hatha Yoga à Lyon 6 - Les Ailes",
  description: "Découvrez Bernard Garnier, professeur certifié FFHY de Hatha Yoga à Lyon 6. Cours du lundi soir (18h20-19h35 et 19h45-21h00) au 13 rue Curie. Formation complète, approche bienveillante adaptée à tous les niveaux.",
  keywords: [
    "Bernard Garnier yoga Lyon",
    "professeur Hatha Yoga Lyon 6", 
    "cours yoga lundi Lyon", 
    "yoga Lyon 6ème arrondissement",
    "professeur yoga certifié FFHY",
    "Hatha Yoga Sri Mahesh Lyon",
    "cours yoga débutant Lyon",
    "yoga seniors Lyon",
    "méditation guidée Lyon",
    "pranayama Lyon",
    "association Les Ailes",
    "13 rue Curie Lyon",
    "yoga Lyon Curie",
    "formation yoga FFHY",
    "yoga bienveillant Lyon",
    "cours essai yoga Lyon"
  ].join(", "),
  openGraph: {
    title: 'Bernard Garnier | Professeur de Hatha Yoga à Lyon 6',
    description: 'Professeur certifié FFHY proposant des cours de Hatha Yoga le lundi soir à Lyon 6. Approche bienveillante adaptée à tous les niveaux.',
    images: [
      {
        url: '/Bernard.png',
        width: 800,
        height: 600,
        alt: 'Bernard Garnier - Professeur de Hatha Yoga à Lyon',
      },
    ],
  },
  alternates: {
    canonical: "https://lesailes.fr/bernard",
  }
};

// Données structurées JSON-LD pour Bernard en tant que personne
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bernard Garnier",
  "jobTitle": "Professeur de Hatha Yoga",
  "description": "Professeur certifié FFHY de Hatha Yoga, diplômé en 2023. Enseigne selon l'approche de Sri Mahesh dans une atmosphère bienveillante.",
  "email": "garnierbd@gmail.com",
  "telephone": "+33695311088",
  "image": "https://lesailes.fr/Bernard.png",
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
      "name": "Diplôme FFHY - Professeur de Hatha Yoga",
      "credentialCategory": "Certification professionnelle",
      "dateEarned": "2023-09",
      "educationalLevel": "Formation 360 heures",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Fédération Française de Hatha Yoga"
      }
    }
  ],
  "knowsAbout": [
    "Hatha Yoga",
    "Pranayama", 
    "Méditation guidée",
    "Yoga adapté aux seniors",
    "Enseignement Sri Mahesh"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Fédération Française de Hatha Yoga"
  }
};

// Données structurées pour les cours de Bernard
const jsonLdCourse = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Cours de Hatha Yoga avec Bernard Garnier",
  "description": "Cours de Hatha Yoga selon l'enseignement de Sri Mahesh. Approche bienveillante adaptée à tous les niveaux, dans le respect du rythme individuel.",
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
    "name": "Bernard Garnier",
    "telephone": "+33695311088",
    "email": "garnierbd@gmail.com"
  },
  "courseSchedule": [
    {
      "@type": "Schedule",
      "dayOfWeek": "Monday",
      "startTime": "18:20",
      "endTime": "19:35",
      "scheduleTimezone": "Europe/Paris"
    },
    {
      "@type": "Schedule", 
      "dayOfWeek": "Monday",
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
    "description": "Premier cours d'essai gratuit pour découvrir l'approche de Bernard",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

// Données structurées pour les services de Bernard
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Yoga Instruction",
  "name": "Cours de Hatha Yoga - Bernard Garnier",
  "description": "Enseignement du Hatha Yoga selon l'approche Sri Mahesh. Cours adaptés à tous les niveaux avec une attention particulière portée au respect du rythme individuel.",
  "provider": {
    "@type": "Person",
    "name": "Bernard Garnier",
    "telephone": "+33695311088",
    "email": "garnierbd@gmail.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Lyon"
  },
  "serviceOutput": {
    "@type": "Service",
    "name": "Amélioration du bien-être physique et mental par le yoga"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Spécialité",
      "value": "Hatha Yoga Sri Mahesh"
    },
    {
      "@type": "PropertyValue", 
      "name": "Niveau",
      "value": "Tous niveaux - Débutants bienvenus"
    },
    {
      "@type": "PropertyValue",
      "name": "Approche",
      "value": "Bienveillante et respectueuse du rythme individuel"
    }
  ]
};

export default function BernardPage() {
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
      <BernardClient />
    </>
  );
}