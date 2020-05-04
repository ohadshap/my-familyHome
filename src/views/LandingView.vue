<template>
  <div  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="scroll">
    
    <div class="container">
      
        <!-- <img class="background" src="@/assets/img/layer-2.png"> -->
      <div v-if="isLoading">
        <LoadingSpinner></LoadingSpinner>
      </div>
      <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
        
       <div v-if="home.homePic">
         <div @click="clickedHome(home.homeId)" class="withRoof" v-if="home.roof">
         <img class="roof" :src="home.roof"/>
         <img class="walls" :src="home.homePic" alt="">
         </div>
         <div @click="clickedHome(home.homeId)" class="withoutRoof" v-if="!home.roof">
           <img class="generic-roof" src="@/assets/img/roof.png" alt="">
           <img class="walls" :src="home.homePic" alt="">
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
      busy: false,
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
      this.relevantHomes = this.relevantHomes.slice(0,this.limit);
      console.log(this.relevantHomes);
      this.isLoading = false
      return;
    },
    loadMore() {
      console.log(`loading more`)
      if (this.homePics && this.relevantHomes && this.homePics.length > this.relevantHomes.length && this.firstLoad) {
        const newHomes = this.homePics.slice(0,
          this.relevantHomes.length + this.limit);

        newHomes.unshift({homePic : dummyHome ,homeId : 'dummy' })
        this.relevantHomes = newHomes;
      }
      this.firstLoad++
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
  // background-image: url("https://images.pexels.com/photos/158780/leaf-nature-green-spring-158780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  // height: 100vh;
  // margin: 0%;
  // background-repeat: repeat-y;
  
  background-image: url("~@/assets/img/ridesrs.png");
  background-repeat: repeat-y;
  background-attachment: scroll;
  background-size: 100%;
  top: 5vh;
  position: fixed;
  
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  max-width: $app-max-width;
  height: 95vh;
  z-index: 0;
.container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  // grid-template-rows: repeat(3,1fr);
  padding-top: 10%;
  // text-align: center;
  // margin-top: 14vh;
  // margin-left:5vw;
  justify-items: center;
  z-index: 2;
  // width: fit-content;
  
  .home {
    display: grid;
    // grid-auto-columns: 1fr;
    padding: 10%;
    max-width: 50%;
    max-height: 70%;
    width: 25vw;
    
    .withoutRoof{
      // position: absolute;
      display: flex;
      flex-direction: column;
      margin-top: 2%;
      .generic-roof{
        left: -10%;
        margin: 0%;
         position: relative;
          height: 11vh;
          width: 24vw;
          z-index: 3;
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
      // position: absolute;
      display: flex;
      flex-direction: column;
       .roof{
         margin-top: -1%;
         position: relative;
          height: 10vh;
          width: 18vw;
          z-index: 3;
          transform: perspective(3vw) rotateX(5deg);
          left: 5%;
          top: -15%;
          }
          .walls{
            margin-top: 10%;
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
