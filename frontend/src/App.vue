<template>
  <div class="circle"></div>
  <NavBar />
  <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
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
.circle {
  width: 80%;
  height: 80%;
  background: #db2c44;
  border-bottom-right-radius: 100%;
  position: fixed;
  z-index: -1;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}
</style>
