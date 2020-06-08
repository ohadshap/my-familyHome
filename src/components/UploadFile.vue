<template>
  <div class="upload-file pointer">
    <div class="label-wrapper flex space-between" @click="onFileUploadClick">
    
      <input
        type="file"
        :accept="accept"
        :id="`file${customKey}`"
        ref="input"
        :name="customKey"
        @change="handleFileUpload"
        @input="handleFileUpload"
      />
      
    </div>
  </div>
</template>

<script>
import Compress from 'compress.js'
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
      this.$refs.input.click()
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
        let file = event.target.files[0];
        if (this.isFileTypeValid(file)) {
          // console.log(file.size)
          console.log(event.target.files)
          const compress = new Compress()
          file = await compress.compress([...event.target.files], {
            size: .75,
            quality: .6,
          })
          // console.log(file[0])
          // console.log(file[0].data)
          const combinedFile = file[0].prefix + file[0].data
          // console.log(combinedFile)
          this.$emit('file', this.handleBse64(combinedFile))
        } else {
          this.$emit('file', null);
          this.invalidFileTypeMessage();
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
    },
  }
};
</script>

<style lang="scss" scoped>

input {
  display: none;
}
// }
</style>
