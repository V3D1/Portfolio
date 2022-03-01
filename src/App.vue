<template>
  <AppHeader />
  <div class="container m-auto">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>
<style lang=""></style>
