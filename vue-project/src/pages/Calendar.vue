<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <!-- {{ startDay() }} -->
    <section class="current">
      <h1>{{ currentMonthName }}</h1>
      <h1>{{ currentYear }}</h1>
    </section>
    <section class="days">
      <p v-for="day in days" :key="day" class="day">{{ day }}</p>
    </section>
    <section class="nums">
      <p v-for="num in startDay()" :key="num" class="num"></p>
      <p
        v-for="num in daysInMonth()"
        :key="num"
        class="num"
        :style="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="button">
      <button class="prev" @click="prev">Prev</button>
      <button class="next" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(), // why you add? because it returns the index that start from 0
      // currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Teu", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // 0 endicates the last date.
    },
    startDay() {
      console.log(this.currentMonth);
      console.log(this.currentYear);
      console.log(this.currentDate);
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth == 11) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      // console.log(
      //   new Date(this.currentYear, this.currentMonth, num).toDateString()
      // );
      // console.log(new Date().toDateString());
      const calendarFullDate=new Date(this.currentYear, this.currentMonth, num).toDateString();
      const currentFullDate=new Date().toDateString();
      return calendarFullDate=== currentFullDate? 'color: rgb(75,120,255)':'';
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>

<style scoped>
.calendar {
  border: 3px solid #73ad21;
  padding: 10px;
  /* margin:0; */
  text-align: center;
}
.days,
.nums {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  border: 3px solid #73ad21;
  padding: 10px;
}
.day,
.num {
  padding: 8px;
  margin: 10px;
  width: 11%;
  padding: 5px;
}
.current {
  justify-content: space-between;
  display: flex;
  font-weight: bold;
}
.button {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
}
.next,
.prev {
  background-color: rgb(25, green, blue);
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
}
</style>