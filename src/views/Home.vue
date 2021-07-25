<template>
  <div class="offers">
    <h1>Все офферы</h1>

    <table class="table">
        <tr>
          <th>ID</th>
          <th>Фото</th>
          <th>Название</th>
          <th>Страны</th>
          <th>Категория</th>
          <th>Оплата</th>
          <th>Ср. апрув</th>
          <th>Ср. выплата</th>
        </tr>
        <tr v-for="offer in offersList" :key="offer.id">

          <td v-text="offer.id">{{offersList.id}}</td>
          <td v-text="offer.name">{{offersList.name}}</td>
          <td v-text="offer.country">{{offersList.country}}</td>
<!-- "offersList.0.goals.0.country" -->
        </tr>
      </table>
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
    store.commit('getRequest')
  },

}
</script>
