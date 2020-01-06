<template>
  <div class="padding-container box bookmark">
    <h1>Bookmarks</h1>
    <dropdown :options="dropOption" :selected="option" v-on:updateOption="setOption"></dropdown>

    <div class="container" v-for="bookmark in isBookmarks(bookmarks, option.id)" :key="bookmark.id">
      <div class="top">
        <span :style="`color:${bookmark.color[0]};background:${bookmark.color[1]}`">{{bookmark.a}}</span>
        <span style="background: #f5f5f5;color: #5a5a5a;">{{bookmark.type}}</span>
        <label>{{(bookmark.uploaded ? 'Uploaded ' : 'Created ')}} {{ (bookmark.uploaded || bookmark.created) | dateString(false)}}</label>
      </div>
      <div class="field">
        <span class="padding-min">{{bookmark.name}}</span>
        <span class="right padding-min">
          <a v-if="bookmark.id == 1" :href="bookmark.link" :download="bookmark.name">
            <i style="margin-right: 10px;" class="fas fa-cloud-download-alt"></i>Download PDF
          </a>
          <a v-if="bookmark.id == 2" :href="bookmark.link" target="_blank">
            <i style="margin-right: 10px;" class="fas fa-file-alt"></i>View Google Doc
          </a>
          <a v-if="bookmark.id == 3" href>
            <i style="margin-right: 10px;" class="fas fa-cloud-download-alt"></i>View Module
          </a>
        </span>
      </div>
    </div>

    <button class="btn-v" disabled>Load More</button>
  </div>
</template>

<script>
import axios from "axios";
import dropdown from "./Dropdown.vue";

export default {
  name: "Bookmark",
  components: {
    dropdown
  },
  data() {
    return {
      bookmarks: undefined,
      dropOption: [
        {
          id: 0,
          name: "ALL BOOKMARKS"
        },
        {
          id: 1,
          name: "RESOURCE"
        },
        {
          id: 2,
          name: "MODULE"
        }
      ],
      option: undefined
    };
  },
  created() {
    this.getBookmarks();
    this.option = this.dropOption[0];
  },
  methods: {
    getBookmarks() {
      axios.get("/datasource/bookmark.json").then(r => {
        this.bookmarks = r.data;
      });
    },
    setOption(payload) {
      this.option = payload;
    },
    isBookmarks(data, id) {
      if (!data) return;
      return data.filter(x => {
        if (id == 1) {
          if (x.type === "resource") return true;
          return false;
        } else if (id == 2) {
          if (x.type === "module") return true;
          return false;
        } else {
          return true;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  overflow: hidden;
}
</style>
