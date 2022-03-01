<template>
  <section
    @click="close"
    class="bg-dark position-fixed top-0 start-0 w-100 h-100"
    style="z-index: 10; opacity: 50%"
  ></section>
  <div
    class="row position-absolute top-50 start-50 translate-middle bg-light border rounded-3 align-items-center"
    style="z-index: 20; width: 300px; height: auto"
  >
    <h1 class="text-primary">
      <slot name="title"></slot>
    </h1>
    <main>
      <slot name="body"></slot>
    </main>
  </div>
</template>
<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  },
};
</script>
<style lang=""></style>
