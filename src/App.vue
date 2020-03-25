<template>
  <div id="app">
    <div class="force-mobile-app">
      <router-view />
    </div>
    <div>
      <AppDialog ref="dialog" />
    </div>
  </div>
</template>

<script>
import AppDialog from '@/components/AppDialog';

export default {
  components: { AppDialog },
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

.force-mobile-app {
  max-width: 420px;
}
</style>
