<template>
  <div class="view-home">
    <!-- <div class="backgroundInput">
      <img
        v-if="!home.background"
        src="@/assets/img/edit-home-background@3x.png"
        class="home-background"
        alt
      />

      <img v-if="home.background" :src="home.background" class="home-background" alt />
    </div> -->

    <div class="home home-background background flex flex-column justify-end">
      <div class="roof flex justify-center">
        <!-- ROOF -->
        <div class="bird">
          <img src="@/assets/img/bird.png" alt />
        </div>

        <!-- <div class="flag">
          <img src="@/assets/img/crest-flag.png" alt />
        </div> -->

        <!-- <div v-if="home.familyCrest" class="family-crest">
          <img :src="home.familyCrest" alt />
        </div> -->

        <img v-if="!home.roof" class="roof-pic" src="@/assets/img/roof.png" alt />

        <img v-if="home.roof" class="roof-pic costum-pic" :src="home.roof" alt />

        <div
          v-if="home.windows"
          class="roof-windows background windows-container flex space-around"
        >
          <div class="window window-8" v-if="home.windows.window5">
            <img
              v-if="!home.windows['window5'].pic"
              @click="onWindowClick('window5')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows['window5'].pic"
              @click="onWindowClick('window5')"
              :src="home.windows['window5'].pic"
              alt
            />

            <div v-if="home.windows.window5" class="window-name">{{ home.windows.window5.name }}</div>
          </div>

          <div class="window window-6" v-if="home.windows.window6">
            <img
              v-if="!home.windows['window6'].pic"
              @click="onWindowClick('window6')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows['window6'].pic"
              @click="onWindowClick('window6')"
              :src="home.windows['window6'].pic"
              alt
            />

            <div v-if="home.windows.window6" class="window-name">{{ home.windows.window6.name }}</div>
          </div>

          <div class="window window-7" v-if="home.windows.window7">
            <img
              v-if="!home.windows['window7'].pic"
              @click="onWindowClick('window7')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows['window7'].pic"
              @click="onWindowClick('window7')"
              :src="home.windows['window7'].pic"
              alt
            />

            <div v-if="home.windows.window7" class="window-name">{{ home.windows.window7.name }}</div>
          </div>
        </div>
      </div>

      <div class="wall flex justify-center">
        <!-- WALL -->
        <div v-if="home.windows" class="wall-windows top windows-container flex space-between">
          <div class="window window-2" v-if="home.windows.window1">
            <img
              v-if="!home.windows.window1.pic"
              @click="onWindowClick('window1')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows['window1'].pic"
              @click="onWindowClick('window1')"
              :src="home.windows['window1'].pic"
              alt
            />

            <div v-if="home.windows.window1" class="window-name">{{ home.windows.window1.name }}</div>
          </div>
          <div class="window window-1" v-if="home.windows.window0">
            <img
              v-if="!home.windows['window0'].pic"
              @click="onWindowClick('window0')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows.window0.pic"
              @click="onWindowClick('window0')"
              :src="home.windows.window0.pic"
              alt
            />

            <div v-if="home.windows.window0" class="window-name">{{ home.windows.window0.name }}</div>
          </div>

          <div class="window window-3" v-if="home.windows.window2">
            <img
              v-if="!home.windows.window2.pic"
              @click="onWindowClick('window2')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows.window2.pic"
              @click="onWindowClick('window2')"
              :src="home.windows.window2.pic"
              alt
            />

            <div v-if="home.windows.window2" class="window-name">{{ home.windows.window2.name }}</div>
          </div>
        </div>

        <div v-if="home.windows" class="wall-windows bottom windows-container flex space-between">
          <div class="window window-4" v-if="home.windows.window3">
            <img
              v-if="!home.windows['window3'].pic"
              @click="onWindowClick('window3')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows['window3'].pic"
              @click="onWindowClick('window3')"
              :src="home.windows['window3'].pic"
              alt
            />

            <div v-if="home.windows.window3" class="window-name">{{ home.windows.window3.name }}</div>
          </div>

          <div class="window window-5" v-if="home.windows.window4">
            <img
              v-if="!home.windows.window4.pic"
              @click="onWindowClick('window4')"
              src="@/assets/img/window.png"
              alt
            />

            <img
              v-if="home.windows.window4.pic"
              @click="onWindowClick('window4')"
              :src="home.windows.window4.pic"
              alt
            />

            <div v-if="home.windows.window4" class="window-name">{{ home.windows.window4.name }}</div>
          </div>
        </div>

        <img v-if="!home.wall" class="wall-pic" src="@/assets/img/wall.png" alt />

        <img v-if="home.wall" class="wall-pic" :src="home.wall" alt />

        <div class="door flex align-center">
          <!-- DOOR -->
          <!-- <img class="door-pic" src="@/assets/img/door.png" alt="" /> -->
          <img v-if="!home.door" class="door-pic" src="@/assets/img/door.png" alt />

          <img v-if="home.door" class="door-pic" :src="home.door" alt />

          <div class="door-sign">
            <div class="text">
              <div class="belongs-to">הבית של</div>

              <div class="name">{{ home.name || 'הקלד טקסט' }}</div>
            </div>

            <img class="sign" src="@/assets/img/sign.png" alt />
          </div>

          <img class="door-knob" src="@/assets/img/doorknob.png" alt />
        </div>
      </div>

      <div class="home-footer">
        <!-- <img v-if="mailWasNotified && !mailWasOpened" class="got-mail" src="@/assets/img/new-mail.png" alt="" /> -->
        <!-- <img
          @click="onMailBoxClick"
          class="mail-box"
          src="@/assets/img/mailbox.png"
          alt=""
        />
                <div v-if="!home.name" class="bottomWriting">
          !יש! התחלנו
        </div>

        <div v-if="home.name && !home.windows" class="bottomWriting">
          ?לומדים מהר אה
        </div>
        <div v-if="home.windows" class="bottomWriting">
         ,מה אתם אומרים
         <br/>
         ?נצבע את הבית
        </div>-->
        <img class="grass-pic" src="@/assets/img/urban.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: ["currHome"],
  data: function() {
    return {
      home: this.currHome
    };
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
// .home-background{
//     position: relative;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     width: 100%;
//     max-width: $app-max-width;
//     height: 100%;
//     z-index: 0;
// }

.home {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: relative;

    .grass-pic {
        width: 100%;
        max-width: $app-max-width;
    }


    .roof {
        position: relative;
        .roof-pic {
            z-index: 2;
            margin: 0 auto;
            width: 95%;
            height: 33%;
        &.costum-pic {
            width: 78%;
            margin-bottom: 10%;
            transform: perspective(5vw) rotateX(3deg);
            }
        }

        .bird {
            position: absolute;
            top: -8%;
            right: 22%;
            z-index: 2;
        img {
            height: 5%
            }
        }

        .flag {
            position: absolute;
            // top: -56%;
            // right: 15%;
            z-index: 1;
        img {
            height: 3%;
            }
        }

        .flag-crest {
            position: absolute;
            top: -24%;
            right: 15%;
            z-index: 1;
        img {
            height: 14%;
            }
        }


        .family-crest {
            position: absolute;
            top: -23%;
            right: 15%;
            z-index: 1;
        img {
            width: 23%;
            height: 9%;
            }
        }
        }

.wall {
    position: relative;
    margin: 0 auto;
    .wall-pic {
        width: 76%;
        height: 67%;
    }

    .door {
        position: absolute;
        bottom: 0;
    .door-pic {
        width: 22%;
        height: 32%;
      }

    .door-sign {
        position: absolute;
        top: 5px;
        width: 100%;
        display: flex;
        justify-content: center;

        .text {
            position: absolute;
            top: 30%;
            text-align: center;
            font-weight: bolder;
        .belongs-to {
            font-size: 8px;
            @media (min-width: 725px) {
                font-size: 22px;
            }
          }

        .name {
            -webkit-text-stroke: 0.2px white;
            font-size: 11px;

            @media (min-width: 725px) {
                font-size: 30px;
            }
          }
        }

        img {
            width: 75%;
        }
      }

    .door-knob {
        position: absolute;
        width: 2%;
        right: 2%;
      }
    }
  }
}
.roof-windows,
.wall-windows {
    position: absolute;
    left: 10%;
    right: 10%;
  // bottom: 0;
    top: 10%;
&.bottom,
&.top {
    left: 8%;
    right: 8%;
  }

&.bottom {
    top: auto;
    bottom: 10%;
  }
}
.window {
    z-index: 3;
    position: relative;

.window-name {
    position: absolute;
    font-size: 15px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    // font-weight: bolder;
    color: white;
    -webkit-text-stroke: 1px black;
  }
img {
    width: 10%;
    height: 14%;
  }
}

.letter-dialog {
    position: relative;
.letter {
    width: 100%;

  }

.gallery-img {
    position: absolute;
    top: 55%;
    left: 40%;
    width: 20%;
  }
}

.home-footer {
    line-height: 1;
    position: relative;

.mail-box {
    position: absolute;
    top: 10%;
    height: 40%;
    left: 55%;
  }

.got-mail {
    position: absolute;
    top: -15%;
    height: 35%;
    left: 40%;
  }

.bottomWriting {
    position: absolute;
    bottom: 8%;
    height: 50%;
    width: 100%;
    text-align: center;
    color: white;
    font-size: xx-large;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
}


</style>