# Master Clean Yatch - Sitio Web Astro

Sitio web profesional para Master Clean Yatch, servicio de limpieza y mantenimiento de embarcaciones.

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`   |
| `npm run preview`         | Vista previa de la build antes de desplegar      |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

## 📁 Estructura del Proyecto

```
raul-astro/
├── public/
│   └── img/
│       └── image.png          # Imagen de perfil
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navegación principal
│   │   ├── Hero.astro         # Sección hero con animaciones
│   │   ├── Services.astro     # Grid de servicios
│   │   ├── About.astro        # Sección "Quién soy"
│   │   ├── QuoteForm.astro    # Formulario de presupuesto
│   │   ├── Contact.astro      # Información de contacto
│   │   └── Footer.astro       # Pie de página
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal
│   ├── pages/
│   │   └── index.astro        # Página principal
│   └── styles/
│       └── global.css         # Estilos globales
├── astro.config.mjs           # Configuración de Astro
├── package.json
└── tsconfig.json
```

## 🎨 Características

- ✨ **Diseño moderno y responsive** - Adaptado a todos los dispositivos
- 🌊 **Animaciones fluidas** - Hero section con olas animadas y efectos de scroll
- 📱 **Formulario integrado con WhatsApp** - Envío directo de presupuestos
- 🎯 **Componentes modulares** - Fácil de mantener y actualizar
- 🚀 **Optimizado para rendimiento** - Build estático ultra-rápido con Astro

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web estático
- CSS3 con Variables CSS
- TypeScript
- Fuentes: Outfit & Playfair Display (Google Fonts)

## 🌐 Despliegue

El sitio puede desplegarse en cualquier hosting de sitios estáticos:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

Simplemente ejecuta `npm run build` y despliega el contenido de la carpeta `dist/`.

## 📝 Personalización

Para personalizar el sitio:

1. **Colores**: Edita las variables CSS en `src/styles/global.css`
2. **Servicios**: Modifica el array en `src/components/Services.astro`
3. **Contenido**: Edita los componentes individuales en `src/components/`
4. **Número de WhatsApp**: Actualiza en `QuoteForm.astro` y `Contact.astro`

## 📞 Contacto

- **Teléfono**: +34 646 551 404
- **Email**: info@mastercleanyatch.es
- **WhatsApp**: [Contactar](https://wa.me/34646551404)