<template>

<div class="sidebarContainer mt-4">
    <transition
        name="slide"
    >
      <div v-if="isOpen" class="sidebar" :style="{ width }">
         <b-navbar-nav>
         <b-nav-item href="#" v-for=" (icon, index) in menu " :key="index">
           <b-img :src="icon"  alt="icon"></b-img>
          </b-nav-item>
          </b-navbar-nav>
      </div>
    </transition>
  
 
  </div>

</template>

<script>
import Group from "../../../assets/icons/Group 174.svg"
import Funds from "../../../assets/icons/funds.svg"
import Path from "../../../assets/icons/Path 188.svg"
import history from "../../../assets/icons/history.svg"
import verification from "../../../assets/icons/verification-window-button.svg"
import locked from "../../../assets/icons/locked-padlock (1).svg"

export default {
  name: "Sidebar",

  data() {
    return {
      isOpen: true,
       width: {
      default: '20em',
    },
    menu: [ Group, Funds, Path, history,verification, locked],
    };
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.sidebarContainer {
  display: flex;
}
.sidebar {
  flex-grow: 1;
  padding: 0.5em;
  background: var(--main-background-color);
}
.toggle {
  margin: 0.5em;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s;
}
.slide-enter, .slide-leave-to {
  margin-left: -20em;
}
.nav-item{
  padding-bottom: 40px;
  padding-right: 40px;
}


</style>