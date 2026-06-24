# Punto Espresso - Sitio Web de Cafetería de Especialidad

Este proyecto corresponde a una plataforma web moderna, interactiva y responsiva desarrollada para **Punto Espresso**, una cafetería de especialidad simulada. Este sitio ha sido diseñado e implementado como proyecto de evaluación para la materia **Programación Multimedia** (Examen Extraordinario 2026-2) bajo la tutela del **Catedrático Ing. Erick Solórzano**.

El sitio se enfoca en ofrecer una experiencia de usuario (UX) premium a través de una estética visual cuidada (basada en el diseño moderno ) y la integración avanzada de diversos componentes multimedia interactivos.

---

## Pila Tecnológica (Tech Stack)

*   **Framework Principal:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** CSS Vanilla estructurado a través de **CSS Modules** (`*.module.css`) para evitar la colisión de clases y mantener un diseño modular y limpio.
*   **Tipografías:**
    *   *Playfair Display* (Serif) para encabezados y elementos elegantes.
    *   *Inter* (Sans-serif) para textos de lectura, controles y metadata.
*   **Formatos Multimedia:** SVG, WEBP, MP3 (Audio), MP4 (Video).

---

## Estructura del Proyecto

A continuación se detalla la organización de los directorios y archivos clave dentro del proyecto:

```text
cafeteria-puntoespressoUI/
├── public/                     # Recursos estáticos servidos directamente
│   ├── coffee-sprite.svg       # Hoja de sprites (Sprite Sheet) para la cafetera animada
│   ├── favicon.svg             # Icono de pestaña del navegador
│   ├── icons.svg               # Conjunto de iconos del sitio
│   └── tasa.svg                # Icono SVG alternativo de la taza de café
├── src/
│   ├── assets/                 # Recursos multimedia importados en los componentes
│   │   ├── Video.mp4           # Video demostrativo de preparación de espresso (3.73 MB)
│   │   ├── ambiente.mp3        # Pista de audio ambiental lofi para Punto Radio (2.58 MB)
│   │   ├── granoycafe.jpg      # Imagen de fondo para el banner de bienvenida (Hero)
│   │   ├── logo.webp           # Logotipo oficial de Punto Espresso en formato webp optimizado
│   │   └── tasa.svg            # Gráfico de taza utilizado en animaciones en línea
│   ├── components/             # Componentes encapsulados de la aplicación
│   │   ├── AudioPlayer/        # Reproductor de audio personalizado
│   │   ├── BouncingLogo/       # Minijuego interactivo del logotipo rebotador
│   │   ├── Loader/             # Pantalla de carga animada inicial
│   │   ├── Logo/               # Componente del logotipo circular reutilizable
│   │   ├── Menu/               # Menú de especialidades y sección de historia
│   │   ├── SpriteAnimation/    # Animación de cafetera por pasos (Sprite CSS)
│   │   └── VideoSection/       # Reproductor de video interactivo con filtros CSS y velocidad
│   ├── App.tsx                 # Componente raíz y contenedor principal de la aplicación
│   ├── App.module.css          # Estilos CSS específicos de la estructura global y modal de evaluación
│   ├── index.css               # Estilos globales, variables de diseño y scrollbar personalizado
│   └── main.tsx                # Punto de entrada de renderizado de React
├── package.json                # Configuración de dependencias y scripts de NPM
└── tsconfig.json               # Configuración del compilador TypeScript
```

---

## Especificaciones de Diseño y Paleta de Colores

El diseño visual está inspirado en cafeterías nórdicas y de especialidad, priorizando una paleta cálida que evoca ingredientes naturales y confort.

### Paleta de Colores (Variables CSS en `index.css`)
*   **Fondo Crema (`--bg-cream`):** `#FFF8F0` — Tonalidad clara y cálida para un fondo que relaja la vista.
*   **Caramelo (`--accent-caramel`):** `#C08552` — Tonalidad vibrante utilizada para acentos, bordes, estados activos y botones destacados.
*   **Marrón Medio (`--brown-medium`):** `#8C5A3C` — Empleado para textos complementarios y bordes secundarios.
*   **Espresso Oscuro (`--dark-espresso`):** `#4B2E2B` — Color principal del texto y elementos oscuros (como el menú), que garantiza un excelente contraste.

---

## Módulos y Funcionalidades del Sitio

### 1. Pantalla de Carga Interactiva (Loader)
*   **Especificación:** Al cargar el sitio por primera vez, se muestra una pantalla completa durante **3 segundos** (simulando carga de recursos pesados multimedia mediante `setTimeout`).
*   **Elementos Multimedia:**
    *   **SVG Animado en línea:** Un gráfico SVG de una taza de café que posee dos capas de vapor (`tasaSteam1` y `tasaSteam2`). Estas capas se animan independientemente usando `@keyframes` de CSS con efectos de traslación, escala y opacidad variable para crear un efecto realista de humo de café.
    *   **Mensajes Dinámicos:** Muestra textos secuenciales que cambian cada segundo:
        1. *Moliendo granos de especialidad...*
        2. *Calibrando temperatura de la barra...*
        3. *Extrayendo el shot de espresso perfecto...*
    *   **Progreso Visual:** Una barra de carga que transiciona horizontalmente de 0% a 100% durante el tiempo de espera.

### 2. Barra de Navegación (Header & Sticky Navbar)

*   **Especificación:** Barra de navegación persistente en la parte superior (`position: sticky`).
*   **Aparato Visual:** Implementa *glassmorphism* mediante un fondo chocolate semitransparente (`rgba(75, 46, 43, 0.96)`) con efecto de difuminado por detrás (`backdrop-filter: blur(10px)`). Incluye el logotipo circular, el nombre comercial y enlaces rápidos mediante anclas internas (`#menu`, `#video`, `#radio`, `#experiencia`).

### 3. Banner de Bienvenida (Hero Banner)

*   **Especificación:** Sección de bienvenida al usuario. Usa la imagen `granoycafe.jpg` de fondo con un degradado superpuesto que atenúa el fondo para asegurar legibilidad. Presenta una tarjeta centralizada de vidrio esmerilado con bordes suaves que contiene el eslogan comercial de la marca.

### 4. Menú de Especialidades y Sección "El Origen"

*   **Especificación:**
    *   **Grid de Especialidades:** Presenta 4 productos exclusivos (Espresso Intenso, Capuchino Terciopelo, Caramel Macchiato Frío y Flat White Australiano) organizados en tarjetas responsivas. Cada tarjeta incluye descripción detallada del origen del grano/leche, precio, etiquetas descriptivas ("Clásico", "Caliente", "Dulce", "Frío") y un botón para ordenar.
    *   **Historia de Origen:** Bloque de contenido estructurado donde se detalla el modelo de negocio sustentable, los procesos de tostado personalizados y la esencia multimedia del café.

### 5. Indicador de Barra en Vivo (Animación por Sprites)

*   **Especificación:** Simula una máquina de espresso extrayendo café en vivo en la barra.
*   **Técnica de Animación:**
    *   Utiliza un visor de `100px x 100px` con un archivo de sprites SVG (`public/coffee-sprite.svg`) de dimensiones totales `800px x 100px`.
    *   La animación se ejecuta mediante la propiedad `animation` y la función de tiempo `steps(8)` en CSS, la cual desplaza horizontalmente la posición del fondo (`background-position`) desde `0px` hasta `-800px` en un bucle infinito de `1.2` segundos. Esto crea una animación tradicional por cuadros sumamente eficiente.
    *   Adicionalmente, un indicador luminoso parpadea simétricamente mediante `@keyframes pulseDot` para dar el efecto de "Transmisión en vivo".

### 6. Punto Radio (Reproductor de Audio Personalizado)

*   **Especificación:** Reproductor musical a medida que no depende de los controles nativos del navegador. Controla la reproducción de `ambiente.mp3` en bucle.
*   **Funcionalidades Multimedia:**
    *   **Botón Personalizado Play/Pause:** Alterna el estado de reproducción controlando directamente la API nativa de audio (`audio.play()` / `audio.pause()`).
    *   **Barra de Progreso Interactiva:** Entrada tipo rango (`input[type="range"]`) sincronizada bidireccionalmente con la propiedad `currentTime` del elemento de audio. Muestra los minutos y segundos en tiempo real.
    *   **Control de Volumen:** Control deslizante para modular la ganancia del volumen de forma fluida (`audio.volume = volumen`).
    *   **Ecualizador Gráfico:** 5 barras verticales animadas mediante CSS. Cuando la música se reproduce, se activa la clase `.isPlaying` que ejecuta animaciones independientes (`scaleY` con retrasos de tiempo) para dar la ilusión visual de que el ecualizador responde a las frecuencias del sonido.

### 7. Nuestra Esencia (Sección de Video con Procesamiento Multimedia)

*   **Especificación:** Reproduce un clip de video (`Video.mp4`) en bucle y silenciado por defecto para evitar bloqueos del navegador. Proporciona una consola de mandos interactiva y única para procesar la salida del video.
*   **Funcionalidades Avanzadas:**
    *   **Controles Propios:** Botones de reproducción/pausa y habilitar/silenciar sonido.
    *   **Filtros de Imagen en Tiempo Real:** Selector interactivo para aplicar filtros directamente a la etiqueta HTML `<video>` mediante estilos CSS de procesamiento gráfico:
        *   **Sepia:** `filter: sepia(0.85) contrast(0.95)` (Estética cálida clásica).
        *   **Grayscale:** `filter: grayscale(1) contrast(1.1)` (Blanco y negro dramático).
        *   **Vintage:** `filter: sepia(0.5) hue-rotate(-20deg) saturate(0.8) contrast(1.05)` (Apariencia analógica retro).
        *   **Normal:** Estado original del video.
    *   **Modulador de Velocidad:** Permite acelerar o ralentizar la reproducción a través de la propiedad `playbackRate` (`0.5x`, `1.0x`, `1.5x` y `2.0x`).

### 8. Experiencia Interactiva (Bouncing Logo - Gamificación)

*   **Especificación:** Pequeña sección de gamificación interactiva.
*   **Lógica del Minijuego:** El logotipo oficial de la cafetería rebota diagonalmente por un área delimitada (*sandbox*) por medio de animaciones complejas de rebote en CSS (`@keyframes bounceX` y `@keyframes bounceY` operando de forma desfasada). El usuario debe interactuar haciendo clic sobre el logotipo en movimiento. Al atraparlo, se congela la animación (`animation-play-state: paused`), se activa un sonido visual de éxito y se revela un código promocional de descuento exclusivo (`ESPRESSO15`). El usuario puede reiniciar el juego para volver a jugar.

### 9. Panel del Evaluador / Docente

*   **Especificación:** Para cumplir con el propósito evaluativo del examen, se incluye un botón flotante discreto (`i`) en la esquina inferior derecha. Al hacer clic, despliega un cuadro modal académico que contiene la información de la materia ("Programación Multimedia"), el examen y el profesor evaluador, y provee un campo de texto editable para registrar el nombre y la matrícula del alumno de forma persistente mientras dure la sesión.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Para instalar y arrancar la aplicación de manera local, sigue los siguientes pasos desde una terminal:

1.  **Clonar o situarse en el directorio del proyecto:**
    ```bash
    cd D:/Desktop/ProgramacionMultimedia/cafeteria-puntoespressoUI
    ```
2.  **Instalar dependencias necesarias:**
    ```bash
    npm install
    ```
3.  **Iniciar el servidor de desarrollo de Vite:**
    ```bash
    npm run dev
    ```
4.  **Abrir el navegador:**
    Una vez inicializado, accede a la dirección local que se muestre en consola (por defecto [http://localhost:5173](http://localhost:5173)).

5.  **Generar compilación de producción (opcional):**
    ```bash
    npm run build
    ```
