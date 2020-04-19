<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="scroll">
  <div class="background">
    <img src="@/assets/img/layer-16.png">
  </div>
    
    <div class="container">
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
import Home from "../components/Home";
import dummyHome from '@/assets/img/dummyHome.png'
export default {
  name: "LandingView",
  directives: { infiniteScroll },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  data() {
    return {
      homes: null,
      selectedHome: null,
      relevantHomes: null,
      limit: 9,
      busy: false
    };
  },
  mounted() {
    this.setComponentData();
  },
  methods: {
    async setComponentData() {
      const homes = [];
      const homesObj = await this.$store.dispatch("getHomes");
      const keys = Object.keys(homesObj);
      for (let i = 0; i < keys.length; i++) {
        homes.unshift(homesObj[keys[i]]);
      }
      if (homes.length > 0) {
        this.homes = homes;
        console.log(homes[0].homePic);
        
        // if(this.user){
        //   const myHomes = homes.filter(h => h.uid === this.user.uid)
        //   this.relevantHomes = [...myHomes,...homes.filter(h => h.homePic)]
        //   console.log(this.relevantHomes);
          
        // }else{
          this.relevantHomes = homes.filter(h => h.homePic)
          this.relevantHomes.unshift({homePic : dummyHome ,homeId : 'dummy' })
        //  this.relevantHomes = this.relevantHomes.slice(this.limit);
        return;
      }
    },
    loadMore() {
      if (this.homes) {
        const newHomes = this.homes.slice(
          this.relevantHomes.length,
          this.relevantHomes.length + this.limit
        );
        // newHomes.unshift({homePic : dummyHome ,homeId : 'dummy' })
        this.relevantHomes = this.relevantHomes.concat(newHomes);
      }
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
  height: 100vh;
  margin: 0%;
  background-repeat: repeat-y;

.container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(auto-fill,repeat(auto,1fr));
  margin-top: 8vh;
  justify-items: center;
  z-index: 2;
  .home {
    display: grid;
    // grid-auto-columns: 1fr;
    padding: 5%;
    max-width: 50%;
    max-height: 70%;
    width: 25vw;
    // margin-left: 5%;
    .withoutRoof{
      // position: absolute;
      display: flex;
      flex-direction: column;
      margin-top: 2%;
      .generic-roof{
        left: -10%;
        margin: 0%;
         position: relative;
          height: 12vh;
          width: 25vw;
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
          height: 12vh;
          width: 16vw;
          z-index: 3;
          transform: perspective(3vw) rotateX(5deg);
          left: 9%;
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
}
.background {
  position: absolute;
  top: 5vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: $app-max-width;
  height: 95vh;
  z-index: 0;
  img {
    height: 100%;
  }
}
}
</style>
