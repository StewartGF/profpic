<template>
  <div
    class="container relative mx-auto text-center h-screen align-middle px-8 pb-8 pt-4 text-white"
  >
    <router-link
      to="/"
      class="bg-transparent hover:bg-transparent text-white font-black hover:text-blue-500 py-2 px-4 border border-white hover:border-blue-500 rounded m-2 top-0 left-0 absolute"
    >Inicio</router-link>

    <a href="https://github.com/StewartGF" target="_blank">
      <img
        width="30"
        height="30"
        src="https://image.flaticon.com/icons/svg/52/52040.svg"
        style="filter: invert(100%);"
        class="absolute top-0 right-0 mr-12 m-3 rounded"
      />
    </a>
    <a href="https://www.linkedin.com/in/stewart-granger-flores/" target="_blank">
      <img
        width="30"
        height="30"
        src="https://image.flaticon.com/icons/png/512/2931/2931621.png"
        style="filter: invert(100%);"
        class="absolute top-0 right-0 m-3 rounded"
      />
    </a>

    <h1 class="text-5xl font-black">Tumblr</h1>
    <div class="flex items-center justify-between my-8">
      <input
        class="appearance-none rounded-full border-gray-500 border w-full py-5 px-4 mx-1 block w-3/4 bg-blue-900 bg-opacity-50 text-white-900 focus:border-transparent focus:outline-none focus:shadow-outline"
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
            <div class="container sm:text-center xl:text-left">
              <p
                class="break-words sm:break-words md:break-all lg:truncate xl:break-normal text-blue-600 text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl"
              >{{tumblrUserData.username}}.tumblr.com</p>
              <button
                class="bg-blue-500 py-5 mt-5 hover:bg-blue-600 text-white font-bold px-10 rounded-full inline-flex items-center"
                @click="clickAtag"
              >
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
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
      <div v-else>
        <div class="container">
          <p class="text-3xl">hey {{randomEmoji}}</p>
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
      username: "",
      emojis: [
        "🥰",
        "😎",
        "🧐",
        "🤔",
        "🤐",
        "🔥",
        "😏",
        "😁",
        "😌",
        "✌",
        "🤩",
        "🤗",
        "🙂",
        "😲",
        "😳",
        "🤭",
        "🤓",
        "👾",
        "🙊",
        "👀"
      ]
    };
  },
  computed: {
    ...mapState(["tumblrUserData", "isLoading", "doesNotExists"]), // esto es más rapido que crear una función que devuelva el state en un return, don't know why tho🤷‍♂️
    randomEmoji: function() {
      return this.emojis[Math.floor(Math.random() * this.emojis.length)];
    }
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