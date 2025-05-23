"use client"

import { useEffect, useRef, useState } from 'react';

interface ScrollVideoPlayerProps {
  videoSrc: string;
  width?: number;
  height?: number;
  className?: string;
  frameCount?: number;
}

const ScrollVideoPlayer = ({
  videoSrc,
  width = 1280,
  height = 720,
  className = '',
  frameCount = 240, // Optimisé pour 240 frames
}: ScrollVideoPlayerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastScrollTime = useRef(0);
  
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [targetFrame, setTargetFrame] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // Extraire le nom de base de la vidéo pour construire les chemins de frames
  const videoName = videoSrc.split('/').pop()?.split('.')[0] || 'background-video';

  // Détecter la taille de l'écran
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  // Charger les frames pré-générées avec optimisation
  useEffect(() => {
    const framePaths = Array.from({ length: frameCount }, (_, i) => {
      const frameNumber = String(i + 1).padStart(4, '0');
      return `/frames/${videoName}/frame-${frameNumber}.jpg`;
    });

    // Précharger la première frame
    const firstImg = new Image();
    firstImg.onload = () => {
      const images = [firstImg];
      setLoadedImages(images);
      setFirstFrameLoaded(true);
      
      // Dessiner immédiatement la première frame
      if (canvasRef.current) {
        drawFrame(0, [firstImg], canvasRef.current);
      }

      // Charger les autres frames par lots pour éviter de surcharger le navigateur
      let loadedCount = 1;
      const restImages = Array(frameCount - 1).fill(null);
      const batchSize = 10; // Charger par lots de 10

      const loadBatch = (startIndex: number) => {
        const endIndex = Math.min(startIndex + batchSize, frameCount);
        
        for (let i = startIndex; i < endIndex; i++) {
          if (i === 0) continue; // Déjà chargée
          
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            const loadingProgress = (loadedCount / frameCount) * 100;
            setProgress(loadingProgress);
            
            // Mettre à jour le tableau d'images
            restImages[i - 1] = img;
            
            // Mettre à jour l'état toutes les 5 images
            if (loadedCount % 5 === 0 || loadedCount === frameCount) {
              setLoadedImages([firstImg, ...restImages.filter(Boolean)]);
            }
            
            if (loadedCount === frameCount) {
              setLoading(false);
            }
          };
          
          img.onerror = () => {
            console.error(`Erreur lors du chargement: ${framePaths[i]}`);
            loadedCount++;
            if (loadedCount === frameCount) {
              setLoading(false);
            }
          };
          
          img.src = framePaths[i];
        }
        
        // Charger le lot suivant après un délai
        if (endIndex < frameCount) {
          setTimeout(() => loadBatch(endIndex), 50);
        }
      };
      
      // Commencer le chargement par lots
      loadBatch(1);
    };
    
    firstImg.onerror = () => {
      console.error(`Erreur lors du chargement de la première image: ${framePaths[0]}`);
      setLoading(false);
    };
    
    firstImg.src = framePaths[0];
    
  }, [videoName, frameCount]);

  // Fonction optimisée pour dessiner les frames
  const drawFrame = (frameIndex: number, images: HTMLImageElement[], canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx || frameIndex < 0 || frameIndex >= images.length || !images[frameIndex]) return;
    
    const img = images[frameIndex];
    if (!img.complete) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculer les dimensions pour couvrir tout l'écran (cover)
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }
    
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Animation fluide optimisée
  useEffect(() => {
    if (!canvasRef.current || loadedImages.length === 0) return;
    
    const canvas = canvasRef.current;
    
    const animateToTargetFrame = () => {
      if (Math.abs(currentFrame - targetFrame) < 0.1) {
        setCurrentFrame(targetFrame);
        animationRef.current = null;
        return;
      }
      
      // Interpolation plus fluide
      const direction = targetFrame > currentFrame ? 1 : -1;
      const distance = Math.abs(targetFrame - currentFrame);
      const speed = Math.max(0.3, distance * 0.2); // Vitesse améliorée
      const nextFrame = currentFrame + direction * speed;
      
      const hasReachedTarget = 
        (direction > 0 && nextFrame >= targetFrame) || 
        (direction < 0 && nextFrame <= targetFrame);
      
      const newFrame = hasReachedTarget ? targetFrame : nextFrame;
      setCurrentFrame(newFrame);
      
      // Dessiner la frame
      const frameIndex = Math.min(
        Math.max(Math.round(newFrame), 0),
        loadedImages.length - 1
      );
      
      drawFrame(frameIndex, loadedImages, canvas);
      
      if (!hasReachedTarget) {
        animationRef.current = requestAnimationFrame(animateToTargetFrame);
      }
    };
    
    if (animationRef.current === null && Math.abs(currentFrame - targetFrame) > 0.1) {
      animationRef.current = requestAnimationFrame(animateToTargetFrame);
    }
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [loadedImages, currentFrame, targetFrame]);

  // Observer le défilement optimisé
  useEffect(() => {
    if (loadedImages.length === 0) return;

    const handleScroll = () => {
      // Limitation de la fréquence à 60fps
      const now = performance.now();
      if (now - lastScrollTime.current < 16) return;
      lastScrollTime.current = now;
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.body.scrollHeight, 
        document.body.offsetHeight,
        document.documentElement.clientHeight, 
        document.documentElement.scrollHeight, 
        document.documentElement.offsetHeight
      ) - window.innerHeight;
      
      // Calculer la fraction de défilement
      const scrollFraction = Math.max(0, Math.min(scrollTop / docHeight, 1));
      
      // Mapper la fraction de défilement aux frames (0 à frameCount-1)
      // Frame 1 (index 0) au début, frame 240 (index 239) à la fin
      let frameIndex = scrollFraction * (frameCount - 1);
      
      // S'assurer que la frame reste dans les limites
      frameIndex = Math.max(0, Math.min(frameIndex, frameCount - 1));
      
      // Si on a atteint la dernière frame et qu'on continue à scroller,
      // maintenir la dernière frame
      if (scrollFraction >= 1) {
        frameIndex = frameCount - 1;
      }
      
      setTargetFrame(frameIndex);
    };
    
    // Initialiser avec la première frame
    handleScroll();
    
    // Ajouter l'écouteur avec throttling
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadedImages, frameCount]);

  return (
    <div 
      ref={containerRef}
      className={`scroll-video-player ${className}`}
      style={{ 
        height: '500vh', // Hauteur pour permettre le défilement
        position: 'relative',
        width: '100%',
        zIndex: 0
      }}
    >
      {loading && (
        <div className="loading-indicator p-4 bg-black/50 rounded-lg text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col items-center">
            <div className="mb-2">Chargement des frames... ({Math.round(progress)}%)</div>
            <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-1 text-xs">{loadedImages.length}/{frameCount} frames</div>
          </div>
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
          zIndex: -1,
          filter: 'brightness(80%)'
        }}
      />
      
      {/* Indicateur de progression amélioré */}
      {!loading && loadedImages.length > 0 && (
        <div className="fixed bottom-4 left-0 right-0 mx-auto w-48 h-2 bg-white/20 rounded-full overflow-hidden z-40">
          <div 
            className="h-full bg-white/70 transition-all duration-100"
            style={{ 
              width: `${(currentFrame / (frameCount - 1)) * 100}%`
            }}
          />
          <div className="absolute -top-6 left-0 right-0 text-center text-xs text-white/70">
            Frame {Math.round(currentFrame) + 1}/{frameCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollVideoPlayer;