<template>
  <v-container>
    <v-row>
      <Kinsman
          v-for="(kinsman, key) in kinsmans"
          :kinsman="kinsman"
          :key="key"
      />
    </v-row>
  </v-container>
</template>

<script>
import Kinsman from "../components/Kinsman";
import {API_URL} from "../main";

export default {
  name: "KinsmansPage",
  components: {
    Kinsman
  },
  data: () => ({
    kinsmans: []
  }),
  mounted() {
     this.fetchKinsmans();
  },
  methods: {
    async fetchKinsmans() {
      try {
        const response = await this.axios.get(API_URL + 'kinsmans')
        console.log(response);
        this.kinsmans = response.data.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>