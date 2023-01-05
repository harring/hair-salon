<template>
  <nav id="nav">
    <a href="/"> <img src="@/assets/scissor.png" alt="Home" /> HOME </a>
    <a href="/"> <img src="@/assets/scissor.png" alt="About" /> ABOUT </a>
    <a href="/"> <img src="@/assets/scissor.png" alt="Services" /> SERVICES </a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("nav");
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  },
};
</script>

<style scoped>
#nav {
  padding: 5px;
  margin: 0px;
  background-color: #187d96;
  text-align: start;
  border-bottom: 2px solid red;
  position: sticky;
  top: 0px;
  /* z-index: to make sure google map stays behind sticky navbar */
  z-index: 2;
}
#nav img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
#nav.scrolled img {
  display: inline-block;
}
a {
  color: white;
  font-weight: bold;
  margin: 2px;
  text-decoration: none;
  text-align: justify;
  padding: 5px;
}
a:link {
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: orange;
  background-color: transparent;
  text-decoration: none;
}
a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: none;
}

@media (max-width: 600px) {
  #nav {
    display: flex;
    flex-direction: column;
  }

  #nav a {
    flex-direction: column;
  }
}
@media (min-width: 600px) and (max-width: 1000px) {
  #nav {
    padding: 5px;
  }

  #nav a {
    font-size: 1em;
  }
}
</style>
