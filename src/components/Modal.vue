<template>
  <div id="modal" v-if="show" class="modal">
    <div class="container box" ref="boxmodal">
      <div class="div-btn">
        <button @click.prevent.stop="close()" style="color: #d13052;">
          <i class="far fa-times-circle"></i>
        </button>
        <button
          class="button-modal"
          style="color: rgb(231, 174, 50);border-color: rgb(231, 174, 50);"
        >
          <div>
            <i class="fas fa-minus"></i>
          </div>
        </button>
        <button class="button-modal" style="color: #65a068; border-color: #65a068;">
          <div>
            <i class="fas fa-plus"></i>
          </div>
        </button>
      </div>
      <div class="div-info">
        <span class="left" :style="`color:${data.color[0]};background:${data.color[1]}`">{{data.a}}</span>
        <span class="left" style="background: #f5f5f5;color: #5a5a5a;">{{data.type}}</span>
        <span class="right" style="border: 1px solid rgb(232, 232, 232);margin-right: 0px;">online</span>

        <p class="sub">{{data.b}}</p>
        <h1>{{data.name}}</h1>
        <p style="font-size: 11px;padding-bottom: 10px;">Points: {{data.points}}</p>
        <p
          v-for="(described, index) in data.described"
          :key="index"
          style="padding-bottom: 10px;line-height: 20px;"
        >{{described}}</p>
        <div class="div-footer">
          <span
            class="left due-on"
          >{{(data.due ? 'Due ' : 'On ')}} {{ (data.due || data.on) | dateString}} by {{(data.due || data.on) | timeString}}</span>
          <button class="btn-v p15 right">Set Reminder</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const keyCodes = {
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
export default {
  name: "Modal",
  data() {
    return {
      show: false,
      data: null
    };
  },
  methods: {
    open(event, data) {
      this.data = data;
      this.show = true;
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        this.$refs[`boxmodal`].setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      });
    },

    close() {
      if (!this.show) return;
      this.$refs[`boxmodal`].setAttribute("style", "opacity: 0;");
      setTimeout(() => {
        this.show = false;
        document.body.style.overflow = "auto";
      }, 100);
    },

    onKeydown(event) {
      const key = event.keyCode;
      if (key === keyCodes.ESC) {
        // Close on esc
        this.close();
      }
    }
  },
  created() {
    window.addEventListener("keydown", this.onKeydown, true);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown, true);
  }
};
</script>

