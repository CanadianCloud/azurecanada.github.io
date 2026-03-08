# Azure Community Canada Website 🌐

[English](#english) | [Español](#español)

---

## English

### 🎯 About

Official website for the Azure Community Canada, based in Vancouver. A modern, responsive platform built to connect Azure enthusiasts, share knowledge, and promote upcoming events and community activities.

**Live Site:** [www.azurecanada.ca](https://www.azurecanada.ca)

### ✨ Features

- ✅ Modern and responsive design
- ✅ Event calendar and upcoming meetups
- ✅ Azure Community Day information
- ✅ Photo gallery from past events
- ✅ Partner and sponsor showcases
- ✅ FAQ section
- ✅ Community involvement opportunities
- ✅ Modular component architecture
- ✅ TypeScript for type safety
- ✅ Optimized performance with Vite

### 🛠️ Technologies

- **React 19** - Modern UI framework
- **TypeScript** - Static typing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Next generation build tool
- **Lucide React** - Beautiful icon library
- **React Lightbox** - Image gallery viewer

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/azurecanada/azurecanada.github.io.git

# Navigate to project directory
cd azurecanada.github.io

# Install dependencies
npm install
```

### 🚀 Development

```bash
# Start development server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally (opens at http://localhost:4173)
npm run preview

# Run linter
npm run lint
```

#### 🔧 Development Modes Explained:

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm run dev` | Hot-reloading development server | Active development, sees changes instantly |
| `npm run preview` | Test production build locally | Before deployment, verify build works correctly |
| `npm run deploy` | Deploy to production | When ready to publish to www.azurecanada.ca |

⚠️ **Important:** Never open `dist/index.html` directly in a browser! The built files use absolute paths and won't work with the `file://` protocol. Always use `npm run preview` to test production builds locally.

### 🌐 Deployment (GitHub Pages)

This project is configured to deploy automatically to GitHub Pages using the `gh-pages` package.

#### How it works:

The deployment process uses an isolated `gh-pages` branch that contains only the built production files, keeping your source code separate in the `main` branch.

#### Deploy to GitHub Pages:

```bash
# Deploy to GitHub Pages (one command does it all)
npm run deploy
```

This command will:
1. ✅ Compile TypeScript files
2. ✅ Build the production bundle (creates `dist/` folder)
3. ✅ Copy the `CNAME` file for custom domain
4. ✅ Push the `dist/` folder to the `gh-pages` branch
5. ✅ Your site goes live automatically at [www.azurecanada.ca](https://www.azurecanada.ca)

#### Branch Structure:

- **`main`** - Source code (development)
- **`gh-pages`** - Production build (auto-generated, do not edit manually)

#### First-time Setup:

If this is a fresh clone, make sure GitHub Pages is configured:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Set source to **`gh-pages`** branch
4. Set folder to **`/ (root)`**
5. Save changes

The site will be available at your custom domain or `https://azurecanada.github.io/`

### 🔍 Troubleshooting

#### Local Website Not Working?

**Problem:** "Local website is working bad" or blank page after opening `dist/index.html`

**Solution:**
- ❌ DON'T: Open `dist/index.html` directly in browser (double-click)
- ✅ DO: Use `npm run preview` to test the production build
- ✅ DO: Use `npm run dev` for development

**Why?** Production builds use absolute paths (`/assets/...`) that only work with a proper server, not the `file://` protocol.

#### Production Site Not Updating?

1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check GitHub Actions completed successfully
3. Verify `gh-pages` branch has latest build
4. Wait 1-2 minutes for CDN propagation

#### Port Already in Use?

If `npm run dev` fails because port 5173 is in use:
```bash
# Kill the process using the port (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Main navigation
│   │   │   ├── Footer.tsx         # Footer component
│   │   │   ├── ScrollToTop.tsx    # Scroll to top button
│   │   │   └── index.ts           # Layout exports
│   │   └── sections/
│   │       ├── Hero.tsx           # Hero banner
│   │       ├── UpcomingEvents.tsx # Event calendar
│   │       ├── CommunityDay.tsx   # Azure Community Day
│   │       ├── GetInvolved.tsx    # Get involved section
│   │       ├── Gallery.tsx        # Photo gallery
│   │       ├── Slider.tsx         # Image slider
│   │       ├── Partners.tsx       # Partner logos
│   │       ├── Sponsors.tsx       # Sponsor logos
│   │       ├── FAQ.tsx            # FAQ section
│   │       ├── CTA.tsx            # Call to action
│   │       └── index.ts           # Section exports
│   ├── assets/                    # Images and media files
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Global styles with Tailwind
├── index.html                    # HTML template
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

### 🤝 Volunteers

This project is maintained by our amazing volunteers:

- **[Daniela Perez](https://www.linkedin.com/in/danielaperezr/)** - Project Lead & Designer
- **[Xaca Rana](https://www.xacarana.com)** - Developer

### 🌟 Contributing

We welcome contributions! If you'd like to help improve the website:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📝 License

This project is open source and available for the Azure Community Canada.

### 📧 Contact

For questions or suggestions, reach out through:
- Our community meetups
- GitHub issues
- Visit [www.azurecanada.ca](https://www.azurecanada.ca)

---

## Español

### 🎯 Acerca del Proyecto

Sitio web oficial de Azure Community Canada, con sede en Vancouver. Una plataforma moderna y responsiva construida para conectar entusiastas de Azure, compartir conocimiento y promover eventos y actividades comunitarias.

**Sitio en vivo:** [www.azurecanada.ca](https://www.azurecanada.ca)

### ✨ Características

- ✅ Diseño moderno y responsivo
- ✅ Calendario de eventos y próximos meetups
- ✅ Información de Azure Community Day
- ✅ Galería de fotos de eventos pasados
- ✅ Exhibición de partners y sponsors
- ✅ Sección de preguntas frecuentes
- ✅ Oportunidades de participación comunitaria
- ✅ Arquitectura modular de componentes
- ✅ TypeScript para seguridad de tipos
- ✅ Rendimiento optimizado con Vite

### 🛠️ Tecnologías

- **React 19** - Framework moderno de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework CSS utility-first
- **Vite** - Build tool de próxima generación
- **Lucide React** - Librería de iconos
- **React Lightbox** - Visor de galería de imágenes

### 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/azurecanada/azurecanada.github.io.git

# Navegar al directorio del proyecto
cd azurecanada.github.io

# Instalar dependencias
npm install
```

### 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

#### 🔧 Modos de Desarrollo Explicados:

| Comando | Propósito | Cuándo Usar |
|---------|-----------|-------------|
| `npm run dev` | Servidor de desarrollo con hot-reload | Desarrollo activo, ver cambios instantáneamente |
| `npm run preview` | Probar build de producción localmente | Antes del despliegue, verificar que el build funciona |
| `npm run deploy` | Desplegar a producción | Cuando esté listo para publicar en www.azurecanada.ca |

⚠️ **Importante:** ¡Nunca abras `dist/index.html` directamente en el navegador! Los archivos compilados usan rutas absolutas y no funcionarán con el protocolo `file://`. Siempre usa `npm run preview` para probar builds de producción localmente.

### 🌐 Despliegue (GitHub Pages)

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando el paquete `gh-pages`.

#### Cómo funciona:

El proceso de despliegue utiliza una rama aislada `gh-pages` que contiene solo los archivos de producción compilados, manteniendo tu código fuente separado en la rama `main`.

#### Desplegar a GitHub Pages:

```bash
# Desplegar a GitHub Pages (un solo comando lo hace todo)
npm run deploy
```

Este comando hará:
1. ✅ Compilar archivos TypeScript
2. ✅ Construir el bundle de producción (crea la carpeta `dist/`)
3. ✅ Copiar el archivo `CNAME` para el dominio personalizado
4. ✅ Enviar la carpeta `dist/` a la rama `gh-pages`
5. ✅ Tu sitio se publica automáticamente en [www.azurecanada.ca](https://www.azurecanada.ca)

#### Estructura de Ramas:

- **`main`** - Código fuente (desarrollo)
- **`gh-pages`** - Build de producción (auto-generado, no editar manualmente)

#### Configuración Inicial:

Si es un clon nuevo, asegúrate de que GitHub Pages esté configurado:

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a la sección **Pages**
3. Establece la fuente como rama **`gh-pages`**
4. Establece la carpeta como **`/ (root)`**
5. Guarda los cambios

El sitio estará disponible en tu dominio personalizado o `https://azurecanada.github.io/`

### 🔍 Solución de Problemas

#### ¿El Sitio Local No Funciona?

**Problema:** "El sitio local funciona mal" o página en blanco al abrir `dist/index.html`

**Solución:**
- ❌ NO: Abrir `dist/index.html` directamente en el navegador (doble clic)
- ✅ SÍ: Usar `npm run preview` para probar el build de producción
- ✅ SÍ: Usar `npm run dev` para desarrollo

**¿Por qué?** Los builds de producción usan rutas absolutas (`/assets/...`) que solo funcionan con un servidor apropiado, no con el protocolo `file://`.

#### ¿El Sitio de Producción No Se Actualiza?

1. Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
2. Verifica que GitHub Actions se completó exitosamente
3. Verifica que la rama `gh-pages` tiene el último build
4. Espera 1-2 minutos para la propagación del CDN

#### ¿Puerto Ya en Uso?

Si `npm run dev` falla porque el puerto 5173 está en uso:
```bash
# Matar el proceso usando el puerto (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# O usar un puerto diferente
npm run dev -- --port 3000
```

### 📁 Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Navegación principal
│   │   │   ├── Footer.tsx         # Componente pie de página
│   │   │   ├── ScrollToTop.tsx    # Botón scroll al inicio
│   │   │   └── index.ts           # Exports del layout
│   │   └── sections/
│   │       ├── Hero.tsx           # Banner principal
│   │       ├── UpcomingEvents.tsx # Calendario de eventos
│   │       ├── CommunityDay.tsx   # Azure Community Day
│   │       ├── GetInvolved.tsx    # Sección de participación
│   │       ├── Gallery.tsx        # Galería de fotos
│   │       ├── Slider.tsx         # Carrusel de imágenes
│   │       ├── Partners.tsx       # Logos de partners
│   │       ├── Sponsors.tsx       # Logos de sponsors
│   │       ├── FAQ.tsx            # Preguntas frecuentes
│   │       ├── CTA.tsx            # Llamada a la acción
│   │       └── index.ts           # Exports de secciones
│   ├── assets/                    # Imágenes y archivos multimedia
│   ├── lib/
│   │   └── utils.ts              # Funciones utilitarias
│   ├── App.tsx                   # Componente principal
│   ├── main.tsx                  # Punto de entrada
│   └── index.css                 # Estilos globales con Tailwind
├── index.html                    # Plantilla HTML
├── vite.config.ts               # Configuración de Vite
├── tailwind.config.js           # Configuración de Tailwind
└── tsconfig.json                # Configuración de TypeScript
```

### 🤝 Voluntarios

Este proyecto es mantenido por nuestros increíbles voluntarios:

- **[Daniela Perez](https://www.linkedin.com/in/danielaperezr/)** - Líder de Proyecto & Diseñadora
- **[Xaca Rana](https://www.xacarana.com)** - Desarrollador

### 🌟 Contribuir

¡Damos la bienvenida a contribuciones! Si te gustaría ayudar a mejorar el sitio web:

1. Haz fork del repositorio
2. Crea tu rama de feature (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Agregar CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

### 📝 Licencia

Este proyecto es de código abierto y está disponible para Azure Community Canada.

### 📧 Contacto

Para preguntas o sugerencias, contáctanos a través de:
- Nuestros meetups comunitarios
- GitHub issues
- Visita [www.azurecanada.ca](https://www.azurecanada.ca)

---

Made with ❤️ by Azure Community Canada 🇨🇦
