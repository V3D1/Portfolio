<template>
  <v-container v-if="!isLoading">
    <v-row class="text-center">
      <v-col cols="12">
        <a href="https://api.chucknorris.io/">
          <v-img
            :src="require('../assets/chuck.png')"
            class="my-3"
            contain
            height="200"
          />
        </a>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Choose your Chuck Norris joke category below:
        </h1>
      </v-col>
    </v-row>
    <v-col class="mb-4">
      <v-card class="mx-auto" max-width="600" tile>
        <v-list-item
          v-for="(jokeCategory, index) in jokesCategory"
          :key="index"
        >
          <v-list-item-header class="mb-1" style="width: 100%">
            <v-list-item-title
              ><ChuckJoke :jokeCategory="jokeCategory"
            /></v-list-item-title>
          </v-list-item-header>
        </v-list-item>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { ChuckService } from "../services/chuckService";
import ChuckJoke from "./ChuckJoke.vue";

export default {
  name: "ChuckCategories",
  components: {
    ChuckJoke,
  },
  setup() {
    const store = useStore();
    const chuckService = new ChuckService();
    const jokesCategory = computed(
      () => store.getters["chuckStore/getChuckCategories"]
    );
    const isLoading = ref(null);

    onMounted(async () => {
      try {
        await store.dispatch("chuckStore/fetchChuckCategories", {
          chuckService: chuckService,
        });
        isLoading.value = false;
      } catch (error) {
        console.log(error);
        isLoading.value = false;
      }
    });
    return { isLoading, jokesCategory, ChuckJoke };
  },
};
</script>
