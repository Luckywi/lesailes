'use client'

import Link from "next/link";
import { Footer } from '@/components/Footer';

export default function MentionsLegalesPage() {
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

          {/* Contenu principal */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold uppercase tracking-wide">
                Mentions légales
              </h1>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-6 text-sm leading-relaxed">
              
              {/* Article 1 - Editeur du site */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 1 - Éditeur du site</h2>
                <p className="mb-3">
                  Le présent site web est édité par :
                </p>
                <p>
                  <strong>Association Les Ailes</strong><br/>
                  Siège social : 13 rue Curie, 69006 Lyon, France<br/>
                  Email : nathalyio@hotmail.com<br/>
                  Téléphone : 06 77 48 18 03
                </p>
              </section>

              {/* Article 2 - Responsable de publication */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 2 - Responsable de publication</h2>
                <p>
                  Le responsable de la publication du site est l&apos;agence <strong>ADMLAB</strong>,<br/>
                  qui peut être contactée via <a 
                    href="https://admlab.fr" 
                    target="_blank" 
                    rel="follow"
                    className="text-white hover:text-white/80 underline font-semibold"
                  >
                    admlab.fr
                  </a>
                </p>
              </section>

              {/* Article 3 - Hébergement */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 3 - Hébergement</h2>
                <p>
                  Le site est hébergé par :<br/>
                  <strong>Vercel Inc.</strong><br/>
                  340 S Lemon Ave #4133<br/>
                  Walnut, CA 91789, États-Unis<br/>
                  Site web : vercel.com
                </p>
              </section>

              {/* Article 4 - Accès au site */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 4 - Accès au site</h2>
                <p>
                  L&apos;accès au site et son utilisation sont réservés à un usage strictement personnel. 
                  Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y 
                  figurent à des fins commerciales, politiques, publicitaires et pour toute forme 
                  de sollicitation commerciale et notamment l&apos;envoi de courriers électroniques 
                  non sollicités.
                </p>
              </section>

              {/* Article 5 - Contenu du site */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 5 - Contenu du site</h2>
                <p>
                  Toutes les marques, photographies, textes, commentaires, illustrations, images 
                  animées ou non, séquences vidéo, sons, ainsi que toutes les applications 
                  informatiques qui pourraient être utilisées pour faire fonctionner ce site et 
                  plus généralement tous les éléments reproduits ou utilisés sur le site sont 
                  protégés par les lois en vigueur au titre de la propriété intellectuelle.
                </p>
              </section>

              {/* Article 6 - Gestion des données personnelles */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 6 - Gestion des données personnelles</h2>
                <p className="mb-3">
                  En France, les données personnelles sont notamment protégées par la loi n° 78-87 
                  du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l&apos;article L. 226-13 du 
                  Code pénal et la Directive Européenne du 24 octobre 1995.
                </p>
                <p>
                  Aucune information personnelle de l&apos;utilisateur du site lesailes.fr n&apos;est 
                  publiée à l&apos;insu de l&apos;utilisateur, échangée, transférée, cédée ou vendue sur 
                  un support quelconque à des tiers. Seule l&apos;hypothèse du rachat de 
                  l&apos;association Les Ailes et de ses droits permettrait la transmission des dites 
                  informations à l&apos;éventuel acquéreur qui serait à son tour tenu de la même 
                  obligation de conservation et de modification des données vis à vis de 
                  l&apos;utilisateur du site lesailes.fr.
                </p>
              </section>

              {/* Article 7 - Cookies */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 7 - Cookies</h2>
                <p>
                  Le site lesailes.fr n&apos;utilise pas de cookies de traçage ou de mesure d&apos;audience. 
                  Seuls les cookies techniques nécessaires au bon fonctionnement du site peuvent 
                  être utilisés.
                </p>
              </section>

              {/* Article 8 - Liens hypertextes */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 8 - Liens hypertextes et cookies</h2>
                <p>
                  Le site lesailes.fr contient un certain nombre de liens hypertextes vers d&apos;autres 
                  sites, mis en place avec l&apos;autorisation de l&apos;association Les Ailes. Cependant, 
                  l&apos;association Les Ailes n&apos;a pas la possibilité de vérifier le contenu des sites 
                  ainsi visités, et n&apos;assumera en conséquence aucune responsabilité de ce fait.
                </p>
              </section>

              {/* Article 9 - Droit applicable */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 9 - Droit applicable et attribution de juridiction</h2>
                <p>
                  Tout litige en relation avec l&apos;utilisation du site lesailes.fr est soumis au 
                  droit français. Il est fait attribution exclusive de juridiction aux tribunaux 
                  compétents de Lyon.
                </p>
              </section>

              {/* Article 10 - Principales lois concernées */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 10 - Les principales lois concernées</h2>
                <p>
                  Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 
                  6 août 2004 relative à l&apos;informatique, aux fichiers et aux libertés.<br/>
                  Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.
                </p>
              </section>

              {/* Article 11 - Lexique */}
              <section>
                <h2 className="text-lg font-semibold mb-3 text-white">Article 11 - Lexique</h2>
                <p>
                  <strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.<br/>
                  <strong>Informations personnelles :</strong> « les informations qui permettent, sous 
                  quelque forme que ce soit, directement ou non, l&apos;identification des personnes 
                  physiques auxquelles elles s&apos;appliquent » (article 4 de la loi n° 78-17 du 
                  6 janvier 1978).
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Footer réutilisable */}
      <Footer />
    </>
  );
}