<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :expand-variant="mini"
      permanent
      app
    >

      <v-list-item
        class="flex-unset pa-1"
      >
        <v-img
          alt="Company Logo"
          class="mr-2 flex-unset"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </v-list-item>

      <v-list class="sidebar-list" dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          tag="a"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item icon @click="resizeNavbar">
          <v-list-item-icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Свернуть</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

export default {
  name: "Sidebar",

  data() {
    return {
      drawer: true,
      items: [
        { title: "Все офферы", icon: "mdi-gamepad-circle", to: {name: 'Home'} },
        { title: "Статистика", icon: "mdi-chart-bar", to: {name: 'Statistics'} },
        { title: "Контакты", icon: "mdi-account-group-outline", to: {name: 'Contacts'} },
      ],
      mini: null,
    };
  },

  methods: {
    shrinkNavbar() {
      const navBar = document.querySelector('nav'),
            main = document.querySelector('main'),
            header = document.querySelector('header');

      this.mini = true;
      navBar.style.width="56px";
      navBar.classList.add('v-navigation-drawer--mini-variant');
      main.style.paddingLeft="56px";
      header.style.left="56px";
    },

    expandNavbar() {
      // дублирую переменные, т.к. если их вывести вне экземпляра - у них значение null, пофиксить не смогла
      const navBar = document.querySelector('nav'),
            main = document.querySelector('main'),
            header = document.querySelector('header');

      this.mini = false;
      navBar.style.width="256px";
      navBar.classList.remove('v-navigation-drawer--mini-variant');
      main.style.paddingLeft="256px";
      header.style.left="256px";
    },

    resizeNavbar() {
      if (!this.mini) {
        this.shrinkNavbar();
        localStorage.setItem('mini', true);
      } else {
        this.expandNavbar();
        localStorage.setItem('mini', false);
      }
    },
  },

  mounted() {
    console.log(JSON.parse(localStorage.getItem('mini')))
    if (JSON.parse(localStorage.getItem('mini'))  === true) {
      this.shrinkNavbar();
    } else if (Boolean(localStorage.getItem('mini'))  === false){
      this.expandNavbar();
    }
  }

};
</script>

<style scoped lang="scss">

.sidebar-list {
  position: absolute;
  top: 15%;
  width: 100%;
}

</style>
