'use client'

import Image from "next/image";
import Link from "next/link";
import { Footer } from '@/components/Footer'

export default function NathalieClient() {
 const buttonClass = "py-3 text-center rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium tracking-wide transition-colors w-full block";

  return (
    <>

      
      {/* Contenu */}
      <main className="relative z-10 flex flex-col items-center text-white min-h-screen">
        <div className="w-full max-w-md mx-auto px-4 pt-8">
          
          {/* Bouton retour */}
          <div className="mb-6">
            <Link 
              href="/" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>

          {/* Photo et infos principales */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden w-full mb-6">
            {/* Photo de profil */}
            <div className="relative h-64 w-full">
              <Image
                src="/nathalie.png"
                alt="Nathalie Fauconnier - Professeure de Hatha Yoga à Lyon"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Nom superposé */}
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-3xl font-bold mb-1">Nathalie Fauconnier</h1>
                <p className="text-lg font-light text-white/90">Professeure de Hatha Yoga</p>
                <p className="text-sm text-white/80">Cours du mercredi à Lyon 6</p>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="p-6">
              <div className="flex flex-col gap-4 w-full">
               <a
  href="mailto:nathalyio@hotmail.com,garnierbd@gmail.com?subject=Demande de cours d'essai&body=Bonjour,%0D%0A%0D%0AJ'aimerais réserver un cours d'essai avec Nathalie le mercredi ____/____/____. %0D%0A%0D%0AJe serais intéressé par :%0D%0A- Le premier cours (18h20 – 19h35) si il vous reste de la place%0D%0A- Le 2e cours (19h45 – 21h00) si il vous reste de la place%0D%0A%0D%0A(Merci de préciser votre préférence et d'indiquer vos informations personnelles : nom, prénom, âge, numéro de téléphone)%0D%0A%0D%0ACordialement"
  className={buttonClass}
>
  Envoyer un email
</a>
                <a
                  href="tel:0677481803"
                  className={buttonClass}
                >
                  Appeler Nathalie
                </a>
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold uppercase tracking-wide">
                Présentation
              </h2>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Née en 1959, Nathalie a d&apos;abord été animatrice d&apos;expression corporelle et de 
                danse contemporaine avant de découvrir la pratique du Hatha Yoga à Lyon par 
                l&apos;intermédiaire de Jeanne de Joussineau.
              </p>
              
              <p>
                Encouragée par Jeanne, elle suit la formation de Yoga traditionnel transmis par 
                M. Shri MAHESH de 2006 à 2023. Elle transmet cette pratique depuis 2011 et 
                obtient son diplôme de professeur de yoga FFHY en 2015.
              </p>

              <p>
                Nathalie intervient dans diverses structures : associations de retraités, MJC, 
                comités d&apos;entreprises et aussi dans une salle privée à Lyon 6ème. Elle propose 
                également du yoga sur chaise, adaptant sa pratique aux besoins de chacun.
              </p>
            </div>
          </div>

          {/* Formation et certifications */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold uppercase tracking-wide">Formation</h2>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Parcours de formation</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-white/30 pl-4">
                    <div className="text-sm text-white/70 mb-1">2006 - 2023</div>
                    <h4 className="font-semibold text-white">Formation Yoga traditionnel Sri Mahesh</h4>
                    <p className="text-sm text-white/90 mt-2">
                      Formation complète sur 17 ans dans la tradition du Hatha Yoga selon 
                      l&apos;enseignement de M. Shri MAHESH. Diplômée FFHY en 2015.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-white/30 pl-4">
                    <div className="text-sm text-white/70 mb-1">Depuis 2011</div>
                    <h4 className="font-semibold text-white">Enseignement et transmission</h4>
                    <p className="text-sm text-white/90 mt-2">
                      Plus de 12 ans d&apos;expérience dans l&apos;enseignement du Hatha Yoga, 
                      avec une approche bienveillante adaptée à tous les publics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approche pédagogique */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold uppercase tracking-wide">
                Mon approche
              </h2>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                Mes séances se déroulent dans le calme et le respect de chacun, en bienveillance. 
                Le yoga s&apos;adresse à tous : mobile ou moins mobile, jeune et moins jeune. 
                Chaque séance permet de retrouver vitalité, équilibre et harmonie.
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-base font-semibold mb-2 text-white">Spécialités</h3>
                  <ul className="space-y-1 text-xs">
                    <li>• Hatha Yoga selon l&apos;enseignement de Sri Mahesh</li>
                    <li>• Yoga sur chaise (mobilité réduite)</li>
                    <li>• Pratiques respiratoires (pranayama)</li>
                    <li>• Yoga adapté aux seniors</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-base font-semibold mb-2 text-white">Déroulement des séances</h3>
                  <ul className="space-y-1 text-xs">
                    <li>• Détente en début et fin de séance</li>
                    <li>• Postures (asana) adaptées à chacun</li>
                    <li>• Pratiques respiratoires (pranayama)</li>
                    <li>• Ambiance calme et bienveillante</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires de Nathalie */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold uppercase tracking-wide">
                Horaires des cours
              </h2>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="text-xl font-semibold text-white uppercase tracking-wide mb-4 text-center">
                MERCREDI
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                  <span className="font-medium text-white text-sm">1er cours</span>
                  <span className="font-semibold text-white text-sm">18h20 – 19h35</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                  <span className="font-medium text-white text-sm">2e cours</span>
                  <span className="font-semibold text-white text-sm">19h45 – 21h00</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-white/80 mb-3">
                  Cours dispensés au 13 rue Curie, 69006 Lyon
                </p>
                <a
  className={buttonClass}
  href="mailto:nathalyio@hotmail.com,garnierbd@gmail.com?subject=Demande de cours d'essai&body=Bonjour,%0D%0A%0D%0AJ'aimerais réserver un cours d'essai.%0D%0A%0D%0APour les cours avec Nathalie le mercredi :%0D%0A- Premier cours (18h20 – 19h35) : ____/____ si il vous reste de la place%0D%0A- 2e cours (19h45 – 21h00) : ____/____ si il vous reste de la place%0D%0A%0D%0APour les cours avec Bernard le lundi :%0D%0A- Premier cours (18h20 – 19h35) : ____/____ si il vous reste de la place%0D%0A- 2e cours (19h45 – 21h00) : ____/____ si il vous reste de la place%0D%0A%0D%0A(Merci de compléter les dates souhaitées et d'indiquer vos informations personnelles : nom, prénom, âge, numéro de téléphone)%0D%0A%0D%0ACordialement"
>
  Réserver un cours d&apos;essai
</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}