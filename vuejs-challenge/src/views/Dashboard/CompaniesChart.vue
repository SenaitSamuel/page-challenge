<template>
  <b-col cols="12" class="mb-3">
    <Chart :styles="myStyles"
    :text="text"
    :labels="labels" 
    :datalabel_2="datalabel_2"
    :chartdata_2="chartdata_2"/>
  </b-col>         
</template>

<script>
// @ is an alias to /sr
import Chart from "@/components/Dashboard/Content/Chart.vue";

export default {
  name: "CompaniesChart",
  components: {
   Chart, 
  },
  data: () =>({
      text:"Companies",
      labels: [ "June19","Jul19", "Aug19", "Sep19", "Oct19" , "Nov19", "Dec19"],
      chartdata_2:[2,9,3,4,7,3,9],
      datalabel_2:"Companies",
    }),

   computed: {
    myStyles : () =>  ({
      height: "320px",
      width: "100%",
      position: "relative",
      background: "rgb(24, 27, 36)",
    }),
  }
};
</script>

<style scoped>

</style>