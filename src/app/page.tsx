"use client"

import { useState } from 'react';
import Image from "next/image";
import ScrollVideoPlayer from '@/components/ScrollVideoPlayer';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center text-white">
      {/* Vidéo interactive contrôlée par le défilement */}
      <ScrollVideoPlayer 
        videoSrc="/background-video.mp4" 
        width={1280} 
        height={720}
      />
      
      {/* En-tête - placé au-dessus du contenu principal pour être visible pendant le défilement */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-sm py-4">
        <div className="container mx-auto flex justify-center">
          <Image
            src="/lesailes.png"
            alt="Les Ailes"
            width={150}
            height={30}
            priority
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="w-full max-w-md mx-auto my-8 mt-24 z-20 relative">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-light mt-6 mb-2">Cours de YOGA</h1>
          <h2 className="text-xl font-light">13 rue Curie - 69006 Lyon</h2>
        </div>

        {/* Horaires */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 w-full mb-6">
          <h3 className="text-xl font-medium mb-4 text-center">Horaires</h3>
          
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-green-300">LUNDI</span>
            <div className="text-right">
              <div>18h20 à 19h35</div>
              <div>19h45 à 21h00</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-medium text-green-300">MERCREDI</span>
            <div className="text-right">
              <div>18h20 à 19h35</div>
              <div>19h45 à 21h00</div>
            </div>
          </div>
        </div>
        
        {/* Tarifs */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 w-full mb-6">
          <h3 className="text-xl font-medium mb-4 text-center">Tarifs</h3>
          
          <div className="flex justify-between mb-2">
            <span>1 cours par semaine</span>
            <span className="font-medium">395 €</span>
          </div>
          <div className="flex justify-between mb-3">
            <span>2 cours par semaine</span>
            <span className="font-medium">632 €</span>
          </div>
          <p className="text-sm italic">Paiement étalé possible</p>
          <p className="text-sm mt-1">Cours d'essai gratuit</p>
        </div>
        
        {/* Contact */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 w-full mb-6">
          <h3 className="text-xl font-medium mb-4 text-center">Contact</h3>
          
          <div className="mb-3">
            <h4 className="font-medium mb-1">Nathalie FAUCONNIER (mercredi)</h4>
            <a href="mailto:nathalyio@hotmail.com" className="block hover:underline">nathalyio@hotmail.com</a>
            <a href="tel:0677481803" className="block hover:underline">06 77 48 18 03</a>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Bernard GARNIER (lundi)</h4>
            <a href="mailto:garnierbd@gmail.com" className="block hover:underline">garnierbd@gmail.com</a>
            <a href="tel:0695311088" className="block hover:underline">06 95 31 10 88</a>
          </div>
        </div>
        
        {/* Notre approche */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 w-full mb-6">
          <h3 className="text-xl font-medium mb-4 text-center">Notre approche</h3>
          
          <p className="mb-2">Le yoga s'adresse à l'être dans sa globalité. Nos séances conviennent à tous pour retrouver vitalité et harmonie.</p>
          
          {showMore && (
            <p>Les postures simples permettent de cultiver force, souplesse, mobilité et équilibre.</p>
          )}
          
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="mt-2 text-green-300 hover:underline"
          >
            {showMore ? "Voir moins" : "En savoir plus"}
          </button>
        </div>
        
        {/* Boutons */}
        <div className="flex gap-4 flex-col sm:flex-row w-full mb-8">
          <a
            className="flex-1 rounded-full bg-white/20 py-3 text-center hover:bg-white/30 transition"
            href="mailto:nathalyio@hotmail.com"
          >
            Réserver un cours
          </a>
          <a
            className="flex-1 rounded-full bg-white/20 py-3 text-center hover:bg-white/30 transition"
            href="tel:0677481803"
          >
            Nous appeler
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-sm opacity-80 py-8 bg-black/40">
        <p>Professeurs formés par la Fédération Française de Hatha Yoga</p>
        <p className="mt-1">selon l'enseignement de Sri Mahesh</p>
      </footer>
    </div>
  );
}