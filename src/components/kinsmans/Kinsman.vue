<template>
    <v-col cols="4">
      <v-card
          class="mx-auto"
          max-width="344"
      >
      <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          @click="openDetail"
      />
        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
              @click="switchAdd"
          >Добавить фотографию</v-btn>
          <v-spacer></v-spacer>
          <v-btn
              icon
              @click="switchAdd"
          ><v-icon>{{ showAdd ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="showAdd">
            <v-btn
                icon
                @click="attachPhoto"
            ><v-icon>mdi-contacts</v-icon></v-btn>
          </div>
        </v-expand-transition>

        <v-card-title>{{ kinsman.full_name }}</v-card-title>
        <v-card-subtitle>{{ kinsman.kin?.name }}</v-card-subtitle>
        <v-card-subtitle>{{ kinsman.life?.birth_date }}</v-card-subtitle>
        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
              @click="switchMore"
          >Больше информации</v-btn>
          <v-spacer></v-spacer>
          <v-btn
              icon
              @click="switchMore"
          ><v-icon>{{ showMore ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="showMore">
            <v-divider></v-divider>
            <v-row>
              <v-col cols="6"
                     class="mx-auto"
                     max-width="172"
              >
                <v-card>
                  <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="100px"
                  />
                  <v-card-title>{{ `${kinsman.father?.name} ${kinsman.father?.middle_name}` }}</v-card-title>
                  <v-card-subtitle>{{ kinsman.father?.kin?.name }}</v-card-subtitle>
                  <v-card-subtitle>{{ kinsman.father?.life?.birth_date }}</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="100px"
                  />
                  <v-card-title>{{ `${kinsman.mother?.name} ${kinsman.mother?.middle_name}` }}</v-card-title>
                  <v-card-subtitle>{{ kinsman.mother?.kin?.name }}</v-card-subtitle>
                  <v-card-subtitle>{{ kinsman.mother?.life?.birth_date }}</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>

</template>

<script>
import {mapMutations, mapActions} from "vuex";

export default {
  name: "Kinsman",
  props: {
    kinsman: {
      id: Number,
      name: '',
      full_name: '',
      middle_name: '',
      kin: {
        id: Number,
        name: '',
      },
      father: {
        id: Number,
        name: '',
        middle_name: '',
        kin: {
          id: Number,
          name: '',
          slug: '',
        },
        life: {
          id: Number,
          birth_date: '',
        }
      },
      mother: {
        id: Number,
        name: '',
        middle_name: '',
        kin: {
          id: Number,
          name: '',
          slug: '',
        },
        life: {
          id: Number,
          birth_date: '',
        }
      },
      life: {
        id: Number,
        birth_date: String,
      },
      gender: '',
    }
  },
  data: () => ({
    showMore: false,
    showAdd: false,
  }),
  methods: {
    ...mapMutations(['setCurrentKinsman', 'showDialog']),
    ...mapActions(['attachPhoto']),
    openDetail() {
      this.setCurrentKinsman(this.kinsman);
      this.showDialog();
    },
    switchMore() {
      this.showMore = !this.showMore;
    },
    switchAdd() {
      this.showAdd = !this.showAdd;
    },
    attachPhoto() {
      const reader = new FileReader()
      reader.onload = () => {
        let photo = {
          title: this.title,
          url: reader.result
        }
        this.attachPhoto(photo, this.kinsman.id);
      }
      reader.readAsDataURL(this.img);
    }
  }
}
</script>

<style scoped>

</style>