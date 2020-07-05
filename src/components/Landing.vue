<template>
  <div
    class="container mx-auto relative text-center text-white h-screen align-middle px-8 pb-8 pt-2"
  >
    <a href="https://github.com/StewartGF" target="_blank">
      <img
        width="30"
        height="30"
        src="https://image.flaticon.com/icons/svg/52/52040.svg"
        style="filter: invert(100%);"
        class="absolute top-0 left-0 m-3 rounded"
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
    <h1 class="text-center mt-8 text-5xl font-black">Selecciona la plataforma</h1>
    <div class="container mx-auto text-center relative">
      <div class="relative w-full">
        <div
          class="grid gap-4 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 relative"
        >
          <router-link to="/instagram">
            <div
              class="w-9/12 m-auto mt-12 rounded overflow-hidden shadow-xl bg-gray-900 border-solid border-4 border-gray-light-600 hover:border-pink-500"
            >
              <img src="..\assets\ig_image.png" />
              <div>
                <h1 class="font-black text-lg p-3">instagram</h1>
              </div>
            </div>
          </router-link>
          <router-link to="/tumblr">
            <div
              class="w-9/12 m-auto mt-12 rounded overflow-hidden shadow-xl bg-gray-900 border-solid border-4 border-gray-light-600 hover:border-purple-500"
            >
              <img src="..\assets\tumblr_image.jpg" />
              <h1 class="font-black text-lg p-3">tumblr</h1>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
</style>
