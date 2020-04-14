<template>
  <div v-if="home" class="view-home">
    <div class="backgroundInput" >

      <img
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
      class="home home-background background flex flex-column justify-end"
    >

      <div class="roof flex justify-center">
        <!-- ROOF -->
        <div class="bird">
          <img src="@/assets/img/bird.png" alt="" />
        </div>

        <div class="flag">
          <img src="@/assets/img/crest-flag.png" alt="" />
        </div>

        <div v-if="home.familyCrest" class="family-crest">
          <img :src="home.familyCrest" alt="" />
        </div> 


        <img
          v-if="!home.roof"
          class="roof-pic"
          src="@/assets/img/roof.png"
          alt=""
        />

        <img
          v-if="home.roof"
          class="roof-pic costum-pic"
          :src="home.roof"
          alt
        />

        <div
          v-if="home.windows"
          class="roof-windows background windows-container flex space-around"
        >

          <div class="window window-8" v-if="home.windows.window5">

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

            <div v-if="home.windows.window5" class="window-name">
              {{ home.windows.window5.name }}
            </div>
          </div>
          
          <div class="window window-6" v-if="home.windows.window6">

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

            <div v-if="home.windows.window6" class="window-name">
              {{ home.windows.window6.name }}
            </div>
          </div>
          
          <div class="window window-7" v-if="home.windows.window7">
            
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
            
            <div v-if="home.windows.window7" class="window-name">
              {{ home.windows.window7.name }}
            </div>
          </div>
        </div>
      </div>
     
      <div class="wall flex justify-center">
        <!-- WALL -->
        <div
          v-if="home.windows"
          class="wall-windows top windows-container flex space-between"
        >
          <div class="window window-2" v-if="home.windows.window1">

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
            
            <div v-if="home.windows.window1" class="window-name">
              {{ home.windows.window1.name }}
            </div>
          
          </div>
          <div class="window window-1" v-if="home.windows.window0">
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
            
            <div v-if="home.windows.window0" class="window-name">
              {{ home.windows.window0.name }}
            </div>
          </div>
          
          <div class="window window-3" v-if="home.windows.window2">
            
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
            
            <div v-if="home.windows.window2" class="window-name">
              {{ home.windows.window2.name }}
            </div>
          </div>
        </div>
        
        <div
          v-if="home.windows"
          class="wall-windows bottom windows-container flex space-between"
        >
          <div class="window window-4" v-if="home.windows.window3">
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
            
            <div v-if="home.windows.window3" class="window-name">
              {{ home.windows.window3.name }}
            </div>
          </div>
          
          <div class="window window-5" v-if="home.windows.window4">
  
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
            
            <div v-if="home.windows.window4" class="window-name">
              {{ home.windows.window4.name }}
            </div>
          </div>
        </div>
        
        <img
          v-if="!home.wall"
          class="wall-pic"
          src="@/assets/img/wall.png"
          alt=""
        />
        
        <img
          v-if="home.wall"
          class="wall-pic"
          :src="home.wall"
          alt=""
        />
        
        <div class="door flex align-center">
          <!-- DOOR -->
          <!-- <img class="door-pic" src="@/assets/img/door.png" alt="" /> -->
          <img
            v-if="!home.door"
            class="door-pic"
            src="@/assets/img/door.png"
            alt=""
          />
          
          <img
            v-if="home.door"
            class="door-pic"
            :src="home.door"
            alt=""
          />
          
          <div class="door-sign" >
            <div class="text">
              <div class="belongs-to">
                הבית של
              </div>
              
              <div class="name">
                {{ home.name || 'הקלד טקסט' }}
              </div>
            </div>
            
            <img class="sign" src="@/assets/img/sign.png" alt="" />
          </div>
          
          <img class="door-knob" src="@/assets/img/doorknob.png" alt="" />
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
        </div> -->
        <img class="grass-pic" src="@/assets/img/urban.png" alt="" />
      </div>
    </div>
    <AppDialog ref="questionDialog">
      <div v-if="home.windows[selectedWindow]" class="question-dialog">
        <div class="p"> {{home.windows[selectedWindow].name}}</div>
        <!-- <div class="question"></div> -->
        <div class="answers">
          <div v-for="(answer,index) of home.windows[selectedWindow].answers" :key="index" class="answer flex justify-center">
            <div class="answer-input">{{answer}} </div>
          </div>
        </div>
      </div>
    </AppDialog> 
   
  </div>
</template>

<script>
import AppDialog from '@/components/AppDialog';

export default {
  name: 'ViewHome',
  components: { AppDialog },
  // computed : {
  //   home() {
  //     return this.$store.getters.getHome || {};
  //   }},
  // computed : {
  //   async home(){
  //     const { homeId } = this.$route.params;
  //     console.log(homeId);
  //     if (homeId) {
  //       const home = await this.$store.dispatch('getHome', homeId);
        
  //       if (home) {
  //         return home;
  //       }
  //   }
  //   return {}
  // }},
  data() {
    return {
      selectedWindow : null,
      home : null
    };
  },
  mounted() {
  this.setComponentData();
  },
  methods: {
    async setComponentData() {
      const { homeId } = this.$route.params;
      console.log(homeId);
      
      if (homeId) {
        const home = await this.$store.dispatch('getHome', homeId);
        
        if (home) {
          
          this.home = home;
          return;
        }
      }
    },
    kick() {
      alert('home not found');
      this.$router.push('/');
    },
    async onWindowClick(windowName) {
      console.log(windowName);
      
      this.selectedWindow = windowName;
      await this.$refs.questionDialog.open({
        hideBtns: true,
        title: this.home.windows[this.selectedWindow].question
      });
      // this.handleMailMessage();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
input{
  font-weight: lighter  ;
}
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
      top: -8vw;
      right: 22vw;
      z-index: 2;
      img {
        height: 5vh
      }
    }

    .flag {
      position: absolute;
      top: -36vw;
      right: 15vw;
      z-index: 1;
      img {
        height: 17vh;
      }
    }

    .flag-crest {
      position: absolute;
      top: -24vw;
      right: 15vw;
      z-index: 1;
      img {
        height: 14vh;
      }
    }
    

    .family-crest {
      position: absolute;
      top: -23vw;
      right: 15vw;
      z-index: 1;
      img {
        width: 23vw;
        height: 9vh;
      }
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
    width: 10vw;
    height: 14vw;
  }
}
.windows-name,
.windows-question {
  width: -webkit-fill-available;
  text-align: center;
}

.windows-name {
  font-size: 20px;
  background-color: lightgray;
  width: 60%;
  text-align: center;
  border: black 1px solid;
  border-radius: 8px;
}
.windows-question {
  font-size: 20px;
  width: 100%;
  text-align: center;
  // border: black 1px solid;
  // border-radius: 8px;
  box-shadow: black 0px 1px 2px ;
  border-radius: 8px;
  background-color: lightgray;
  margin-bottom: 5px;
}

.step2 {
  margin-top: 20px;
  margin-bottom: 21px;
  .answer {
    .answer-num {
      width: 30%;
      text-align: left;
      margin-left: 2%;
      &.text {
        font-size: 12px;
        display: flex;
        align-items: center;
      }
    }

    .answer-input {
      width: 75%;
      margin-bottom: 5px;
      input {
        width: 100%;
        padding: 2px;
        box-shadow: black 0px 1px 2px ;
        border-radius: 6px;
        text-align: center;
        background-color: lightgray;
        // input {
        //   width: 100%;
        // }
      }
    }
  }
}

.windows-dialog {
  .agree,
  .decline {
    position: absolute;
    bottom: -9vw;
    width: 20vw;
    max-width: 60px;
  }

  .agree {
    right: -8vw;
  }
  .decline {
    left: -8vw;
  }

  

  @media (min-width: 720px) {
    .agree,
    .decline {
      bottom: -6vw;
      max-width: 80px;
    }

    .agree {
      right: -4vw;
    }
    .decline {
      left: -4vw;
    }
  }
}

.window-name-btns {
  margin-top: 35px;
  .btns-images {
    direction: ltr;
    margin: 10px;
    // justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      max-width: 15%;
      img {
        max-width: 100%;
      }
    }
  }
}

.home-design-lightbox {
  .btns-images {
    direction: ltr;
    margin: 10px;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      max-width: 15%;
      margin-bottom: 21px;
      img {
        max-width: 100%;
      }
    }
  }
}

.selfie-reminder-lightbox {
  .agree {
    position: absolute;
    bottom: -9vw;
    width: 20vw;
    max-width: 60px;
    right: -8vw;
  }
  margin-bottom: 0px;
    div {
    justify-content: center;
      img {
        max-width: 100%;  
        bottom: 0;    
      }
    }
}

.dialog-btns {
  direction: ltr;
  left: 0;
}
.family-num-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  .windows-num-input {
    margin-bottom: 21px;
    margin-top: 10px;
    width: 70%;
    // background-color: transparent;
    background-color: lightgray;
    font-weight: lighter;
    font-size: 16px;
    height: 23px;
    border: black 1px solid;
    border-radius: 8px;
    box-shadow: black 2px 2px;
    text-align: center;
    font-weight: lighter;
    top: 50%;
    // left: 0;
    // right: 0;
  }
}

.family-name-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 90%;
    margin-bottom: 21px;
  }

  input {
    width: 60%;
    background-color: transparent;
    position: absolute;
    text-align: center;
    font-size: 25px;
    font-weight: bolder;
    border: black 1px solid;
    border-radius: 10px;
    box-shadow: black 4px 4px;
    color: black;
    -webkit-text-stroke: 1.5px white;
    top: 50%;
    @media (min-width: 720px) {
      font-size: 67px;
      -webkit-text-stroke: 3.5px white;
    }
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
    // -webkit-text-stroke: 1px black;
  }
}
</style>


