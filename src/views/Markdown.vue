<template>
  <h1 class="text-center my-3">Markdown App</h1>
  <section class="container d-flex w-100" style="height: 80vh">
    <article class="left w-50">
      <textarea
        class="p-3 w-100 h-100 form-control"
        :value="text"
        @input="update"
      >
      </textarea>
    </article>
    <article class="right w-50">
      <article
        class="p-3 w-100 h-100 form-control bg-light bg-gradient"
        v-html="markedText"
      ></article>
    </article>
  </section>
</template>
<script>
import { marked } from "marked";
export default {
  data() {
    return {
      text: "# header1\n**bold** \n*italic*",
      timeout: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task);
    },
    debounce(func, wait = 1000) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    },
  },
};
</script>
<style lang=""></style>
