<template>
  <v-dialog
      v-model="$store.getters.getDialogVisible"
      max-width="800"
      @click:outside="hideDialog()"
  >
    <v-card>
      <v-card-title>{{ full_title }}</v-card-title>
      <v-card-text>
        <v-img
            :src="$store.getters.getCurrentPhoto.url"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "PhotoDialog",
  data: () => ({
    visible: Boolean,
  }),
  computed: {
    full_title() {
      return `name - ${this.getCurrentPhoto().title}`;
    }
  },
  methods: {
    ...mapGetters(['getCurrentPhoto', 'getDialogVisible']),
    ...mapMutations(['hideDialog']),
  }
}
</script>

<style scoped>

</style>