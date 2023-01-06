<template>
  <div class="circle"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "BackgroundCircle",
};
</script>

<style>
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
