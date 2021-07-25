<template>
  <div class="offers">
    <h1>Все офферы</h1>

    <table class="table">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
          <th>countriy</th>
        </tr>
        <tr v-for="offer in offersList" :key="offer.id">

          <td v-text="offer.id">{{offersList.id}}</td>
          <td v-text="offer.name">{{offersList.name}}</td>
          <td v-text="offer.description">{{offersList.description}}</td>
          <td v-text="offer.countriy">{{offersList.countriy}}</td>

        </tr>
      </table>
  </div>
</template>

<script>



export default {
  name: 'Offers',
  props: ['offersList'],

  // created() {
  //   console.log(this.offersList)
  // },

  mounted() {

    console.log(this.offersList);
  }
}
</script>
