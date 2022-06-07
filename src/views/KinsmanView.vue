<template>

</template>

<script>
import axios from 'axios';

export default {
  name: "KinsmansView",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      try {
        const list = await axios.get('http://localhost/api/v1' + '/kinsmans');

        console.log(list.data.data);

        this.list = list.data.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>