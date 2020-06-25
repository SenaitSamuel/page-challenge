<template>
    <b-col cols="12" class="mb-3">
        <b-row class="content-wrapper">
            <b-col cols="6" >
                <DoughnutChart :styles="myStyles" 
                :chartdata="chartdata"
                />
            </b-col>
            <b-col cols="6">
                <ul class="mt-5">             
                <li><h5 class="mb-4">{{datalabel}} </h5></li>
                <li class="mb-4"> Individuals<span class="line_individual">284</span></li>
                <li class="mt-4"> Companies <span  class="line_companies">364</span></li>
                </ul>
            </b-col>
       </b-row>
   </b-col>        
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
        height: '250px',
        width: '100%',
        position: 'relative',
        background:"rgb(24, 27, 36)",
        display:'inline-block'
    }),
    } 
};
</script>

<style scoped>
li{
  display: block;
  padding-right: 30px;
  
}
li span{
  display: inline-block;
  text-align: center;
  padding-left: 40px;
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