<template>
<b-row class="content-wrapper p-3 mb-3">
  <b-col cols="6" >
    <DoughnutChart :styles="myStyles" 
        :chartdata="chartdata"
      />
  </b-col>
   <b-col cols="6">
        <ul class="mt-5">             
        <li><p class="mb-5 text-title">{{datalabel}} </p></li>
        <li class="mb-2"> Individuals<span class="line_individual">284</span></li>
        <li class="mt-2"> Companies <span  class="line_companies">364</span></li>
        </ul>
    </b-col>
</b-row>       
</template>

<script>
// @ is an alias to /sr
import DoughnutChart from "@/components/Dashboard/Content/DoughnutChart.vue";

export default {
  name: "TotalSignUpsChart",
  components: {
   DoughnutChart, 
  },

    data : () =>({
    labels: [ 'Individuals', 'Companies'],
    datalabel:"Total Signups",
    chartdata:[284, 364],
    }) ,

    computed: {
    myStyles : () => ({
        height: '200px',
        width: '90%',
        position: 'relative',
        background:"rgb(24, 27, 36)",
    }),
    } 
};
</script>

<style scoped>
.row {
     margin-right: 0px !important;
     margin-left: 15px !important
}
li{
 display: inline-block;
  padding-right: 40px; 
}
.text-title{
  font-size: 20px;
}
li span{ 
  padding-left: 20px;
}
.line_individual:after{
  content: "";
  border-right: 4px solid var(--tertiary-color);
  height:5px;
  padding-right:8px;
}
.line_companies:after{
  content: "";
  border-right: 4px solid var(--secondary-color);
  height:5px;
  padding-right:8px;
}
</style>