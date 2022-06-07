<template>
  <div class="" v-for="(kinsman, index) in list">
    <div class="box">
      <RouterLink to="/show">
        <img class="rounded-circle" alt="{{ kinsman.name }}">
      </RouterLink>
      <h3 class="name">{{ fullName(kinsman) }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "KinsmansView",
  data() {
    return {
      list: [{
        id: String,
        active: true,
        birth_date: '',
        created_at: '',
        deleted_at: '',
        father_id: Number,
        gender: '',
        kin_id: Number,
        life_id: Number,
        middle_name: '',
        mother_id: Number,
        name: '',
        updated_at: ''
      }]
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
    },
    fullName(item) {
      return item.name + ' ' + item.middle_name;
    }
  }
}
</script>

<style scoped>

</style>