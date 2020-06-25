<template>
  <b-container>
  <b-row>
    
     <b-col md="2" sm="12" xs="12">
      <ul>
      <li>
          <select v-model="selected">
         <option> {{ selected }}</option>
        </select> 
      </li>
    </ul>
       
   </b-col>
         <b-col md="10" sm="12" xs="12" v-for=" (option, index) in allOPtions " :key="index">
       <Overview
       :TotalSignups ="option.overview.totalSignUps"
        :LastWeek ="option.overview.lastWeek"
        :TotalInvestments ="option.overview.totalInvestment"
        :AveragInvestment ="option.overview.averageInvestment"
        :TotalExits ="option.overview.totalExits" />
         </b-col>             
  </b-row>
  </b-container>
</template>

<script>
import Overview from "@/components/Overview/Overview.vue";
import { mapGetters } from "vuex"

export default {
  name: "Overiew",
 components: {
    Overview,
  },
   data: function() {
    return{
       selected : 'Overview'
    }
 },
     computed: mapGetters(['allOPtions'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

/* end of overview */
</style>