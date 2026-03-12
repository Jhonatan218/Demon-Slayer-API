# Demon Slayer API

Una aplicación web interactiva que consume la API de Demon Slayer para mostrar información sobre los personajes del anime.

## Características

- Listado paginado de personajes (5 por página)
- Visualización de imágenes de cada personaje
- Página de detalles con información completa
- Descripción detallada de cada personaje
- Frases célebres de los personajes

## Tecnologías

- HTML5
- CSS
- JavaScript
- API: https://www.demonslayer-api.com/

## Estructura del Proyecto

```
Demon slayer/
├── index.html       # Página principal con listado de personajes
├── index.js         # Lógica de paginación y carga de personajes
├── detail.html      # Página de detalles del personaje
├── detail.js        # Lógica para cargar detalles del personaje
├── style.css        # Estilos globales
├── LOGO.gif         # Logo de Demon Slayer
└── .gitignore       # Archivos ignorados por Git
```

## Cómo Usar
1. Abre `index.html` en tu navegador web

2. Navega entre páginas usando los botones "Anterior" y "Siguiente"

3. Haz clic en cualquier personaje para ver sus detalles completos

## API Utilizada

[Demon Slayer API](https://www.demonslayer-api.com/) - API gratuita con información de Demon Slayer

### Endpoints principales:
- `GET /api/v1/characters` - Obtener lista paginada de personajes
- `GET /api/v1/characters?id={id}` - Obtener detalles de un personaje

## Licencia

Este proyecto utiliza la Demon Slayer API pública.
