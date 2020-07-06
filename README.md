![npm](https://img.shields.io/badge/VueJS-v2.6.11-brightgreen) ![npm](https://img.shields.io/badge/Vuex-v3.2.0-green) ![npm](https://img.shields.io/badge/VueRouter-v3.3.4-yellowgreen) ![npm](https://img.shields.io/badge/TailwindCSS-v1.4.6-19B6BA) ![npm](https://img.shields.io/badge/InstagramAPI-v1-ff69b4) ![npm](https://img.shields.io/badge/TumblrAPI-v2-001935) [![Netlify Status](https://api.netlify.com/api/v1/badges/81f4472a-f65e-440f-a922-1073579cbd45/deploy-status)](https://app.netlify.com/sites/profpic-stewartgf/deploys)

# Profpic🖼

Hice este proyecto para poder conseguir iconos desde las plataformas que más uso, no me gustan las páginas que lo hacen actualmente por lo que quiero crear una que me haga el trámite más rapido. Además, aproveché de conocer qué es TailwindCSS y qué ventajas tiene.

# Deployed 🌐

👉 https://profpic-stewartgf.netlify.app/

## Tecnologías utilizadas

- Vue.js
- Vuex
- Vue Router

## Framework CSS

- Tailwind para no tener que escribir CSS... 🤷‍♂️

## APIs consumidas

- Instagram API
- Tumblr API

# TODO

✅ Agregar estructura Vuex

✅ Agregar Router

✅ Consumir APIs necesarias

✅ Actualizar Readme

✅ Crear estado de Loading

✅ Agregar botón para volver

✅ Cambiar colores de la página y tamaños en responsive

✅ Validar el estado cuando el usuario no existe y el estado cuando se entra por primera vez

✅ Agregar botón para descargar (como es una imagen externa a mi, no podré descargarla directamente, así que abriré una nueva página con el link a la imágen del usuario)

✅ Crear Tumblr state y vista

✅ Deploy en Netlify :D

## Actualización Julio, 2020 🧐

Se corrigió el error de CORS usando un proxy en Heroku -> https://stewartgf-cors-anywhere.herokuapp.com/ 🤓

- créditos @https://github.com/Rob--W/cors-anywhere/ 👈🔥

* Pasos:

```
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
```
