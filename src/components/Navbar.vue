<template>
  <v-container fluid>
    <v-app-bar
        color="deep-purple accent-4"
        dark
    >
      <v-spacer/>
      <v-btn outlined class="ml-3">
        <router-link to="/">Main</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photo">Photos</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/kinsman">Kinsmans</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/palette">Palette</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/poker">Poker</router-link>
      </v-btn>

    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>