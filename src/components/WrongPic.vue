<template>
    <div class="wrong-pic">
    <img src="@/assets/img/wrong-answer-feedback.png" alt="" />
    </div>
</template>

<script>
export default {
    name:'WrongPic',
    mounted(){
        console.log('mounted'); 
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.wrong-pic {
    position: absolute;
    bottom: 10%;
    text-align: center;
    z-index: 86;
    img {
      width: 80%;
    }
  }
</style>