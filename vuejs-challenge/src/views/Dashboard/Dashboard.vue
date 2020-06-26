<template>
<b-container class="dashboard">
    <div class="sidebar mt-5">
    <Sidebar/>
    </div>
    <div class="main">
       <TopNav />
    <b-container>
    <b-row>
      <b-col cols="7">
        <b-row mx-2>
          <IndividualChart/>
          <CompaniesChart/>
        </b-row>
      </b-col>
      <b-col cols="5">
        <b-row>
          <TotalSignUpsChart/>
          <b-col cols="12">
            <Gender/>
          </b-col>
           <b-col cols="12">
             <LatestSignUps />
            </b-col>
         </b-row>
      </b-col>
    </b-row> 
    </b-container>   
      </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar.vue";
import TopNav from "@/components/Dashboard/Sidebar/TopNav.vue";
import CompaniesChart from "@/views/Dashboard/CompaniesChart.vue"
import IndividualChart from "@/views/Dashboard/IndividualChart.vue"
import TotalSignUpsChart from "@/views/Dashboard/TotalSignUpsChart.vue"
import Gender from "@/components/Dashboard/Content/Gender.vue";
import LatestSignUps from "@/components/Dashboard/Content/LatestSignUps.vue";



export default {
  name: "Dashboard",
  components: {
  Sidebar,
  TopNav,
  CompaniesChart,
  IndividualChart,
  TotalSignUpsChart,
  Gender,
  LatestSignUps,
  },

};
</script>

<style scoped>
.dashboard {
  display: flex;
}
.main {
  flex-grow: 1;
}

</style>