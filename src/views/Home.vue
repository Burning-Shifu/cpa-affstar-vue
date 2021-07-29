<template>
  <div class="offers">

    <v-container>

      <ul class="offer-list">
        <li class="offer-list__item">
          <v-container>
            <v-row no-gutters class="flex-nowrap align-center">
              <v-col class="px-3 offer-list__tile offer-list__tile--id">
                ID
              </v-col>
              <v-col class="px-3 offer-list__tile offer-list__tile--photo">
                Фото
              </v-col>
              <v-col cols="3" class="px-3 offer-list__tile">
                Название
              </v-col>
              <v-col class="px-3 offer-list__tile offer-list__tile--flags">
                Страны
              </v-col>
              <v-col class="px-3 offer-list__tile">
                Категория
              </v-col>
              <v-col class="px-3 offer-list__tile">
                Оплата
              </v-col>
              <v-col class="px-3 offer-list__tile">
                Ср. апрув
              </v-col>
              <v-col class="px-3 offer-list__tile">
                Ср. выплата
              </v-col>
            </v-row>
          </v-container>

        </li>

        <li v-for="offer in offersList" :key="offer.id" class="mb-4">
          <v-card
            elevation="1"
            outlined
          >
            <v-container>
              <v-row no-gutters class="flex-nowrap align-center">
                <v-col
                  v-text="offer.id"
                  class="px-3 offer-list__tile offer-list__tile--id"
                >
                  {{offersList.id}}
                </v-col>
                <v-col class="px-3 offer-list__tile offer-list__tile--photo">
                  Фото
                </v-col>
                <v-col
                  v-text="offer.name"
                  cols="3"
                  class="px-3 offer-list__tile link"
                  tag="a"
                  href="#"
                >
                  {{offersList.name}}
                </v-col>
                <v-row class="pa-3 mx-1 offer-list__tile offer-list__tile--flags">
                  <span
                    v-for="goal in offer.goals"
                    :key="goal.id"
                    class="pr-1">
                    <span v-text="goal.country">
                      {{goal.country.country}}
                    </span>
                  </span>
                </v-row>
                <v-col class="px-3 offer-list__tile">
                  Здоровье, Красота
                </v-col>
                <v-col class="px-3 offer-list__tile">
                  CPA
                </v-col>
                <v-col class="px-3 offer-list__tile">
                  26%
                </v-col>
                <v-col class="px-3 offer-list__tile">
                  950 RUB
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </li>
      </ul>
    </v-container>

  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Offers',

  computed: {
    offersList() {
      return this.$store.state.offersList
    }
  },

  created() {
    store.dispatch('getRequest');
  },

}
</script>

<style scoped lang="scss">
.offers {
  background-color: #f9f9fb;
}
.offer-list {
  list-style: none;
  padding-left: 0;

  &__tile {
    color: #616161;

    &--id {
      max-width: 60px;
      width: 100%;
    }
    &--photo {
      max-width: 110px;
      width: 100%;
    }
    &--flags {
      max-width: 100px;
    }
  }
}

</style>
