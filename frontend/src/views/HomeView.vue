<template>
  <div class="container">
    <h1>&#x2B05; Some headline &#x27A1;</h1>
    <div class="HomeView">
      <div>
        <AboutComponent />
      </div>
      <div>
        <ServicesComponent />
      </div>
    </div>
  </div>
  <div class="item">
    <h3>Scroll right for more</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from "@/components/AboutComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  name: "HomeView",
  components: {
    AboutComponent,
    ServicesComponent,
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}
h1 {
  color: white;
}

.HomeView {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
}

.HomeView > div {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  margin: 0;
}

.HomeView::-webkit-scrollbar {
  width: 2px;
  height: 10px;
}

.HomeView::-webkit-scrollbar-thumb {
  background-color: darkred;
  border-radius: 10px;
}

.HomeView::-webkit-scrollbar-thumb:hover {
  background-color: palevioletred;
}

/* apply this style for screens smaller than 500px */
@media (max-width: 500px) {
  h1 {
    font-size: 24px;
  }
}
</style>
