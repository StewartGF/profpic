<template>
  <div class="container mx-auto text-center h-screen align-middle p-8">
    <div class="fixed pt-16">
      <router-link to="/">Inicio</router-link>
    </div>
    <h1 class="text-4xl">Instagram</h1>
    <div class="flex items-center justify-between">
      <input
        class="appearance-none py-5 my-10 mx-1 block w-3/4 bg-purple-100 text-gray-900 border border-red-500 rounded px-4 focus:outline-none"
        id="username"
        type="search"
        placeholder="Nombre de usuario"
        v-model="username"
        @keyup.enter="loadData"
      />
      <button
        class="shadow bg-purple-500 py-5 mx-1 w-1/4 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
        @click="loadData"
      >Buscar</button>
    </div>
    <div v-if="this.infoFlag" class="container">
      <div v-if="userData">
        <div class="content-center">
          <img :src="userData.user.profile_pic_url_hd" alt class="object-cover m-auto rounded-lg" />
        </div>
      </div>
      <div v-else>
        <h1>Probablemente ese nombre de usuario no exista 🙅‍♂️, prueba con otro🤷‍♂️</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      infoFlag: false,
      username: ""
    };
  },
  computed: {
    userData() {
      return this.$store.state.instagramUserData;
    }
  },
  methods: {
    loadData: function() {
      this.$store.dispatch("getInstagramUserData", this.username);
      this.infoFlag = true;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>