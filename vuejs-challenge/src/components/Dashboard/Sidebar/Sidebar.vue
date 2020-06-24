<template>
<div class="sidebarContainer">
    <transition
        name="slide"
    >
      <div v-if="isOpen" class="sidebar" :style="{ width }">
      </div>
    </transition>
    <div class="toggle" @click="isOpen = !isOpen">&lt;&gt;</div>
  </div>
 
</template>

<script>
export default {
  name: "Sidebar",
 'width': {
      default: '20em',
    },
  data() {
    return {
      isOpen: true,
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
  background: blue;
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


</style>