import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Logo } from './components/Logo/Logo';
import { BouncingLogo } from './components/BouncingLogo/BouncingLogo';
import { SpriteAnimation } from './components/SpriteAnimation/SpriteAnimation';
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer';
import { VideoSection } from './components/VideoSection/VideoSection';
import { Menu } from './components/Menu/Menu';
import { Loader } from './components/Loader/Loader';
import heroBg from './assets/granoycafe.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos simulando carga
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.appContainer}>
      {/* Cabecera / Navbar */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.brand}>
            <Logo size={65} />
            <div className={styles.brandText}>
              <span className={styles.brandName}>Punto Espresso</span>
              <span className={styles.brandTagline}>Café de Especialidad</span>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#menu" className={styles.navLink}>Menú</a>
            <a href="#video" className={styles.navLink}>Nuestra Esencia</a>
            <a href="#radio" className={styles.navLink}>Punto Radio</a>
            <a href="#experiencia" className={styles.navLink}>Experiencias</a>
          </nav>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className={styles.main}>
        {/* Banner de Imagen del Hero */}
        <section 
          className={styles.heroImage}
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Caja de Texto del Hero debajo de la imagen */}
        <section className={styles.heroTextSection}>
          <h1 className={styles.heroTitle}>Sabor que inspira tus sentidos</h1>
          <p className={styles.heroSubtitle}>
            Granos seleccionados a mano, tostados artesanalmente en lotes pequeños y servidos en un ambiente diseñado para desconectarte del mundo.
          </p>
        </section>

        {/* Sección de Menú y Estado de Barra en Vivo */}
        <div className={styles.menuLayout}>
          <div style={{ flex: 1 }}>
            <section id="menu">
              <Menu />
            </section>
          </div>

          {/* Lateral de Estado en Vivo (Sprite Animation) y Radio del Café */}
          <aside className={styles.sidebar}>
            {/* Indicador de barra en vivo (Sprite) */}
            <div className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>Nuestra Barra</h4>
              <SpriteAnimation />
            </div>

            {/* Ambientación (Audio Player) */}
            <div id="radio" className={styles.sidebarSection}>
              <h4 className={styles.sidebarTitle}>Punto Radio</h4>
              <p style={{ fontSize: '0.85rem', color: '#8C5A3C', margin: '0 0 12px 0', textAlign: 'left', lineHeight: '1.4' }}>
                Sintoniza nuestra estación lofi exclusiva mientras exploras el menú.
              </p>
              <AudioPlayer />
            </div>
          </aside>
        </div>

        {/* Sección de Video */}
        <section id="video" className={styles.videoSectionWrapper}>
          <VideoSection />
        </section>

        {/* Experiencia Interactiva (Bouncing Logo como minijuego de descuento) */}
        <section id="experiencia" style={{ maxWidth: '800px', margin: '0 auto 20px auto', width: '100%' }}>
          <BouncingLogo />
        </section>
      </main>

      {/* Pie de Página */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Logo size={90} />
          <p className={styles.footerText}>
            © 2026 Punto Espresso. Elaborado con pasión por el café premium.
          </p>
        </div>
      </footer>


    </div>
  );
}

export default App;
