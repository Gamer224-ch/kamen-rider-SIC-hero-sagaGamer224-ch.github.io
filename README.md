# Kamen Rider S.I.C. Hero Saga Translations — Sitio web estático

Sitio web estático (HTML + Tailwind CSS + JavaScript nativo) que reúne las traducciones de las historias **Kamen Rider S.I.C. Hero Saga**, tomando como referencia el blog [kamenridersictranslations.wordpress.com](https://kamenridersictranslations.wordpress.com).

## ✨ Características

- 🌗 **Modo oscuro / claro** con persistencia en `localStorage` y respeto a `prefers-color-scheme`.
- 🌐 **Selector de idioma Español / Inglés** (i18n sin recarga, con persistencia).
- 📚 **Selector de historias** con **sinopsis** y **portadas originales** (16 historias en 11 sagas).
- 🔍 Búsqueda y filtro por saga (píldoras + menú desplegable).
- 🖼️ Modal de detalle con sinopsis, lista de episodios y enlace al blog original.
- 🎠 Carrusel de historias destacadas, acordeón FAQ, formulario de contacto (demo) y menú móvil.

## 📄 Páginas (6)

| Página | Archivo | Descripción |
| --- | --- | --- |
| Inicio | `index.html` | Héroe, estadísticas, destacadas y carrusel |
| Historias | `historias.html` | **Selector de historias** con sinopsis y portadas |
| Series | `series.html` | Historias agrupadas por saga |
| Actualizaciones | `actualizaciones.html` | Línea de tiempo de novedades |
| Sobre | `sobre.html` | Qué es S.I.C. Hero Saga + FAQ |
| Contacto | `contacto.html` | Formulario de contacto (demo) |

## 🗂️ Estructura

```
kamen-rider-sic/
├── index.html
├── historias.html
├── series.html
├── actualizaciones.html
├── sobre.html
├── contacto.html
├── assets/
│   ├── js/
│   │   ├── data.js       # Datos de historias y sagas (ES/EN)
│   │   ├── i18n.js       # Diccionario de traducciones y motor i18n
│   │   ├── theme.js      # Modo oscuro/claro
│   │   └── app.js        # Interactividad (carrusel, modal, filtros, etc.)
│   └── img/
│       └── covers/       # Portadas originales de las historias
└── README.md
```

## 🚀 Cómo ejecutar

Es un sitio 100 % estático. Puedes:

1. **Abrir directamente** `index.html` en tu navegador, o
2. Servirlo con un servidor local:
   ```bash
   # Con Python
   python -m http.server 8080
   # Con Node
   npx serve .
   ```
   Luego visita `http://localhost:8080`.

## 🌍 Desplegar gratis

- **Vercel**: `vercel` en la carpeta del proyecto.
- **Netlify**: arrastra la carpeta a `app.netlify.com/drop`.
- **GitHub Pages**: sube el contenido a un repositorio y activa Pages.

## 📝 Notas

- Proyecto **no oficial** con fines académicos y de demostración UI/UX.
- Las portadas e historias pertenecen a sus autores; *Kamen Rider* es © Toei / Ishimori Productions.
- El formulario de contacto es una simulación: **no envía datos a ningún servidor**.
