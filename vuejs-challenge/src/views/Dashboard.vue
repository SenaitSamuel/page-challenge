<template>
  <b-container>
    <div class="app">
    <Sidebar>sidebar content</Sidebar>
    <div class="main">
       <TopNav />
    <b-row>
      <b-col cols="7">
        <b-row>
          <b-col cols="12"><Individuals :styles="myStyles" /></b-col>
          <b-col cols="12"><Companies/></b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <b-row>
           <b-col cols="12"><TotalSignUps /></b-col>
          <b-col cols="12"><Gender/></b-col>
           <b-col cols="12"> <LatestSignUps /></b-col>
        </b-row>
      </b-col>
    </b-row>    
      </div>
  </div> 
  </b-container>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar.vue";
import TopNav from "@/components/Dashboard/Sidebar/TopNav.vue";
import Individuals from "@/components/Dashboard/Content/Individuals.vue";
import Companies from "@/components/Dashboard/Content/Companies.vue";
import Gender from "@/components/Dashboard/Content/Gender.vue";
import LatestSignUps from "@/views/LatestSignUps.vue";
import TotalSignUps from "@/components/Dashboard/Content/TotalSignUps.vue";


export default {
  name: "Dashboard",
  components: {
   Sidebar,
   TopNav,
   Individuals,
   Companies,
   Gender,
   LatestSignUps,
   TotalSignUps
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    }
  },
   computed: {
    myStyles () {
      return {
        background:"blue",
        position: 'relative'
      }
    }
  }
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