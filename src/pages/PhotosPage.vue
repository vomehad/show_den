<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
      <Photo
          v-for="(photo, key) in mapPhotos()"
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
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "PhotosPage",
  components: {
    Photo, PhotoForm, PhotoDialog
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    ...mapGetters(['getAllPhotos']),
    addPhoto(photo) {
      // @TODO save photo
      this.photos.push(photo);
    },
    mapPhotos() {
      return this.getAllPhotos();
    }
  }
}
</script>

<style scoped>

</style>