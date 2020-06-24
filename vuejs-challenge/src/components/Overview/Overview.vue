<template>
 <ul>
   <li>Total signups <span> {{TotalSignups}} </span></li>
   <li>Last week <span>{{LastWeek}} </span></li>
   <li> Total investments <span> {{TotalInvestments}} </span></li>
   <li> Average investment <span>{{AveragInvestment}}</span></li>
   <li> Total exits <span>{{TotalExits}}</span></li>
 </ul>
</template>

<script>
export default {
  name: "Overiew",
  props:["TotalSignups", "LastWeek","TotalInvestments", "AveragInvestment" , "TotalExits"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
li{
  display: inline-block;
  padding-right: 30px;
  padding-left: 30px;
}
li span{
  display: block;
  text-align: center;
}

/* end of overview */
</style>