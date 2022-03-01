<template>
  <h1 class="text-center my-4">CALCULATOR</h1>
  <div class="my-3 text-center mx-auto" style="width: 250px">
    <p
      class="text-end fs-1 mx-3 overflow-hidden"
      style="width: 220px; height: 50px"
    >
      {{ currentNum }}
    </p>
    <div style="height: 30px">
      <small v-if="selectedOperations"
        >{{ prevNum }} {{ selectedOperations }} {{ currentNum }}</small
      >
    </div>
    <div class="col">
      <button
        @click="pressed('1')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        1
      </button>
      <button
        @click="pressed('2')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        2
      </button>
      <button
        @click="pressed('3')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        3
      </button>
      <button
        @click="pressed('+')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        +
      </button>
    </div>
    <div class="col">
      <button
        @click="pressed('4')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        4
      </button>
      <button
        @click="pressed('5')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        5
      </button>
      <button
        @click="pressed('6')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        6
      </button>
      <button
        @click="pressed('-')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        -
      </button>
    </div>
    <div class="col">
      <button
        @click="pressed('7')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        7
      </button>
      <button
        @click="pressed('8')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        8
      </button>
      <button
        @click="pressed('9')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        9
      </button>
      <button
        @click="pressed('*')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        *
      </button>
    </div>
    <div class="col">
      <button
        @click="pressed('c')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        C
      </button>
      <button
        @click="pressed('0')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        0
      </button>
      <button
        @click="pressed('=')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        =
      </button>
      <button
        @click="pressed('/')"
        class="btn btn-secondary btn-lg p-3 m-2 border"
      >
        /
      </button>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperations = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }
    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }
    function applyOperation(value) {
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperations.value = value;
    }
    function calculate() {
      if (selectedOperations.value === "*") multiply();
      else if (selectedOperations.value === "/") divide();
      else if (selectedOperations.value === "-") substract();
      else if (selectedOperations.value === "+") sum();

      prevNum.value = "";
      selectedOperations.value = "";
    }
    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }
    function substract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }

    function clear() {
      currentNum.value = "";
      prevNum.value = "";
      selectedOperations.value = "";
    }

    const handleKeydown = (e) => pressed(e.key);
    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    });

    return {
      pressed,
      currentNum,
      prevNum,
      selectedOperations,
    };
  },
};
</script>
<style lang=""></style>
