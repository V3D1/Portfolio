<template>
  <ChuckCategories />
</template>

<script>
import { defineComponent } from "vue";
import ChuckCategories from "@/components/ChuckCategories.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    ChuckCategories,
  },
});
</script>
