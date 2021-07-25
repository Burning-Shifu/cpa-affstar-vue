<template>
  <v-app>
    <Header />
    <Sidebar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Vue from 'vue';
// import Vuex from 'vuex';
import axios from 'axios';
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

// Vue.use(Vuex)

export default {
  name: "App",

  components: {
    Header,
    Sidebar,
  },

  // store: store,

  data() {
    return {
      // offersList: [],
    };
  },

  methods: {
    async getResource() {
      await axios
        .get('https://api.affstar.com/api/public/offers')
        .then(response => {
          this.offersList = response.data.data;
        })
        .then(() => {
          this.$router.push({
            name: "Home",
            params: { offersList: this.offersList }
          });
        })
        .catch(error => console.log(error));

    },

    // handleClick() {
    //   this.$router.push({
    //     name: "Home",
    //     params: { offersList: this.offersList }
    //   });
    // }
  },

  // computed: {
  //   handleClick() {
  //     return this.$router.push({
  //         name: "Home",
  //         params: { offersList: this.offersList }
  //       });
  //   }
  // },

  created() {
    this.getResource();
  },

  mounted() {

    // console.log(this.offersList);
    // this.$router.push({
    //   name: "Home",
    //   params: { offersList: this.offersList }
    // });

  }

};
</script>
