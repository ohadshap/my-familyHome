<template>
  <div class="edit-home flex align-center">
    <div class="backgroundInput" >
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

    <div class="confeti-container">
      <canvas id="confetiHomeView">
        <Confetti ref="confettiEffect"></Confetti>
      </canvas>
    </div>

    <div>
      <Snackbar ref="snacking"></Snackbar>
    </div>

    <div
      @click="
        onBackgroundClick($event.target, 'home-background', 'backgroundInput')
      "
      class="home background flex flex-column justify-end"
    >

      <div v-if="home.homeType == null || home.homeType !== 'castel'" class="roof flex justify-center">
        <!-- ROOF URBAN/FARM-->
        <div v-if="!home.homeType || home.homeType === 'urban'" class="bird" @click="birdClick">
          <img src="@/assets/img/bird.png" alt="" />
        </div>

        <div v-if="home.familyCrest" class="flag">
          <img src="@/assets/img/crest-flag.png" alt="" />
        </div>

        <div v-if="home.familyCrest" class="family-crest" @click="onFlagClick">
          <img :src="home.familyCrest" alt="" />
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
          class="bottom-roof"
          src="@/assets/img/bottom-roof.png"
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

            <div v-if="home.windows.window5" class="window-name">
              <img v-if="secondTaps && !home.windows.window5.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
        <!-- <img v-if="home.homeType === 'castel' && secondTaps" class="castel-window-tap" src="@/assets/img/tap.gif" alt=""/> -->
            </div>
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

            <div v-if="home.windows.window6" class="window-name">
              <img v-if="secondTaps && !home.windows.window6.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div> 
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
            
            <div v-if="home.windows.window7" class="window-name">
              <img v-if="secondTaps && !home.windows.window7.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
          </div>
        </div>
        
      </div>

      <div v-if="home.homeType === 'castel'" class="roof flex justify-center">
        <!-- ROOF CASTEL-->

        <div v-if="home.familyCrest" class="castel-flag">
          <img src="@/assets/img/crest-flag.png" alt="" />
        </div>

        <div v-if="home.familyCrest" class="castel-family-crest" @click="onFlagClick">
          <img :src="home.familyCrest" alt="" />
        </div> 

        <img class="castel-roof-pic" src="@/assets/img/castelRoof.png" alt="" />
        <img class="castel-top-wall" src="@/assets/img/chineseWall.png" alt="" />
        <img class="castel-top" src="@/assets/img/castel-toptower.png" alt="" />
        <img class="dragon" src="@/assets/img/dragon.png" alt="" />

        
      </div>
     
      <img v-if="home.homeType === 'castel'" class="left-tower" src="@/assets/img/left-tower.png" alt="" />
      <img v-if="home.homeType === 'castel'" class="right-tower" src="@/assets/img/right-tower.png" alt="" />
      <img v-if="home.homeType === 'farm'" class="farm-tree" src="@/assets/img/farm-tree.png" alt="" />
      <img v-if="home.homeType === 'farm'" class="farm-tree-bush" src="@/assets/img/tree-bush.png" alt="">
      <img v-if="home.homeType === 'farm'" class="farm-bush" src="@/assets/img/farm-bush.png" alt="" />
      
        <img v-if="firstTaps && showThisTap === 0 && showTaps && !home.background" class="sky-tap" src="@/assets/img/tap.gif" alt=""/>
        <img v-if="(!home.homeType || home.homeType !== 'castel') && firstTaps && showThisTap === 1 && showTaps && !home.roof" class="roof-tap" src="@/assets/img/tap.gif" alt=""/>
        <img v-if="firstTaps && showThisTap === 2 && showTaps && !home.door" class="door-tap" src="@/assets/img/tap.gif" alt=""/>
        <img v-if="(!home.homeType || home.homeType !== 'castel') && firstTaps && showThisTap === 3 && showTaps && !home.wall" class="wall-tap" src="@/assets/img/tap.gif" alt=""/>
        <img v-if="home.homeType === 'castel' && firstTaps && showThisTap === 3 && showTaps && !home.wall" class="castel-wall-tap" src="@/assets/img/tap.gif" alt=""/> 
      

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
            
            <div v-if="home.windows.window1" class="window-name">
              <img v-if="secondTaps && !home.windows.window1.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
          
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
            
            <div v-if="home.windows.window0" class="window-name">
              <img v-if="secondTaps && !home.windows.window0.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
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
            
            <div v-if="home.windows.window2" class="window-name">
              <img v-if="secondTaps && !home.windows.window2.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
          </div>
        </div>

        <div
          v-if="home.windows && home.homeType === 'castel'"
          class="wall-windows middle windows-container flex space-between"
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

            <div v-if="home.windows.window5" class="window-name">
              <img v-if="secondTaps && !home.windows.window5.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
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

            <div v-if="home.windows.window6" class="window-name">
              <img v-if="secondTaps && !home.windows.window6.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
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
            
            <div v-if="home.windows.window7" class="window-name">
              <img v-if="secondTaps && !home.windows.window7.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
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
            
            <div v-if="home.windows.window3" class="window-name">
              <img v-if="secondTaps && !home.windows.window3.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
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
            
            <div v-if="home.windows.window4" class="window-name">
              <img v-if="secondTaps && !home.windows.window4.name" class="window-tap" src="@/assets/img/tap.gif" alt=""/>
            </div>
          </div>
        </div>
        <UploadFile
          customKey="wallInput"
          ref="wallInput"
          @file="setHome('wall', $event)"
        />
        
        <img
          @click="onAssetClick('wallInput')"
          v-if="!home.wall && (!home.homeType || home.homeType !== 'castel')"
          class="wall-pic"
          src="@/assets/img/wall.png"
          alt=""
        />

        <img
          @click="onAssetClick('wallInput')"
          v-if="!home.wall && home.homeType === 'castel'"
          class="castel-wall-pic"
          src="@/assets/img/castelWall.png"
          alt=""
        />
        
        <img
          @click="onAssetClick('wallInput')"
          v-if="home.wall && home.homeType !== 'castel'"
          class="wall-pic"
          :src="home.wall"
          alt=""
        />

        <img
          @click="onAssetClick('wallInput')"
          v-if="home.wall && home.homeType === 'castel'"
          class="castel-wall-pic"
          :src="home.wall"
          alt=""
        />
        
        <div class="door flex align-center">
          <!-- DOOR -->
          <UploadFile
            customKey="doorInput"
            ref="doorInput"
            @file="setHome('door', $event)"
          />
          <img
            @click="onAssetClick('doorInput')"
            v-if="!home.door && (!home.homeType || home.homeType !== 'castel')"
            class="door-pic"
            src="@/assets/img/door.png"
            alt=""
          />
          

          <img
            @click="onAssetClick('doorInput')"
            v-if="!home.door && (home.homeType === 'castel')"
            class="castel-door-pic"
            src="@/assets/img/castelDoor.png"
            alt=""
          />
          
          
          <img
            @click="onAssetClick('doorInput')"
            v-if="home.door && (!home.homeType || home.homeType !== 'castel')"
            class="door-pic"
            :src="home.door"
            alt=""
          />

          <img
            @click="onAssetClick('doorInput')"
            v-if="home.door && home.homeType === 'castel'"
            class="castel-door-img"
            :src="home.door"
            alt=""
          />
          
          
          <div class="door-sign" @click="onSignClick">
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
        <img  
          v-if="mailWasNotified && !mailWasOpened && (!home.homeType || home.homeType !== 'castel')" 
          @click="onMailBoxClick" class="got-mail" src="@/assets/img/new-mail.png" alt="" 
        />

        <img 
          v-if="mailWasNotified && !mailWasOpened && home.homeType === 'castel'" 
          class="castel-got-mail" @click="onMailBoxClick" src="@/assets/img/new-mail.png" 
          alt="" 
        />
        
        <img
          @click="onMailBoxClick"
          v-if="!home.homeType || home.homeType === 'urban'"
          class="mail-box"
          src="@/assets/img/mailbox.png"
          alt=""
        />

        <img
          @click="onMailBoxClick"
          v-if="home.homeType === 'farm'"
          class="mail-box"
          src="@/assets/img/farm-mailbox.png"
          alt=""
        />

        <img
          @click="onMailBoxClick"
          v-if="home.homeType === 'castel'"
          class="owl-mail-box"
          src="@/assets/img/owl-mail.png"
          alt=""
        />

        <!-- <div v-if="!home.name && !home.windows" class="bottomWriting">
          <img class="bot-start" src="@/assets/img/started-witre.png" alt=""/>
        </div>

        <div v-if="home.name && !home.windows" class="bottomWriting">
          <img class="bot-window" src="@/assets/img/window-write.png" alt=""/>
        </div>

        <div v-if="home.windows && !home.wall" class="bottomWriting">
          <img class="bot-color" src="@/assets/img/color-write.png" alt=""/>
        </div>

        <div v-if="home.familyCrest && storyTime && !showSaveBtn" class="bottomWriting">
          <img class="bot-story" src="@/assets/img/story-write.png" alt=""/>
        </div> -->
        
        <div v-if="isLoading">
          <LoadingSpinner ></LoadingSpinner>
        </div>
          <img v-if="showSaveBtn" @click="saveHome" class="share-button" src="@/assets/img/home-finishing.png" alt="">
          <img v-if="!home.homeType || home.homeType === 'urban'" class="grass-pic" src="@/assets/img/urban.png" alt="" />
          <img v-if="home.homeType === 'farm'" class="grass-pic" src="@/assets/img/farm-grass-pic.png" alt="" />
          <img v-if="home.homeType === 'castel'" class="grass-pic" src="@/assets/img/castel-grass.png" alt="" />
        </div>
        
    </div>

    <AppDialog ref="windowsDialog">
      <div class="windows-dialog">
        <div
          class="step1"
          v-if="
            dialogStep === 1 &&
              home.windows &&
              selectedWindow &&
              home.windows[selectedWindow]
          "
        >
          <div class="window-name">
            <input
              class="windows-name"
              placeholder="הקלד טקסט"
              type="text"
              @input="setWindowProperty('name', $event.target.value)"
              :value="home.windows[selectedWindow].name"
            />
          </div>
          
          <div class="window-name-btns">
            <div class="p">
              <img class=window-name-img src="@/assets/img/lightbox-window-name-pic.png" alt="">
            </div>
            
            <div class="btns-images flex space-between">
              <div >
                <img v-if="getWindowsNum() > 1" class="delete-window" @click="removeWindow" src="@/assets/img/delete-window-btn.png" alt="" />
              </div>
              
              <div>
                <img
                  v-if="!home.windows[selectedWindow].pic"
                  @click="onAssetClick(selectedWindow)"
                  class="upload-window-pic"
                  src="@/assets/img/upload-window-pic.png"
                  alt=""
                />
                
                <img
                  v-if="home.windows[selectedWindow].pic"
                  class="upload-window-pic"
                  @click="onAssetClick(selectedWindow)"
                  :src="home.windows[selectedWindow].pic"
                  alt=""
                />
              </div>


              <div>
                <img
                  v-if="canAddWindow()"
                  class="add-window-pic"
                  src="@/assets/img/add-window-pic.png"
                  @click="addWindow"
                  alt=""
                />
              </div>
          
            </div>
          </div>
          <!-- <div v-if="showLike" class="like-img">
            <img src="@/assets/img/like-btn.png" alt="">
          </div> -->
        </div>
        
        <div
          class="step2"
          v-if="dialogStep === 2 && home && home.windows && selectedWindow"
        >
          <input
            class="windows-question"
            placeholder="כתוב שאלה"
            type="text"
            @input="setWindowProperty('question', $event.target.value)"
            :value="home.windows[selectedWindow].question"
          />
         
          <div class="answers">
            <div
              v-for="(answer, index) of home.windows[selectedWindow].answers"
              :key="index"
              class="answer flex justify-center"
            >
              <div class="answer-input">
                <input
                  @input="setWindowAnswers(index, $event.target.value)"
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  maxlength = "25"
                  class="windows-answer"
                  :placeholder="answersPlaceholders[index]"
                  type="text"
                  :value="home.windows[selectedWindow].answers[index]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <img
          v-if="selectedWindow && dialogStep !== 2 && home.windows[selectedWindow].name && home.windows[selectedWindow].pic"
          class="agree"
          @click="setDialogStep"
          src="@/assets/img/like-btn.png"
          alt=""
        />
        <img
          v-if=" isWindowComplete "
          class="agree"
          @click="setDialogStep"
          src="@/assets/img/like-btn.png"
          alt=""
        />
        <!-- </div> -->
      </div>
    </AppDialog>

    <AppDialog ref="letterDialog">
      <div class="letter-dialog">
        <img class="letter" src="@/assets/img/letter.png" alt="" />
        
        <UploadFile
          customKey="familyCrest"
          ref="familyCrest"
          @file="setHome('familyCrest', $event)"
        />
        
        <img
          @click="onAssetClick('familyCrest')"
          v-if="!home.familyCrest"
          class="gallery-img"
          src="@/assets/img/upload-window-pic.png"
          alt=""
        />
       
        <img
          @click="onAssetClick('familyCrest')"
          v-if="home.familyCrest"
          class="gallery-img"
          :src="home.familyCrest"
          alt
        />
      </div>
    </AppDialog>

    <AppDialog ref="familyNumDialog">      
      <div class="family-num-dialog">
        <img class="family-num-pic" src="@/assets/img/lightbox-number.png" alt="">
        <input
          class="windows-num-input"
          placeholder="הקלד מספר דיירים"
          type="number"
          v-model="windowsNum"
          min="1"
          max="8"
        />

        <img
          v-if="validateNum"
          class="agree"
          @click="enterFamData(`familyNumDialog`)"
          src="@/assets/img/like-btn.png"
          alt=""
        />
      </div>
    </AppDialog>
    
     <AppDialog ref="familyNameDialog">
      <div class="family-name-dialog">
        <img class="name-background" src="@/assets/img/lightbox-name.png" alt="" />
        <input
          class="windows-name"
          maxlength = "11"
          placeholder="הקלד טקסט"
          type="text"
          @input="setHome('name', $event.target.value)"
          :value="home.name"
        />

        <img
          v-if="validateFamName"
          class="agree"
          @click="enterFamData(`familyNameDialog`)"
          src="@/assets/img/like-btn.png"
          alt=""
        />
      </div>
    </AppDialog>
    
    <AppDialog ref="homeDesignDialog">
      <div class="home-design-lightbox">
        <div class="p">
          אגב,
          <br/>
          גם את הרקע אפשר לעצב :)
        </div>
        
        <div class="btns-images flex space-between">
          <div></div>
          
          <div>  
            <img
              v-if="!home[selectedBackground]"
              @click="editBackground(selectedBackground)"
              class="gallery-img"
              src="@/assets/img/upload-window-pic.png"
              alt=""
            />

            <img
              v-if="home[selectedBackground]"
              @click="editBackground(selectedBackground)"
              class="gallery-img"
              :src="home[selectedBackground]"
              alt=""
            />
          </div>

          <div></div>
        </div>
      </div>

    </AppDialog>

    <AppDialog ref="finishBuildingDialog">
      <div class="finish-building-lightbox">
        <div class="explain">
          <textarea :value="home.story" @change="setStory($event.target.value)"
            name="Text1" cols="10" rows="10"
            placeholder=""
            ></textarea>
            <img class="story-writing-text" src="@/assets/img/process-writing.png" alt="">
        </div>
 
        <!-- <img class="finished-crest" :src="home.familyCrest" alt="" v-if="home.familyCrest" /> -->
        <div class="finished-crest">
          <UploadFile
            customKey="familyCrest"
            ref="familyCrest"
            @file="setHome('familyCrest', $event)"
          />
        
          <img
            @click="onAssetClick('familyCrest')"
            v-if="home.familyCrest"
            class="finished-gallery-img"
            :src="home.familyCrest"
            alt
          />
        </div>
 
        <div class="story-gallery-img">
          <img class="string" src="@/assets/img/story-string.png"  />
          <div class="left-pic">
            <UploadFile
              customKey="storyPic1"
              ref="storyPic1"
              @file="setHome('storyPic1', $event)"
            />
           
            <img 
              @click="onAssetClick('storyPic1')"
              v-if="!home.storyPic1"
              src="@/assets/img/left-story-pic.png" 
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic1')"
              v-if="home.storyPic1"
              :src="home.storyPic1"
              alt=""
            />
          </div>

          <div class="right-pic">
            <UploadFile
              customKey="storyPic2"
              ref="storyPic2"
              @file="setHome('storyPic2', $event)"
            />

            <img 
              @click="onAssetClick('storyPic2')"
              v-if="!home.storyPic2"
              src="@/assets/img/right-story-pic.png"
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic2')"
              v-if="home.storyPic2"
              :src="home.storyPic2"
              alt=""
            />
            
          </div>

          <img class="string" src="@/assets/img/story-string.png"  />
          <div class="left-pic">
            <UploadFile
              customKey="storyPic3"
              ref="storyPic3"
              @file="setHome('storyPic3', $event)"
            />
           
            <img 
              @click="onAssetClick('storyPic3')"
              v-if="!home.storyPic3"
              src="@/assets/img/left-story-pic.png" 
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic3')"
              v-if="home.storyPic3"
              :src="home.storyPic3"
              alt=""
            />
          </div>

          <div class="right-pic">
            <UploadFile
              customKey="storyPic4"
              ref="storyPic4"
              @file="setHome('storyPic4', $event)"
            />

            <img 
              @click="onAssetClick('storyPic4')"
              v-if="!home.storyPic4"
              src="@/assets/img/right-story-pic.png"
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic4')"
              v-if="home.storyPic4"
              :src="home.storyPic4"
              alt=""
            />
            
          </div>

          <img class="string" src="@/assets/img/story-string.png"  />
          <div class="left-pic">
            <UploadFile
              customKey="storyPic5"
              ref="storyPic5"
              @file="setHome('storyPic5', $event)"
            />
           
            <img 
              @click="onAssetClick('storyPic5')"
              v-if="!home.storyPic5"
              src="@/assets/img/left-story-pic.png" 
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic5')"
              v-if="home.storyPic5"
              :src="home.storyPic5"
              alt=""
            />
          </div>

          <div class="right-pic">
            <UploadFile
              customKey="storyPic6"
              ref="storyPic6"
              @file="setHome('storyPic6', $event)"
            />

            <img 
              @click="onAssetClick('storyPic6')"
              v-if="!home.storyPic6"
              src="@/assets/img/right-story-pic.png"
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic6')"
              v-if="home.storyPic6"
              :src="home.storyPic6"
              alt=""
            />
            
          </div>

          <img class="string" src="@/assets/img/story-string.png"  />
          <div class="left-pic">
            <UploadFile
              customKey="storyPic7"
              ref="storyPic7"
              @file="setHome('storyPic7', $event)"
            />
           
            <img 
              @click="onAssetClick('storyPic7')"
              v-if="!home.storyPic7"
              src="@/assets/img/left-story-pic.png" 
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic7')"
              v-if="home.storyPic7"
              :src="home.storyPic7"
              alt=""
            />
          </div>

          <div class="right-pic">
            <UploadFile
              customKey="storyPic8"
              ref="storyPic8"
              @file="setHome('storyPic8', $event)"
            />

            <img 
              @click="onAssetClick('storyPic8')"
              v-if="!home.storyPic8"
              src="@/assets/img/right-story-pic.png"
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic8')"
              v-if="home.storyPic8"
              :src="home.storyPic8"
              alt=""
            />
            
          </div>

          <img class="string" src="@/assets/img/story-string.png"  />
          <div class="left-pic">
            <UploadFile
              customKey="storyPic9"
              ref="storyPic9"
              @file="setHome('storyPic9', $event)"
            />
           
            <img 
              @click="onAssetClick('storyPic9')"
              v-if="!home.storyPic9"
              src="@/assets/img/left-story-pic.png" 
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic9')"
              v-if="home.storyPic9"
              :src="home.storyPic9"
              alt=""
            />
          </div>

          <div class="right-pic">
            <UploadFile
              customKey="storyPic10"
              ref="storyPic10"
              @file="setHome('storyPic10', $event)"
            />

            <img 
              @click="onAssetClick('storyPic10')"
              v-if="!home.storyPic10"
              src="@/assets/img/right-story-pic.png"
              alt=""
            />

            <img 
              @click="onAssetClick('storyPic10')"
              v-if="home.storyPic10"
              :src="home.storyPic10"
              alt=""
            />
            
          </div>
        </div>

        <!-- <div class="story-gallery-img">
          <img class="string" src="@/assets/img/story-string.png"  />
          <img class="left-pic" src="@/assets/img/left-story-pic.png" />
          <img class="right-pic" src="@/assets/img/right-story-pic.png"  />
        </div>

        <div class="story-gallery-img">
          <img class="string" src="@/assets/img/story-string.png"  />
          <img class="left-pic" src="@/assets/img/left-story-pic.png" />
          <img class="right-pic" src="@/assets/img/right-story-pic.png"  />
        </div> -->
        
      </div> 

    </AppDialog>

    <AppDialog ref="homeLinkDialog">
      <div class="home-link">
        {{ `${getAppDomain()}/view-home/${home.homeId}` }}
        <div @click="copy">
          <img class="copy"  src="@/assets/img/lightbox-publishing.png" alt="" />
        </div>
        <!-- <SocialSharing :homeLink="`${getAppDomain()/view-home/home.homeId}`"/> -->
        
        <SocialSharing homeLink="https://my-home-stg.firebaseapp.com/view-home/-M6WTtJpvK77lN5NLOrB"/>
      </div>
    </AppDialog>

    <AppDialog ref="homeTypeDialog">
      <div class="home-type">
        <img class="type-title" src="@/assets/img/home-choosing-pop.png" alt=""/>
        <img @click="chooseKind('castel')" class="home-kind" src="@/assets/img/castel-home.png" alt=""/>
        <img @click="chooseKind('urban')" class="home-kind" src="@/assets/img/urban-home.png" alt=""/>
        <img @click="chooseKind('farm')" class="home-kind" src="@/assets/img/farm-home.png" alt=""/>
      </div>
    </AppDialog>

    <AppDialog ref="connectDialog">
      <span @click="closeConnectPop" class="close-span-top"></span>
      <img @click="closeConnectPop" class="connect-pic" src="@/assets/img/login-for-publish.png" alt=""/>
      <img @click="login" class="connectBtn" src="@/assets/img/connect-btn.png" alt=""/>
      <span @click="closeConnectPop" class="close-span-bot"></span>
    </AppDialog>

    <AppTutorial ref="firstTutorial">
      <img class="tutorial-top" src="@/assets/img/torturial-1-gray-parts.png" alt=""/>
      <img class="tutorial-bottom" src="@/assets/img/torturial-1-color-this.png" alt=""/>
    </AppTutorial>

    <AppTutorial ref="familyTutorial">
      <img class="tutorial-top" src="@/assets/img/torturial-2-devote.png" alt=""/>
      <img class="tutorial-bottom" src="@/assets/img/torturial-2-on-finish.png" alt=""/>
    </AppTutorial>
    <AppTutorial ref="thirdTutorial">
      <!-- <img class="tutorial-top" src="@/assets/img/torturial-1-gray-parts.png" alt=""/> -->
      <img class="tutorial-bottom" src="@/assets/img/torturial-3-rd.png" alt=""/>
    </AppTutorial>

    
  </div>
</template>


<script>
import UploadFile from '@/components/UploadFile';
import AppDialog from '@/components/AppDialog';
import AppTutorial from '@/components/AppTutorial';
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image-module';
import LoadingSpinner from '@/components/LoadingSpinner'
import fire from '@/statics/firebase-config';
import firebase  from 'firebase/app'
import Snackbar from '@/components/snack';
import Confetti from '@/components/Confetti';
// import VueSocialSharing from 'vue-social-sharing'
import SocialSharing from '@/components/SocialSharing'

export default {
  name: 'EditHome',
  components: { UploadFile, AppDialog, AppTutorial, LoadingSpinner, Snackbar, Confetti, SocialSharing },
  computed: {
    home() {
      return this.$store.getters.getHome || {};
    },
    validateFamName() {
      if(this.home.name) {
        return this.home.name.length ? true : false
      }
      return false
    },
    validateNum() {
      if(this.windowsNum) {
        return true
      }
      return false
    },
    isWindowComplete(){    
      if(this.selectedWindow && this.home.windows[this.selectedWindow].answers && this.home.windows[this.selectedWindow].question ){
        let flag = true
        this.home.windows[this.selectedWindow].answers.forEach(a => {
        if(a.length < 1){
          flag = false
          return
        }
        })
        if(this.home.windows[this.selectedWindow].question.length < 1)  {
          flag = false
        }
        return flag
      }
      return false
    },
    showTaps() {
      if(this.home.wall && this.home.door && this.home.background) {
        if(!this.home.homeType || this.home.homeType !== `castel`) {
          if(this.home.roof) {
            clearInterval(this.tapInterval);
            this.firstTaps = false
            this.resumeBuild()
            return false
          }
        } else {
          clearInterval(this.tapInterval);
          this.firstTaps = false
          this.resumeBuild()
          return false
        }
      }
      return true
    },
    homePic() {
      return this.$store.getters.getHomePic || {};
    },
    answersPlaceholders() {
      return [
        'התשובה הנכונה',
        'התשובה המצחיקה',
        'התשובה המבלבלת',
        'התשובה ההפוכה'
      ];
    },
    isHomeComplete() {
      try {
        for (const appWindow of Object.values(this.home.windows)) {
          if (
            !appWindow ||
            !appWindow.pic ||
            !appWindow.name ||
            !appWindow.question ||
            !appWindow.answers ||
            !appWindow.answers[0]
          ) {
            return false;
          }
        }
        
        return true;
      } catch (e) {
        console.warn(e);
        return false;
      }
    }
  },
  data() {
    return {
      windowsNum: null,
      interval: null,
      tapInterval: null,
      selectedWindow: null,
      selectedBackground: null,
      dialogStep: 1,
      mailWasNotified: false,
      mailWasOpened: false,
      storyTime: false,
      isLoading : false,
      showSaveBtn: false,
      firstTaps: false,
      secondTaps: false,
      showThisTap: 0
    };
  },
  mounted() {
    this.initWindows();
    this.handleMailMessage();

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
          await this.$refs.homeTypeDialog.open({ content: ' ' });
          await this.$refs.familyNameDialog.open({hideBtns: true, content: ' ' });
          this.firstTaps = true
          await this.buildHome()
          await this.$refs.firstTutorial.open({ content: ' ' });
          console.log(`check check`)
        }
      }
    },
    getAppDomain() {
      return process.env.VUE_APP_DOMAIN;
    },
    async buildHome() {
      this.tapInterval = setInterval(
        () => {
          if(this.showThisTap < 3) {
            this.showThisTap++
          } else {
            this.showThisTap = 0 
          }
        },1000)
    },
    async resumeBuild() {
      await this.$refs.familyNumDialog.open({hideBtns: true, content: ' ' });
      this.setHome('windows', await this.createWindowsObj())
      this.secondTaps = true
      await this.$refs.familyTutorial.open({ content: ' ' });
    },
    chooseKind(kind) {
      console.log(kind)
      this.setHome('homeType',kind)
      this.$refs.homeTypeDialog.agree()
    },
    async saveHome(){
      if (!this.$store.getters.getIdToken) {
        this.$refs.connectDialog.open({hideBtns: true, content: ' ' })
        return
      } 
      else {
        await this.takePic()
        this.isLoading = true
        let action = 'createHome';
        let action2 = 'createHomePic';
        if (this.$store.getters.getHome.homeId) {
          action = 'updateHome';
        }
        if (this.$store.getters.getHomePic.homeId) {
          action2 = 'updateHomePic';
        }
        setTimeout(async () => {
          console.log(action)
          console.log(action2)
          const res = await this.$store.dispatch(action);
          const res2 = await this.$store.dispatch(action2);
          console.log(res)
          console.log(res2)
          this.showLink(res);
        },2500)
      }
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.$store.dispatch('login', res)
          this.$refs.connectDialog.agree()
          })
        .catch(err => this.$util.appCatch(this.$store, err));
    },
    showLink(home) {
      this.isLoading = false
      this.homeId = home.homeId;
      this.$refs.homeLinkDialog.open({
        title: `קישור לבית:`,
        content: ' '
      });
    },
    copy() {
      console.log(`coppppppyyyyy`)
      const appDomain = this.getAppDomain();
      navigator.clipboard.writeText(`${appDomain}/view-home/${this.homeId}`);
      this.$refs.homeLinkDialog.agree()
      this.$refs.snacking.info('הקישור הועתק בהצלחה')
      if(!this.confet){
        this.confet = true
        this.$refs.confettiEffect.start()
        setTimeout(()=>{ 
          this.$refs.confettiEffect.stop()
          this.confet = false
        },3500)
      }
    },
    setStory(input){
      console.log(input);
      this.setHome('story', input)
    },
    async onWindowClick(windowName) {
      this.selectedWindow = windowName;
      await this.$refs.windowsDialog.open({
        hideBtns: true,
        content: ' '
      });
      this.handleMailMessage();
    },
    closeConnectPop(){
      this.$refs.connectDialog.agree()
    },
    handleMailMessage() {
      if (this.isHomeComplete && !this.mailWasNotified) {
        // setTimeout(this.notifyMail, 200);
        this.mailWasNotified = true
        if(!this.confet){
           this.confet = true
          this.$refs.confettiEffect.start()
        setTimeout(()=>{ 
          this.$refs.confettiEffect.stop()
          this.confet = false
        },3500)
        }
      }
    },
    notifyMail() {
      alert('u have mail');
    },
    async onMailBoxClick() {
      this.mailWasOpened = true
      await this.$refs.letterDialog.open({ content: ' ' });
      // await this.$refs.finishBuildingDialog.open({content: ' ' });
      // this.showSaveBtn = true
      await this.$refs.thirdTutorial.open({content : ' '})
    },
    onSignClick() {
      this.$refs.familyNameDialog.open({ content: ' ' });
    },
    async createWindowsObj() {
      const windows = {};
      if (this.windowsNum < 1 || this.windowsNum > 8){
        while(this.windowsNum < 1 || this.windowsNum > 8 || typeof this.windowsNum !== "number"){
          let promptVal = await prompt('חובה להכניס מספר דיירים בין 1 -8 ')
          this.windowsNum = parseInt(promptVal) || -1
          }
      } 
      for (let index = 0; index < this.windowsNum; index++) {
        windows[`window${index}`] = {
          answers: ['', '', '', '']
        };
      }
      
      return windows;
    },
    async setHome(propertyName, property) {
      this.$store.commit('setHome', {
        ...this.home,
        [propertyName]: property
      });
      if(propertyName === 'wall' || propertyName === 'door' || propertyName === 'familyCrest'){
        setTimeout(async () => {
          await this.takePic()
        },2000)
      }
      if(propertyName === 'roof') {
        this.setHomePic('roof', property)
      }
      if(propertyName === 'name') {
        this.setHomePic('name', property)
      }
    },
    setHomePic(propertyName, property) {
      this.$store.commit('setHomePic', {
        ...this.homePic,
        [propertyName]: property
      });
    },
    setWindow(windowIndex, pic) {
      const windows = this.$util.deepCopy(this.home.windows);
      windows[windowIndex].pic = pic;
      this.setHome('windows', windows);
    },
    onAssetClick(assetName) {      
      if(assetName === 'roofInput' || assetName === 'wallInput' || assetName === 'doorInput' || assetName === 'backgroundInput') {
        const newName = assetName === 'roofInput' ? 'roof' : (assetName === 'wallInput' ? 'wall' : (assetName === 'doorInput' ? 'door' : 'background'))
        this.selectedBackground = newName
        // this.$refs.homeDesignDialog.open({
        //     title: 'בואו תעצבו את הבית שלכם',
        //     content: 'בחרו את התמונות שימלאו את הדלת, הגג וקיר חזית הבית.'
        // })
        this.editBackground(newName)
      }
      else if (this.$refs[assetName]) {
        if(assetName === 'familyCrest') {
          this.storyTime = true
        }
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
    editBackground(backgroundName) {
      const inp = `${backgroundName}Input`
      if (this.$refs[inp]) {
        this.$refs[inp].onFileUploadClick();
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
      return this.getWindowsNum() < 8;
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
    enterFamData(curDialog) {
      this.$refs[curDialog].agree()
    },
    addWindow() {
      if (this.getWindowsNum() < 8) {
        // max windows is 8
        const newWindowName = this.getNewWindowName();
        this.setHome('windows', {
          ...this.home.windows,
          [newWindowName]: {
            answers: ['', '', '', '']
          }
        });
        this.$refs.windowsDialog.decline();
      }
    },
    removeWindow() {
      if (this.getWindowsNum() > 1) {
        let windows = this.$util.deepCopy(this.home.windows);
        delete windows[this.selectedWindow];
        this.setHome('windows', windows);
        this.$refs.windowsDialog.decline();
      }
    },
    async setDialogStep() {
      if (this.dialogStep === 1) {
        this.$refs.windowsDialog.setTitle(
          `בואו נכיר את המשפחה, שאלה על ${this.home.windows[this.selectedWindow].name}  :)`
        );
        this.$refs.windowsDialog.setContent(`למשל, מה ${this.home.windows[this.selectedWindow].name} הכי אוהב לאכול?`);
        this.dialogStep = 2;
      } else if (this.dialogStep === 2) {
        this.$refs.windowsDialog.agree();

        this.dialogStep = 1;
        await this.takePic()
      }
    },
    setWindowProperty(properyName, property) {
      const windows = this.$util.deepCopy(this.home.windows);
      this.setHome('windows', {
        ...windows,
        [this.selectedWindow]: {
          ...windows[this.selectedWindow],
          [properyName]: property
        }
      })
    },
    setWindowAnswers(index, answer) {
      const windows = this.$util.deepCopy(this.home.windows);
      windows[this.selectedWindow].answers[index] = answer;
      this.setHome('windows', windows);
    },
    async dialogDecline() {
      this.dialogStep = 1;
      this.$refs.windowsDialog.decline();
      await this.takePic()
    },
    takePic() {
      console.log('here'); 
      window.scrollTo(0,0)
      let homePic =  html2canvas(document.querySelector(".wall"), {
        scrollX: 0,
        scrollY: -window.scrollY
      }).then(canvas => {
        homePic = canvas.toDataURL('image/jpeg', 0.9)
        // await this.setHome('homePic', homePic)
        this.setHomePic('homePic', homePic)
      })
    },
    async onFlagClick() {
      await this.$refs.finishBuildingDialog.open({content: ' ' });
      this.showSaveBtn = true
    },
    birdClick(){
    //   html2canvas(document.querySelector(".home")).then(canvas => {
    //      Canvas2Image.saveAsPNG(canvas)
    // })
    console.log(this.home)
    },
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.home-link{
  .copy{
    height: 8vh;
    margin-bottom: 2vh;
  }
}
.close-span-top {
  // background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 32vh;
}
.close-span-bot {
  // background-color: red;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 38vh;
}
.connectBtn {
  height: 6vh;
  margin-top: 15px;
}
.connect-pic{
  height: 14vh;
  margin-top: 15px;
}
.tutorial-top {
  position: fixed;
  width: 100vw;
  top: 7vh;
  right: -4%;
  margin: 17px;
}
.tutorial-bottom {
  position: fixed;
  width: 100vw;
  bottom: -1vh;
  right: -4%;
  margin: 17px;
}
.wall-tap{
  position: fixed;
  width: 11vw;
  bottom: 29vh;
  right: 67%;
  margin: 17px;
  z-index: 4;
}
.castel-wall-tap {
  position: fixed;
  width: 11vw;
  bottom: 37vh;
  right: 28%;
  margin: 17px;
  z-index: 4;
}
.sky-tap {
  position: fixed;
  width: 11vw;
  bottom: 65vh;
  left: 15%;
  margin: 17px;
  z-index: 4;
}
.door-tap {
  position: fixed;
  width: 11vw;
  bottom: 12vh;
  right: 41%;
  margin: 17px;
  z-index: 4;
}
.roof-tap {
  position: fixed;
  width: 11vw;
  bottom: 36vh;
  right: 8%;
  margin: 17px;
  z-index: 4;
}
.castel-window-tap {
  position: fixed;
  width: 8vw;
  bottom: 40vh;
  left: 18%;
  margin: 17px;
  z-index: 4;
}

.home-type {
  margin-bottom: 15px;
  .type-title {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .home-kind {
    height: 18vh;
    margin: 3px;
  }
}

input{
  font-weight: lighter  ;
  ::-webkit-input-placeholder {
    opacity: 0.6; 
  }
  ::placeholder {
    opacity: 0.6;
  }
}
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

.edit-home {
  // overflow: hidden;
  position: relative;
  height: 100%;
  // font-family: "Calibri";
}

.home {
  z-index: 1;
  width: 100%;
  position: fixed;
  bottom: -0.5vh;
  .grass-pic {
    width: 100vw;
    max-width: $app-max-width;
  }

  .roof {
    position: relative;
    // margin-top: 10vh;
    .roof-pic {
      z-index: 2;
      margin: 0 auto;
      width: 95vw;
      height: 22vw;
      &.costum-pic {
        // -webkit-transform: perspective(5vw) rotateX(3deg);
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
      z-index: 2;
      position: absolute;
      bottom: 4vh;
      right: 20%;
      width: 25.5vw;
      height: 15vh;
    }
    .castel-top-wall{
      z-index: 2;
      position: absolute;
      bottom: 4vh;
      left: 20%;
      width: 59.5vw;
      height: 3vh;
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
      top: -41vw;
      right: 26vw;
      z-index: 1;
      img {
        height: 20vh;
      }
    }

    .family-crest {
      position: absolute;
      top: -41vw;
      right: 25vw;
      z-index: 1;
      img {
        width: 39vw;
        height: 14vh;
      }
    }
    .castel-flag {
      position: absolute;
      top: -39vw;
      right: 40vw;
      z-index: 1;
      img {
        height: 20vh;
      }
    }

    .castel-family-crest {
      position: absolute;
      top: -39vw;
      right: 40vw;
      z-index: 3;
      img {
        width: 36vw;
        height: 13vh;
      }
    }
  }
  .left-tower {
    height: 38vh;
    bottom: 23%;
    position: absolute;
    left: -15%;
  }
  .right-tower {
    height: 38vh;
    bottom: 23%;
    position: absolute;
    right: -3%;
  }
  .farm-tree{
    position: absolute;
    // z-index: 50;
    height: 72vh;
    right: -37%;
    top: -65%;
    // width: 100vw;
  }
  .farm-tree-bush{
    height: 9vh;
    position: absolute;
    right: 1%;
    top: 53%;
  }
  .farm-bush{
    position: absolute;
    // z-index: 50;
    left: 0%;
    top: 47%;
  }

  .wall {
    position: relative;
    margin: 0 auto;
    .wall-pic {
      width: 76vw;
      height: 27vh;
    }
    .castel-wall-pic {
      width: 70vw;
      height: 37vh;
    }

    .door {
      position: absolute;
      bottom: 0;
      left: 34.5%;
      .door-pic {
        width: 22vw;
        height: 27vw;
      }
      .castel-door-pic {
        width: 23vw;
        height: 30vw;
      }
      .castel-door-img {
        width: 23vw;
        height: 30vw;
        border-radius: 50% 50% 0% 0%;
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
            font-size: 10px;

            @media (min-width: 725px) {
              font-size: 30px;
            }
          }
        }

        img {
          width: 75%;
          height: 4.5vh;
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
  top: 5vw;
  &.bottom,
  &.middle,
  &.top {
    left: 8vw;
    right: 8vw;
  }
  &.middle {
    top: auto;
    bottom: 37vw;
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
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    // font-size: 15px;
    // font-weight: bolder;
    // color: black;
    // -webkit-text-stroke: 1.3px black;
    .window-tap {
      width: 7vw;
    }
  }
  img {
    width: 7vw;
    height: 10vw;
  }
}
.windows-name,
.windows-question {
  width: -webkit-fill-available;
  text-align: center;
}

.windows-name {
  font-size: 20px;
  position: absolute;
  top: 30%;
  left: 20%;
  width: 60%;
  text-align: center;
  padding-bottom: 4px;
  border-bottom: rgb(95, 204, 240) 2px solid;
  // ::placeholder {
  //   opacity: 60%; 
  // }
}
.windows-question {
  ::-webkit-input-placeholder {
    opacity: 0.6; 
  }
  font-size: 20px;
  width: fit-content;
  text-align: center;
  padding-bottom: 4px;
  border-bottom: rgb(95, 204, 240) 2px solid;
  margin-bottom: 5px;
  // ::placeholder {
  //   opacity: 60%; 
  // }
}

.step2  {
  margin-top: 20px;
  margin-bottom: 21px;
  .answer {
    
    .answer-num {
      align-self: center;
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
      width: 60%;
      align-self: center;
      margin-bottom: 5px;
      input {
        ::-webkit-input-placeholder {
        opacity: 0.6; 
        }
        width: 100%;
        padding: 2px;
        padding-bottom: 4px;
        border-bottom: rgb(95, 204, 240) 2px solid;
        text-align: center;
        // ::placeholder {
        //   opacity: 60%; 
        // }
        // input {
        //   width: 100%;
        // }
      }
    }
  }
}

.windows-dialog {
  margin-top: 30px;
  // .agree,
  // .decline {
  //   position: absolute;
  //   bottom: -9vw;
  //   width: 20vw;
  //   max-width: 60px;
  // }

  .agree {
    position: absolute;
    left: 32vw;
    bottom: -5vh;
    margin-top: 10px;
    width: 20vw;
    max-width: 60px;
  }
  // .decline {
  //   left: -8vw;
  // }

  

  // @media (min-width: 720px) {
  //   .agree,
  //   .decline {
  //     bottom: -6vw;
  //     max-width: 80px;
  //   }

  //   .agree {
  //     right: -4vw;
  //   }
  //   .decline {
  //     left: -4vw;
  //   }
  // }
}

.window-name-btns {
  margin-top: 35px;
  margin-bottom: 21px;
  .window-name-img{
    width: 80%;
    
  }
  .btns-images {
    direction: ltr;
    // height: 10vh;
    margin-top: 7%;
    align-items: flex-end;
    // justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      max-width: 15%;
      img {
        max-width: 100%;
      }
      .upload-window-pic{
        position: absolute;
        height: 9vh;
        left: 40%;
        top:59%;
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
  width: 65vw;
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

.finish-building-lightbox {
  height: 66vh;
  justify-content: center;
  .explain {
    left: 10%;
    height: 52vh;
    width: 81vw;
    justify-content: center;
    background-image: url('~@/assets/img/process-writing-lightbox.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    textarea {
      width: 85%;
      height: 65%;
      margin-top: 50%;
      border: none;
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      // font-size: 80% ;
      line-height: 1.1;
      background: transparent;
    }
    .story-writing-text{
      position: absolute;
      left: 5%;
      top: 7%;
      margin-bottom: 17px;
      width: 73vw;
    }
  }
  
  .finished-crest{
    .finished-gallery-img {
      height: 12vh;
      border-radius: 1vh;
    }
  }
  // .first {
  //   margin-top: 6vh;
  // }
  // .second {
  //   margin-top: 16vh;
  // }
  // .third {
  //   margin-top: 26vh;
  // }

  .story-gallery-img {
    width: 100vw;
    margin-top: 3vh;
    .string {
      position: relative;
      width: 100vw;
      left: 10%;
    }
    .left-pic {
      display: inline-block;
      img{
        position: relative;
        height: 5vh;
        right: 21vw;
      }
    }
    .right-pic {
      display: inline-block;
      img {
        position: relative;
        height: 5vh;
        left: 44vw;
      }
    }
  }
}

.dialog-btns {
  direction: ltr;
  left: 0;
}
.family-num-dialog {
  position: relative;
  display: grid;
  height: 40%;
  justify-items: center;
  margin-bottom: 21px;
  .family-num-pic{
    width: 100%;
    
  }
  .agree{
    position: absolute;
    bottom: -17vw;
    width: 20vw;
    max-width: 60px;
    // right: -8vw;
  }
  .windows-num-input {
    ::-webkit-input-placeholder {
      opacity: 0.6; 
    }
    margin-bottom: 10px;
    margin-top: 25px;
    display: grid;
    width: 65%;
    justify-self: center;
    font-size: 21px;
    height: 23px;
    padding-bottom: 4px;
    border-bottom: rgb(95, 204, 240) 2px solid;
    text-align: center;
    font-weight: lighter;
    // top: 50%;
    // ::placeholder {
    // opacity: 60%; 
    // }
  }
}

.family-name-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  .name-background {
    width: 90%;
    margin-bottom: 10px;
  }
  .agree{
    position: absolute;
    bottom: -13vw;
    width: 20vw;
    max-width: 60px;
    // right: -8vw;
  }
  input {
    ::-webkit-input-placeholder {
      opacity: 0.6; 
    }
    width: 60%;
    background-color: transparent;
    position: absolute;
    text-align: center;
    font-size: 25px;
    font-weight: bolder;
    border-bottom-color: white;
    // border: black 1px solid;
    // border-radius: 10px;
    // box-shadow: black 4px 4px;
    color: black;
    // -webkit-text-stroke: 1px white;
    top: 50%;
    margin-top: 15px;
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
    top: 75%;
    left: 40%;
    height: 8vh;
  }
}

.home-footer {
  line-height: 1;
  position: relative;
  bottom: 0;
  .mail-box {
    position: absolute;
    top: 10%;
    height: 40%;
    left: 55%;
  }
  .owl-mail-box{
    position: absolute;
    top: 25%;
    height: 30%;
    left: 85%;
  }
  .chicken {
    position: absolute;
    // top: 10%;
    height: 40%;
    left: 5%;
  }

  .got-mail {
    position: absolute;
    top: -15%;
    height: 35%;
    left: 44%;
  }
  .castel-got-mail {
    position: absolute;
    top: -10%;
    height: 35%;
    left: 70%;
  }
  .share-button{
    position: absolute;
    bottom: 5%;
    height: 12vh;
  }
  

  .bottomWriting {
    .bot-start{
      height: 3vh;
    }
    .bot-window{
      height: 7vh;
    }
    .bot-color{
      height: 7vh;
    }
    .bot-story {
      height: 12vh;
      position: fixed;
      left: 7%;
      bottom: 3vh;
    }
    position: absolute;
    bottom: 10%;
    height: 50%;
    width: 100%;
    text-align: center;
    color: white;
    font-size: x-large;
    font-weight: bold;
    font-style: italic;
    // text-shadow: -1.5px 0 black, 0 1.5px black, 1.5px 0 black, 0 -1.5px black;
    // text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -4px 1px 0 #000, 1px 1px 0 #000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
}
</style>
