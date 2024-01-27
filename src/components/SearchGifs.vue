<template>
  <div>
    <h1 class="text-4xl font-bold mb-4">Search GIFs</h1>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search GIFs"
      class="p-2 mb-4 border"
    />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div v-for="gif in searchResults" :key="gif.id" @click="expandGif(gif)">
        <img
          :src="gif.images.fixed_height.url"
          :alt="gif.title"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  watch: {
    searchQuery() {
      this.debouncedSearch();
    },
  },
  methods: {
    debouncedSearch: _.debounce(async function () {
      await this.searchGifs();
    }, 500),
    async searchGifs() {
      try {
        const response = await this.$axios.get("/gifs/search", {
          params: {
            q: this.searchQuery,
          },
        });
        this.searchResults = response.data.data;
      } catch (error) {
        console.error("Error searching GIFs:", error);
      }
    },
    expandGif(gif) {
      // Add logic to expand and show details (username, rating, etc.)
      console.log("Expanded GIF:", gif);
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
