<template>
  <div class="" v-for="(kinsman, index) in list">
    <div class="box">
      <RouterLink :to="{ path: '/show/' + index }" >
        <img class="rounded-circle" :src="getPhoto(kinsman)" :alt="kinsman.full_name">
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
        updated_at: '',
        photo: {
          url: ''
        }
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
    },
    getPhoto(kinsman) {
      if (kinsman.photo !== null) {
        return kinsman.photo?.url;
      }

      if (kinsman.gender === 'Мужской') {
        return 'http://localhost/storage/img/man.jpg';
      }

      if (kinsman.gender === 'Женский') {
        return 'http://localhost/storage/img/woman.jpg';
      }

      return null;
    }
  }
}
</script>

<style scoped>
  img {
    max-height: 100px;
  }
</style>