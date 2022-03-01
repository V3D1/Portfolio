<template>
  <h1 class="text-center my-4">DC Heroes: {{ heroesCount }}</h1>

  <ol class="list-group list-group-numbered m-auto" style="width: 500px">
    <li
      class="list-group-item"
      v-for="(hero, index) in dcHeroes"
      :key="hero.name"
    >
      {{ hero.name }}
      <button
        class="btn-close"
        aria-label="Close"
        @click="removeHero(index)"
      ></button>
    </li>
  </ol>
  <form class="row m-auto mt-3" style="width: 500px" @submit.prevent="addHero">
    <!-- trim usuwa spacje  -->
    <div class="col-md-6 p-0">
      <input
        class="form-control"
        type="text"
        v-model.trim="newHero"
        placeholder="Type a new hero!"
        ref="newHeroRef"
      />
    </div>
    <div class="col-md-6 p-0">
      <button class="btn btn-primary mx-2">Add Hero!</button>
    </div>
  </form>
</template>
<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeroes = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arrow" },
      { name: "Superman" },
      { name: "Spiderman" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });
    const heroesCount = computed({
      get: () => dcHeroes.value.length,
    });
    function removeHero(index) {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i !== index);
    }
    function addHero() {
      if (newHero.value !== "") {
        dcHeroes.value.push({ name: newHero.value });
        newHero.value = "";
      } else {
        alert("Firstly name a hero!");
      }
    }

    return { dcHeroes, newHero, removeHero, addHero, newHeroRef, heroesCount };
  },
};
</script>
<style lang=""></style>
