<template>
<b-row>
   <ul>
           
            <li>Total Signups <span class="primary-color"> {{TotalSignups}} </span></li>
            <li>Last Week <span class="secondary-color">{{LastWeek}} </span></li>
            <li>Total Investments <span class="tertiary-color"> {{TotalInvestments}} </span></li>
            <li>Average Investment <span class="primary-color">{{AveragInvestment}} </span></li>
            <li>Total Exits<span class="secondary-color">{{TotalExits}} </span></li>
           
        </ul>
 
 </b-row>
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
span{
   font-weight: bold;
}

/* end of overview */
</style>