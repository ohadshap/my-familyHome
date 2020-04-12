<template>
  <div class="app-nav">
    <div class="flex space-between align-center">
      <div>
        <div class="menu" v-if="options.length > 0">
          <div @click="openDropdown">תפריט</div>
          <Dropdown
            parent-css-selector="menu"
            ref="dropdown"
            label="תפריט"
            :drop-down-items="options"
            @input="handleSelectedInput"
          />
        </div>
      </div>
      <div class="user-name" v-if="user" @click="logout">
        {{ `${$t('hello')}, ${user.displayName}` }}
      </div>
      <div class="login" v-if="!user" @click="login">
        {{ $t('login') }}
      </div>
    </div>
    <AppDialog ref="homeLinkDialog">
      <div class="home-link">
        {{ `${getAppDomain()}/view-home/${homeId}` }}
        <div>
          <img @click="copy" src="@/assets/img/copy.png" alt="" />
        </div>
      </div>
    </AppDialog>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'
import Dropdown from '@/components/Dropdown';
import AppDialog from '@/components/AppDialog';
const firebaseConfig = {
    apiKey: "AIzaSyA5NWYyo2nFyB4KmZK67_hENH5TIl4ysGs",
    authDomain: "my-family-home.firebaseapp.com",
    databaseURL: "https://my-family-home.firebaseio.com",
    projectId: "my-family-home",
    storageBucket: "my-family-home.appspot.com",
    messagingSenderId: "211291684034",
    appId: "1:211291684034:web:7e4b9371c073639c914f5b",
    measurementId: "G-PR7WPC91CE"
};
const fire = firebase.initializeApp(firebaseConfig);

export default {
  components: { Dropdown, AppDialog },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  data() {
    return {
      homeId: null,
      options: []
    };
  },
  mounted() {
    this.setOptions();
  },
  methods: {
    setOptions() {
      const options = [];
      if (this.$route.name === 'edit-home') {
        options.push({
          value: 'SHARE',
          label: 'צור לינק לבית'
        });
      }
      if (this.$route.name === 'view-home') {
        options.push({
          value: 'REPORT',
          label: 'דווח על בית זה'
        });
      }
      this.options = [...this.options, ...options];
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => this.$store.dispatch('login', res))
        .catch(err => this.$util.appCatch(this.$store, err));
    },
    logout() {
      console.log(`log out`)
      firebase
        .auth()
        .signOut()
        .then(res => this.$store.dispatch('logout', res))
    },
    handleSelectedInput(action) {
      if (this[action]) this[action]();
    },
    REPORT() {
      window.location.href = `mailto:reportHome@gmail.com?subject=בעיה עם בית ${this.$route.params.homeId}`;
    },
    async SHARE() {
      if (!this.$store.getters.getIdToken) {
        this.$store.getters.getOpenDialogFunc({
          title: 'כדי לשתף את הבית חובה להתחבר!'
        });
        return;
      }
      let action = 'createHome';
      if (this.$store.getters.getHome.homeId) {
        action = 'updateHome';
      }
      const res = await this.$store.dispatch(action);
      this.showLink(res);
    },
    showLink(home) {
      this.homeId = home.homeId;
      this.$refs.homeLinkDialog.open({
        title: `קישור לבית:`,
        content: ' '
      });
    },
    openDropdown() {
      this.$refs.dropdown.toggleOpen();
    },
    getAppDomain() {
      return process.env.VUE_APP_DOMAIN;
    },
    copy() {
      const appDomain = this.getAppDomain();
      navigator.clipboard.writeText(`${appDomain}/view-home/${this.homeId}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.app-nav {
  // padding: 0 20px;
  height: 45px;
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

.user-name,
.login {
  padding: 0 20px;
}

.menu {
  position: relative;

  > div {
    text-align: center;
    width: 120%;
    padding: 0 20px;
  }
}

.home-link {
  input {
    width: -webkit-fill-available;
    background-color: transparent;
  }

  img {
    width: 30px;
  }
}
</style>
