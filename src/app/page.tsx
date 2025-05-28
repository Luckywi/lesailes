"use client"

import Image from "next/image";
import Link from "next/link"; // ✅ AJOUTÉ - Import de Link
import { Footer } from '@/components/Footer';

export default function Home() {
  // Style de bouton uniformisé à utiliser partout
  const buttonClass = "py-3 text-center rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium tracking-wide transition-colors w-full";

  return (
    <>
      {/* Contenu défilable */}
      <main className="relative flex flex-col items-center text-white" style={{ zIndex: 10 }}>
        {/* Overlay pour améliorer la lisibilité - RÉDUIT pour plus de luminosité */}
        <div className="fixed inset-0"></div>
        
        {/* Contenu principal */}
        <div className="w-full max-w-md mx-auto px-4 pt-8">
          
          {/* Réduisez aussi l'opacité des conteneurs pour plus de luminosité */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden w-full mb-6 p-6">
            <div className="w-full max-w-md mx-auto">
              <div className="flex flex-col items-center text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Les Ailes</h1>
                <h2 className='font-bold'>COURS DE HATHA YOGA À LYON 6</h2>
                <h3 className='font-bold'>13 rue Curie - 69006 Lyon</h3>
              </div>
              
              {/* Carte Google Maps épurée */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.046507369154!2d4.8623809!3d45.7669945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea9a5be8c187%3A0x36bbba108e1a5d51!2s13%20Rue%20Curie%2C%2069006%20Lyon!5e0!3m2!1sfr!2sfr!4v1714479984794!5m2!1sfr!2sfr&disableDefaultUI=true&zoomControl=false&mapTypeControl=false&streetViewControl=false&fullscreenControl=false&maptype=roadmap&style=feature:poi|visibility:off" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl mb-6"
              ></iframe>
              
              {/* Boutons en colonne avec style uniformisé */}
              <div className="flex flex-col gap-4 w-full">
                <a
                  className={buttonClass}
                  href="mailto:nathalyio@hotmail.com,garnierbd@gmail.com?subject=Demande de cours d'essai&body=Bonjour,%0D%0A%0D%0AJ'aimerais réserver un cours d'essai.%0D%0A%0D%0APour les cours avec Nathalie le mercredi :%0D%0A- Premier cours (18h20 – 19h35) : ____/____ si il vous reste de la place%0D%0A- 2e cours (19h45 – 21h00) : ____/____ si il vous reste de la place%0D%0A%0D%0APour les cours avec Bernard le lundi :%0D%0A- Premier cours (18h20 – 19h35) : ____/____ si il vous reste de la place%0D%0A- 2e cours (19h45 – 21h00) : ____/____ si il vous reste de la place%0D%0A%0D%0A(Merci de compléter les dates souhaitées et d'indiquer vos informations personnelles : nom, prénom, âge, numéro de téléphone)%0D%0A%0D%0ACordialement"
                >
                  Réserver un cours d&apos;essai
                </a>
                
                <a
                  className={buttonClass}
                  href="tel:0677481803"
                >
                  Nous appeler
                </a>
              </div>
            </div>
          </div>

          {/* Horaires des cours */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 w-full mb-6">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                Horaires des cours
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-10">
              {/* LUNDI */}
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-white uppercase tracking-wide">
                  LUNDI
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center bg-white/10 rounded-lg p-4 transition transform hover:scale-105">
                    <span className="font-medium text-white">1er cours</span>
                    <span className="font-semibold text-white">18h20 – 19h35</span>
                  </li>
                  <li className="flex justify-between items-center bg-white/10 rounded-lg p-4 transition transform hover:scale-105">
                    <span className="font-medium text-white">2e cours</span>
                    <span className="font-semibold text-white">19h45 – 21h00</span>
                  </li>
                </ul>
              </div>

              {/* MERCREDI */}
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-white uppercase tracking-wide">
                  MERCREDI
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center bg-white/10 rounded-lg p-4 transition transform hover:scale-105">
                    <span className="font-medium text-white">1er cours</span>
                    <span className="font-semibold text-white">18h20 – 19h35</span>
                  </li>
                  <li className="flex justify-between items-center bg-white/10 rounded-lg p-4 transition transform hover:scale-105">
                    <span className="font-medium text-white">2e cours</span>
                    <span className="font-semibold text-white">19h45 – 21h00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarifs annuels */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 w-full mb-6 overflow-hidden relative">
            {/* Fond décoratif subtil */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                Tarifs annuels
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            {/* Options tarifaires */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {/* 1 cours / semaine */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative z-10 h-full flex flex-col">
                  <h4 className="text-xl font-bold mb-2 tracking-wide">1 cours par semaine</h4>
                  
                  <div className="flex items-baseline mt-2 mb-4">
                    <span className="text-5xl font-black tracking-tighter">395</span>
                    <div className="flex flex-col ml-2">
                      <span className="text-xl font-light">€</span>
                      <span className="text-xs font-light opacity-70 -mt-1">/an</span>
                    </div>
                  </div>
                  
                  <p className="text-xs font-light opacity-70 mt-auto">
                    Accès à un cours hebdomadaire de votre choix
                  </p>
                </div>
              </div>
              
              {/* 2 cours / semaine */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative z-10 h-full flex flex-col">
                  <h4 className="text-xl font-bold mb-2 tracking-wide">2 cours par semaine</h4>
                  
                  <div className="flex items-baseline mt-2 mb-4">
                    <span className="text-5xl font-black tracking-tighter">632</span>
                    <div className="flex flex-col ml-2">
                      <span className="text-xl font-light">€</span>
                      <span className="text-xs font-light opacity-70 -mt-1">/an</span>
                    </div>
                  </div>
                  
                  <p className="text-xs font-light opacity-70 mt-auto">
                    Accès à deux cours hebdomadaires de votre choix
                  </p>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="space-y-4 relative z-10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-light text-base">Premier cours d&apos;essai gratuit</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-90" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-light text-base">Paiement possible en 1 à 4 mensualités</p>
              </div>
            </div>
          </div>

          {/* Nos professeurs */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 w-full mb-6">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                Nos professeurs
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>

            <div className="space-y-10">
              {[
                {
                  name: 'Nathalie Fauconnier',
                  role: 'Cours du mercredi',
                  img: '/nathalie.png',
                  email: 'nathalyio@hotmail.com',
                  phone: '06 77 48 18 03',
                  bio: "Enseignante de Yoga formée selon l'enseignement de Sri Mahesh au sein de la FFHY. Pratiquante depuis plus de 15 ans, Nathalie vous accompagne avec bienveillance dans votre découverte ou approfondissement du Hatha Yoga."
                },
                {
                  name: 'Bernard Garnier',
                  role: 'Cours du lundi',
                  img: '/Bernard.png',
                  email: 'garnierbd@gmail.com',
                  phone: '06 95 31 10 88',
                  bio: "Enseignant de yoga formé à l'enseignement de Sri Mahesh au sein de la FFHY, Bernard pratique le Hatha Yoga depuis 2011, année où il débute comme élève à l'association Les Ailes. Depuis 2021, il enseigne en région lyonnaise, dans un environnement respectueux du rythme et des capacités de chacun."
                },
              ].map((prof) => (
                <div
                  key={prof.name}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* Photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={prof.img}
                      alt={prof.name}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  {/* Infos */}
                  <div className="p-6 flex flex-col space-y-4">
                    <h4 className="text-2xl font-semibold text-white">
                      {prof.name}
                    </h4>
                    <p className="text-sm font-light text-white/80">
                      {prof.role}
                    </p>
                    <p className="text-sm font-light text-white/90 leading-relaxed">
                      {prof.bio}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-white mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href={`mailto:${prof.email}`}
                          className="text-sm font-light text-white hover:underline"
                        >
                          {prof.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-white mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href={`tel:${prof.phone.replace(/\s/g, '')}`}
                          className="text-sm font-light text-white hover:underline"
                        >
                          {prof.phone}
                        </a>
                      </div>
                    </div>

                    {/* ✅ CORRECTION CRITIQUE : Remplacer <a href> par <Link> */}
                    {prof.name === 'Bernard Garnier' ? (
                      <Link href="/bernard" className={buttonClass}>
                        En savoir plus
                      </Link>
                    ) : (
                      <div className={`${buttonClass} opacity-50 cursor-not-allowed`}>
                        Bientôt disponible
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* L'approche "Les Ailes" */}
          <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 w-full mb-6">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold uppercase tracking-wide">
                L&apos;approche &quot;Les Ailes&quot;
              </h3>
              <div className="mt-3 h-px w-16 bg-white/30 mx-auto"></div>
            </div>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <p className="text-base font-light leading-relaxed">
                  Le yoga s&apos;adresse à l&apos;être dans sa globalité. Nos séances conviennent à tous, quel que soit votre niveau ou votre âge, pour retrouver vitalité, équilibre et harmonie dans votre quotidien.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <p className="text-base font-light leading-relaxed">
                  Les postures (asanas) pratiquées lors de nos cours permettent de cultiver harmonieusement force, souplesse, mobilité et équilibre. Nous portons une attention particulière à la respiration et à l&apos;écoute du corps.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <p className="text-base font-light leading-relaxed">
                  Notre enseignement s&apos;inscrit dans la tradition du Hatha Yoga selon l&apos;enseignement de Sri Mahesh, où la pratique est adaptée à chacun dans le respect de ses possibilités et de ses limites.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/notre-approche"
                className="mt-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium tracking-wide transition-colors block w-full"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}