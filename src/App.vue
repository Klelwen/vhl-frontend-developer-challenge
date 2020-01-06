<template>
  <div id="app">
    <container-main ref="main" />
    <coming-up ref="comingup" />
    <Bookmark ref="bookmark" />
    <div class="padding-container footer">
      <div class="container" style>
        <div class="link copyright">© 2017 University of Texas at Austin</div>
        <a href="/"><div class="link terms">Terms of Service</div></a>
        <div class="link help">
          Have a problem?
          <a href="/">Find help</a>.
        </div>
      </div>
    </div>
    <modal ref="modal" />
  </div>
</template>

<script>
import ContainerMain from "./components/ContainerMain.vue";
import ComingUp from "./components/ComingUp.vue";
import Bookmark from "./components/Bookmark.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: {
    ContainerMain,
    ComingUp,
    Bookmark,
    Modal
  }
};
</script>
