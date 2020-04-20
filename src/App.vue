<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";

export default {
  name: "App",
  components: {
    Landing
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Nunito";
  /* Remueve el fondo azul cuando clickeas algo en la pagina  https://stackoverflow.com/a/45050338/12533883*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* Remueve el fondo azul cuando clickeas algo en la pagina  https://stackoverflow.com/a/45050338/12533883*/
}
html,
body {
  transition: background 0.25s ease-in-out;
  height: 100%;
}
#app {
  /* esto soluciona el problema con los dobles scrollbar y que nada quepa dentro del 100% body y html */
  max-height: 100%;
  /* esto soluciona el problema con los dobles scrollbar y que nada quepa dentro del 100% body y html */
  min-width: 100%;
  position: relative;
}
div {
  height: 100%;
}
</style>
