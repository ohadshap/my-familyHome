<template>
  <div v-if="home"  class="view-home" @click="goNext()">
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

    <div class="confeti-container">
      <canvas id="confetiHome">
        <Confetti i ref="confettiEffect"></Confetti>
      </canvas>
    </div>

    <div
      class="home background flex flex-column justify-end"
    >
      <div v-if="home.homeType == null || home.homeType !== 'castel'" class="roof flex justify-center">
        <!-- ROOF  URBAN/FARM-->
        <div v-if="home.homeType === 'urban'" class="bird" @click="birdClick">
          <img src="@/assets/img/bird.png" alt="" />
        </div>

        <div v-if="home.familyCrest && finished" class="flag">
          <img src="@/assets/img/crest-flag.png" alt="" />
        </div>

        <div v-if="home.familyCrest && finished" class="family-crest" @click="onFlagClick">
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

        <img 
          class="bottom-roof"
          src="@/assets/img/bottom-roof.png"
          alt=""
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

      <div v-if="home.homeType === 'castel'" class="roof flex justify-center">
        <!-- ROOF CASTEL-->

        <div v-if="home.familyCrest  && finished" class="flag">
          <img src="@/assets/img/crest-flag.png" alt="" />
        </div>

        <div v-if="home.familyCrest  && finished" class="family-crest" @click="onFlagClick">
          <img :src="home.familyCrest" alt="" />
        </div> 
        
        <img class="castel-roof-pic" src="@/assets/img/castelRoof.png" alt="" />
        <img class="castel-top" src="@/assets/img/castel-top.png" alt="" />
        <img class="dragon" src="@/assets/img/dragon.png" alt="" />
        
        
      </div>

      <img v-if="home.homeType === 'castel'" class="left-tower" src="@/assets/img/left-tower.png" alt="" />
      <img v-if="home.homeType === 'castel'" class="right-tower" src="@/assets/img/right-tower.png" alt="" />

     
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
          v-if="home.windows && home.homeType === 'castel'"
          class="wall-windows middle windows-container flex space-between"
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
          v-if="!home.wall && (!home.homeType || home.homeType !== 'castel')"
          class="wall-pic"
          src="@/assets/img/wall.png"
          alt=""
        />

        <img
          v-if="!home.wall && home.homeType === 'castel'"
          class="castel-wall-pic"
          src="@/assets/img/castelWall.png"
          alt=""
        />
        
        <img
          v-if="home.wall && home.homeType !== 'castel'"
          class="wall-pic"
          :src="home.wall"
          alt=""
        />

        <img
          v-if="home.wall && home.homeType === 'castel'"
          class="castel-wall-pic"
          :src="home.wall"
          alt=""
        />
        
        <div class="door flex align-center">
          <!-- DOOR -->
          <!-- <img class="door-pic" src="@/assets/img/door.png" alt="" /> -->
         
          <img
            v-if="!home.door && (!home.homeType || home.homeType !== 'castel')"
            class="door-pic"
            src="@/assets/img/door.png"
            alt=""
          />

          <img
            v-if="!home.door && (home.homeType === 'castel')"
            class="castel-door-pic"
            src="@/assets/img/castelDoor.png"
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
      <!-- <div class="confetti" v-if="confet">
        <Confetti ref="confettiEffect"></Confetti>
      </div> -->
      <div class="home-footer">
        <!-- <img v-if="mailWasNotified && !mailWasOpened" class="got-mail" src="@/assets/img/new-mail.png" alt="" /> -->
        <img
          @click="onMailClick"
          v-if="!home.homeType || home.homeType === 'urban'"
          class="mail-box"
          src="@/assets/img/mailbox.png"
          alt=""
        />

        <img
          @click="onMailClick"
          v-if="home.homeType === 'farm'"
          class="mail-box"
          src="@/assets/img/farm-mailbox.png"
          alt=""
        />

        <img
          @click="onMailClick"
          v-if="home.homeType === 'castel'"
          class="owl-mail-box"
          src="@/assets/img/owl-mail.png"
          alt=""
        />

        <div v-if="checkHouse() && dropBottom" class="bottomWriting">
          ,פתרתם את כל החידות
          <br/>
          !יש לכם מכתב בתיבת הדואר
        </div>
        <div v-if="showStartWriting" class="bottomWriting">
          <img src="@/assets/img/visitor-welcome.png" alt="">
        </div>
        <img v-if="finished" @click="createNewHome" class="new-home-pic" src="@/assets/img/new-home-short.png" alt="" />

        <img v-if="!home.homeType || home.homeType === 'urban'" class="grass-pic" src="@/assets/img/urban.png" alt="" />
        <img v-if="home.homeType === 'farm'" class="grass-pic" src="@/assets/img/farm-grass-pic.png" alt="" />
        <img v-if="home.homeType === 'farm'" class="chicken" src="@/assets/img/chicken.png" alt="" />
        <img v-if="home.homeType === 'castel'" class="grass-pic" src="@/assets/img/castel-grass.png" alt="" />
      </div>
      
    </div>

    <div class="wrong-pic" v-if="alertWrong">
       <WrongPic></WrongPic> 
    </div>
        
    <div class="correct-pic" @click="closeQuestion()" v-if="alertCorrect">
      <CorrectPic></CorrectPic>
    </div>

    <AppDialog ref="questionDialog">
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

    <AppDialog ref="finishDialog">
      <div class="letter-dialog">
        <img class="letter" src="@/assets/img/lightbox-mailbox-process-presenting.png" alt="" />

        <img
          @click="onCrestClick"
          v-if="home.familyCrest"
          class="gallery-img"
          :src="home.familyCrest"
          alt
        /> 
      </div>
    </AppDialog> 

    <AppDialog ref="finishBuildingDialog">
      <div class="finish-building-lightbox">
        <div class="explain">
          <textarea :value="home.story" disabled v-if="home.story"
            name="Text1" cols="10" rows="10"
            ></textarea>
        </div>
 
        <!-- <img class="finished-crest" :src="home.familyCrest" alt="" v-if="home.familyCrest" /> -->
 
      </div> 

    </AppDialog>

    <!-- <div ref="confettiEffect" v-if="confet" class="confeti-container">
      <canvas id="confetiHome">
        <Confetti></Confetti>
      </canvas>
    </div> -->
   
  </div>
</template>

<script>
import AppDialog from '@/components/AppDialog';
import CorrectPic from '@/components/CorrectPic';
import WrongPic from '@/components/WrongPic';
import _ from 'lodash';
import Confetti from '@/components/Confetti'




export default {
  name: 'ViewHome',
  components: { AppDialog, CorrectPic, WrongPic,Confetti },
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
      shouldClose: false,
      finished: false,
      dropBottom: true,
      confet: false,
      showStartWriting: true
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
      this.showStartWriting = false
      this.answeredCorrectly = false
      if(this.alertCorrect) {
        this.alertCorrect = false
      }
      console.log(this.answeredWindows);
      for(let win of this.answeredWindows) {
        console.log(win)
        console.log(windowName)
        if(`${win}` === windowName) {
        alert(`this window already been answered correctly`)
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
        this.alertCorrect = true
        this.answeredWindows.push(this.selectedWindow)
        setTimeout(()=> {
          this.shouldClose = true
        },100)
        setTimeout(()=> {
          if(this.shouldClose) {
            this.closeLightbox()
            this.shouldClose = false}
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
      if(this.getWindowsNum() === this.answeredWindows.length && this.answeredWindows.length !== 0) {
        if(!this.confet){
           this.confet = true
          this.$refs.confettiEffect.start()
        setTimeout(()=>{ 
          this.$refs.confettiEffect.stop()
        },3500)
        }
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
      if(this.shouldClose) {
        this.closeLightbox()
        clearTimeout()
        this.shouldClose = false
      }
    },
    async onMailClick() {
      if(this.checkHouse()) {
        await this.$refs.finishDialog.open({
          // title: 'ושתפו את התהליך עם הקרובים אליכם',
          content: ' '
        })
        this.finished = true
        this.dropBottom = false
      }
    },
    createNewHome() {
      this.$router.replace(`/edit-home`)
    },
    onFlagClick() {
      this.$refs.finishBuildingDialog.open({content: ' ' });
    },
    onCrestClick () {
      this.$refs.finishDialog.decline()
      this.$refs.finishBuildingDialog.open({content: ' ' });
    },
    birdClick() {
      console.log(`bird click`);
      // this.confet = true
      // this.$refs.confettiEffect.start()
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.home-background {
  position: fixed;
  top: 6vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: $app-max-width;
  height: 94%;
  z-index: 0;
}
.confeti-container{
  position: absolute;
  top: 5vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: $app-max-width;
  height: 95%;
  // z-index: 5;
  // #confetiHome {
  //   display: none;
  // }
}

.view-home {
  position: relative;
  height: 100%;
}

.home {
  z-index: 1;
  width: 100%;
  position: fixed;
  bottom: -0.5vh;
  .grass-pic {
    width: 100vw;
    max-width: $app-max-width;
    // margin-bottom: 2vh;
    // bottom: -0.5vh;
  }

  .roof {
    position: relative;
    .roof-pic {
      z-index: 2;
      margin: 0 auto;
      width: 95vw;
      height: 22vw;
      &.costum-pic {
        // -webkit-transform: perspective(20%) rotateX(5deg);
        width: 84vw;
        margin-bottom: 9px;
        transform: perspective(5vw) rotateX(3deg);
      }
    }
    .castel-roof-pic {
      z-index: 2;
      width: 70vw;
      height: 9vw;
    }
    .castel-top {
      position: absolute;
      bottom: 4vh;
      left: 20%;
      width: 59.5vw;
      height: 16vh;
    }
    .dragon {
      position: absolute;
      bottom: 8vh;
      right: 3%;
      z-index: 2;
      height: 8vh;
    }


    .bottom-roof {
      z-index: 2;
      margin: 0 auto;
      width: 95vw;
      height: 3vw;
      position: absolute;
      bottom: -1vh;
    }

    .bird {
      position: absolute;
      top: -9vw;
      right: 22vw;
      z-index: 2;
      img {
        height: 4vh
      }
    }

    .flag {
      position: absolute;
      top: -48vw;
      right: 15vw;
      z-index: 1;
      img {
        height: 26vh;
      }
    }
    
    .family-crest {
      position: absolute;
      top: -48vw;
      right: 15vw;
      z-index: 1;
      img {
        width: 46vw;
        height: 18vh;
      }
    }
  }

  .left-tower {
    height: 35vh;
    bottom: 23%;
    position: absolute;
    left: -15%;
  }
  .right-tower {
    height: 36vh;
    bottom: 23%;
    position: absolute;
    right: -4%;
  }

  .wall {
    position: relative;
    margin: 0 auto;
    .wall-pic {
      width: 76vw;
      height: 24vh;
    }
    .castel-wall-pic {
      width: 70vw;
      height: 49vh;
    }

    .door {
      position: absolute;
      bottom: 0;
      .door-pic {
        width: 18vw;
        height: 22vw;
      }
      .castel-door-pic {
        width: 23vw;
        height: 30vw;
      }

      .door-sign {
        position: absolute;
        top: 5%;
        width: 100%;
        display: flex;
        justify-content: center;

        .text {
          position: absolute;
          top: 30%;
          text-align: center;
          font-weight: bolder;
          .belongs-to {
            font-size: 6px;
            @media (min-width: 725px) {
              font-size: 16px;
            }
          }

          .name {
            -webkit-text-stroke: 0.2px white;
            font-size: 14px;

            @media (min-width: 725px) {
              font-size: 30px;
            }
          }
        }

        img {
          width: 60%;
          height: 4vh;
        }
      }

      .door-knob {
        position: absolute;
        width: 2vw;
        right: 2vw;
        top: 12vw;
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
  &.middle,
  &.top {
    left: 8vw;
    right: 8vw;
  }
  &.middle {
    top: auto;
    bottom: 52vw;
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
    width: 7vw;
    height: 10vw;
  }
}

.letter-dialog {
  position: relative;
  .letter {
    width: 100%;

  }

  .gallery-img {
    position: absolute;
    top: 44%;
    left: 31%;
    width: 38%;
    height: 21%;
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

  .owl-mail-box{
    position: absolute;
    top: 10%;
    height: 35%;
    left: 75%;
  }

  .got-mail {
    position: absolute;
    top: -15%;
    height: 35%;
    left: 40%;
  }

  .chicken {
    position: absolute;
    // top: 10%;
    height: 40%;
    left: 5%;
  }

  .bottomWriting {
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    font-weight: bold;
    text-align: center;
    color: white;
    font-size: xx-large;
    font-style: italic;
    // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -4px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    img{
      height: 14vh;
      margin-top: -7vh;
    }
  }
  // .wrong-pic {
  //   position: absolute;
  //   top: -65px;
  //   text-align: center;
  //   img {
  //     z-index: 886;
  //     width: 80%;
  //   }
  // }

  // .correct-pic {
  //   // width: 100vw;
  //   // max-width: $app-max-width;
  //   position: absolute;
  //   bottom: 20%;
  //   text-align: center;
  //   img {
  //     z-index: 887;
  //     width: 80%;
  //     margin-bottom: -1%;
  //   }
  // }

  .new-home-pic {
    position: absolute;
    bottom: 20%;
    height: 10vh;
    margin: 10px;
  }

}


.finish-building-lightbox {
  
  justify-content: center;
  .explain {
    height: 52vh;
    width: 81vw;
    justify-content: center;
    background-image: url('~@/assets/img/process-presenting.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    textarea {
      width: 85%;
      height: 65%;
      margin-top: 38%;
      font-size: 15px;
      line-height: 1.1;
      background: transparent;
    }
  }

  .finished-crest{
    position: fixed;
    bottom: 10%;    
    width: 20%;  
    left: 35%;
    
  }
  .storyImages {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: fixed;
    bottom: 0%;
    gap: 55px;
    .finished-gallery-img {
      margin: 15px;
      width: 60%;
    }
  }
}


.question-dialog {
  width: 90%;
  .answers {
    width: 65vw;
    margin: 5px;
    .answer-input {
      margin: 5px;
      width: 100%;
      padding: 2px;
      // font-weight: bold;
      font-size: x-large;
      // box-shadow: black 0px 1px 2px ;
      border-radius: 6px;
      text-align: center;
      
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


