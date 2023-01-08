<template>
  <div class="about">
    <h1>About</h1>
    <img src="../assets/scissor.png" />
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
.about {
  background-color: blueviolet;
}
img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
