<template>
  <div
    class="dropdown"
    v-if="isDropdownOpen"
    :style="isPositionDynamic ? dropdownPos || {} : {}"
  >
    <div class="content dropdown-content">
      <div
        class="dropdown-item flex align-center pointer"
        v-for="(dropDownItem, index) of optionsList || dropDownItems"
        :key="index"
        :class="{
          hr: index < dropDownItems.length - 1,
          hover: selectedIndex === index
        }"
        :value="dropDownItem.value"
        @click="handleSelection(dropDownItem)"
      >
        {{ dropDownItem.label }}
      </div>
      
      <div class="logo">
        <img src="@/assets/img/new_header.png" >
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    dropDownItems: {
      // { link, value, label }
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    // this is a must! this is the parent of any html elements that might open this dropdown.
    // or example: <div> <img> dropdown </div>
    // div is the parent!
    parentCssSelector: {
      type: String,
      required: true
    },
    // sometimes dropdown CAN'T be position absolute,
    // so it must be fixed. if this is true, it will be fixed and positioned
    // in relation to its parent with javascript.
    // this process is heavy and sohuld only be used if must!
    isPositionDynamic: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOpen() {
      return this.isDropdownOpen;
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      optionsList: null,
      selectedIndex: null,
      dropdownPos: null
    };
  },
  methods: {
    // will only close dropdown if click event.target is outside NOT descendant of parent
    closeIfClickOutside(event) {
      const ancestorHasClass = this.ancestorHasClass(
        this.parentCssSelector,
        event.target
      );
      if (!ancestorHasClass) {
        this.isDropdownOpen = false;
        this.$emit('toggle', false);
        this.detachEventListeners();
      }
    },
    ancestorHasClass(parentCssSelector, child) {
      let node = child.parentNode;
      while (node) {
        if (node.classList && node.classList.contains(parentCssSelector)) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    },
    setDropdownPos() {
      const parentNode = document.querySelector('.' + this.parentCssSelector);
      if (parentNode) {
        const parentNodePos = parentNode.getClientRects()[0];
        this.dropdownPos = null;
        this.dropdownPos = {
          position: 'fixed',
          left: parentNodePos.left + 'px',
          right: `calc(100vw - ${parentNodePos.right}px)`,
          width: 'auto',
          top: parentNodePos.top + parentNodePos.height + 'px'
        };
      }
    },
    toggleOpen() {
      this.setDropdownPos();
      this.isDropdownOpen = !this.isDropdownOpen;
      this.$emit('toggle', this.isDropdownOpen);
      if (this.isDropdownOpen) {
        this.attachEventListeners();
      } else {
        this.detachEventListeners();
      }
    },
    detachEventListeners() {
      document
        .querySelector('#app')
        .removeEventListener('click', this.closeIfClickOutside);
      this.selectedIndex = null;
      document.removeEventListener('keydown', this.handleAppKeydown);
    },
    attachEventListeners() {
      document
        .querySelector('#app')
        .addEventListener('click', this.closeIfClickOutside);
      document.addEventListener('keydown', this.handleAppKeydown);
    },
    handleAppKeydown(event) {
      const keyCode = event.keyCode;
      const list = this.optionsList || this.dropDownItems;
      if (!this.selectedIndex && this.selectedIndex !== 0) {
        this.selectedIndex = 0;
        return;
      }
      const isArrowUp = keyCode === 38 && this.selectedIndex >= 1;
      const isArrowDown =
        keyCode === 40 && this.selectedIndex < list.length - 1;
      // ArrowDown
      if (isArrowDown) {
        this.selectedIndex++;
        document.querySelector('.dropdown').scrollBy(0, 51);
      }
      // ArrowUp
      if (isArrowUp) {
        this.selectedIndex--;
        document.querySelector('.dropdown').scrollBy(0, -51);
      }
      // enter
      if (keyCode === 13) {
        this.handleSelection(list[this.selectedIndex]);
        this.toggleOpen();
      }
    },
    handleSelection(dropDownItem) {
      if (dropDownItem.link) {
        this.$router.push(dropDownItem.link);
      } else {
        this.$emit('input', dropDownItem.value);
      }
    },
    handleDropdownSearch(searchlabel) {
      this.optionsList = [];
      this.selectedIndex = null;
      for (const option of this.dropDownItems) {
        if (option.label.startsWith(searchlabel)) {
          this.optionsList.push(option);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

$item-size: 30px;

.hr {
  // border-bottom: 1px solid grey;
}

.hover {
  background-color: darkslategray;
}

.layer {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}

.dropdown,
.content,
.dropdown-item {
  z-index: 20;
}

.dropdown {
  position: absolute;
  top: 79%;
  padding-top: 15px;
  background-color: #ffffff;
  color: black;
  max-height: calc(30px * 9);
  overflow: auto;
  direction: ltr;
}

.dropdown-item {
  font-size: 14px;
  direction: rtl;
  padding: 10px;
  width: 100px;
}

.logo {
  // size: 30px;
  position: relative;
  bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 100%;
  img {
    width: 50px;
  }
}
</style>
