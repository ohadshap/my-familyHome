<template>
  <div class="view-home">
    view-home
    {{ home }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.setComponentData();
  },
  data() {
    return {
      home: null
    };
  },
  methods: {
    async setComponentData() {
      const { homeId } = this.$route.params;
      if (homeId) {
        const home = await this.$store.dispatch('getHome', homeId);
        if (home) {
          this.home = home;
          return;
        }
      }
      // if any of the above failed, kick user
      //   this.kick();
    },
    kick() {
      alert('home not found');
      this.$router.push('/');
    }
  }
};
</script>
<style lang="scss" scoped></style>
