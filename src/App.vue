<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>

  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";

export default {
  name: 'App',
  components: {
    Navbar,
    EmptyLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout` ;
    }
  },
  data: () => ({
    //
  }),
};
</script>
