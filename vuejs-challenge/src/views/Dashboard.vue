<template>
  <b-container class="app">
    <div class="sidebar mt-5">
    <Sidebar/>
    </div>
    <div class="main">
       <TopNav />
    <b-container>
    <b-row>
      <b-col cols="7">
        <b-row>
          <b-col cols="12" class="mb-3">
            <Chart :styles="myStyles"
            :labels="labels" 
            :datalabel="datalabel"
            :chartdata="chartdata"
            /></b-col>
          <b-col cols="12">
            <Chart :styles="myStyles"
            :labels="labels" 
            :datalabel="datalabel_2"
            :chartdata="chartdata_2"
            /></b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <b-row>
           <b-col cols="12" class="mb-3">
             <TotalSignUps :styles="myStyles_2" 
              :labels="labels_3" 
            :datalabel="datalabel_3"
            :chartdata="chartdata_3"
             />
             </b-col>
          <b-col cols="12">
            <Gender  />
            </b-col>
           <b-col cols="12"> <LatestSignUps :styles="myStyles" /></b-col>
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
import Chart from "@/components/Dashboard/Content/Chart.vue";

import Gender from "@/components/Dashboard/Content/Gender.vue";
import LatestSignUps from "@/views/LatestSignUps.vue";
import TotalSignUps from "@/components/Dashboard/Content/TotalSignUps.vue";


export default {
  name: "Dashboard",
  components: {
   Sidebar,
   TopNav,
   Chart,
 
   Gender,
   LatestSignUps,
   TotalSignUps
  },
  data() {
    return {
      labels: [ 'June19','Jul19','Aug19','Sep19','Oct19','Nov19','Dec19'],
      datalabel:"Individuals",
      chartdata:[2,9,3,4,7,3,9],
      datalabel_2:"Companies",
      chartdata_2:[20,6,0,9,5,10,2],
      labels_3: [ 'Individuals', 'Companies'],
      datalabel_3:"Total Signups",
      chartdata_3:[284, 364],
    }
  },
   computed: {
    myStyles () {
      return {
        height: '200px',
        width: '100%',
        position: 'relative',
        background:"rgb(24, 27, 36)",
      }
    },
    background () {
      return {
        background:"rgb(24, 27, 36)",
        display:'inline-block'
      }
    },
    myStyles_2 () {
      return {
        height: '250px',
        width: '100%',
        position: 'relative',
        background:"rgb(24, 27, 36)",
        display:'inline-block'
      }
    },
    
  }
};
</script>
<style scoped>
.app {
  display: flex;
}
.main {
  flex-grow: 1;
}
</style>