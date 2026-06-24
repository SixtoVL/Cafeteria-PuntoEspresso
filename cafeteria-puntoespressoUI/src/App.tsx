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
  const [showMetadata, setShowMetadata] = useState(false);
  const [studentName, setStudentName] = useState('Tu Nombre y Matrícula');

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
        {/* Hero Banner con fondo nítido y claro */}
        <section 
          className={styles.heroBanner}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Tarjeta de Vidrio Esmerilado (Glassmorphism) para máxima legibilidad y visualización del fondo */}
          <div className={styles.heroContentCard}>
            <h1 className={styles.heroTitle}>Sabor que inspira tus sentidos</h1>
            <p className={styles.heroSubtitle}>
              Granos seleccionados a mano, tostados artesanalmente en lotes pequeños y servidos en un ambiente diseñado para desconectarte del mundo.
            </p>
          </div>
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

      {/* BOTÓN FLOTANTE DISCRETO PARA EVALUACIÓN DOCENTE */}
      <button 
        onClick={() => setShowMetadata(!showMetadata)}
        className={styles.academicToggle}
        aria-label="Información del Examen"
        title="Panel del Evaluador"
      >
        i
      </button>

      {/* PANEL MODAL DE EXAMEN (Sólo visible al dar clic en el botón de información) */}
      {showMetadata && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Panel del Docente - Evaluación</h3>
              <button onClick={() => setShowMetadata(false)} className={styles.modalClose}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <p style={{ margin: '4px 0' }}><strong>Materia:</strong> Programación Multimedia</p>
              <p style={{ margin: '4px 0' }}><strong>Examen:</strong> Extraordinario 2026-2</p>
              <p style={{ margin: '4px 0' }}><strong>Catedrático:</strong> Ing. Erick Solórzano</p>
              <hr style={{ borderColor: 'rgba(140, 90, 60, 0.2)', margin: '12px 0' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Nombre del Alumno:</label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  style={{
                    backgroundColor: '#FFF8F0',
                    color: '#4B2E2B',
                    border: '1px solid #8C5A3C',
                    padding: '8px',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ marginTop: '14px', fontSize: '0.8rem', color: '#8C5A3C', fontStyle: 'italic', lineHeight: '1.4' }}>
                * Este panel permite ingresar tus datos académicos de sustentante para que el docente los valide en el código fuente y visualmente sin alterar la estética real de la cafetería.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
