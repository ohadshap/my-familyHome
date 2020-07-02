<template>
  <div class="app-nav">
    <div class="whitespace flex space-between align-center">
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

    <AppDialog ref="connectDialog">
      <span @click="closeConnectPop" class="close-span-top"></span>
      <img @click="closeConnectPop" class="connect-pic" src="@/assets/img/login-for-publish.png" alt=""/>
      <img @click="()=> login('share')" class="connectBtn" src="@/assets/img/connect-btn.png" alt=""/>
      <span @click="closeConnectPop" class="close-span-bot"></span>
    </AppDialog>

    <AppDialog ref="homeLinkDialog">
      <div class="home-link">
        <img src="@/assets/img/edit-home-share.png" class="edit-home-share" alt=""/>
        <!-- {{ `${getAppDomain()}/view-home/${home.homeId}` }} -->
        <div class="social-container" >
          <SocialSharing :homeLink="homeId"/>
          <img @click="copy" class="copy"  src="@/assets/img/lightbox-publishing.png" alt="" />
        </div>
        <!-- <SocialSharing :homeLink="`${getAppDomain()/view-home/home.homeId}`"/> -->
        
      
      </div>
    </AppDialog>
    <div>
        <Snackbar ref="snacking"></Snackbar>
      </div>

    <AppDialog ref="creatorsDialog">
      <div class="creators-lightbox">
        <img src="@/assets/img/my-home-created-by.png" class="created-by-img" alt="">
        <div><a target="_blank" href="https://www.linkedin.com/in/dan-rosental-526430131"><b>Dan Rosental</b> UX & UI</a></div>
        <div><a target="_blank" href="https://www.linkedin.com/in/ohadshapira/"><b>Ohad Shapira</b> Full stack dev</a></div>
        <div><a target="_blank" href="https://www.linkedin.com/in/nadavstutzen/"><b>Nadav Stutzen</b> Full stack dev</a></div>
        <div><a target="_blank" href="https://www.linkedin.com/in/ido-kabelly"><b>Eedo Kabeli</b> Full stack dev</a></div>
        <div><a target="_blank" href="https://sites.google.com/view/itay-ashkenazy/projects"><b>Itay Ashkenazy</b> Product and Idea</a></div>
      </div>
    </AppDialog>

    <AppDialog ref="contactUsDialog">
      <div class="contactUs-lightbox">
        Itayash@gmail.com
      </div>
    </AppDialog>
    <div v-if="isLoading">
          <LoadingSpinner ></LoadingSpinner>
        </div>
        <div class="confeti-container">
      <canvas id="confetiHomeView">
        <Confetti ref="confettiEffect"></Confetti>
      </canvas>
    </div>
    
  </div>
</template>

<script>
import fire from '@/statics/firebase-config';
import firebase  from 'firebase/app'
import Dropdown from '@/components/Dropdown';
import AppDialog from '@/components/AppDialog';
import LoadingSpinner from '@/components/LoadingSpinner'
import Confetti from '@/components/Confetti';
import SocialSharing from '@/components/SocialSharing'
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image-module';
import Snackbar from '@/components/snack';






export default {
  components: { Dropdown, AppDialog, Confetti, SocialSharing, LoadingSpinner, Snackbar },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  data() {
    return {
      homeId: null,
      options: [],
      isLoading: false,
      confet: false,
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
        this.$store.dispatch('getNewToken')
        options.push({
          value: 'logout',
          label: 'התנתקות'
        })
        options.push({
        value: 'myHomes',
        label: 'הבתים שלי'
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
      if (this.$route.name === 'my-homes') {
        options.push({
          value: 'goLanding',
          label: 'חזור לשכונה'
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
        label: 'אודות'
      })
      options.push({
        value: 'contact',
        label: 'צור קשר'
      })
      this.options = [...options];
      // this.options = [...this.options, ...options];
    },
    // async loginFromBtn() {
    //   this.$refs.connectDialog.agree()
    //   console.log(`closed`);
      
    //   this.$refs.dropdown.toggleOpen();
    //   this.$router.replace(`/my-homes`)
    //   // await this.login()
    //   // this.myHomes()
    // },
    async login(shareString) {
      this.openDropdown()
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then( async res => {
            await this.$store.dispatch('login', res)
            this.$refs.connectDialog.agree()
            if(shareString === 'share'){
              this.SHARE()
              }
    
          }
        )
        // .catch(err => this.$util.appCatch(this.$store, err));
    },
    logout() {
      this.openDropdown()
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
         this.$refs.connectDialog.open({hideBtns: true, content: ' '})
         return
      } 
      else {
        await this.takePic()
        this.isLoading = true
        let action = 'createHome';
        let action2 = 'createHomePic';
        if (this.$store.getters.getHome.homeId) {
          action = 'updateHome';
        }
        if (this.$store.getters.getHomePic.homeId) {
          action2 = 'updateHomePic';
        }
        setTimeout(async () => {
          // console.log(action2)
          const res = await this.$store.dispatch(action);
          const res2 = await this.$store.dispatch(action2);
          // console.log(`logging`)
          // console.log(res)
          // console.log(res2)
          await this.showLink(res);
        },2500)
      }
    },
    takePic() {
      window.scrollTo(0,0)
      let homePic =  html2canvas(document.querySelector(".wall"), {
        scrollX: 0,
        scrollY: -window.scrollY
      }).then(canvas => {
        homePic = canvas.toDataURL('image/jpeg', 0.9)
        // await this.setHome('homePic', homePic)
        this.setHomePic('homePic', homePic)
      })
    }
    ,
    setHomePic(propertyName, property) {
      this.$store.commit('setHomePic', {
        ...this.homePic,
        [propertyName]: property
      });
    },
    async showLink(home) {
      this.isLoading = false
      this.homeId = home.homeId;
      await this.$refs.homeLinkDialog.open({
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
      const appDomain = this.getAppDomain();
      navigator.clipboard.writeText(`${appDomain}/view-home/${this.homeId}`);
      this.$refs.homeLinkDialog.agree()
      this.$refs.snacking.info('הקישור הועתק בהצלחה')
      if(!this.confet){
        this.confet = true
        this.$refs.confettiEffect.start()
        setTimeout(()=>{ 
          this.$refs.confettiEffect.stop()
          this.confet = false
        },3500)
      }
    },
    goLanding() {
      this.$router.replace(`/`)
      this.$refs.dropdown.toggleOpen();
    },
    async myHomes() {
      // if(!this.user) {
      //   await this.$refs.connectDialog.open({ 
      //     title: 'כדי להיכנס לבתים שלי חובה להתחבר',
      //     content: ' ' })
      //   // this.$refs.connectDialog.agree()
      //   this.myHomes()
      //   // this.$refs.connectDialog.agree()
      //   // return
      // } else {
        // this.$refs.connectDialog.agree()
        this.$router.replace(`/my-homes`)
        // return
        this.$refs.dropdown.toggleOpen();
      // }
    },
    showCreators() {
      this.$refs.creatorsDialog.open({
        content: ' ',
        hideDec: true
      });
    },
    contact() {
      window.location.href = `mailto:Itayash@gmail.com?subject=יצירת קשר מכיף בבית.&body= הי, בקשר לכיף בבית. רציתי לומר..`;
    },
    closeConnectPop(){
      this.$refs.connectDialog.agree()
    },
  }
};
</script>
<style lang="scss" scoped>
.app-nav {
  // padding: 0 20px;
  position: fixed;
  width: 100vw;
  height: 8vh;
  font-size: 20px;
  background-color: white;
  z-index: 100;
  top: 0%;
// .whitespace{
//   z-index: 100;
//   position: fixed;
//   width: 100%;
//   // height: 8vh;
// }
  @media (min-width: 880px) {
    font-size: 36px;
    height: 100px;
  }

  .flex {
    height: 100%;
  }
}
.home-link{
  .social-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1em;
  .copy{
    height: 4.6vh;
    padding-right: 4%;
    // margin-bottom: 2vh;
  }
  }
  .edit-home-share{
    height: 10vh;
  }
}
.close-span-top {
  // background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 32vh;
}
.close-span-bot {
  // background-color: red;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 38vh;
}
.connectBtn {
  height: 6vh;
  margin-top: 15px;
}
.connect-pic{
  height: 14vh;
  margin-top: 15px;
}

.user-name {
  direction: rtl;
}
// .connectBtn {
//   height: 6vh;
//   margin: 17px;
// }
.creators-lightbox {
  text-align: center;
  a:link {
    text-decoration: none;
    // color: black;
  }
  a:visited {
    text-decoration: none;
    // color: black;
  }
  .created-by-img{
    // position: absolute;
    height: 12vh;
    margin-bottom: 17px;
  }
}
.contactUs-lightbox{
  text-align: center;
  font-size: larger;
  font-weight: bold;
}
.user-name,
.login {
  padding: 0 20px;
}

.menu {
  position: relative;
  .burger {
    padding: 20px;
    // margin-top: 20px;
    div {
      width: 35px;
      height: 5px;
      background-color: black;
      border-radius: 4px;
      margin: 6px 0;
    }
  }
  .cover {
    position: fixed;
    width: 100vw;
    height: 100vh;
    font-size: 20px;
    background-color: rgba(0, 150, 255, 0.3);
    z-index: 19;
    top: 0%;
  }
}

// .home-link {
//   input {
//     width: -webkit-fill-available;
//     background-color: transparent;
//   }

//   img {
//     width: 30px;
//   }
// }
</style>
