"use client"

import { useEffect, useRef, useState } from 'react';

interface ScrollVideoPlayerProps {
  videoSrc: string;
  width?: number;
  height?: number;
  className?: string;
}

const ScrollVideoPlayer = ({
  videoSrc,
  width = 1280,
  height = 720,
  className = '',
}: ScrollVideoPlayerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const [frames, setFrames] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [targetFrame, setTargetFrame] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // Détecter la taille de l'écran
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initialiser
    updateViewport();

    // Mettre à jour lors du redimensionnement
    window.addEventListener('resize', updateViewport);
    
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  // Extraction des frames
  useEffect(() => {
    const extractFrames = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('/api/extract-frames', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoPath: videoSrc }),
        });
        
        if (!response.ok) {
          throw new Error(`Erreur lors de l'extraction: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setFrames(data.frames);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        console.error('Erreur:', err);
      }
    };

    extractFrames();
  }, [videoSrc]);

  // Préchargement prioritaire du premier frame
  useEffect(() => {
    if (frames.length === 0) return;

    // Charger d'abord le premier frame
    const firstImg = new Image();
    firstImg.onload = () => {
      const images = [firstImg];
      setLoadedImages(images);
      setFirstFrameLoaded(true);
      
      // Dessiner le premier frame immédiatement
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
        }
      }
    };
    firstImg.src = frames[0];

  }, [frames]);

  // Préchargement des autres frames après le premier frame
  useEffect(() => {
    if (frames.length <= 1 || !firstFrameLoaded) return;

    const images = [...loadedImages]; // Commencer avec le premier frame déjà chargé
    let loadedCount = 1;

    const onImageLoad = () => {
      loadedCount++;
      const loadingProgress = (loadedCount / frames.length) * 100;
      setProgress(loadingProgress);
      
      // Actualiser progressivement les images chargées
      if (loadedCount % 5 === 0 || loadedCount === frames.length) {
        setLoadedImages([...images]);
      }
      
      if (loadedCount === frames.length) {
        setLoading(false);
      }
    };

    // Charger tous les autres frames (commence à 1 car le premier est déjà chargé)
    for (let i = 1; i < frames.length; i++) {
      const img = new Image();
      img.onload = onImageLoad;
      img.onerror = () => {
        console.error(`Erreur lors du chargement de l'image: ${frames[i]}`);
        onImageLoad();
      };
      img.src = frames[i];
      images[i] = img;
    }

    return () => {
      // Nettoyage
      for (let i = 1; i < images.length; i++) {
        if (images[i]) {
          images[i].onload = null;
          images[i].onerror = null;
        }
      }
    };
  }, [frames, firstFrameLoaded, loadedImages]);

  // Animation fluide
  useEffect(() => {
    if (!canvasRef.current || loadedImages.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Dessiner la frame actuelle
    const drawFrame = (frameIndex: number) => {
      if (!ctx || frameIndex < 0 || frameIndex >= loadedImages.length || !loadedImages[frameIndex]) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculer les dimensions pour couvrir tout l'écran (cover)
      const img = loadedImages[frameIndex];
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imgRatio > canvasRatio) {
        // Image plus large que le canvas - hauteur ajustée
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image plus haute que le canvas - largeur ajustée
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }
      
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };
    
    // Animation fluide entre les frames
    const animateToTargetFrame = () => {
      if (currentFrame === targetFrame) {
        animationRef.current = null;
        return;
      }
      
      // Calculer le prochain frame avec une interpolation douce
      const direction = targetFrame > currentFrame ? 1 : -1;
      const speed = Math.max(0.1, Math.abs(targetFrame - currentFrame) * 0.1);
      const nextFrame = currentFrame + direction * speed;
      
      // Vérifier si nous avons atteint ou dépassé la cible
      const hasReachedTarget = 
        (direction > 0 && nextFrame >= targetFrame) || 
        (direction < 0 && nextFrame <= targetFrame);
      
      // Mettre à jour le frame courant
      const newFrame = hasReachedTarget 
        ? targetFrame 
        : nextFrame;
      
      setCurrentFrame(newFrame);
      
      // Dessiner le frame actuel
      const frameIndex = Math.min(
        Math.max(Math.round(newFrame), 0),
        loadedImages.length - 1
      );
      
      drawFrame(frameIndex);
      
      // Continuer l'animation si nécessaire
      if (!hasReachedTarget) {
        animationRef.current = requestAnimationFrame(animateToTargetFrame);
      }
    };
    
    // Démarrer l'animation si nécessaire
    if (animationRef.current === null && currentFrame !== targetFrame) {
      animationRef.current = requestAnimationFrame(animateToTargetFrame);
    }
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [loadedImages, currentFrame, targetFrame]);

  // Observer le défilement - Branchement direct
  useEffect(() => {
    if (loadedImages.length === 0) return;

    // Fonction pour calculer la frame en fonction du défilement
    const handleScroll = () => {
      // Calcul simple : fraction de la page défilée
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight, 
        document.body.offsetHeight,
        document.documentElement.clientHeight, 
        document.documentElement.scrollHeight, 
        document.documentElement.offsetHeight
      ) - window.innerHeight;
      
      const scrollFraction = Math.max(0, Math.min(scrollTop / docHeight, 1));
      
      // Calculer l'index de frame correspondant
      const frameIndex = scrollFraction * (loadedImages.length - 1);
      
      // Mettre à jour la frame cible
      setTargetFrame(frameIndex);
    };
    
    // Appeler une fois pour initialiser
    handleScroll();
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadedImages]);

  return (
    <div 
      ref={containerRef}
      className={`scroll-video-player ${className}`}
      style={{ 
        // L'élément doit prendre de la place pour créer une zone de défilement
        height: '500vh', // 5x la hauteur de l'écran pour avoir suffisamment d'espace de défilement
        position: 'relative',
        width: '100%',
        zIndex: 0
      }}
    >
      {loading && (
        <div className="loading-indicator p-4 bg-black/50 rounded-lg text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col items-center">
            <div className="mb-2">Chargement des frames...</div>
            <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500"
                style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
              />
            </div>
            <div className="mt-1 text-xs">{Math.round(progress)}%</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="error-message p-4 bg-red-500/70 rounded-lg text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          Erreur: {error}
        </div>
      )}
      
      <canvas
        ref={canvasRef}
        width={viewport.width || width}
        height={viewport.height || height}
        className="video-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          opacity: firstFrameLoaded ? 1 : 0.3,
          transition: 'opacity 0.5s ease',
          zIndex: -1
        }}
      />
      
      {/* Indicateur de progression discret */}
      {!loading && (
        <div className="fixed bottom-4 left-0 right-0 mx-auto w-32 h-2 bg-white/20 rounded-full overflow-hidden z-40">
          <div 
            className="h-full bg-white/70"
            style={{ 
              width: `${(currentFrame / (loadedImages.length - 1)) * 100}%`,
              transition: 'width 0.1s ease-out'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollVideoPlayer;