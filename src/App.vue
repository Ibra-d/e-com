<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// import $ from "jquery";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const userUuid = ref("");
    const router = useRouter();
    const uuidFromLocalStorage = localStorage.getItem("userUuid");

    if (uuidFromLocalStorage) userUuid.value = uuidFromLocalStorage;
    if (!uuidFromLocalStorage) router.push("/login");

    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&display=swap");

#app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Poiret One", cursive;
  font-weight: bold;
  letter-spacing: 1px;
}

body,
html {
  margin: 0;
  padding: 0;
  background-color: #edddd5;
  color: #6f141f;
}
</style>
