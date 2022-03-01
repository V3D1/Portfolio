<template>
  <h1 class="text-center my-4">Re-usable Modal</h1>
  <div class="col text-center">
    <Modal v-if="isModalFirstOpen" @close="isModalFirstOpen = false">
      <template v-slot:title>Title of Modal 1</template>
      <template v-slot:body>
        <p>TEST</p>
        <div>Provide some data to the MODAL 1</div>
      </template>
    </Modal>
    <button @click="isModalFirstOpen = true" class="btn btn-danger mx-2">
      Red Modal
    </button>

    <Modal v-if="isModalSecondOpen" @close="isModalSecondOpen = false">
      <template v-slot:title>Title of Modal 2</template>
      <template v-slot:body>
        <p>TEST</p>
        <div>Provide some data to the MODAL 2</div>
      </template>
    </Modal>
    <button @click="isModalSecondOpen = true" class="btn btn-primary mx-2">
      Blue Modal
    </button>
  </div>
</template>
<script>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  setup() {
    const isModalFirstOpen = ref(false);
    const isModalSecondOpen = ref(false);
    return { isModalFirstOpen, isModalSecondOpen };
  },
};
</script>
<style lang=""></style>
