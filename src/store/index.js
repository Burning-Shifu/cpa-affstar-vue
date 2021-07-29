import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    offersList: []
  },

  mutations: {
    getRequest(state) {
      axios.get('https://api.affstar.com/api/public/offers')
        .then(response => {
          state.offersList = response.data.data;
        })
        .catch(error => console.log(error));
    }
  },
  actions: {
    getRequest({ commit }) {
      commit('getRequest')
    }
  },
  modules: {
  }
})
