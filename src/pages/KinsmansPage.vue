<template>
  <v-container>
    <v-row>
      <Kinsman
          v-for="(kinsman, key) in mapKinsmans()"
          :kinsman="kinsman"
          :key="key"
      />
    </v-row>
    <KinsmanDialog/>
  </v-container>
</template>

<script>
import Kinsman from "../components/kinsmans/Kinsman";
import {mapActions, mapGetters} from "vuex";
import KinsmanDialog from "../components/kinsmans/KinsmanDialog";

export default {
  name: "KinsmansPage",
  components: {
    Kinsman, KinsmanDialog
  },
  mounted() {
     this.fetchKinsmans();
  },
  methods: {
    ...mapActions(['fetchKinsmans']),
    ...mapGetters(['getAllKinsmans']),
    mapKinsmans() {
      return this.getAllKinsmans();
    }
  }
}
</script>

<style scoped>

</style>