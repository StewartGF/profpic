<template>
  <div class="box-border h-screen">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
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
  box-sizing: border-box;
}
body {
  transition: background 0.25s ease-in-out;
  font-size: 14px;
  background-color: #2a2442;
  color: white;
}
#app {
  height: 100vh;
}
</style>
