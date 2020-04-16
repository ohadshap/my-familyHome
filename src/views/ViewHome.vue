<template>
  <div v-if="home" class="view-home" @click="goNext()">
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

        <div v-if="home.familyCrest" class="flag">
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
        <img
          class="mail-box"
          src="@/assets/img/mailbox.png"
          alt=""
        />
        <div v-if="checkHouse()" class="bottomWriting">
          ,פתרתם את כל החידות
          <br/>
          !יש לכם מכתב בתיבת הדואר
        </div>

        <img class="grass-pic" src="@/assets/img/urban.png" alt="" />
        
        <div class="wrong-pic" v-if="alertWrong">
          <img src="@/assets/img/wrong-answer-feedback.png" alt="" /> 
        </div>
        
        <div class="correct-pic" @click="closeQuestion()" v-if="alertCorrect">
          <img src="@/assets/img/lightbox-true-answer-feedback.png" alt="" /> 
        </div>
        
      </div>

    </div>

    <AppDialog class="transparent" ref="questionDialog">
      <div v-if="home.windows[selectedWindow]" class="question-dialog">

        <div class="answers">
          
          <div v-for="(answer,index) of shuffleAnsweres" 
            :key="index" class="answer flex justify-center"
          >
            <div :class="answerClass(index)" :key="index" @click="submitAnswer(index)">
              {{answer}} 
            </div>

          </div>
        </div>
      </div>
    </AppDialog> 
   
  </div>
</template>

<script>
import AppDialog from '@/components/AppDialog';
import _ from 'lodash'

export default {
  name: 'ViewHome',
  components: { AppDialog },
  computed : {
    shuffleAnsweres() {
      if(this.home.windows[this.selectedWindow]) {
        const shuffled = _.shuffle(this.home.windows[this.selectedWindow].answers)
        this.correctIndex = shuffled.indexOf(this.home.windows[this.selectedWindow].answers[0])
        return shuffled
      }
    }
  },
  data() {
    return {
      selectedWindow : null,
      home : null,
      correctIndex: null,
      selectedAnswer: null,
      answeredWindows: [],
      alertWrong: false,
      alertCorrect: false,
      shouldClose: false
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
      this.answeredCorrectly = false
      if(this.alertCorrect) {
        this.alertCorrect = false
      }
      console.log(this.answeredWindows);
      for(let win of this.answeredWindows) {
        console.log(win)
        console.log(windowName)
        if(`${win}` === windowName) {
        alert(`this window answerd correctly`)
        return
        }
      }
      this.selectedAnswer = null
      this.selectedWindow = windowName;
      await this.$refs.questionDialog.open({
        title: this.home.windows[this.selectedWindow].question,
        content: ' ',
        hideBtns: true,
        sub: this.home.windows[this.selectedWindow].name
      });
    },
    async submitAnswer(i) {
      if(this.alertCorrect) return
      this.alertWrong = false
      this.selectedAnswer = i
      if(i === this.correctIndex) {
        console.log(`truuuuuuuuue`)
        this.alertCorrect = true
        this.answeredWindows.push(this.selectedWindow)
        setTimeout(()=> {
          this.shouldClose = true
        },100)
        setTimeout(()=> {
          this.closeLightbox()
          this.shouldClose = false
        },3000)
      } else {
        this.alertWrong = true
      }
    },
    answerClass(i) {
      if(i === this.correctIndex && i === this.selectedAnswer) {
        return 'answer-input correct'
      } else if(i !== this.correctIndex && i === this.selectedAnswer) {
        return 'answer-input incorrect'
      } else {
        return 'answer-input'
      }
    },
    checkHouse() {
      if(this.getWindowsNum() === this.answeredWindows.length) {
        return true
      }
      return false
    },
    getWindowsNum() {
      if (this.home && this.home.windows) {
        return Object.keys(this.home.windows).length;
      }
      return 0;
    },
    closeQuestion() {
      this.alertCorrect = false
    },
    closeLightbox() {
      this.$refs.questionDialog.decline()
      this.alertCorrect = false
    },
    goNext() {
      console.log(`nextttt`)
      if(this.shouldClose) {
        this.closeLightbox()
        clearTimeout()
        this.shouldClose = false
      }
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

.home {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  top: 32.5vh;
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
      top: -11vw;
      right: 22vw;
      z-index: 2;
      img {
        height: 5vh
      }
    }

    .flag {
      position: absolute;
      top: -43vw;
      right: 15vw;
      z-index: 1;
      img {
        height: 20vh;
      }
    }

    .flag-crest {
      position: absolute;
      top: -38vw;
      right: 15vw;
      z-index: 1;
      img {
        height: 14vh;
      }
    }
    

    .family-crest {
      position: absolute;
      top: -38vw;
      right: 15vw;
      z-index: 1;
      img {
        width: 38vw;
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
    bottom: 0;
    height: 50%;
    width: 100%;
    text-align: center;
    color: white;
    font-size: x-large;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -4px 1px 0 #000, 1px 1px 0 #000;
  }
  .wrong-pic {
    position: absolute;
    top: -65px;
    text-align: center;
    img {
      width: 80%;
    }
  }

  .correct-pic {
    // width: 100vw;
    // max-width: $app-max-width;
    position: absolute;
    bottom: 20%;
    text-align: center;
    img {
      width: 80%;
    }
  }

}



.question-dialog {
  width: 100%;
  .answers {
    width: 65vw;
    margin: 5px;
    .answer-input {
      margin: 5px;
      width: 100%;
      padding: 2px;
      box-shadow: black 0px 1px 2px ;
      border-radius: 6px;
      text-align: center;
      background-color: lightgray;
    }
    .correct {
      background-color: rgb(73, 228, 137);
    }
    .incorrect {
      background-color: red;
    }
  }
}
</style>


