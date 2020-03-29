<template>
  <div class="app-nav">
    <div class="is-user flex space-between align-center" v-if="!!user">
      <div class="logout" @click="$store.dispatch('logout')">
        {{ $t('logout') }}
      </div>
      <div class="user-name">
        {{ `${$t('hello')}, ${user.displayName}` }}
      </div>
    </div>
    <div class="no-user flex space-between align-center">
      <div></div>
      <div class="login" v-if="!user" @click="login">
        {{ $t('login') }}
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => this.$store.dispatch('login', res))
        .catch(err => this.$util.appCatch(this.$store, err));
    }
  }
};
</script>
<style lang="scss" scoped>
.app-nav {
  padding: 0 20px;
  height: 60px;
  font-size: 20px;

  @media (min-width: 880px) {
    font-size: 36px;
    height: 100px;
  }

  .flex {
    height: 100%;
  }
}

.user-name {
  direction: rtl;
}
</style>
