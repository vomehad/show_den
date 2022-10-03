<template>
  <div>
    {{ rawHtml }}
  </div>
</template>

<script>
import {API_URL} from "../../main";

export default {
  name: "YaTokenPage",
  data: () => ({
    rawHtml: '',
  }),
  mounted() {
    this.fetchPage();
  },
  methods: {
    async fetchPage() {
      try {
        const response = await this.axios.get(API_URL + 'yandex/login');
        this.rawHtml = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>