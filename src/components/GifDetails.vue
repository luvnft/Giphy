<template>
  <div>
    <h1 class="text-4xl font-bold mb-4">GIF Details</h1>
    <div>
      <img
        :src="selectedGif.images.original.url"
        :alt="selectedGif.title"
        class="mb-4"
      />
      <div class="text-lg">
        <p><strong>Username:</strong> {{ selectedGif.username || "N/A" }}</p>
        <p><strong>Rating:</strong> {{ selectedGif.rating || "N/A" }}</p>
        <!-- Add more details as needed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedGif: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
