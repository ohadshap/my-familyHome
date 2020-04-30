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
              {{ home.windows.window5.name }}
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
              {{ home.windows.window6.name }}
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
              {{ home.windows.window7.name }}
            </div>
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
            
            <div v-if="home.windows.window1" class="window-name">
              {{ home.windows.window1.name }}
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
              {{ home.windows.window0.name }}
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
              {{ home.windows.window2.name }}
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
              {{ home.windows.window3.name }}
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
              {{ home.windows.window4.name }}
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
            customKey="doorInput"
            ref="doorInput"
            @file="setHome('door', $event)"
          />
          <!-- <img class="door-pic" src="@/assets/img/door.png" alt="" /> -->
          <img
            @click="onAssetClick('doorInput')"
            v-if="!home.door"
            class="door-pic"
            src="@/assets/img/door.png"
            alt=""
          />
          
          <img
            @click="onAssetClick('doorInput')"
            v-if="home.door"
            class="door-pic"
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
        <img v-if="mailWasNotified && !mailWasOpened" class="got-mail" src="@/assets/img/new-mail.png" alt="" />
        <img
          @click="onMailBoxClick"
          class="mail-box"
          src="@/assets/img/mailbox.png"
          alt=""
        />


        <div v-if="!home.name && !home.windows" class="bottomWriting">
          !יש! התחלנו
        </div>

        <div v-if="home.name && !home.windows" class="bottomWriting">
          ?לומדים מהר אה
        </div>
        <div v-if="home.windows && !mailWasOpened" class="bottomWriting">
         ,מה אתם אומרים
         <br/>
         ?נצבע את הבית
        </div>
        <div v-if="home.familyCrest && storyTime && !showSaveBtn" class="bottomWriting">
          .וואו! איזה סמל, אהבנו
         <br/>
          לחצו על הדגל, צרו את הסיפור
          <br/>
          (: וסיימו את הבית
        </div>
        <div v-if="isLoading">
          <LoadingSpinner></LoadingSpinner>
        </div>
        <img v-if="showSaveBtn" @click="saveHome" class="share-button" src="@/assets/img/home-finishing.png" alt="">
        <img class="grass-pic" src="@/assets/img/urban.png" alt="" />
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
              הוסיפו גם תמונה,<br />
              שנוכל להכיר אותו טוב יותר :)
            </div>
            
            <div class="btns-images flex space-between">
              <div v-if="getWindowsNum() > 1">
                <img @click="removeWindow" src="@/assets/img/bin.png" alt="" />
              </div>
              
              <div v-if="canAddWindow()">
                <img
                  src="@/assets/img/add-window.png"
                  @click="addWindow"
                  alt=""
                />
              </div>
              
              <div>
                <img
                  v-if="!home.windows[selectedWindow].pic"
                  @click="onAssetClick(selectedWindow)"
                  src="@/assets/img/lightbox-mailbox-crest@3x.png"
                  alt=""
                />
                
                <img
                  v-if="home.windows[selectedWindow].pic"
                  @click="onAssetClick(selectedWindow)"
                  :src="home.windows[selectedWindow].pic"
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
                  class="windows-answer"
                  :placeholder="answersPlaceholders[index]"
                  type="text"
                  :value="home.windows[selectedWindow].answers[index]"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="btns dialog-btns flex space-between"> -->
        <img
          class="decline"
          @click="dialogDecline"
          src="@/assets/img/x-button.png"
          alt=""
        />
        
        <img
          class="agree"
          @click="setDialogStep"
          src="@/assets/img/v-button.png"
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
          src="@/assets/img/lightbox-mailbox-crest@3x.png"
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
        <input
          class="windows-num-input"
          placeholder="הקלד מספר דיירים"
          type="number"
          v-model="windowsNum"
          min="1"
          max="8"
        />
      </div>
    </AppDialog>
    
     <AppDialog ref="familyNameDialog">
      <div class="family-name-dialog">
        <img src="@/assets/img/lightbox-sign.png" alt="" />
        <input
          class="windows-name"
          placeholder="vvvvהקלד טקסט"
          type="text"
          @input="setHome('name', $event.target.value)"
          :value="home.name"
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
              src="@/assets/img/lightbox-mailbox-crest@3x.png"
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
            placeholder="ספרו לנו על תהליך בניית הבית"
            ></textarea>
        </div>
 
        <!-- <img class="finished-crest" :src="home.familyCrest" alt="" v-if="home.familyCrest" /> -->
        <div class="finished-crest">
          <UploadFile
            customKey="familyCrest"
            ref="familyCrest"
            @file="setHome('familyCrest', $event)"
          />
          
          <!-- <img
            @click="onAssetClick('familyCrest')"
            v-if="!home.familyCrest"
            class="gallery-img"
            src="@/assets/img/lightbox-mailbox-crest@3x.png"
            alt=""
          /> -->
        
          <img
            @click="onAssetClick('familyCrest')"
            v-if="home.familyCrest"
            class="finished-gallery-img"
            :src="home.familyCrest"
            alt
          />
        </div>
 
      </div> 

    </AppDialog>

    <AppDialog ref="homeLinkDialog">
      <div class="home-link">
        {{ `${getAppDomain()}/view-home/${home.homeId}` }}
        <div>
          <img class="copy" @click="copy" src="@/assets/img/copy.png" alt="" />
        </div>
      </div>
    </AppDialog>
    
  </div>
</template>

<script>
import UploadFile from '@/components/UploadFile';
import AppDialog from '@/components/AppDialog';
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image-module';
import LoadingSpinner from '@/components/LoadingSpinner'


export default {
  name: 'EditHome',
  components: { UploadFile, AppDialog,LoadingSpinner },
  computed: {
    home() {
      return this.$store.getters.getHome || {};
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
      selectedWindow: null,
      selectedBackground: null,
      dialogStep: 1,
      mailWasNotified: false,
      mailWasOpened: false,
      storyTime: false,
      isLoading : false,
      showSaveBtn: false
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
          // await this.$refs.takeSelfieDialog.open({hideDec: true, content: ' ' });
          await this.$refs.familyNameDialog.open({ content: ' ' });
          await this.$refs.familyNumDialog.open({
            title: 'כמה אתם במשפחה?',
            content: 'גם חיות מחמד הם משפחה :)'
          });
          this.setHome('windows', await this.createWindowsObj())
        }
      }
    },
      getAppDomain() {
      return process.env.VUE_APP_DOMAIN;
    },
    async saveHome(){
      if (!this.$store.getters.getIdToken) {
        this.$store.getters.getOpenDialogFunc({
          title: 'כדי לשתף את הבית חובה להתחבר!'
        });
        return;
      }
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
        const res = await this.$store.dispatch(action);
        this.showLink(res);
        const res2 = this.$store.dispatch(action2);
      },1500)
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
      const appDomain = this.getAppDomain();
      navigator.clipboard.writeText(`${appDomain}/view-home/${this.homeId}`);
    },
    setStory(input){
      console.log(input);
      
      this.setHome('story', input)
    },
    async onWindowClick(windowName) {
      this.selectedWindow = windowName;
      await this.$refs.windowsDialog.open({
        hideBtns: true,
        title: 'מי גר בחדר הזה?',
        content: ' '
      });
      this.handleMailMessage();
    },
    handleMailMessage() {
      if (this.isHomeComplete && !this.mailWasNotified) {
        // setTimeout(this.notifyMail, 200);
        this.mailWasNotified = true
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
        this.$refs.homeDesignDialog.open({
            title: 'בואו תעצבו את הבית שלכם',
            content: 'בחרו את התמונות שימלאו את הדלת, הגג וקיר חזית הבית.'
        })
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
    // birdClick(){
    //   html2canvas(document.querySelector(".wall")).then(canvas => {
    //      Canvas2Image.saveAsPNG(canvas)
    // })
    // },
    // v-if="!home.windows[selectedWindow].pic"
    //       @click="onAssetClick(selectedWindow)"
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.home-link{
  .copy{
    height: 8vh;
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
  // position: absolute;
  //   top: 5%;
  // bottom: 0;
  // right: 0;
  // left: 0;
  // width: 100vw;
  // max-width: $app-max-width;
  // height: 100%;
  // z-index: 0;
  position: absolute;
   top: 5vh;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  max-width: $app-max-width;
  height: 95%;
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
  // height: 100%;
  position: fixed;
  // z-index: 1;
  // width: 100%;
  // height: 100%;
  // position: fixed;
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
      height: 33vw;
      &.costum-pic {
        // -webkit-transform: perspective(5vw) rotateX(3deg);
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
      top: -51vw;
      right: 15vw;
      // height: 15%;
      // margin-top:50& ;
      z-index: 1;
      img {
        height: 24vh;
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
      top: -51vw;
      right: 15vw;
      z-index: 1;
      img {
        width: 47vw;
        height: 16vh;
      }
    }
  }

  .wall {
    position: relative;
    margin: 0 auto;
    .wall-pic {
      width: 76vw;
      height: 29vh;
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

.step2 {
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
  margin-bottom: 21px;
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
      line-height: 1.2;
      background: transparent;
    }
  }
  // .storyInput {
  //   justify-content: center;
  //   border: 1px solid lightblue;
  //   border-radius: 10px;
  //   overflow: hidden;
  //   padding: 7px;
  //   textarea {
  //     width: 99%;
  //   }
  //   
  // }
  .finished-crest{
    .finished-gallery-img {
        height: 12vh;
        border-radius: 1vh;
      }
  }
    // .storyImages {
    //   display: grid;
    //   grid-template-columns: repeat(2, 1fr);
    //   position: fixed;
    //   bottom: 0%;
    //   gap: 55px;
    //   .finished-gallery-img {
    //     margin: 15px;
    //     width: 60%;
    //   }
    // }
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
    ::-webkit-input-placeholder {
      opacity: 0.6; 
    }
    margin-bottom: 10px;
    margin-top: 25px;
    width: 85%;
    font-size: 23px;
    height: 23px;
    padding-bottom: 4px;
    border-bottom: rgb(95, 204, 240) 2px solid;
    text-align: center;
    font-weight: lighter;
    top: 50%;
    // ::placeholder {
    // opacity: 60%; 
    // }
  }
}

.family-name-dialog {
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 90%;
    // margin-bottom: 21px;
    // margin-top: 35px;
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
    top: 55%;
    left: 40%;
    width: 20%;
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

  .got-mail {
    position: absolute;
    top: -15%;
    height: 35%;
    left: 40%;
  }
  .share-button{
    position: absolute;
    bottom: 5%;
    height: 12vh;
  }

  .bottomWriting {
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
