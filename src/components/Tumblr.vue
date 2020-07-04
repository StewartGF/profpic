<template>
  <div
    class="container relative mx-auto text-center h-screen align-middle px-8 pb-8 pt-4 text-white"
  >
    <router-link
      to="/"
      class="shadow bg-blue-500 py-1 m-2 px-2 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold rounded-full top-0 left-0 absolute"
    >Inicio</router-link>
    <a href="https://github.com/StewartGF" target="_blank">
      <img
        width="30"
        height="30"
        src="https://image.flaticon.com/icons/svg/2111/2111612.svg"
        style="filter: invert(100%);"
        class="fixed bottom-0 left-0 m-5"
      />
    </a>
    <a href="https://www.linkedin.com/in/stewart-granger-flores/" target="_blank">
      <img
        width="24"
        height="24"
        src="https://image.flaticon.com/icons/svg/1384/1384088.svg"
        style="filter: invert(100%);"
        class="fixed bottom-0 right-0 m-6"
      />
    </a>

    <h1 class="text-5xl font-black">Tumblr</h1>
    <div class="flex items-center justify-between my-8">
      <input
        class="appearance-none rounded-full w-full py-5 px-4 mx-1 block w-3/4 bg-blue-900 bg-opacity-50 text-white-900 focus:outline-none focus:shadow-outline"
        id="username"
        v-model="username"
        placeholder="Nombre de usuario"
        type="search"
        @keyup.enter="loadData"
        @blur="loadData"
      />
      <!-- <button
        class="shadow bg-blue-500 py-5 mx-1 w-1/4 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
        @click="loadData"
      >Buscar</button>-->
    </div>
    <div v-if="isLoading" class="container mt-16">
      <loading-spinner />
    </div>
    <div v-else class="container mt-5">
      <div v-if="tumblrUserData">
        <div v-if="tumblrUserData.exists">
          <div
            class="content-center grid gap-1 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          >
            <img :src="tumblrUserData.url" class="object-cover m-auto rounded-lg" />
            <div class="container sm:text-center lg:text-left">
              <p
                class="text-blue-600 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl"
              >{{tumblrUserData.username}}.tumblr.com</p>
              <button
                class="shadow bg-blue-500 rounded-full py-5 mt-5 w-2/4 sm:w-2/4 md:w-2/4 lg:w-2/4 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold"
                type="button"
                @click="clickAtag"
              >
                <a
                  name="download"
                  :href="tumblrUserData.url"
                  target="_blank"
                  download="imagen.jpg"
                >Descargar</a>
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="container">
            <p
              class="text-l font-hairline"
            >Probablemente ese nombre de usuario no exista, prueba con otro</p>
            <p class="text-6xl">🤷‍♂️</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  data: function() {
    return {
      infoFlag: false,
      username: ""
    };
  },
  computed: {
    ...mapState(["tumblrUserData", "isLoading", "doesNotExists"]) // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
  },
  components: {
    LoadingSpinner
  },
  methods: {
    loadData: function() {
      if (this.username !== "") {
        this.$store.dispatch("getTumblrUserData", this.username);
        this.username = "";
      } else {
        return false;
      }
    },
    clickAtag: function() {
      document.querySelector("a[name='download']").click();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>