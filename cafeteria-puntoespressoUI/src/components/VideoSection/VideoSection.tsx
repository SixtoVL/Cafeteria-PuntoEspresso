import React, { useState, useRef } from 'react';
import styles from './VideoSection.module.css';
import cafeVideo from '../../assets/Video.mp4';

type FilterType = 'Normal' | 'Sepia' | 'Grayscale' | 'Vintage';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Muted por defecto para autoplay sin bloqueo
  const [playbackRate, setPlaybackRate] = useState(1);
  const [activeFilter, setActiveFilter] = useState<FilterType>('Normal');

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Error al reproducir video:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSpeedChange = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackRate(speed);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFilter(e.target.value as FilterType);
  };

  // Mapear el filtro seleccionado a su clase CSS correspondiente
  const getFilterClass = () => {
    switch (activeFilter) {
      case 'Sepia': return styles.filterSepia;
      case 'Grayscale': return styles.filterGrayscale;
      case 'Vintage': return styles.filterVintage;
      default: return styles.filterNormal;
    }
  };

  return (
    <div className={styles.videoContainer}>
      <div>
        <h3 className={styles.title}>
          Preparación artesanal de nuestro espresso
        </h3>
        
      </div>

      {/* Contenedor de video con filtros aplicados */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={cafeVideo}
          className={`${styles.videoElement} ${getFilterClass()}`}
          loop
          muted={isMuted}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* Panel de control personalizado */}
      <div className={styles.controlsPanel}>
        {/* Controles de reproducción */}
        <div className={styles.playGroup}>
          <button
            onClick={togglePlay}
            className={styles.controlBtn}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                Pausar
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Reproducir
              </>
            )}
          </button>

          <button
            onClick={toggleMute}
            className={`${styles.controlBtn} ${styles.muteBtn}`}
          >
            {isMuted ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
                Activar Sonido
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                Silenciar
              </>
            )}
          </button>
        </div>

        {/* Control de filtros multimedia */}
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Efecto Visual (Filtro):</span>
          <select
            value={activeFilter}
            onChange={handleFilterChange}
            className={styles.filterSelect}
          >
            <option value="Normal">Normal (Original)</option>
            <option value="Sepia">Sepia (Cálido)</option>
            <option value="Grayscale">Blanco y Negro</option>
            <option value="Vintage">Vintage (Retro)</option>
          </select>
        </div>

        {/* Control de velocidad */}
        <div className={styles.speedGroup}>
          <span className={styles.speedLabel}>Velocidad:</span>
          {([0.5, 1.0, 1.5, 2.0] as const).map((speed) => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`${styles.speedBtn} ${playbackRate === speed ? styles.speedBtnActive : ""}`}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
