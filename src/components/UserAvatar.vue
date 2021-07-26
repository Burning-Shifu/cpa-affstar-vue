<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item
        class="px-2 flex-unset"
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        <v-list-item-avatar class="mx-0">
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

</template>

<script>

export default {
  name: 'UserAvatar',

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
</style>
