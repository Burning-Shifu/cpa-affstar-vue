import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#84e9f4',
        secondary: '#51459f',
        accent: '#fc2b94',
        bg: '#f9f9fb'
      },
    },
  },
});
