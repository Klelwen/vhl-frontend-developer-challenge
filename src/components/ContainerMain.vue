<template>
  <div class="container-main">
    <div class="main-nav" v-scroll="handleScroll">
      <img class="logo" alt="Logo VHL Sistemas" src="./../assets/logo.png" />
      <span class="search" style="display:none;">
        <i class="fas fa-search icon"></i>
        <input type="text" v-model="search" placeholder="What are you looking for?" />
      </span>
      <span class="span-icons right" style="color: #ab5b16;background: #f8eee6;">
        <i class="fas fa-align-left fa-flip-vertical"></i>
      </span>
      <span class="span-icons right" style="color: #c7c7c7;">
        <i class="fas fa-bell"></i>
      </span>
    </div>
    <div class="padding-container" style="height: 300px;max-height: 80vh;">
      <p class="container-date">{{ new Date | dateString }}</p>
      <span class="search">
        <i class="fas fa-search icon"></i>
        <input type="text" v-model="search" placeholder="What are you looking for?" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      search: undefined
    };
  },
  methods: {
    handleScroll: function(evt, el) {
      if (window.scrollY > 210) {
        el.classList.add("main-fixed");
        document.body.style.paddingTop = "76px";
      } else {
        el.classList.remove("main-fixed");
        document.body.style.paddingTop = "0";
      }

      if (window.scrollY > this.$parent.$refs.bookmark.$el.offsetTop - 400) {
        this.$parent.$refs.bookmark.$el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      } else {
        this.$parent.$refs.bookmark.$el.setAttribute("style", "opacity: 0;");
      }
      let height = 1040 - (553 - this.$parent.$refs.bookmark.$el.offsetHeight);
      if (window.innerHeight >= height) {
        this.$parent.$refs.bookmark.$el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }

      return false;
    }
  }
};
</script>

