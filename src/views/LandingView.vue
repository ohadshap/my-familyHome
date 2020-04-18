<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="container">
      <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
       <div v-if="home.homePic">
         <div @click="viewHome(home.homeId)" class="withRoof" v-if="home.roof">
         <img class="roof" :src="home.roof"/>
         <img class="walls" :src="home.homePic" alt="">
         </div>
         <div class="withoutRoof" v-if="!home.roof">
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
export default {
  name: "LandingView",
  directives: { infiniteScroll },
  components: { Home },
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
        homes.push(homesObj[keys[i]]);
      }
      if (homes.length > 0) {
        this.homes = homes;
        this.relevantHomes = homes.filter(h => h.homePic)
        // this.relevantHomes = this.homes.slice(this.limit);
        console.log(this.relevantHomes);

        return;
      }
    },
    loadMore() {
      if (this.homes) {
        const newHomes = this.homes.slice(
          this.relevantHomes.length,
          this.relevantHomes.length + this.limit
        );
        this.relevantHomes = this.relevantHomes.concat(newHomes);
        console.log("lalala", this.relevantHomes);
      }
    },
    kick() {
      alert("home not found");
      this.$router.push("/");
    },
    viewHome(homeId){
      this.$router.replace(`/view-home/${homeId}`)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.container {
  display: grid;
  // max-width: 100vw;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(auto-fill,repeat(auto,1fr));;
  
  padding: 50px;
  .home {
    display: grid;
    // grid-auto-columns: 1fr;
    padding: 5%;
    max-width: 50%;
    max-height: 70%;
    width: 25vw;
    // margin-left: 8%;
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
          z-index: 2;
      }
      .walls{
          margin: 0%;
          position: relative;
          height: 12vh;
          width: 20vw;
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
          z-index: 2;
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
</style>
