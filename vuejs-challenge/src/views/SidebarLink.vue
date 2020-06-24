<template>
    <Sidebar><b-navbar-nav class="ml-auto">
          thi sis a page
        <b-nav-item href="#" v-for=" (icon, index) in menu " :key="index">
          <Nav
          :icon="link.Group"
          />
          </b-nav-item>
      </b-navbar-nav>
</Sidebar>
   

</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar.vue";
import Nav from "@/components/Header/Nav.vue"
import Group from "../assets/icons/funds.svg"
import Path from "../assets/icons/Path 188.svg"
import history from "../assets/icons/history.svg"
import verification from "../assets/icons/verification-window-button.svg"
import locked from "../assets/icons/locked-padlock (1).svg"


export default {
  name: "SlidebarLink",
  components: {
   Sidebar,
   Nav
  },
    data: () => ({
    menu: [ Group, Path, history,verification, locked],

  }),
};
</script>
<style scoped>
.app {
  display: flex;
}
.main {
  flex-grow: 1;
  background: red;
}
</style>