<template>
  <nav id="nav">
    <div class="nav-left">
      <h1>
        <a href="/"
          ><img id="img" alt="Hair Salon logo" src="../assets/scissor.png"
        /></a>
        Hair Salon
      </h1>
    </div>
    <div class="nav-right">
      <router-link to="/"> Home </router-link> |
      <router-link to="/services"> Services </router-link> |
      <router-link to="/about"> About</router-link>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NavBar",
};
</script>

<style scoped>
#img {
  width: 70px;
  height: 70px;
  vertical-align: middle;
  transform: rotate(-0.25turn);
}

h1 {
  display: flex;
  align-items: center;
  font-size: 32px;
}

#nav {
  position: sticky;
  top: 0;
  background: whitesmoke;
  border: 2px solid grey;
  height: 70px;
  display: flex;
  align-items: stretch;
}

.nav-right {
  margin-left: auto;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding-right: 5px;
}

.nav-left {
  display: flex;
  align-items: center;
  padding-left: 5px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
}

/* apply this style for screens smaller than 500px */
@media (max-width: 500px) {
  #img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 20px;
  }
  .nav-right {
    font-size: 18px;
  }
}
</style>
