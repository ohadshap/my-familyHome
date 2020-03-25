<template>
  <div class="edit-home">
    edit-home
    <div
      class="test"
      @click="
        $store.dispatch('updateHome', {
          homeId: 111,
          name: '1111'
        })
      "
    >
      test
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped></style>
