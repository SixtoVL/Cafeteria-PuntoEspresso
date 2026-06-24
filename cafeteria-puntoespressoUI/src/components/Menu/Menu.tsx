import React from 'react';
import styles from './Menu.module.css';
import { Logo } from '../Logo/Logo';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  tags: string[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Espresso Intenso',
    price: '$35.00',
    description: 'Una extracción pura y concentrada de granos seleccionados de altura (Coatepec), con notas de chocolate amargo y avellana tostada.',
    tags: ['Clásico', 'Caliente'],
  },
  {
    id: 2,
    name: 'Capuchino Terciopelo',
    price: '$48.00',
    description: 'Taza equilibrada de espresso con leche cremada al vapor en textura micro-espesa, espolvoreado con cacao orgánico de Tabasco.',
    tags: ['Crema', 'Caliente'],
  },
  {
    id: 3,
    name: 'Caramel Macchiato Frío',
    price: '$55.00',
    description: 'Capas de leche fría, espresso premium extraído en frío, y un hilo generoso de caramelo artesanal elaborado en casa.',
    tags: ['Dulce', 'Frío'],
  },
  {
    id: 4,
    name: 'Flat White Australiano',
    price: '$50.00',
    description: 'Dos shots de ristretto con una fina capa de leche emulsionada, logrando un balance perfecto de cafeína y suavidad láctea.',
    tags: ['Fuerte', 'Caliente'],
  },
];

export const Menu: React.FC = () => {
  return (
    <section className={styles.menuSection}>
      <div className={styles.menuLogoContainer}>
        <Logo size={120} className={styles.menuLogo} />
      </div>
      {/* Texto de Introducción */}
      <div className={styles.introText}>
        <span className={styles.subtitle}>Especialidades de la Casa</span>
        <h2 className={styles.title}>Nuestra Carta de Café</h2>
        <p className={styles.description}>
          Cada taza en <strong>Punto Espresso</strong> es una obra de arte efímera. Seleccionamos granos con comercio justo y tostado medio artesanal para preservar los aceites y aromas naturales.
        </p>
      </div>

      {/* Grid de Productos */}
      <div className={styles.grid}>
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className={styles.card}>
            <div>
              <div className={styles.cardHeader}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <span className={styles.itemPrice}>{item.price}</span>
              </div>
              <p className={styles.itemDetails}>{item.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tags}>
                {item.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className={styles.orderBtn} aria-label={`Pedir ${item.name}`}>
                Pedir
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.menuDivider}>
        <span className={styles.dividerLine}></span>
        <Logo size={50} className={styles.dividerLogo} />
        <span className={styles.dividerLine}></span>
      </div>

      {/* Renglón vacío para espaciado */}
      {/* Sección de Historia (Integración de texto estructurado extenso) */}
      <div className={styles.historySection}>
        <h3 className={styles.historyTitle}>El Origen de Punto Espresso</h3>
        <p className={styles.historyText}>
          Fundado en 2026 bajo el compromiso de crear un espacio donde la acústica y el aroma convivan en perfecta armonía, <strong>Punto Espresso</strong> nació de la pasión por el buen café. Viajamos directamente a las fincas cafetaleras del sur del país, colaborando de la mano con familias productoras para traer lotes limitados de microlotes de alta especialidad.
        </p>
        <p className={styles.historyText}>
          El tostado se realiza en pequeños lotes semanales dentro de nuestro propio taller, ajustando los perfiles de temperatura para resaltar la acidez cítrica en los granos lavados y la dulzura frutal en los procesos naturales (mieles). Nos enorgullece ser un punto de encuentro multimedia, donde la buena música, las animaciones sutiles y la calidez humana te acompañan en cada sorbo.
        </p>
      </div>
    </section>
  );
};
