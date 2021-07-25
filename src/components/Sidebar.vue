<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >

      <v-divider></v-divider>

      <v-list dense>
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

        <v-list-item icon @click.stop="mini = !mini">
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
  props: {
  },

  data() {
    return {
      drawer: true,
      items: [
        { title: "Все офферы", icon: "mdi-gamepad-circle", to: {name: 'Home'} },
        { title: "Статистика", icon: "mdi-chart-bar", to: {name: 'Statistics'} },
        {title: "Контакты", icon: "mdi-account-group-outline", to: {name: 'Contacts'}},
      ],
      mini: true,
    };
  },
};
</script>

<style scoped lang="scss"></style>
