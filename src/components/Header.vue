<template>
  <v-app-bar app color="secondary" class="header">

    <v-container>
      <div class="d-flex align-center header__inner" >

        <header-notifications />
        <user-avatar />

      </div>
    </v-container>
  </v-app-bar>
</template>

<script>

import UserAvatar from './UserAvatar.vue';
import HeaderNotifications from './HeaderNotifications.vue';

export default {
  name: 'Header',
  components: { UserAvatar, HeaderNotifications },
}

</script>

<style scoped lang="scss">

.header {

  &__inner {
    width: 100%;
  }

  // background-color: #1976D2;
}

</style>
