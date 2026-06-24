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
| **Imagen Digital Fija y en Movimiento** | **2.0 pts** | `Logo.tsx`<br>`BouncingLogo.tsx`<br>`SpriteAnimation.tsx`<br>`coffee-sprite.svg` | **Fija:** Logotipo oficial en formato `logo.webp`. y taza en formato SVG.<br>**1ra Animación (Logo Rebotador):** Un logotipo que se desplaza continuamente y rebota en los bordes de un área específica de la pantalla (caja de arena). Al hacer clic en él, se pausa y revela un cupón promocional.<br>**2da Animación (Sprite Sheet):** Un indicador dinámico de extracción en vivo que utiliza un sprite sheet de 8 cuadros (`coffee-sprite.svg`) y una regla de animación CSS `@keyframes` con la propiedad `steps(8)` para recrear un movimiento infinito. |
| **Integración de Video** | **1.5 pts** | `VideoSection.tsx`<br>`Video.mp4`<br>`logo.webp`<br>`granoycafe.jpg` | Reproducción del video local. Incluye una **portada premium personalizada (overlay)** con el logo sobre una imagen de fondo con desenfoque de cristal (glassmorphism), control interactivo de volumen deslizante, botón para reiniciar el video al segundo `0`, selección de velocidad (0.5x a 2.0x) y aplicación de **filtros visuales en tiempo real** (Sepia, Blanco y Negro, Vintage, Normal). |
| **TOTAL** | **10.0 pts** | | **Criterio de Aprobación Mínimo: 6.0 puntos.** |

---

## Detalle Técnico de la Implementación Multimedia

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
*   **Desarrollo Propio de Recursos:** Todas las imágenes fijas, vectoriales y animadas fueron diseñadas/estructuradas específicamente para el proyecto. El logotipo oficial en formato WebP ([logo.webp](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/logo.webp)) se renderiza a través del componente común [Logo.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/Logo/Logo.tsx) aplicando estilos personalizados de sombreado y redondeo.
*   **1ra Animación (Movimiento continuo en área específica):** Implementada en el componente [BouncingLogo.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/BouncingLogo/BouncingLogo.tsx) y estilizada en [BouncingLogo.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/BouncingLogo/BouncingLogo.module.css#L22-L78). Esta animación simula un cuadro de rebote continuo (tipo salvapantallas de DVD) en un contenedor delimitado de la pantalla. Combina dos traslaciones `@keyframes` desfasadas en los ejes X (`bounceX`) e Y (`bounceY`) para lograr un movimiento oblicuo infinito por los bordes del área del contenedor. Adicionalmente, cuenta con un manejador interactivo: al hacer clic sobre el logotipo en movimiento, este se pausa (`animation-play-state: paused`) y premia al usuario con un cupón de descuento (`ESPRESSO15`).
*   **2da Animación (Imagen de tipo Sprite con movimiento infinito):** Implementada en el componente [SpriteAnimation.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/SpriteAnimation/SpriteAnimation.tsx) y estilizada en [SpriteAnimation.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/SpriteAnimation/SpriteAnimation.module.css#L37-L49). Consiste en un indicador interactivo de "extracción de café en vivo". Utiliza un archivo de sprite vectorizado de desarrollo propio en formato SVG ([coffee-sprite.svg](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/public/coffee-sprite.svg)), el cual agrupa linealmente 8 cuadros que ilustran la caída y llenado progresivo de café. Para lograr una animación fluida e infinita en bucle, se desplaza el `background-position` del elemento desde `0px` hasta `-800px` a través de la siguiente regla CSS y fotogramas clave `@keyframes`:
    ```css
    animation: playSprite 1.2s steps(8) infinite;
    ```
    El uso de `steps(8)` fragmenta el desplazamiento continuo en 8 saltos discretos equivalentes a cada uno de los fotogramas del sprite, logrando un bucle cinético infinito que simula animación tradicional a mano.

### 5. Integración de Video (1.5 Puntos)
*   **Implementación:** Se utiliza el video local [Video.mp4](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/Video.mp4) de preparación de espresso.
*   **Interfaz de Control Avanzada y Portada:** Implementada en [VideoSection.tsx](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/VideoSection/VideoSection.tsx) con las siguientes mejoras y controles personalizados:
    1.  **Portada de Video Personalizada (Overlay)**: Se diseñó una portada premium que aparece antes de que inicie el video. Integra el logo de la cafetería ([logo.webp](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/logo.webp)) con animación de levitación infinita, sobre una imagen de fondo de granos de café ([granoycafe.jpg](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/assets/granoycafe.jpg)) bajo un filtro de desenfoque de cristal (glassmorphism) y un botón de Play de alta fidelidad.
    2.  **Play / Pause:** Alterna la reproducción con iconos dinámicos interactivos y desvanece suavemente la portada del video.
    3.  **Botón de Reiniciar**: Permite reiniciar el video al segundo `0` de forma instantánea y forzar su reproducción en caso de estar pausado.
    4.  **Control Deslizante de Volumen**: Control de volumen analógico de precisión (`0.0` a `1.0` con saltos de `0.05`) que se amplía en hover y está sincronizado de manera reactiva en React mediante `useEffect`. También interactúa directamente con el botón de Silenciar/Activar Sonido.
    5.  **Selector de Velocidad:** Permite manipular el atributo `playbackRate` de la etiqueta HTML5 de video a valores de `0.5x` (cámara lenta), `1.0x` (normal), `1.5x` y `2.0x` (cámara rápida).
    6.  **Filtros CSS en Vivo:** Aplica estilos multimedia dinámicos definidos en [VideoSection.module.css](file:///D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI/src/components/VideoSection/VideoSection.module.css#L42-L68):
        *   `filterSepia` (Efecto Sepia): `filter: sepia(0.85) contrast(1.1);`
        *   `filterGrayscale` (Blanco y Negro): `filter: grayscale(1) contrast(1.2);`
        *   `filterVintage` (Vintage): `filter: sepia(0.3) saturate(1.4) hue-rotate(-20deg) contrast(0.9);`
        *   `filterNormal` (Original).

---

## Instrucciones de Ejecución

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
