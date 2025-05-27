'use client'

import Image from "next/image";
import Link from "next/link";
import { ThreeScene } from '@/components/ThreeScene';
import { Footer } from '@/components/Footer'

export default function BernardPage() {
 const buttonClass = "py-3 text-center rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium tracking-wide transition-colors w-full block";


  return (
    <>
      {/* Fond 3D */}
      <ThreeScene modelPath="/Peacock.glb" />
      
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
                src="/Bernard.png"
                alt="Bernard Garnier"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Nom superposé */}
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-3xl font-bold mb-1">Bernard Garnier</h1>
                <p className="text-lg font-light text-white/90">Professeur de Hatha Yoga</p>
                <p className="text-sm text-white/80">Cours du lundi</p>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="p-6">
              <div className="flex flex-col gap-4 w-full">
                <a
                  href="mailto:garnierbd@gmail.com"
                  className={buttonClass}
                >
                  Envoyer un email
                </a>
                <a
                  href="tel:0695311088"
                  className={buttonClass}
                >
                  Appeler Bernard
                </a>
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                Présentation
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Né le 25 novembre 1963, Bernard découvre le yoga en 2011 avec différents professeurs, 
                notamment Jeanne de Joussineau qui marquera profondément son parcours. Il suit ses 
                cours durant plus de 10 ans, développant une pratique régulière et approfondie.
              </p>
              
              <p>
                C&apos;est Jeanne qui l&apos;incite à entamer la formation de professeur de yoga de la 
                Fédération Française de Hatha Yoga. Bernard suit cette formation rigoureuse de 
                2019 à 2023 et obtient son diplôme FFHY en septembre 2023.
              </p>

              <p>
                Depuis 2021, il enseigne le yoga en région lyonnaise pour diverses structures : 
                association de retraités, comité d&apos;entreprise, salle du 6ème arrondissement de Lyon 
                et MJC. Sa philosophie d&apos;enseignement repose sur le respect du rythme individuel 
                et la création d&apos;une atmosphère chaleureuse et bienveillante.
              </p>
            </div>
          </div>

          {/* Formation et certifications */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 mb-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold uppercase tracking-wide">Formation</h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Parcours de formation</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-white/30 pl-4">
                    <div className="text-sm text-white/70 mb-1">2019 - 2023</div>
                    <h4 className="font-semibold text-white">Formation professeur de Hatha Yoga FFHY</h4>
                    <p className="text-sm text-white/90 mt-2">
                      Formation complète de 360 heures mêlant pratique et théorie, 
                      ainsi qu&apos;une approche de la culture indienne. Diplômé en septembre 2023.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-white/30 pl-4">
                    <div className="text-sm text-white/70 mb-1">2011 - 2023</div>
                    <h4 className="font-semibold text-white">Formation avec Jeanne de Joussineau</h4>
                    <p className="text-sm text-white/90 mt-2">
                      Plus de 10 ans de pratique intensive avec Jeanne de Joussineau, 
                      qui l&apos;accompagne dans son cheminement yogique et l&apos;encourage à devenir enseignant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approche pédagogique */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                Mon approche
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                Ma philosophie d&apos;enseignement repose sur le respect du rythme de chacun. 
                J&apos;aime créer une atmosphère chaleureuse où chacun peut progresser à son rythme, 
                sans jugement ni compétition.
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="text-base font-semibold mb-2 text-white">Spécialités</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Hatha Yoga selon l&apos;enseignement de Sri Mahesh</li>
                    <li>• Pranayama (techniques respiratoires)</li>
                    <li>• Méditation guidée</li>
                    <li>• Yoga adapté aux seniors</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="text-base font-semibold mb-2 text-white">Objectifs des cours</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Développer force et souplesse</li>
                    <li>• Améliorer l&apos;équilibre et la posture</li>
                    <li>• Apprendre à gérer le stress</li>
                    <li>• Cultiver la paix intérieure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires de Bernard */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                Horaires des cours
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-xl font-semibold text-white uppercase tracking-wide mb-4 text-center">
                LUNDI
              </h4>
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
                  href="mailto:garnierbd@gmail.com?subject=Réservation cours d'essai avec Bernard"
                 className={buttonClass}
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