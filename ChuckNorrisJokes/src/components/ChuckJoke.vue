<template>
  <div class="text-center">
    <v-btn
      color="deep-orange-darken-2"
      style="color: white !important; width: 100%"
      @click="showJoke"
      v-if="!isLoading"
    >
      {{ jokeCategory }}

      <v-dialog activator="parent">
        <v-card>
          <v-card-text class="mb-4 mt-4"> {{ chuckyJoke }} </v-card-text>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { ChuckService } from "../services/chuckService";

export default {
  name: "ChuckJoke",
  props: {
    jokeCategory: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const chuckService = new ChuckService();
    const isLoading = ref(null);
    const joke = ref(null);
    joke.value = computed(() => store.getters["chuckStore/getChuckJoke"]);
    const chuckyJoke = ref(null);
    const showJoke = async () => {
      try {
        await store.dispatch("chuckStore/fetchChuckJoke", {
          chuckService: chuckService,
          jokeCategory: props.jokeCategory,
        });
        chuckyJoke.value = joke.value.value.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
        isLoading.value = false;
      }
    };
    return { isLoading, chuckyJoke, showJoke };
  },
};
</script>

<style></style>
