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
// import eventOptions from '@view/browserChange';



export default {
  components: { AppDialog, AppNav },
  mounted() {
    this.setComponentData();
  },
  methods: {
    setComponentData() {
      this.$store.commit('setOpenDialogFunc', this.$refs.dialog.open);
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

img {
    image-orientation: none;
}
</style>
