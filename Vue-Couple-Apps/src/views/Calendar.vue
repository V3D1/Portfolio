<template>
  <div class="col-8 mx-auto">
    <h1 class="my-5 text-center">Vue Calendar</h1>
    <section class="mx-4 my-3 d-flex justify-content-between">
      <h2 class="">{{ currentMonthName }}</h2>
      <h2 class="">{{ currentYear }}</h2>
    </section>
    <section class="d-flex text-center">
      <p
        class="fs-2 w-10 h-10"
        v-for="day in days"
        :key="day"
        style="width: 14.28%; height: 10%"
      >
        {{ day }}
      </p>
    </section>
    <section class="d-flex flex-wrap text-center">
      <p
        v-for="num in startDay()"
        :key="num"
        style="width: 14.28%; height: 10%"
      ></p>
      <p
        v-for="num in daysInMonth(currentYear, currentMonth - 1)"
        :key="num"
        :class="currentDateClass(num)"
        style="width: 14.28%; height: 10%"
      >
        {{ num }}
      </p>
    </section>
    <section class="my-3 d-flex justify-content-between">
      <button class="btn btn-primary" @click="prev">Prev</button>
      <button class="btn btn-primary" @click="next">Next</button>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ["Nd", "Pon", "Wt", "Śr", "Czw", "Pt", "So"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
    prev() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    next() {
      if (this.currentMonth == 12) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth - 1,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate == currentFullDate ? "text-danger" : "";
    },
  },

  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth - 1).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>
<style lang=""></style>
