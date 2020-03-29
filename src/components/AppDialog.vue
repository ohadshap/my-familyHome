<template>
  <div class="dialog-wrapper">
    <div v-if="isDialogOpen" class="dialog flex justify-center align-center">
      <div class="dialog-content flex align-center flex-column">
        <!-- <img v-if="showImg" src="." class="phibi" alt="" /> -->
        <div class="title flex align-center" v-if="title">
          {{ title }}
        </div>
        <div class="content" v-if="content">
          <div>
            {{ content }}
          </div>
          <slot></slot>
        </div>
        <div class="btns flex space-between">
          <!-- <div  class="btn back cancel"> -->
          <img
            class="decline"
            @click="decline"
            src="@/assets/img/x-button.png"
            alt=""
          />
          <!-- </div> -->
          <!-- <div  class="btn approve"> -->
          <img
            class="agree"
            @click="agree"
            src="@/assets/img/v-button.png"
            alt=""
          />
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appDialog',
  data() {
    return {
      isDialogOpen: false,
      title: 'כותרת',
      content: '',
      resolve: null,
      animate: false
    };
  },
  methods: {
    open({ title, content }) {
      this.isDialogOpen = true;
      this.title = title;
      this.content = content;
      return new Promise(resolve => {
        this.resolve = resolve;
      });
    },
    // onClickDialog() {
    //   this.animate = true;
    //   setTimeout(() => {
    //     this.animate = false;
    //   }, 300);
    // },
    agree() {
      this.resolve(true);
      this.isDialogOpen = false;
    },
    decline() {
      this.resolve(false);
      this.isDialogOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(6, 16, 52, 0.85);
  z-index: 80;

  .dialog-content {
    position: relative;
    width: 80vw;
    border-radius: 5px;
    box-shadow: 0 6px 6px 0 rgba(0, 11, 255, 0.03);
    background-color: #ffffff;

    .title,
    .content {
      direction: rtl;
      font-size: 31px;
      line-height: 1.51;
      color: #000000;
      -webkit-text-stroke: 1px #000000;
      text-align: center;
    }

    .content {
      // direction: rtl;
      font-size: 22px;
      // color: #000000;
      max-width: 280px;
      margin-top: 11px;
      margin-bottom: 21px;
    }

    @media (min-width: 880px) {
      .content {
        max-width: 440px;
        font-size: 31px;
      }
      .title {
        font-size: 44px;
      }
    }

    .btns {
      width: 100%;
      position: absolute;
      bottom: -9vw;

      img {
        width: 15vw;
      }

      .agree {
        margin-right: -6vw;
      }

      .decline {
        margin-left: -6vw;
      }
    }
  }
}
</style>
