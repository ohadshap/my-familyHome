<template>
  <!-- <div  v-infinite-scroll="loadMore"  infinite-scroll-disabled="busy" infinite-scroll-distance="0" class="scroll" infinite-scroll-throttle-delay="500" > -->
    <!-- <img src="@/assets/img/sky.png" /> -->
    <div>
      <div v-if="isLoading" class="loading">
        <img class="splash" src="@/assets/img/splash-screen.png" alt="">
        <LoadingSpinner></LoadingSpinner>
      </div>
    
      <div v-if="!isLoading" class="scroll" >
        <div  class="container">
          <img class="tutorial-top" src="@/assets/img/landing-top-torturial.png" alt=""/>
          <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
            <img v-if=" index > 3 &&(index -1)% 3 === 0 " src="~@/assets/img/rider-blue.png" class="blue-rider" alt="">
            <img v-if=" index > 3 &&(index -1)% 3 === 0 " src="~@/assets/img/orange-rider.png" class="orange-rider" alt="">
            <img v-if="index%3===0 && index > 0" class="white-stripes" src="~@/assets/img/white-stripes.png" alt="">
            
            <span v-if="home.name && home.homePic && home.homeId !== 'farm' && home.homeId !== 'urban'" class="home-name">{{home.name}}</span>
            <span v-if="!home.name && home.homePic" class="home-name">אנדיפיינד</span>
            
           <span v-if="home.name && home.homePic && (home.homeId === 'farm' || home.homeId === 'urban')" class="dummy-home-name">{{home.name}}</span>
            

            <div v-if="home.homePic && (!home.homeType || home.homeType !== 'castel')">
              <div @click="clickedHome(home.homeId)" class="withRoof" v-if="home.roof">
                <img class="roof" :src="home.roof"/>
                <img class="walls" :src="home.homePic" alt="">
                <img v-if="!home.homeType || home.homeType === 'urban'" class="urban-foot" src="@/assets/img/landing-urban-foot.png" alt="">
                <img v-if="home.homeType == 'farm'" class="farm-foot" src="@/assets/img/landing-farm-foot.png" alt="">
              </div>

              <div @click="clickedHome(home.homeId)" class="withoutRoof" v-if="!home.roof">
                <img v-if="index < 3" class="generic-roof" src="@/assets/img/roof.png" alt="">
                <img  v-if="index >= 3" class="generic-roof" src="@/assets/img/red-roof.png" alt="">
                <img class="walls" :src="home.homePic" alt="">
                <img v-if="!home.homeType || home.homeType === 'urban'" class="urban-foot" src="@/assets/img/landing-urban-foot.png" alt="">
                <img v-if="home.homeType == 'farm'" class="farm-foot" src="@/assets/img/landing-farm-foot.png" alt="">
              </div>
            </div>

            <div v-if="home.homePic && home.homeType === 'castel'">
              <div @click="clickedHome(home.homeId)" class="castel" >
                <img class="castel-top" src="@/assets/img/castel-top.png" alt="" />
                <img v-if="!home.roof" class="castel-roof" src="@/assets/img/castelRoof.png" alt="">
                <img v-if="home.roof" class="castel-roof-pic" :src="home.roof" alt="">
                <img class="castel-walls" :src="home.homePic" alt="">
                <img class="castel-foot" src="@/assets/img/landing-castel-foot.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!--<AppTutorial ref="landingTutorial">
        <img class="tutorial-top" src="@/assets/img/torturial-2-devote.png" alt=""/>
      </AppTutorial>-->
  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";
import LoadingSpinner from '@/components/LoadingSpinner'
import dummyHome from '@/assets/img/dummyHome.png'
import dummyCastel from '@/assets/img/dummy-Castel.png'
import genericRoof from '@/assets/img/roof.png'
import AppDialog from '@/components/AppDialog';

export default {
  name: "LandingView",
  directives: { infiniteScroll },
  components:{ LoadingSpinner, AppDialog},
  computed: {
    user() {
      return this.$store.getters.getUser;
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
      busy: false,
      isLoading : true,
      firstLoad: 0
    };
  },
  mounted() {
    this.setComponentData();
    this.firstLoad = 0
  },
   created () {
    window.addEventListener('scroll', this.loadMore);
  },
  destroyed () {
    window.removeEventListener('scroll', this.loadMore);
  },
  methods: {
    async setComponentData() {
      this.busy = true
      console.log(this.user);
      
      if( !this.homePics || this.homePics.length < 1) {
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
      this.relevantHomes.unshift({name:'טירה',homeType:'castel', homePic : dummyCastel ,homeId : 'castel' })
      this.relevantHomes.unshift({name:'בית כפרי',homeType:'farm', homePic : dummyHome ,homeId : 'farm'})
      this.relevantHomes.unshift({name:'בית עירוני',homeType:'urban',homePic : dummyHome ,homeId : 'urban'})
      this.relevantHomes = this.relevantHomes.slice(0,this.limit);
      this.isLoading = false
      // this.$refs.landingTutorial.open({ content: ' ' })
      setTimeout(()=> {
        this.busy = false        
        // this.$refs.landingTutorial.agree()
      },3000)
      return;
    },
    loadMore() {
      console.log(`loading more`)
        this.busy = true
      setTimeout(()=>{
        if (this.homePics && this.relevantHomes && this.homePics.length > this.relevantHomes.length ) {
          let homes = this.sortUserHomes(this.homePics)
          const newHomes = homes.slice(0,
          this.relevantHomes.length + this.limit);
          newHomes.unshift({name:'טירה',homeType:'castel', homePic : dummyCastel ,homeId : 'castel' })
          newHomes.unshift({name:'בית כפרי',homeType:'farm', homePic : dummyHome ,homeId : 'farm'})
          newHomes.unshift({name:'בית עירוני',homeType:'urban',homePic : dummyHome ,homeId : 'urban'})
          this.relevantHomes = newHomes;
      }
      
      this.firstLoad++
      this.busy = false
      }, 1000)
    },
    kick() {
      alert("home not found");
      this.$router.push("/");
    },
    sortUserHomes(homes){
      if(!this.user){
        let orderedHomes = []
        for(let home of homes) {
          orderedHomes.unshift(home)
        }
        return orderedHomes
      }
      let userHomes = []
      let otherHomes = []
      for(let home of homes){
        if(home.uid === this.user.uid){         
          userHomes.unshift(home)
        }
        else{
          otherHomes.unshift(home)
        }
      }
      return userHomes.concat(otherHomes)
    },
    clickedHome(homeId){
      if(homeId === 'urban'|| homeId === 'castel'|| homeId === 'farm'){
        let home = {}
        this.$store.commit('setHome', {
        home,
        ["homeType"]: homeId
        });
        this.$router.replace(`/edit-home`)
      }else{
        this.$router.replace(`/view-home/${homeId}`)
      }
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
// .loading{
//   height: 100vh;
//   position: absolute;

// }
.splash{
    position: fixed;
    justify-self: center;
    // height: 100vh;
    // width: 100vw;
    z-index: 100;
    top:10%;
    left: 6%;
}
.tutorial-top {
  position: absolute;
  width: 106%;
  top: 7vh;
  right: -3%;
  margin-top: 17px;
  z-index: 15;
}

.scroll{
  background-image: url("~@/assets/img/sky.png"), url("~@/assets/img/gray-road.png") ;
  background-repeat: no-repeat, repeat-y;
  background-size: 130%,2000vh;
  // border-image-repeat: stretch;
  background-attachment: scroll;
  overflow-x: hidden;
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
  padding-top: 20vh;
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
    .dummy-home-name {
      position: absolute;
      font-size: 20px;
      -webkit-text-stroke: 0.7px black;
      font-weight: bold;
      color: white;
      top: 62%;
      left: 23%;
      z-index: 80;
    }
    .castel {
      position: absolute;
      bottom:8vh ;
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
        height: 4vh;
        width: 25vw;
        z-index: 3;
      }
      .castel-roof-pic{
        left: -1.5%;
        margin-bottom: -1%;
        position: relative;
        height: 5vh;
        width: 22vw;
        z-index: 3;
        transform: perspective(3vw) rotateX(5deg);
      }
      .castel-top {
        // left: -6%;
        // margin-bottom: -1%;
        position: relative;
        height: 6vh;
        width: 21vw;
        z-index: 3;
        margin-bottom: -1%;
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
