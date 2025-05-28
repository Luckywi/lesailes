"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AdmClient() {
  return (
    <>
      {/* Fond 3D */}

      
      <main className="relative z-10 min-h-screen flex flex-col text-white">
        <motion.div 
          className="w-full py-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-md mx-auto mb-8">
            {/* Bouton retour */}
            <div className="mb-6">
              <Link 
                href="/" 
                className="inline-flex items-center text-white hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
          
          <div className="w-full max-w-md mx-auto">
            {/* Card principale pour le backlink */}
            <motion.div
              className="bg-black/25 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/adm-logo.webp" 
                    alt="ADMLAB Logo" 
                    width={160}
                    height={64}
                    priority
                    className="h-16 w-auto"
                  />
                </div>
                
                <p className="text-white text-sm mb-5">
                  Agence digitale spécialisée en sites web optimisés SEO, applications mobiles et solutions métiers sur mesure.
                </p>
                
                <p className="text-white text-sm mb-5">
                  <strong>Sites vitrines professionnels à partir de 30€/mois</strong>
                </p>

                <motion.div
                  className="bg-black/20 backdrop-blur-sm rounded-xl p-5 mb-5 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex justify-center mb-4">
                  <h2 className="text-2xl font-medium text-white text-center">Les Ailes</h2></div>
                  
                  <p className="text-white text-sm">
                    L&apos;association Les Ailes a choisi l&apos;agence web ADMLAB pour développer sa présence en ligne. 
                    Cette collaboration a permis de créer un site vitrine professionnel, d&apos;améliorer le référencement SEO 
                    et d&apos;optimiser le tunnel de prise de contact pour les clients intéressés par les cours de yoga.
                  </p>
                </motion.div>
                
                <div className="flex justify-center">
                  <motion.a
                    href="https://admlab.fr"
                    target="_blank"
                    rel="follow"
                    className="border border-white rounded-xl py-3 px-8 text-white text-center hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Découvrir ADMLAB
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Réalisations ADMLAB */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-medium text-white mb-6 text-center">
                  <span className="inline-block border-b-2 border-white/30 pb-1">Réalisations ADMLAB</span>
                </h2>
                
                {/* Réalisation Franck Lebeurre */}
                <div className="mb-6">
                  <div className="w-full h-48 overflow-hidden rounded-xl mb-5 border border-white/10">
                    <iframe 
                      src="https://www.francklebeurre-expertise.fr/" 
                      title="Franck Lebeurre - Expert Comptable"
                      style={{ 
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        pointerEvents: 'none'
                      }}
                    ></iframe>
                  </div>
                  
                  <h3 className="text-white text-lg font-medium mb-3 text-center">
                    Cabinet Franck Lebeurre Expert-Comptable
                  </h3>
                  
                  <p className="text-white text-sm mb-5 text-center">
                    Expert comptable spécialisé en professions libérales.<br />
                    Site vitrine avec prise de rendez-vous intégrée.
                  </p>
      
                  <div className="flex justify-center">
                    <motion.a
                      href="https://www.francklebeurre-expertise.fr/"
                      target="_blank"
                      rel="follow"
                      className="border border-white rounded-xl py-2 px-6 text-white text-sm hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visiter le site
                    </motion.a>
                  </div>
                </div>

                   {/* Réalisation Le Balzac */}
                <div className="mb-6">
                  <div className="w-full h-48 overflow-hidden rounded-xl mb-5 border border-white/10">
                    <iframe 
                      src="https://www.lebalzac-coiffure-decines.fr/" 
                      title="Le Balzac - Salon de coiffure"
                      style={{ 
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        pointerEvents: 'none'
                      }}
                    ></iframe>
                  </div>
                  
                  <h3 className="text-white text-lg font-medium mb-3 text-center">
                    Le Balzac - Salon de coiffure
                  </h3>
                  
                   <p className="text-white text-sm mb-5 text-center">
                    Salon de coiffure moderne à Décines-Charpieux.<br />
                    Site de réservation avec paiement intégré et application mobile iOS pour la gestion admin des RDV.
                  </p>
      
                  <div className="flex justify-center">
                    <motion.a
                      href="https://www.lebalzac-coiffure-decines.fr/"
                      target="_blank"
                      rel="follow"
                      className="border border-white rounded-xl py-2 px-6 text-white text-sm hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visiter le site
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
}