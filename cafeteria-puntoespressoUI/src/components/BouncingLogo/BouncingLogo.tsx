import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import styles from './BouncingLogo.module.css';

export const BouncingLogo: React.FC = () => {
  const [couponWon, setCouponWon] = useState(false);

  const handleCapture = () => {
    if (!couponWon) {
      setCouponWon(true);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>🎁 Captura el Descuento</h3>
      <p className={styles.description}>
        ¡Pon a prueba tus reflejos! Haz clic sobre el emblema flotante de Punto Espresso para capturar tu cupón de cortesía y obtener un 15% de descuento en tu consumo.
      </p>
      
      <div className={styles.sandbox}>
        <div 
          onClick={handleCapture}
          className={`${styles.logoWrapper} ${couponWon ? styles.paused : ''}`}
          style={{ pointerEvents: couponWon ? 'none' : 'auto' }}
        >
          <Logo size={70} />
        </div>
      </div>

      {couponWon ? (
        <div className={styles.promoReward}>
          <span style={{ fontWeight: 'bold' }}>🎉 ¡Logotipo Atrapado! Tu cupón es:</span>
          <span className={styles.promoCode}>ESPRESSO15</span>
          <span style={{ fontSize: '0.8rem', opacity: 0.85 }}>Muestra este código en caja para obtener un 15% de descuento.</span>
          <button onClick={() => setCouponWon(false)} className={styles.resetBtn}>
            Volver a Jugar
          </button>
        </div>
      ) : (
        <p style={{ fontSize: '0.8rem', color: '#8C5A3C', marginTop: '12px', fontStyle: 'italic' }}>
          
        </p>
      )}
    </div>
  );
};
