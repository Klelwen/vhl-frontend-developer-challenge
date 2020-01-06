<template>
  <div class="btn-group right">
    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
      {{ selectedOption.name }}
      <span class="caret"></span>
    </li>
    <ul class="dropdown-menu" v-if="showMenu">
      <li v-for="(option, idx) in options" :key="idx">
        <a href="javascript:void(0)" @click="updateOption(option)">{{ option.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: {
        id: "",
        name: ""
      },
      showMenu: false
    };
  },
  props: {
    options: {
      type: [Array, Object]
    },
    selected: {},
    placeholder: [String]
  },

  mounted() {
    this.selectedOption = this.selected;
  },

  methods: {
    updateOption(option) {
      this.selectedOption = option;
      this.showMenu = false;
      this.$emit("updateOption", this.selectedOption);
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    clickHandler(event) {
      const { target } = event;
      const { $el } = this;

      if (!$el.contains(target)) {
        this.showMenu = false;
      }
    }
  }
};
</script>

