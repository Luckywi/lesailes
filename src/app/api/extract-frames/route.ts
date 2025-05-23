// src/app/api/extract-frames/route.ts
import { NextResponse } from 'next/server';
import { extractFrames } from '@/lib/video/extractFrames';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    // Récupérer les données de la requête
    const data = await request.json();
    const { videoPath } = data;
    
    if (!videoPath) {
      return NextResponse.json(
        { error: 'Le chemin de la vidéo est requis' },
        { status: 400 }
      );
    }

    // ATTENTION: La vidéo doit être dans le dossier public
    // Construire le chemin absolu vers la vidéo
    const cleanVideoPath = videoPath.startsWith('/') ? videoPath.substring(1) : videoPath;
    const absoluteVideoPath = path.join(process.cwd(), 'public', cleanVideoPath);
    
    console.log(`Chemin recherché: ${absoluteVideoPath}`);
    
    // Vérifier si la vidéo existe
    if (!fs.existsSync(absoluteVideoPath)) {
      console.error(`Vidéo introuvable: ${absoluteVideoPath}`);
      
      // Liste des fichiers dans le dossier public pour déboguer
      console.log('Contenu du dossier public:');
      const publicFiles = fs.readdirSync(path.join(process.cwd(), 'public'));
      console.log(publicFiles);
      
      return NextResponse.json(
        { error: `Vidéo introuvable au chemin: ${videoPath}` },
        { status: 404 }
      );
    }
    
    // Dossier de sortie pour les frames (dans le dossier public)
    const videoName = path.basename(videoPath, path.extname(videoPath));
    const outputDir = path.join(process.cwd(), 'public', 'frames', videoName);
    
    console.log(`Dossier de sortie: ${outputDir}`);
    
    // Créer le dossier de sortie s'il n'existe pas
    if (!fs.existsSync(path.dirname(outputDir))) {
      fs.mkdirSync(path.dirname(outputDir), { recursive: true });
    }
    
    // Extraire les frames
    const frames = await extractFrames({
      videoPath: absoluteVideoPath,
      outputDir,
      frameRate: 48,
    });
    
    // Convertir les chemins absolus en chemins relatifs pour le client
    const relativeFrames = frames.map(frame => {
      const relativePath = path.relative(
        path.join(process.cwd(), 'public'),
        frame
      );
      return '/' + relativePath.replace(/\\/g, '/');
    });

    return NextResponse.json({ frames: relativeFrames });
  } catch (error) {
    console.error('Erreur détaillée lors de l\'extraction des frames:', error);
    
    // Renvoyer un message d'erreur plus détaillé
    return NextResponse.json(
      { error: `Erreur lors de l'extraction: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}