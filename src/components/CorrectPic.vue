<template>
    <div class="correct-pic">
    <img src="@/assets/img/lightbox-true-answer-feedback.png" alt="" />
    </div>
</template>

<script>
export default {
    name:'CorrectPic'
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.correct-pic {
    position: absolute;
    bottom: 5%;
    left: 5%;
    text-align: center;
    z-index: 86;
    img {
      z-index: 86;
      width: 80%;
    }
  }
</style>