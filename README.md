# Evidencia de Evaluación - Programación Multimedia

Este archivo sirve como guía de evaluación para el **Examen Extraordinario 2026-2** de la materia **Programación Multimedia**, impartida por el **Catedrático Ing. Erick Solórzano**. 

A continuación se detalla cómo el proyecto **Punto Espresso** cumple de forma íntegra y funcional con cada uno de los criterios exigidos en la escala de evaluación de la materia.

---

## 📊 Matriz de Cumplimiento de Requisitos

El proyecto está diseñado bajo una arquitectura web responsiva con **React 19, TypeScript y Vite**. A continuación se detalla el cumplimiento de cada rubro del examen:

| Concepto de Evaluación | Puntaje | Componentes Clave en el Código | Descripción del Cumplimiento |
| :--- | :---: | :--- | :--- |
| **Proyecto Funcional** | **4.0 pts** | `App.tsx`<br>`index.css`<br>`main.tsx` | El sitio web es completamente funcional, interactivo, y adapta su interfaz a dispositivos móviles y de escritorio. Cuenta con pantalla de carga inicial interactiva y navegación fluida por anclas, manteniendo una estética puramente comercial. |
| **Integración de Texto** | **1.0 pts** | `Menu.tsx`<br>`App.module.css` | Se utiliza una jerarquía tipográfica con fuentes premium de Google Fonts (*Playfair Display* para títulos y *Inter* para el cuerpo de texto). Incluye descripciones de la carta de café y una sección estructurada extensa de historia titulada **"El Origen de Punto Espresso"** que describe el tostado y abastecimiento de grano. |
| **Integración de Audio Digital** | **1.5 pts** | `AudioPlayer.tsx`<br>`ambiente.mp3` | Se implementó un reproductor musical lofi interactivo de fondo que lee el archivo de audio digital `ambiente.mp3`. No utiliza controles nativos del navegador; implementa una barra de progreso interactiva sincronizada, control del volumen por ganancia deslizante, reproducción en bucle y un **ecualizador gráfico animado** que reacciona visualmente cuando el audio se encuentra en reproducción. |
| **Imagen Digital Fija y en Movimiento** | **2.0 pts** | `Logo.tsx`<br>`BouncingLogo.tsx`<br>`SpriteAnimation.tsx`<br>`coffee-sprite.svg` | **Fija:** Logotipo oficial del proyecto en formato optimizado `logo.webp`. y taza en formato SVG.<br>**1ra Animación (Logo Rebotador):** Un minijuego donde el logotipo se desplaza de forma continua y rebota en los bordes de un área específica. Al ser clicado (capturado), la animación se pausa y revela un código promocional.<br>**2da Animación (Sprite Sheet):** Un indicador dinámico de extracción en vivo en la barra que utiliza un sprite sheet de 8 cuadros (`coffee-sprite.svg`) y una regla de animación CSS `@keyframes` con la propiedad `steps(8)` para recrear un movimiento infinito. |
| **Integración de Video** | **1.5 pts** | `VideoSection.tsx`<br>`Video.mp4` | Reproducción del video `Video.mp4` que muestra la preparación del café. El componente encapsula un reproductor interactivo con controles de reproducción de velocidad (0.5x, 1.0x, 1.5x, 2.0x) y un selector para aplicar **filtros de color por software** en tiempo real (Sepia, Blanco y Negro, Vintage, Normal). |
| **TOTAL** | **10.0 pts** | | **Criterio de Aprobación Mínimo: 6.0 puntos.** |

---

## 🔍 Detalle Técnico de la Implementación Multimedia

### 1. Proyecto Funcional (4 Puntos)
*   **Implementación:** Se inicializó mediante Vite + React y TypeScript, estructurando estilos modulares en CSS.
*   **Interactividad:** Pantalla de carga simulada de 3 segundos con progreso visual dinámico. Navegación fluida de anclaje que dirige al usuario a las secciones correspondientes sin recargas de página.
*   **Estructura y Maquetación:** Se diseñó una estructura SPA semántica y limpia en [App.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/App.tsx).

### 2. Integración de Texto (1 Punto)
*   **Implementación:** El contenido textual está estructurado jerárquicamente. 
*   **Cuerpo de Texto:** En el archivo [Menu.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/Menu/Menu.tsx#L94-L102), se integró el texto sobre la fundación de Punto Espresso. Se utilizó la variable `--serif` para acentuar títulos líricos y `--sans` en párrafos descriptivos y tarjetas del menú, lo que brinda una estética homogénea definida en [index.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/index.css#L3-L21).

### 3. Integración de Audio Digital (1.5 Puntos)
*   **Implementación:** El archivo [ambiente.mp3](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/ambiente.mp3) (Lofi Cafe Ambient) está cargado localmente.
*   **Interacción y API:** A través del componente [AudioPlayer.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/AudioPlayer/AudioPlayer.tsx), se accede al elemento `<audio>` mediante un `useRef` para controlar los métodos `.play()` y `.pause()`, escuchar el evento `onTimeUpdate` para desplazar el control deslizante de reproducción, y vincular un slider al atributo `.volume` (rango de 0 a 1).
*   **Visualizador:** Cinco columnas de ecualización en [AudioPlayer.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/AudioPlayer/AudioPlayer.module.css#L66-L140) cambian sus alturas a ritmos variables mediante animaciones de fotogramas clave (`scaleY`) solo cuando la música está activa.

### 4. Imagen Digital Fija y en Movimiento (2 Puntos)
*   **Imagen Fija:** El logotipo oficial en formato WebP [logo.webp](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/logo.webp) se renderiza a través del componente común [Logo.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/Logo/Logo.tsx) con bordes curvados en CSS.
*   **1ra Animación (Cuadro en movimiento continuo):** Ubicada en [BouncingLogo.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/BouncingLogo/BouncingLogo.tsx) y estilizada en [BouncingLogo.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/BouncingLogo/BouncingLogo.module.css#L22-L78). Mediante animaciones desfasadas horizontales (`bounceX`) y verticales (`bounceY`) combinadas, el logotipo rebota continuamente contra las paredes de su caja de arena. Si el usuario hace clic sobre él, el estado `couponWon` cambia a `true`, aplicando la propiedad `animation-play-state: paused` para simular su captura y otorgar una clave de descuento (`ESPRESSO15`).
*   **2da Animación (Sprite Sheet por Keyframes):** Ubicada en [SpriteAnimation.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/SpriteAnimation/SpriteAnimation.tsx) y estilizada en [SpriteAnimation.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/SpriteAnimation/SpriteAnimation.module.css#L37-L49). La animación utiliza el archivo SVG lineal de sprites [coffee-sprite.svg](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/public/coffee-sprite.svg) (que posee 8 cuadros de una cafetera vertiendo café). La regla de animación se ejecuta de forma infinita mediante la propiedad:
    ```css
    animation: playSprite 1.2s steps(8) infinite;
    ```
    Desplazando la posición del fondo de `0px` a `-800px` con fotogramas de saltos discretos (`steps`).

### 5. Integración de Video (1.5 Puntos)
*   **Implementación:** Se utiliza el video local [Video.mp4](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/Video.mp4) de preparación de espresso.
*   **Interfaz de Control Avanzada:** Implementada en [VideoSection.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/VideoSection/VideoSection.tsx) con:
    1.  **Play / Pause:** Control nativo de play/pause con iconos interactivos cambiantes.
    2.  **Mute Toggle:** Permite activar y desactivar el canal de audio del video.
    3.  **Selector de Velocidad:** Permite manipular el atributo `playbackRate` de la etiqueta HTML5 de video a valores de `0.5x` (cámara lenta), `1.0x` (normal), `1.5x` y `2.0x` (cámara rápida).
    4.  **Filtros CSS en Vivo:** Aplica estilos en línea mediante clases dinámicas definidas en [VideoSection.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/VideoSection/VideoSection.module.css#L42-L68):
        *   `filterSepia` (Efecto Sepia): `filter: sepia(0.85) contrast(0.95);`
        *   `filterGrayscale` (Blanco y Negro): `filter: grayscale(1) contrast(1.1);`
        *   `filterVintage` (Vintage): `filter: sepia(0.5) hue-rotate(-20deg) saturate(0.8) contrast(1.05);`
        *   `filterNormal` (Original).

---

## 🏃 Instrucciones de Ejecución

Para iniciar el servidor de desarrollo y validar el funcionamiento de los componentes:

1.  Asegúrate de estar en el directorio raíz del proyecto:
    ```bash
    cd D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI
    ```
2.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```
3.  Ejecuta el servidor de desarrollo de Vite:
    ```bash
    npm run dev
    ```
4.  Abre el navegador en la dirección proporcionada por la terminal (usualmente [http://localhost:5173](http://localhost:5173)).
