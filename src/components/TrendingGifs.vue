<template>
  <div class="bg-black text-white">
    <h1 class="text-4xl font-bold mb-4">🅰️GIF</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="gif in gifs" :key="gif.id" @click="expandGif(gif)" class="border-white border">
        <img
          :src="gif.images.fixed_height.url"
          :alt="gif.title"
          class="cursor-pointer"
        />
      </div>
    </div>
    <div class="mt-4">
      <p>Trending Giphy GIFs for your Arvrtising campaign.</p>
    </div>
    <button @click="expandGif(selectedGif)">Expand GIF</button>

    <!-- Gif Modal -->
    <GifModal v-if="isModalOpen" :gif="selectedGif" @close="closeModal" />
    
    <!-- Footer Section -->
    <div class="mt-8 flex justify-between">
      <div>Powered by <a href="https://arvrtise.com" class="text-white underline">🅰️rvrtise</a></div>
      <div><a href="https://ateam.arvrtise.com" class="text-white underline">Subscribe to 🅰️-Team PPV Discord</a></div>
    </div>
  </div>
</template>

<script>
import GifModal from "./GifModal.vue";

export default {
  components: {
    GifModal,
  },
  data() {
    return {
      gifs: [],
      isModalOpen: false,
      selectedGif: null,
    };
  },

  mounted() {
    this.fetchTrendingGifs();
  },
  methods: {
    async fetchTrendingGifs() {
      try {
        const response = await this.$axios.get("/gifs/trending");
        this.gifs = response.data.data;
      } catch (error) {
        console.error("Error fetching trending GIFs:", error);
      }
    },
    expandGif(gif) {
      this.selectedGif = gif;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
