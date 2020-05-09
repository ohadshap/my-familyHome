<template>
  <div class="app-nav">
    <div class="flex space-between align-center">
      <div>
        <div class="menu" v-if="options.length > 0">
          <!-- <div @click="openDropdown">תפריט</div> -->
          <div class="burger" @click="openDropdown">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Dropdown
            parent-css-selector="menu"
            ref="dropdown"
            label="תפריט"
            :drop-down-items="options"
            @input="handleSelectedInput"
          />
        </div>
      </div>
      <div class="user-name" v-if="user">
        {{ `${$t('hello')}, ${user.displayName}` }}
      </div>
      <!-- <div class="login" v-if="!user" @click="login">
        {{ $t('login') }}
      </div> -->
    </div>
    <AppDialog ref="homeLinkDialog">
      <div class="home-link">
        {{ `${getAppDomain()}/view-home/${homeId}` }}
        <div>
          <img @click="copy" src="@/assets/img/copy.png" alt="" />
        </div>
      </div>
    </AppDialog>

    <AppDialog ref="creatorsDialog">
      <div class="creators-lightbox">
        <div><a href="https://www.linkedin.com/in/dan-rosental-526430131"><b>Dan Rosental</b> UX & UI</a></div>
        <div><a href="https://www.linkedin.com/in/ohadshapira/"><b>Ohad Shapira</b> Full stack dev</a></div>
        <div><a href="https://www.linkedin.com/in/nadavstutzen/"><b>Nadav Stutzen</b> Full stack dev</a></div>
        <div><a href="https://www.linkedin.com/in/ido-kabelly"><b>Eedo Kabeli</b> Full stack dev</a></div>
        <div><a href="https://sites.google.com/view/itay-ashkenazy/projects"><b>Itay Ashkenazy</b> Product and Idea</a></div>
      </div>
    </AppDialog>
  </div>
</template>

<script>
import fire from '@/statics/firebase-config';
import firebase  from 'firebase/app'
import Dropdown from '@/components/Dropdown';
import AppDialog from '@/components/AppDialog';




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
      options: [],
    };
  },
  mounted() {
    this.setOptions();
  },
  // updated() {
  //   this.setOptions();
  // },
  methods: {
    setOptions() {
      const options = [];
      if(!this.user) {
          options.push({
            value: 'login',
            label: 'התחברות'
          })
      } else {
        options.push({
          value: 'logout',
          label: 'התנתקות'
        })
      }

      // if (this.$route.name === 'landing-view') {

      // }

      if (this.$route.name === 'view-home') {
        options.push({
          value: 'goLanding',
          label: 'חזור לשכונה'
        })
        options.push({
          value: 'REPORT',
          label: 'דווח על בית זה'
        })
      }
      if(this.$route.name === 'edit-home') {
        options.push({
          value: 'SHARE',
          label: 'צור לינק לבית'
        })
        options.push({
          value: 'goLanding',
          label: 'חזור לשכונה'
        })
      }
      options.push({
        value: 'showCreators',
        label: 'יוצרים'
      })
      options.push({
        value: 'contact',
        label: 'צור קשר'
      })
      this.options = [...options];
      // this.options = [...this.options, ...options];
    },
    login() {
      this.openDropdown()
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => this.$store.dispatch('login', res))
        .catch(err => this.$util.appCatch(this.$store, err));
    },
    logout() {
      this.openDropdown()
      console.log(`log out`)
      firebase
        .auth()
        .signOut()
        .then(res => {
          this.$store.dispatch('logout', res)
          this.setOptions();
          })
    },
    handleSelectedInput(action) {
      if (this[action]) this[action]();
    },
    REPORT() {
      window.location.href = `mailto:Itayash@gmail.com?subject=בעיה עם בית ${this.$route.params.homeId}`;
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
      this.setOptions();
      this.$refs.dropdown.toggleOpen();
    },
    getAppDomain() {
      return process.env.VUE_APP_DOMAIN;
    },
    copy() {
      console.log(`coppppppyyyyy`)
      const appDomain = this.getAppDomain();
      navigator.clipboard.writeText(`${appDomain}/view-home/${this.homeId}`);
    },
    goLanding() {
      this.$router.replace(`/`)
      this.$refs.dropdown.toggleOpen();
    },
    showCreators() {
      this.$refs.creatorsDialog.open({
        title: 'My Home Created By',
        content: ' ',
        hideDec: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.app-nav {
  // padding: 0 20px;
  width: 100vw;
  height: 45px;
  font-size: 20px;
  z-index: 100;

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
.creators-lightbox {
  text-align: center;
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
}

.user-name,
.login {
  padding: 0 20px;
}

.menu {
  position: relative;
  .burger {
    padding: 20px;
    div {
      width: 35px;
      height: 5px;
      background-color: black;
      border-radius: 4px;
      margin: 6px 0;
    }
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
