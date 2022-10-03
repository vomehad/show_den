<template>
    <v-col cols="4">
      <v-card
          class="mx-auto"
          max-width="344"
      >
      <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
      />
        <v-card-title>{{ kinsman.full_name }}</v-card-title>
        <v-card-subtitle>{{ kinsman.kin?.name }}</v-card-subtitle>
        <v-card-subtitle>{{ kinsman.life.birth_date }}</v-card-subtitle>

        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
              icon
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
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
                  <v-card-title>{{ `${kinsman.father.name} ${kinsman.father.middle_name}` }}</v-card-title>
                  <v-card-subtitle>{{ kinsman.father.kin.name }}</v-card-subtitle>
                  <v-card-subtitle>{{ kinsman.father.life.birth_date }}</v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="100px"
                  />
                  <v-card-title>{{ `${kinsman.mother.name} ${kinsman.mother.middle_name}` }}</v-card-title>
                  <v-card-subtitle>{{ kinsman.mother.kin.name }}</v-card-subtitle>
                  <v-card-subtitle>{{ kinsman.mother.life.birth_date }}</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>

</template>

<script>
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
    show: false,
  }),
  methods: {

  }
}
</script>

<style scoped>

</style>