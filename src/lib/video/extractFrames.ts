import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import util from 'util';

const execPromise = util.promisify(exec);

interface ExtractFramesOptions {
  videoPath: string;      // Chemin vers la vidéo source
  outputDir: string;      // Dossier de sortie pour les frames
  frameRate?: number;     // Nombre de frames à extraire par seconde (optionnel)
  width?: number;         // Largeur de sortie (optionnel)
  height?: number;        // Hauteur de sortie (optionnel)
}

export async function extractFrames({
  videoPath,
  outputDir,
  frameRate = 12,         // 12 frames par seconde par défaut (moins de frames pour plus de performance)
  width = 1280,           // 1280px de largeur par défaut
  height = 720            // 720px de hauteur par défaut
}: ExtractFramesOptions): Promise<string[]> {
  console.log(`Début de l'extraction des frames - Vidéo: ${videoPath}`);
  
  // Vérifier que la vidéo existe
  if (!fs.existsSync(videoPath)) {
    throw new Error(`Vidéo introuvable: ${videoPath}`);
  }
  
  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    console.log(`Création du dossier de sortie: ${outputDir}`);
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Récupérer les informations de la vidéo
    console.log(`Récupération des informations de la vidéo...`);
    const { stdout: videoInfo } = await execPromise(`ffprobe -v error -select_streams v:0 -show_entries stream=duration -of default=noprint_wrappers=1:nokey=1 "${videoPath}"`);
    const duration = parseFloat(videoInfo.trim());

    console.log(`Vidéo trouvée, durée: ${duration}s`);

    // Vérifier si des frames existent déjà
    const existingFiles = fs.readdirSync(outputDir);
    const existingFrames = existingFiles.filter(file => file.startsWith('frame-') && file.endsWith('.jpg'));
    
    if (existingFrames.length > 0) {
      console.log(`${existingFrames.length} frames déjà extraites, utilisation des frames existantes`);
      
      // Retourner les frames existantes
      return existingFrames
        .sort((a, b) => {
          const numA = parseInt(a.replace('frame-', '').replace('.jpg', ''));
          const numB = parseInt(b.replace('frame-', '').replace('.jpg', ''));
          return numA - numB;
        })
        .map(file => path.join(outputDir, file));
    }

    // Extraire les frames avec FFmpeg
    console.log(`Extraction des frames avec FFmpeg (fps=${frameRate}, résolution=${width}x${height})...`);
    await execPromise(
      `ffmpeg -i "${videoPath}" -vf "fps=${frameRate},scale=${width}:${height}" -q:v 1 "${path.join(outputDir, 'frame-%04d.jpg')}"`
    );

    // Lister les frames extraites
    const files = fs.readdirSync(outputDir)
      .filter(file => file.startsWith('frame-') && file.endsWith('.jpg'))
      .sort((a, b) => {
        // Trier numériquement les frames (frame-0001.jpg, frame-0002.jpg, etc.)
        const numA = parseInt(a.replace('frame-', '').replace('.jpg', ''));
        const numB = parseInt(b.replace('frame-', '').replace('.jpg', ''));
        return numA - numB;
      })
      .map(file => path.join(outputDir, file));

    console.log(`Extraction terminée: ${files.length} frames extraites`);
    
    return files;
  } catch (error) {
    console.error('Erreur lors de l\'extraction des frames:', error);
    throw error;
  }
}