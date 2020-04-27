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
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

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
#app {
  // max-height: 100%;
  overflow: auto;
  textarea {
    border: none;
    :focus {
      height: 100%;
      position: fixed;
      overflow: hidden;
      outline: none;
    }
  }
}


.nav {
  width: 100%;
}

main {
  height: calc(100vh - 60px);
  font-family: 'Calibri', 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
}
</style>
