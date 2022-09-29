<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
      <Photo
          v-for="(photo, key) in $store.getters.getAllPhotos"
          :photo="photo"
          :key="key"
      />
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
import Photo from "../components/photo/Photo";
import PhotoForm from "../components/photo/PhotoForm";
import PhotoDialog from "../components/photo/PhotoDialog";

export default {
  name: "PhotosPage",
  components: {
    Photo, PhotoForm, PhotoDialog
  },
  data: () => ({
    photos: [],
  }),
  mounted() {
    this.$store.dispatch('fetchPhotos');
  },
  methods: {
    addPhoto(photo) {
      // @TODO save photo
      this.photos.push(photo);
    },
  }
}
</script>

<style scoped>

</style>