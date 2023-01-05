<template>
  <h1>
    <a href="/"><img id="img" src="../assets/scissor.png" /></a>
    Hair Salon
  </h1>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
h1 {
  display: flex;
  align-items: center;
}

#img {
  width: 100px;
  vertical-align: middle;
  transform: rotate(-0.25turn);
}
</style>
