<template>
  <!-- <div  v-infinite-scroll="loadMore"  infinite-scroll-disabled="busy" infinite-scroll-distance="0" class="scroll" infinite-scroll-throttle-delay="500" > -->
    <!-- <img src="@/assets/img/sky.png" /> -->
    <div>
      <div v-if="isLoading">
        <img class="splash" src="@/assets/img/splash-screen.png" alt="">
        <LoadingSpinner></LoadingSpinner>
      </div>
    <div v-if="!isLoading" class="scroll" >
    <div  class="container">
      

      <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
        <img v-if=" index > 3 &&(index -1)% 3 === 0 " src="~@/assets/img/rider-blue.png" class="blue-rider" alt="">
        <img v-if=" index > 3 &&(index -1)% 3 === 0 " src="~@/assets/img/orange-rider.png" class="orange-rider" alt="">
        <img v-if="index%3===0 && index > 0" class="white-stripes" src="~@/assets/img/white-stripes.png" alt="">
        <span v-if="home.name" class="home-name">{{home.name}}</span>
        <span v-if="!home.name" class="home-name">אנדיפיינד</span>
       <div v-if="home.homePic && (!home.homeType || home.homeType !== 'castel')">
          <div @click="clickedHome(home.homeId, home.homePicId)" class="withRoof" v-if="home.roof">
            <img class="roof" :src="home.roof"/>
            <img class="walls" :src="home.homePic" alt="">
            <img v-if="!home.homeType || home.homeType === 'urban'" class="urban-foot" src="@/assets/img/landing-urban-foot.png" alt="">
            <img v-if="home.homeType == 'farm'" class="farm-foot" src="@/assets/img/landing-farm-foot.png" alt="">
          </div>

         <div @click="clickedHome(home.homeId, home.homePicId)" class="withoutRoof" v-if="!home.roof">
           <img v-if="index < 3" class="generic-roof" src="@/assets/img/roof.png" alt="">
           <img  v-if="index >= 3" class="generic-roof" src="@/assets/img/red-roof.png" alt="">
           <img class="walls" :src="home.homePic" alt="">
           <img v-if="!home.homeType || home.homeType === 'urban'" class="urban-foot" src="@/assets/img/landing-urban-foot.png" alt="">
           <img v-if="home.homeType == 'farm'" class="farm-foot" src="@/assets/img/landing-farm-foot.png" alt="">
         </div>

       </div>

       <div v-if="home.homePic && home.homeType === 'castel'">
         <div @click="clickedHome(home.homeId, home.homePicId)" class="castel" >
            <img class="castel-top" src="@/assets/img/castel-top.png" alt="" />
            <img class="castel-roof" src="@/assets/img/castelRoof.png" alt="">
            <img class="castel-walls" :src="home.homePic" alt="">
            <img class="castel-foot" src="@/assets/img/landing-castel-foot.png" alt="">
          </div>
       </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";
import LoadingSpinner from '@/components/LoadingSpinner'
import dummyHome from '@/assets/img/dummyHome.png'
import dummyCastel from '@/assets/img/dummy-Castel.png'
import genericRoof from '@/assets/img/roof.png'

export default {
  name: "LandingView",
  directives: { infiniteScroll },
  components:{ LoadingSpinner},
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    home() {
      return this.$store.getters.getHome || {};
    },
    homePics() {
      let homes = this.$store.getters.getHomePics
      return homes && homes.homePics && homes.homePics.length > 1 ? Object.values(homes.homePics) : []
    }
  },
  data() {
    return {
      selectedHome: null,
      relevantHomes: null,
      limit: 9,
    //   busy: false,
      isLoading : true,
      firstLoad: 0
    };
  },
  mounted() {
    if(!this.user) {
      console.log(`no user`);
      this.$router.push("/");
    } else {
      this.setComponentData();
      this.firstLoad = 0
    }
  },
//    created () {
//     window.addEventListener('scroll', this.loadMore);
//   },
//   destroyed () {
//     window.removeEventListener('scroll', this.loadMore);
//   },
  methods: {
    async setComponentData() {
    //   this.busy = true
      console.log(this.user);
      
      if( !this.homePics || this.homePics.length === 0) {
        console.log(`no data`)
        let tempHomes = [];
        const homesObj = await this.$store.dispatch("getHomePics");
        tempHomes = Object.values(homesObj);
        let  homes = this.sortUserHomes(tempHomes)
        this.relevantHomes = [...homes]
      }
      else{
        this.relevantHomes = this.sortUserHomes(this.homePics)
      }
    //   this.relevantHomes = this.relevantHomes.slice(0,this.limit);
      this.isLoading = false
    //   setTimeout(()=> {
    //     this.busy = false
    //     console.log(this.user);
        
    //   },3000)
      return;
    },
    // loadMore() {
    //   console.log(`loading more`)
    //     this.busy = true
    //   setTimeout(()=>{
    //     if (this.homePics && this.relevantHomes && this.homePics.length > this.relevantHomes.length ) {
    //       let homes = this.sortUserHomes(this.homePics)
    //       const newHomes = homes.slice(0,
    //       this.relevantHomes.length + this.limit);
    //       this.relevantHomes = newHomes;
    //     }
    //     this.firstLoad++
    //     this.busy = false
    //   }, 1000)
    // },
    kick() {
      alert("home not found");
      this.$router.push("/");
    },
    sortUserHomes(homes){
      let orderedHomes = []
      for(let home of homes) {
        if(home.uid === this.user.uid){
          orderedHomes.unshift(home)
        }
      }
      return orderedHomes
    },
    async clickedHome(homeId, picId){
        const home = await this.$store.dispatch('getHome', homeId);
        const homePic = await this.$store.dispatch('getHomePic', picId);
        console.log(home)
        console.log(homePic)
        this.$store.commit('setHome', {
        ...home
        });
        this.$store.commit('setHomePic', {
        ...homePic
        });
        this.$router.replace(`/edit-home`)
    },
     bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
html {
  scroll-behavior: smooth;
}
body{
  -webkit-user-drag: none;
}
.splash{
    position: fixed;
    justify-self: center;
    // height: 100vh;
    // width: 100vw;
    z-index: 100;
    top:10%;
    left: 6%;
}

.scroll{
  background-image: url("~@/assets/img/sky.png"), url("~@/assets/img/gray-road.png") ;
  background-repeat: no-repeat, repeat-y;
  background-size: 100%,2000vh;
  // border-image-repeat: stretch;
  background-attachment: scroll;
  // margin-top: 3vh;
  // top: 5vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: $app-max-width;
  // height: fit-content;
  z-index: 0;
.container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding-top: 9vh;
  justify-items: center;
  z-index: 2;  
  .home {
    display: grid;
    max-width: 60%;
    height: 38vh;
    width: 25vw;
    position: relative;
    .white-stripes{
      position: absolute;
      height: 1vh;
      margin-top: 40%;
      margin-left: -20%;
      z-index: 0;
    }
    .blue-rider{
      position: absolute;
      height: 6vh;
      top: 27%;
      left: -60%;
    }
    .orange-rider{
      position: absolute;
      height: 6vh;
      top: -17%;
      left: 85%;
      z-index: 5;
    }
    .home-name{
      position: absolute;
      font-size: 20px;
      justify-self: center;
      -webkit-text-stroke: 0.7px black;
      font-weight: bold;
      color: white;
      top: 65%;
      z-index: 80;
    }
    .castel {
      position: absolute;
      display: flex;
      flex-direction: column;
      .castel-foot {
        left: -20%;
        position: relative;
        height: 7vh;
        width: 34vw;
        z-index: 4;
      }
      .castel-walls{
        margin: 0%;
        left: -6%;
        position: relative;
        height: 16vh;
        width: 25vw;
        z-index: 3;
      }
      .castel-roof{
        left: -6%;
        margin-bottom: -1%;
        position: relative;
        height: 1vh;
        width: 25vw;
        z-index: 3;
      }
      .castel-top {
        // left: -6%;
        // margin-bottom: -1%;
        position: relative;
        height: 6vh;
        width: 21vw;
        z-index: 3;
      }
    }
    .withoutRoof{
      position: absolute;
      display: flex;
      flex-direction: column;
      .generic-roof{
        left: -7%;
        margin-bottom: -1%;
        position: relative;
        height: 11vh;
        width: 24vw;
        z-index: 3;
      }
      .urban-foot{
        left: -20%;
        margin: 0%;
        position: relative;
        height: 7vh;
        width: 34vw;
        z-index: 4;
      }
      .farm-foot {
        // left: -20%;
        // margin-top: -1.5%;
        // position: relative;
        // // height: 7.6vh;
        // width: 34vw;
        // z-index: 4;
        left: -20%;
        margin-top: -3.5%;
        position: relative;
        height: 7.6vh;
        width: 34vw;
        z-index: 4;
      }
      .walls{
        margin: 0%;
        position: relative;
        height: 12vh;
        width: 20vw;
        z-index: 3;
      }
      .empty-small{
        height: 10vh;
      }
    }
    .withRoof{
      position: absolute;
      display: flex;
      flex-direction: column;
      .roof {
        margin-top: -1%;
        position: relative;
        height: 10vh;
        width: 18vw;
        z-index: 4;
        transform: perspective(3vw) rotateX(5deg);
        left: 3%;
        top: -15%;
      }
      .urban-foot {
        left: -20%;
        margin: 0%;
        position: relative;
        height: 7vh;
        width: 34vw;
        z-index: 4;
      }
      .farm-foot {
        left: -20%;
        margin-top: -3.5%;
        position: relative;
        height: 7.6vh;
        width: 34vw;
        z-index: 4;
      }
      .walls{
        margin-top: 10%;
        margin-bottom: -3.5%;
        position: relative;
        height: 12vh;
        width: 20vw;
        z-index: 3;
      } 
    }
  }
  .background {
    // background-image: url("./../assets/img/layer-2.png");
  top: 5vh;
  // bottom: 0;
  // right: 0;
  // left: 0;
  width: 100%;
  // max-width: $app-max-width;
  height: 95vh;
  position: absolute;
  // background-size: 100%;
  // background: repeat-y;
  // background-attachment: fixed;
  
  z-index: 0;
  // img {
  //   height: 100vw;;
  //   justify-self: center;
  //   // size: 50px;
  // }
}
}
}
</style>
