<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="container">
      <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
       <div v-if="home.homePic">
         <img :src="home.homePic" alt="">
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
        this.relevantHomes = [...homes];
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
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.container {
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 50px;
  .home {
    display: grid;
    max-width: 50%;
    max-height: 70%;
    img{
      height: 20vh;
      widows: 20vw;
    }
}

}
</style>
