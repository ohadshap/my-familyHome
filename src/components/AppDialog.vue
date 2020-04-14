<template>
  <div class="dialog-wrapper">
    <div v-if="isDialogOpen" class="dialog flex justify-center align-center">
      <div class="dialog-content flex align-center flex-column">
        <!-- <img v-if="showImg" src="." class="phibi" alt="" /> -->
        <div 
          v-if="sub"
          class="sub flex align-center"
        >
          {{ sub }}
        </div>
        <div
          class="title flex align-center"
          :class="{ 'no-content': !content }"
          v-if="title"
        >
          {{ title }}
        </div>
        <div class="content" v-if="content">
          <div>
            {{ content }}
          </div>
          <slot></slot>
        </div>
        <div v-if="!hideBtns && !hideDec" class="btns flex space-between">
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

        <div v-if="!hideBtns && hideDec" class="btns flex space-between">
          <!-- <div  class="btn back cancel"> -->
          <div class="decline"/>
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
      hideBtns: false,
      hideDec: false,
      sub: ''
    };
  },
  methods: {
    open({ title, content, hideBtns, hideDec, sub }) {
      this.isDialogOpen = true;
      this.title = title;
      this.content = content;
      this.hideBtns = hideBtns;
      this.hideDec = hideDec;
      this.sub = sub
      return new Promise(resolve => {
        this.resolve = resolve;
      });
    },
    setTitle(title) {
      this.title = title;
    },
    setContent(content) {
      this.content = content;
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
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 150, 255, 0.3);
  z-index: 80;

  ::placeholder {
    color: black;
  }

  .dialog-content {
    position: relative;
    width: 80vw;
    border-radius: 5px;
    box-shadow: 0 6px 6px 0 rgba(0, 11, 255, 0.03);
    background-color: #ffffff;

    .title.no-content {
      margin: 10px 0;
    }

    .title,
    .content {
      padding: 0 5px;
      direction: rtl;
      font-size: 27px;
      line-height: 1.51;
      color: #000000;
      -webkit-text-stroke: 1px #000000;
      text-align: center;
    }

    .content {
      // direction: rtl;
      font-size: 18px;
      // color: #000000;
      max-width: 80vw;
      // margin-top: 11px;
      // margin-bottom: 21px;
    }

    .sub {
      font-size: 18px;
      max-width: 80vw;
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
