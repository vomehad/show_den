<template>
  <v-container>
    <v-row>
      <Photo
          v-for="(photo, key) in photos"
          :photo="photo"
          :key="key"
      />
    </v-row>
  </v-container>
</template>

<script>
import Photo from "../components/photo/Photo";

export default {
  name: "PhotosPage",
  components: {
    Photo
  },
  data: () => ({
    photos: []
  }),
  mounted() {
     this.getImages();
  },
  methods: {
    async getImages() {
      try {
        const response = await this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        console.log(response);
        this.photos = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>