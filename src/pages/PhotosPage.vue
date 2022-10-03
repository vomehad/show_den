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
import {API_URL} from "../main";

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
    async addPhoto(photo) {
      try {
        const data = new FormData();

        data.append('name', photo.title);
        data.append('file', photo.url);

        const response = await this.axios.post(API_URL + 'photo', data);

        console.log(response);
      } catch (e) {
        console.log('error', e.data)
      }

      // this.photos.push(photo);
    },
    mapPhotos() {
      return this.getAllPhotos();
    }
  }
}
</script>

<style scoped>

</style>