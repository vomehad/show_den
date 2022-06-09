<template>
  <div class="container">
    <h2>{{ kinsman.full_name }}</h2>
    <div class="col-md-6 col-lg-4 item">
      <div class="box">
        <img class="rounded-circle" :src="getPhoto(kinsman)" :alt="kinsman.full_name">
        <div>{{ kinsman }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "KinsmansView",
  data() {
    return {
      kinsman: {
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
        full_name: '',
        updated_at: ''
      }
    };
  },
  props: {
    id: {
      type: Number,
      default: null,
    }
  },
  mounted() {
    this.getOne(this.$route.params.id);
  },
  methods: {
    async getOne(id) {
      try {
        const list = await axios.get('http://localhost/api/v1' + '/kinsmans/' + id);

        console.log(list.data.data);

        this.kinsman = list.data.data;
      } catch (e) {
        console.log(e);
      }
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
    max-height: 300px;
  }
</style>