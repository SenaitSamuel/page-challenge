<template>
  <b-container>
    <div class="app">
    <SidebarLink/>
    <div class="main">
      <TopNav />
    <Individuals />
    <Companies/>
    <Gender/>
    <LatestSignUps />
    <TotalSignUps />
    </div>
  </div>
    
    
  </b-container>
</template>

<script>
// @ is an alias to /src
import SidebarLink from "@/views/SidebarLink.vue";
import TopNav from "@/components/Dashboard/Sidebar/TopNav.vue";
import Individuals from "@/components/Dashboard/Content/Individuals.vue";
import Companies from "@/components/Dashboard/Content/Companies.vue";
import Gender from "@/components/Dashboard/Content/Gender.vue";
import LatestSignUps from "@/components/Dashboard/Content/LatestSignUps.vue";
import TotalSignUps from "@/components/Dashboard/Content/TotalSignUps.vue";


export default {
  name: "Dashboard",
  components: {
   SidebarLink,
   TopNav,
   Individuals,
   Companies,
   Gender,
   LatestSignUps,
   TotalSignUps,
  },
    data: () => ({
    menu: [ '12', '34', '45' ],

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