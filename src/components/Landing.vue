<template>
  <div class="landing-container">
    <div class="menu-context">
      <h1>este div a la izq</h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis necessitatibus atque dignissimos corporis sapiente labore? Facilis magni provident, porro sed maiores commodi eveniet quas iste, eum, ea nostrum ab impedit.
    </div>
    <div class="profile-img">
      <h1>este div a la derecha</h1>
      <img src="../assets/profile.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.landing-container {
  height: 100%;
  background-image: linear-gradient(
    to top,
    #0c3483 0%,
    #a2b6df 100%,
    #6b8cce 100%,
    #a2b6df 100%
  );
  text-align: center;
  position: relative;
  display: flex;
}
.profile-img {
  position: absolute;
  height: 100%;
  width: 50%;
  margin: auto;
  text-align: center;
  justify-content: center;
  border: 1px solid red;
}
.profile-img img {
  height: 50%;
  width: 50%;
}
.menu-context {
  position: absolute;
  width: 50%;
  height: 100%;
}
</style>
