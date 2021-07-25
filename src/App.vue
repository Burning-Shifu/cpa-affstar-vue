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
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";

Vue.use(Vuex)

export default {
  name: "App",
  store,

  components: {
    Header,
    Sidebar,
  },

  data() {
    return {
    };
  },

  methods: {},

};
</script>

<style scoped lang="scss">
.offer-list {
  list-style: none;
}
</style>
