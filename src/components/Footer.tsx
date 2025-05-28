// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`relative z-10 w-full text-center py-12 ${className}`}>
      <div className="bg-black/30 flex flex-col items-center text-center backdrop-blur-sm rounded-2xl mx-4 p-8 max-w-md mx-auto border border-white/10">
        
        {/* Titre principal */}
         <Image
                              src={"/les-ailes-logo.png"}
                              alt={"Logo les Ailes Hatha Yoge Lyon 6"}
                              width={800}
                              height={400}
                              className="w-1/3 h-1/3 object-cover mb-8"
                            />
        {/* Adresse */}
        <div className="text-white/90 mb-6 space-y-1">
          <p className="text-sm">13 rue Curie, 69006 Lyon</p>
          <p className="text-sm">Tél: 06 77 48 18 03</p>
        </div>
        
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm mb-6">
          <Link 
            href="/mentions-legales"
            className="hover:text-white/90 transition-colors underline"
          >
            Mentions légales
          </Link>
        </div>
        
        {/* Bouton Agence web */}
        <div className="text-center mb-6">
          <Link 
            href="/admlab"
            className="text-white/70 hover:text-white/90 text-xs bg-white/5 hover:bg-white/10 rounded-lg py-2 px-4 inline-block transition-colors border border-white/20"
          >
            Agence web ADMLAB
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-white/50 text-xs">
          <p>© {new Date().getFullYear()} Les Ailes - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};