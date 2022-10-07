<template>
  <v-dialog
      v-model="$store.getters.getDialogVisible"
      max-width="800"
      @click:outside="hideDialog()"
  >
    <v-card>
      <v-card-title>{{ $store.getters.getCurrent.full_name }}</v-card-title>
      <v-card-text>
<!--        <v-img-->
<!--            :src="$store.getters.getCurrent.photo"-->
<!--        />-->
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "KinsmanDialog",
  data: () => ({
    visible: Boolean,
  }),
  methods: {
    ...mapGetters(['getCurrent', 'getDialogVisible']),
    ...mapMutations(['hideDialog']),
  }
}
</script>

<style scoped>

</style>