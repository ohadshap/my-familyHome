<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="container">
      <div class="home" v-for=" (home,index) of relevantHomes" :key="index">
        <Home  v-bind:currHome="home" />
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
        this.relevantHomes = [homes[0]];
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
    async onWindowClick(windowName) {
      //   if (this.alertCorrect) {
      //     this.alertCorrect = false;
      //   }
      //   console.log(this.answeredWindows);
      //   for (let win of this.answeredWindows) {
      //     console.log(win);
      //     console.log(windowName);
      //     if (`${win}` === windowName) {
      //       alert(`this window answerd correctly`);
      //       return;
      //     }
      //   }
      //   this.selectedAnswer = null;
      //   this.selectedWindow = windowName;
      //   await this.$refs.questionDialog.open({
      //     title: this.home.windows[this.selectedWindow].question,
      //     content: " ",
      //     hideBtns: true,
      //     sub: this.home.windows[this.selectedWindow].name
      //   });
    }
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
}
.home {
  display: grid;
  max-width: 50%;
  max-height: 70%;
}
</style>
