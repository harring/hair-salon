<template>
  <BackgroundCircle />
  <NavBar />
  <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import BackgroundCircle from "@/components/BackgroundCircle.vue";

export default {
  name: "App",
  components: {
    NavBar,
    BackgroundCircle,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  padding: 0px;
}
nav a.router-link-exact-active {
  color: #db2c44;
}
</style>
