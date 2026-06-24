import React, { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';
import cafeAudio from '../../assets/ambiente.mp3';

export const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Interacción requerida para reproducir audio:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.playerCard}>
      {/* Elemento de Audio Oculto */}
      <audio
        ref={audioRef}
        src={cafeAudio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        loop
      />

      <div className={styles.header}>
        <div className={styles.thumbnail}>☕</div>
        <div className={styles.trackInfo}>
          <span className={styles.trackTitle}>Ambiente de Cafetería</span>
          <span className={styles.trackArtist}>Punto Radio</span>
        </div>
        {/* Ecualizador Gráfico */}
        <div className={`${styles.equalizer} ${isPlaying ? styles.isPlaying : ''}`}>
          <div className={styles.eqBar}></div>
          <div className={styles.eqBar}></div>
          <div className={styles.eqBar}></div>
          <div className={styles.eqBar}></div>
          <div className={styles.eqBar}></div>
        </div>
      </div>

      {/* Barra de Progreso */}
      <div className={styles.progressContainer}>
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className={styles.progressBar}
        />
        <div className={styles.timeInfo}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Botonera de Control */}
      <div className={styles.controls}>
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`${styles.controlBtn} ${styles.playPauseBtn}`}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {isPlaying ? (
            // Icono Pause
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            // Icono Play
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '2px' }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Control de Volumen */}
      <div className={styles.volumeContainer}>
        {/* Icono Bocina */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className={styles.volumeBar}
        />
      </div>
    </div>
  );
};
