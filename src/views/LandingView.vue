<template>
  <div  v-infinite-scroll="loadMore"  infinite-scroll-disabled="busy" infinite-scroll-distance="0" class="scroll">
    <!-- <img src="@/assets/img/sky.png" /> -->
    <div class="container">
      
      <div v-if="isLoading">
        <LoadingSpinner></LoadingSpinner>
      </div>

      <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
        
       <div v-if="home.homePic && (!home.homeType || home.homeType !== 'castel')">
          <div @click="clickedHome(home.homeId)" class="withRoof" v-if="home.roof">
            <img class="roof" :src="home.roof"/>
            <img class="walls" :src="home.homePic" alt="">
            <img v-if="!home.homeType || home.homeType === 'urban'" class="urban-foot" src="@/assets/img/landing-urban-foot.png" alt="">
            <img v-if="home.homeType == 'farm'" class="farm-foot" src="@/assets/img/landing-farm-foot.png" alt="">
          </div>

         <div @click="clickedHome(home.homeId)" class="withoutRoof" v-if="!home.roof">
           <img class="generic-roof" src="@/assets/img/roof.png" alt="">
           <img class="walls" :src="home.homePic" alt="">
           <img v-if="!home.homeType || home.homeType === 'urban'" class="urban-foot" src="@/assets/img/landing-urban-foot.png" alt="">
           <img v-if="home.homeType == 'farm'" class="farm-foot" src="@/assets/img/landing-farm-foot.png" alt="">
         </div>

       </div>

       <div v-if="home.homePic && home.homeType === 'castel'">
         <div @click="clickedHome(home.homeId)" class="castel" >
            <img class="castel-top" src="@/assets/img/castel-top.png" alt="" />
            <img class="castel-roof" src="@/assets/img/castelRoof.png" alt="">
            <img class="castel-walls" :src="home.homePic" alt="">
            <img class="castel-foot" src="@/assets/img/landing-castel-foot.png" alt="">
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
export default {
  name: "LandingView",
  directives: { infiniteScroll },
  components:{ LoadingSpinner},
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    homePics() {
      let homes = this.$store.getters.getHomePics
      return homes && homes.homePics ? Object.values(homes.homePics) : []
    }
  },
  data() {
    return {
      selectedHome: null,
      relevantHomes: null,
      limit: 6,
      busy: true,
      isLoading : true,
      firstLoad: 0
    };
  },
  mounted() {
    console.log(`mounted`)
    this.setComponentData();
    this.firstLoad = 0
  },
  methods: {
    async setComponentData() {
      if( !this.homePics || this.homePics.length === 0) {
        console.log(`no data`)
        let homes = [];
        const homesObj = await this.$store.dispatch("getHomePics");
        homes = Object.values(homesObj);
        this.relevantHomes = [...homes]
      } else {
        this.relevantHomes = [...this.homePics]
      }
      this.relevantHomes.unshift({homePic : dummyHome ,homeId : 'dummy' })
      // this.relevantHomes = this.relevantHomes.slice(0,this.limit);
      this.isLoading = false
      this.busy = false
      return;
    },
    loadMore() {
      this.busy = true
      console.log(`loading more`)
      // setTimeout(()=>{
      // if (this.homePics && this.relevantHomes && this.homePics.length > this.relevantHomes.length && this.firstLoad) {
      //   const newHomes = this.homePics.slice(0,
      //     this.relevantHomes.length + this.limit);
        
      //   newHomes.unshift({homePic : dummyHome ,homeId : 'dummy' })
      //   this.relevantHomes = newHomes;
      // }
      this.firstLoad++
      this.busy = false
      // }, 1000)
    },
    kick() {
      alert("home not found");
      this.$router.push("/");
    },
    clickedHome(homeId){
      
      if(homeId === 'dummy'){
        this.$router.replace(`/edit-home`)
      }else{
        this.$router.replace(`/view-home/${homeId}`)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.scroll{
  background-image: url("~@/assets/img/sky.png"), url("~@/assets/img/ridesrs.png");
  background-repeat: no-repeat, repeat-y;
  background-size: 100%;
  background-attachment: local;
  margin-top: 6vh;
  top: 5vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  max-width: $app-max-width;
  height: fit-content;
  z-index: 0;
.container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding-top: 6vh;
  justify-items: center;
  z-index: 2;  
  .home {
    display: grid;
    max-width: 60%;
    height: 38vh;
    width: 25vw;
    position: relative;
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
        z-index: 3;
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
