import React from 'react';
import styles from './SpriteAnimation.module.css';
import coffeeSprite from '../../assets/coffee-sprite.svg';

export const SpriteAnimation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.statusIndicator}>
        <span className={styles.statusDot} />
        <span className={styles.statusText}>Abierto / Extrayendo en Vivo</span>
      </div>

      <div 
        className={styles.spriteViewer} 
        style={{ backgroundImage: `url(${coffeeSprite})` }}
        aria-label="Cafetera preparando espresso" 
      />

      <p className={styles.details}>
        Nuestra máquina La Marzocco está calibrada. Visítanos por tu espresso perfecto.
      </p>
      <span className={styles.schedule}>Lunes a Sábado — 8:00 AM a 9:00 PM</span>
    </div>
  );
};
