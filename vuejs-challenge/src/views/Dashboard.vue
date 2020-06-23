<template>
  <div class="home">
    <Sidebar />
    <TopNav />
    <Individuals />
    <Companies/>
    <Gender/>
    <LatestSignUps />
    <TotalSignUps />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar.vue";
import TopNav from "@/components/Dashboard/Sidebar/TopNav.vue";
import Individuals from "@/components/Dashboard/Content/Individuals.vue";
import Companies from "@/components/Dashboard/Content/Companies.vue";
import Gender from "@/components/Dashboard/Content/Gender.vue";
import LatestSignUps from "@/components/Dashboard/Content/LatestSignUps.vue";
import TotalSignUps from "@/components/Dashboard/Content/TotalSignUps.vue";


export default {
  name: "Home",
  components: {
   Sidebar,
   TopNav,
   Individuals,
   Companies,
   Gender,
   LatestSignUps,
   TotalSignUps
  }
};
</script>
