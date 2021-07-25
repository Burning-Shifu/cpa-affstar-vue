<template>
  <v-app-bar app color="primary" class="header">

    <div class="d-flex align-center header__inner" >
      <v-img
        alt="Company Logo"
        class="mr-2 logo"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="40"
      />

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            class="px-2"
            color="user-avatar primary "
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-avatar>
              <v-img src="../assets/user-avatar.png"></v-img>
            </v-list-item-avatar>

          </v-list-item>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Johny Silverhand</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="item in menuItems"
            :key="item.id"
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </div>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Header',
  props: {},

  data() {
    return {
      menuItems: [
        { title: "Мой профиль" },
        { title: "Выйти" }
      ],
      userName: 'Johny Silverhand'
    };
  },
}
</script>

<style scoped lang="scss">

.header {

  &__inner {
    width: 100%;
  }
}

.logo,
.user-avatar--text {
  flex: unset;
}

.user-avatar--text {
  margin-left: auto;
}

</style>
