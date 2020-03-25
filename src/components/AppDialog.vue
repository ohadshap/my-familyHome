<template>
  <div class="dialog-wrapper" @click="onClickDialog">
    <div v-if="isDialogOpen" class="dialog flex justify-center align-center">
      <div
        class="dialog-content flex align-center flex-column"
        :class="{ 'animated shake infinite': animate }"
      >
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
        <div class="btns flex btns-space-between">
          <div @click="decline" class="btn back cancel" v-if="cancel">
            {{ cancel }}
          </div>
          <div @click="agree" class="btn approve">
            {{ confirm }}
          </div>
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
      confirm: 'אישור והמשך',
      cancel: 'ביטול',
      showImg: true,
      resolve: null,
      animate: false
    };
  },
  methods: {
    open({ title, content, confirm, cancel, showImg }) {
      this.isDialogOpen = true;
      this.title = title;
      this.content = content;
      this.confirm = confirm;
      this.cancel = cancel;
      this.showImg = showImg;
      return new Promise(resolve => {
        this.resolve = resolve;
      });
    },
    onClickDialog() {
      console.log('animate');

      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 300);
    },
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
    width: 90vw;
    border-radius: 5px;
    box-shadow: 0 6px 6px 0 rgba(0, 11, 255, 0.03);
    background-color: #ffffff;

    .phibi {
      margin-top: 26.5px;
      height: 103px;
      width: 103px;
    }

    .title {
      direction: rtl;
      height: 25px;
      font-size: 19px;
      font-weight: 600;
      color: #003c7f;
    }

    .content {
      font-size: 15px;
      color: #18285f;
      max-width: 280px;
      text-align: center;
      margin-top: 11px;
      margin-bottom: 21px;
    }

    .btns {
      margin-bottom: 25px;
      width: 100%;
      .btn {
        width: 100%;

        &.cancel {
          margin-right: 15px;
          font-size: 19px;
          font-weight: 600;
          color: #ffc829;
        }

        &.approve {
          margin: 0 15px;
        }
      }
    }
  }
}
</style>
