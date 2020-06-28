<template>
  <div class="container mx-auto text-center text-white h-screen align-middle p-8">
    <h1 class="text-3xl text-center">Selecciona la plataforma</h1>
    <div class="container mx-auto text-center relative">
      <div
        class="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 absolute"
      >
        <router-link to="/instagram">
          <div
            class="lg:max-w-full rounded-lg overflow-hidden shadow-xl card-color border-solid border-4 border-gray-light-600 hover:border-pink-500"
          >
            <img
              class="w-full"
              src="https://parentesis.com/imagesPosts/IG-glyph_001.png"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Instagram</div>
            </div>
          </div>
        </router-link>
        <router-link to="/tumblr">
          <div
            class="lg:max-w-full rounded-lg overflow-hidden shadow-xl card-color border-solid border-4 border-gray-light-600 hover:border-purple-500"
          >
            <img
              class="w-full"
              src="https://www.trecebits.com/wp-content/uploads/2018/11/Logo-Tumblr-fondo-azul.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Tumblr</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.card-color {
  color: white;
  background-color: #2a2442;
}
</style>
