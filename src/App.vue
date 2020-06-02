<template>
  <div id="app">
    <div class="force-mobile-app">
      <div class="nav">
        <AppNav />
      </div>
      <main>
        <router-view />
      </main>
    </div>
    <div>
      <AppDialog ref="dialog" />
    </div>
  </div>
</template>

<script>
import AppDialog from '@/components/AppDialog';
import AppNav from '@/components/AppNav';

export default {
  components: { AppDialog, AppNav },
  mounted() {
    this.setComponentData();
    document.addEventListener("backbutton", this.goBack, false);
  },
  beforeDestroy () {
    document.removeEventListener("backbutton", this.goBack);
  },
  methods: {
    setComponentData() {
      this.$store.commit('setOpenDialogFunc', this.$refs.dialog.open);
    },
  goBack(){
    router.go(-1)
  }
  }
};
  
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.nav {
  width: 100%;
  // position: fixed;
  height: 5vh;
}
body{
  height: 95vh;
}

main {
  height: calc(100vh - 60px);
  font-family: 'Calibri', 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
}
</style>
