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
  display: flex;
  justify-content: center;
}

.nav {
  width: 100%;
}

.force-mobile-app {
  width: 100vw;
  max-width: 420px;
}
</style>
