<template>
  <div class="padding-container comingup" ref="comingup">
    <h1>Coming Up</h1>
    <div class="right count-type">
      <span class="right">{{countType('assignment')}} Assignments</span>
      <span class="right">{{countType('quiz')}} Quiz</span>
      <span class="right">{{countType('exam')}} Exams</span>
    </div>
    <section>
      <div
        class="container"
        v-for="data in data"
        :key="data.id"
        @click.prevent.stop="$parent.$refs.modal.open($event, data);"
      >
        <span
          class="left span-a"
          :style="`color:${data.color[0]};background:${data.color[1]}`"
        >{{data.a}}</span>
        <span class="right span-type">{{data.type}}</span>
        <div class="left comingup-title">{{data.name}}</div>
        <span
          class="left due-on"
        >{{(data.due ? 'Due ' : 'On ')}} {{ (data.due || data.on) | dateString}}</span>

        <button class="left open-modal">...</button>
      </div>
    </section>

    <button class="btn-v view-calendar">View Calendar</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ComingUp",
  data() {
    return {
      data: undefined
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      axios.get("/datasource/data.json").then(r => {
        this.data = r.data;
      });
    },
    countType(type) {
      if (this.data == undefined) return;
      let count = 0;
      this.data.map(el => {
        if (el.type == type) {
          count++;
        }
      });
      return count;
    }
  }
};
</script>
