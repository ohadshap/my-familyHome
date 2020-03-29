<template>
  <div class="edit-home flex align-center">
    <div class="background">
      <UploadFile
        customKey="backgroundInput"
        ref="backgroundInput"
        @file="setHome('background', $event)"
      />
      <img
        @click="onAssetClick('backgroundInput')"
        v-if="!home.background"
        src="@/assets/img/edit-home-background@3x.png"
        class="home-background"
        alt=""
      />
      <img
        v-if="home.background"
        :src="home.background"
        class="home-background"
        alt=""
      />
    </div>
    <div
      @click="
        onBackgroundClick($event.target, 'home-background', 'backgroundInput')
      "
      class="home home-background background flex flex-column justify-end"
    >
      <div class="roof flex justify-center">
        <!-- ROOF -->
        <div class="bird">
          <img src="@/assets/img/bird.png" alt="" />
        </div>
        <UploadFile
          customKey="roofInput"
          ref="roofInput"
          @file="setHome('roof', $event)"
        />
        <img
          @click="onAssetClick('roofInput')"
          v-if="!home.roof"
          class="roof-pic"
          src="@/assets/img/roof.png"
          alt=""
        />
        <img
          @click="onAssetClick('roofInput')"
          v-if="home.roof"
          class="roof-pic costum-pic"
          :src="home.roof"
          alt
        />
        <div
          v-if="home.windows"
          class="roof-windows background windows-container flex space-around"
          @click="
            onBackgroundClick($event.target, 'windows-container', 'roofInput')
          "
        >
          <div class="window window-8" v-if="home.windows.window5">
            <UploadFile
              @file="setWindow('window5', $event)"
              customKey="window5"
              ref="window5"
            />
            <img
              v-if="!home.windows['window5'].pic"
              @click="onWindowClick('window5')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows['window5'].pic"
              @click="onWindowClick('window5')"
              :src="home.windows['window5'].pic"
              alt=""
            />
          </div>
          <div class="window window-6" v-if="home.windows.window6">
            <UploadFile
              @file="setWindow('window6', $event)"
              customKey="window6"
              ref="window6"
            />
            <img
              v-if="!home.windows['window6'].pic"
              @click="onWindowClick('window6')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows['window6'].pic"
              @click="onWindowClick('window6')"
              :src="home.windows['window6'].pic"
              alt=""
            />
          </div>
          <div class="window window-7" v-if="home.windows.window7">
            <UploadFile
              @file="setWindow('window7', $event)"
              customKey="window7"
              ref="window7"
            />
            <img
              v-if="!home.windows['window7'].pic"
              @click="onWindowClick('window7')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows['window7'].pic"
              @click="onWindowClick('window7')"
              :src="home.windows['window7'].pic"
              alt=""
            />
          </div>
        </div>
        <!-- <svg
          preserveAspectRatio="none"
          viewbox="0 0 100 100"
          class="roof-pic svg"
          v-if="home.roof"
          @click="onAssetClick('roofInput')"
        >
          <defs>
            <clipPath id="clip">
              <polygon points="70,10 280,10 430,240 -80,240" />
            </clipPath>
          </defs>
          <image
            :xlink:href="home.roof"
            class="roof-pic costum-pic"
            clip-path="url(#clip)"
          />
        </svg> -->
      </div>
      <div class="wall flex justify-center">
        <!-- WALL -->
        <div
          v-if="home.windows"
          class="wall-windows top windows-container flex space-between"
          @click="
            onBackgroundClick($event.target, 'windows-container', 'wallInput')
          "
        >
          <div class="window window-2" v-if="home.windows.window1">
            <UploadFile
              @file="setWindow('window1', $event)"
              customKey="window1"
              ref="window1"
            />
            <img
              v-if="!home.windows.window1.pic"
              @click="onWindowClick('window1')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows['window1'].pic"
              @click="onWindowClick('window1')"
              :src="home.windows['window1'].pic"
              alt=""
            />
          </div>
          <div class="window window-1" v-if="home.windows.window0">
            <UploadFile
              @file="setWindow('window0', $event)"
              customKey="window0"
              ref="window0"
            />
            <img
              v-if="!home.windows['window0'].pic"
              @click="onWindowClick('window0')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows.window0.pic"
              @click="onWindowClick('window0')"
              :src="home.windows.window0.pic"
              alt=""
            />
          </div>
          <div class="window window-3" v-if="home.windows.window2">
            <UploadFile
              @file="setWindow('window2', $event)"
              customKey="window2"
              ref="window2"
            />
            <img
              v-if="!home.windows.window2.pic"
              @click="onWindowClick('window2')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows.window2.pic"
              @click="onWindowClick('window2')"
              :src="home.windows.window2.pic"
              alt=""
            />
          </div>
        </div>
        <div
          v-if="home.windows"
          class="wall-windows bottom windows-container flex space-between"
          @click="
            onBackgroundClick($event.target, 'windows-container', 'wallInput')
          "
        >
          <div class="window window-4" v-if="home.windows.window3">
            <UploadFile
              @file="setWindow('window3', $event)"
              customKey="window3"
              ref="window3"
            />
            <img
              v-if="!home.windows['window3'].pic"
              @click="onWindowClick('window3')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows['window3'].pic"
              @click="onWindowClick('window3')"
              :src="home.windows['window3'].pic"
              alt=""
            />
          </div>
          <div class="window window-5" v-if="home.windows.window4">
            <UploadFile
              @file="setWindow('window4', $event)"
              customKey="window4"
              ref="window4"
            />
            <img
              v-if="!home.windows.window4.pic"
              @click="onWindowClick('window4')"
              src="@/assets/img/window.png"
              alt=""
            />
            <img
              v-if="home.windows.window4.pic"
              @click="onWindowClick('window4')"
              :src="home.windows.window4.pic"
              alt=""
            />
          </div>
        </div>
        <UploadFile
          customKey="wallInput"
          ref="wallInput"
          @file="setHome('wall', $event)"
        />
        <img
          @click="onAssetClick('wallInput')"
          v-if="!home.wall"
          class="wall-pic"
          src="@/assets/img/wall.png"
          alt=""
        />
        <img
          @click="onAssetClick('wallInput')"
          v-if="home.wall"
          class="wall-pic"
          :src="home.wall"
          alt=""
        />
        <div class="door flex align-center">
          <!-- DOOR -->
          <UploadFile
            customKey="doorInuput"
            ref="doorInuput"
            @file="setHome('door', $event)"
          />
          <!-- <img class="door-pic" src="@/assets/img/door.png" alt="" /> -->
          <img
            @click="onAssetClick('doorInuput')"
            v-if="!home.door"
            class="door-pic"
            src="@/assets/img/door.png"
            alt=""
          />
          <img
            @click="onAssetClick('doorInuput')"
            v-if="home.door"
            class="door-pic"
            :src="home.door"
            alt=""
          />
          <img class="door-knob" src="@/assets/img/doorknob.png" alt="" />
        </div>
      </div>
      <img class="grass-pic" src="@/assets/img/urban.png" alt="" />
    </div>
    <AppDialog ref="familyNumDialog">
      <div class="div">
        <input
          class="windows-num-input"
          placeholder="הקלד טקסט"
          type="number"
          v-model="windowsNum"
          min="1"
          max="8"
        />
      </div>
    </AppDialog>
    <AppDialog ref="windowsDialog">
      <div class="window-name">
        <input
          class="windows-name"
          placeholder="הקלד טקסט"
          type="text"
          v-model="windowName"
        />
      </div>
      <div class="window-name-btns">
        <div class="p">
          הוסיפו גם תמונה,<br />
          שנוכל להכיר אותו טוב יותר :)
        </div>
        <div class="btns-images flex space-between">
          <div>
            <img @click="removeWindow" src="@/assets/img/bin.png" alt="" />
          </div>
          <div v-if="canAddWindow()">
            <img src="@/assets/img/add-window.png" @click="addWindow" alt="" />
          </div>
          <div>
            <img
              @click="onAssetClick(selectedWindow)"
              src="@/assets/img/gallery.png"
              alt=""
            />
          </div>
          <!-- <div>
            <img
              @click="onCameraClick(selectedWindow)"
              src="@/assets/img/camera.png"
              alt=""
            />
          </div> -->
        </div>
      </div>
    </AppDialog>
  </div>
</template>

<script>
import UploadFile from '@/components/UploadFile';
import AppDialog from '@/components/AppDialog';

export default {
  name: 'EditHome',
  components: { UploadFile, AppDialog },
  computed: {
    home() {
      return this.$store.getters.getHome || {};
    }
  },
  data() {
    return {
      windowsNum: null,
      interval: null,
      windowName: null,
      selectedWindow: null
    };
  },
  mounted() {
    this.initWindows();
  },
  methods: {
    async initWindows() {
      // this function happens on mount, but refs don't exists on mount
      // therefore, put an interval and clear it when ref exist.
      this.interval = setInterval(this.familyNumDialogInterval, 100);
    },
    async familyNumDialogInterval() {
      if (this.$refs.familyNumDialog) {
        clearInterval(this.interval);
        if (!this.home.windows) {
          await this.$refs.familyNumDialog.open({
            title: 'כמה אתם במשפחה?',
            content: 'גם חיות מחמד הם משפחה :)'
          });
          this.setHome('windows', this.createWindowsObj());
        }
      }
    },
    onWindowClick(windowName) {
      this.selectedWindow = windowName;
      this.$refs.windowsDialog.open({
        title: 'מי גר בחדר הזה?',
        content: ' '
      });
    },
    createWindowsObj() {
      const windows = {};
      if (this.windowsNum < 1 || this.windowsNum > 8) this.windowsNum = 3;
      for (let index = 0; index < this.windowsNum; index++) {
        windows[`window${index}`] = {};
      }
      return windows;
    },
    onFileUpload(file) {
      this.file = file;
    },
    setHome(propertyName, property) {
      this.$store.commit('setHome', {
        ...this.home,
        [propertyName]: property
      });
    },
    setWindow(windowIndex, pic) {
      const windows = this.$util.deepCopy(this.home.windows);
      windows[windowIndex].pic = pic;
      this.setHome('windows', windows);
    },
    onAssetClick(assetName) {
      if (this.$refs[assetName]) {
        this.$refs[assetName].onFileUploadClick();
      }
    },
    onBackgroundClick(clickTarget, containerName, realTarget) {
      if (
        clickTarget.classList &&
        clickTarget.classList.contains(containerName)
      ) {
        this.onAssetClick(realTarget);
      }
    },
    getPic(pic) {
      return require(pic);
    },
    getWindowsNum() {
      if (this.home && this.home.windows) {
        return Object.keys(this.home.windows).length;
      }
      return 0;
    },
    canAddWindow() {
      return this.getWindowsNum() < 9;
    },
    getNewWindowName() {
      let windowsNum = 0;
      let newWindowName = 'window0';
      while (this.home.windows[newWindowName]) {
        windowsNum++;
        newWindowName = `window${windowsNum}`;
      }
      return newWindowName;
    },
    addWindow() {
      if (this.getWindowsNum() < 8) {
        // max windows is 8
        const newWindowName = this.getNewWindowName();
        this.setHome('windows', {
          ...this.home.windows,
          [newWindowName]: {}
        });
      }
    },
    removeWindow() {
      let windows = this.$util.deepCopy(this.home.windows);
      delete windows[this.selectedWindow];
      this.setHome('windows', windows);
      this.$refs.windowsDialog.decline();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.home-background {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: $app-max-width;
  height: 100%;
  z-index: 0;
}

.edit-home {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.home {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;

  .grass-pic {
    width: 100vw;
    max-width: $app-max-width;
  }

  .roof {
    position: relative;
    .roof-pic {
      z-index: 2;
      margin: 0 auto;
      width: 95vw;
      height: 33vw;
      &.costum-pic {
        // -webkit-transform: perspective(20%) rotateX(5deg);
        width: 78vw;
        margin-bottom: 15px;
        transform: perspective(5vw) rotateX(3deg);
      }
    }

    .bird {
      position: absolute;
      top: -13vw;
      right: 17vw;
      z-index: 1;
    }
  }

  .wall {
    position: relative;
    margin: 0 auto;
    .wall-pic {
      width: 76vw;
      height: 67vw;
    }

    .door {
      position: absolute;
      bottom: 0;
      .door-pic {
        width: 22vw;
        height: 32vw;
      }

      .door-knob {
        position: absolute;
        width: 2vw;
        right: 2vw;
      }
    }
  }
}
.roof-windows,
.wall-windows {
  position: absolute;
  left: 10vw;
  right: 10vw;
  // bottom: 0;
  top: 10vw;
  &.bottom,
  &.top {
    left: 8vw;
    right: 8vw;
  }

  &.bottom {
    top: auto;
    bottom: 10vw;
  }
}
.window {
  z-index: 3;
  img {
    width: 10vw;
    height: 14vw;
  }
}

.windows-num-input,
.windows-name {
  width: -webkit-fill-available;
  text-align: center;
}

.window-name-btns {
  margin-top: 20px;
  .btns-images {
    margin-top: 10px;
    direction: ltr;
    // justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      max-width: 20%;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
