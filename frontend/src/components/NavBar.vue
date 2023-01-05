<template>
  <nav>
    <div class="link-container" id="navContainer">
      <router-link to="/">
        <img v-bind:src="imageSrc" v-bind:style="imageStyle" />
        Home
      </router-link>
    </div>
    <div class="link-container">
      <router-link to="/about">About</router-link>
    </div>
    <div class="link-container">
      <router-link to="/services">Services</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      imageSrc: require("@/assets/scissor.png"),
    };
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

img {
  width: 30px;
  height: 30px;
}

.link-container {
  display: inline-block;
  margin: 3px;
  vertical-align: middle;
}

nav {
  padding: 5px;
  background-color: #187d96;
  text-align: start;
  border-bottom: 5px solid orange;
  position: sticky;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: black;
}
</style>
