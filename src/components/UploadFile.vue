<template>
  <div class="upload-file pointer">
    <div class="label-wrapper flex space-between" @click="onFileUploadClick">
      <!-- <div class="label" :class="{ 'has-file': fileName }"> -->
      <!-- <img
          v-show="!fileName"
          src="@/assets/img/icons/attach-file.png"
          alt=""
        />
        <img
          v-show="fileName"
          src="@/assets/img/icons/file-upload-doc.png"
          alt=""
        /> -->
      <input
        type="file"
        :accept="accept"
        :id="`file${customKey}`"
        ref="input"
        @change="handleFileUpload"
        @input="handleFileUpload"
      />
      <!-- <div :title="fileName">
          {{ fileName || $t('addFile') }}
        </div> -->
      <!-- </div> -->
      <!-- <img
        @click="resetFile"
        class="blue-plus"
        v-show="fileName"
        src="@/assets/img/icons/blue-plus.png"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  props: {
    accept: {
      type: String,
      default:
        'image/png,image/jpeg,image/jpg,image/tif,image/gif;capture=camera'
    },
    customKey: {
      type: String,
      required: true
    }
  },
  methods: {
    onFileUploadClick() {
      // if (event.target.classList.contains('blue-plus') || !this.$refs.input) {
      //   return;
      // }
      this.$refs.input.click();
    },
    isEventValid(event) {
      return (
        event && event.target && event.target.files && event.target.files[0]
      );
    },
    resetFile() {
      this.$refs.input.value = null;
      this.$emit('file', null);
    },
    isFileTypeValid(file) {
      return !this.accept || this.accept.includes(file.type);
    },
    async handleFileUpload(event) {
      if (this.isEventValid(event)) {
        const file = event.target.files[0];
        if (this.isFileTypeValid(file)) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () =>
            this.$emit('file', this.handleBse64(reader.result));
        } else {
          this.$emit('file', null);
          this.invalidFileTypeMessage();
          // ? possible to init file upload again
          // this.$refs.input.click();
        }
      }
    },
    handleBse64(img) {
      let imgArr = img.split(',');
      while (imgArr[1].length % 4 > 0) {
        imgArr[1] += '=';
      }
      return imgArr.join(',');
    },
    invalidFileTypeMessage() {
      this.$store.getters.getOpenDialogFunc({
        title: 'סוג קובץ לא תקין',
        showImg: true,
        confirm: 'אישור'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// $dark-blue: #1e75ab;
// .upload-file {
//   height: 57px;
//   border-radius: 5px;
//   box-shadow: 0 6px 11px 0 rgba(30, 117, 171, 0.08);
//   border: solid 2px rgba(30, 117, 171, 0.5);
//   background-color: #ffffff;

//   &.has-file {
//     border-color: $dark-blue;
//   }

//   .label-wrapper {
//     display: flex;
//     align-items: center;
//     height: inherit;

//     .label {
//       display: flex;
//       align-items: center;
//       color: rgba(30, 117, 171, 0.5);
//       font-size: 17px;
//       font-weight: normal;
//       overflow: hidden;

//       &.has-file {
//         font-size: 19px;
//         font-weight: bold;
//         color: $dark-blue;
//       }

//       img {
//         width: 17.5px;
//         margin: 0 15px;
//       }
//     }

//     .blue-plus {
//       margin: 0 15px;
//       width: 13px;
//       transform: rotate(45deg);
//     }
//   }

input {
  display: none;
}
// }
</style>
