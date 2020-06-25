<template>
   <ul class="gender">
     <li class="line-left">By Gender</li>
    <li> <select v-model="selected"><option> {{ selected }}</option> </select></li>
    <li> <select v-model="selected_2"><option> {{ selected_2 }}</option> </select></li>
    <li><span  class="value"><strong>{{value}}</strong></span>  </li>
   </ul>

</template>

<script>
export default {
  name: "Gender",
  data() {
      return {
        selected: "Female",
        selected_2: "Individuals",
        value:"120",
        options: [
          { value: 120 , text: 'Female' },
          { value: 120, text: 'Male' },
        ],
        options_2: [
          { value: 120, text: 'Individuals' },
          { value: 120, text: 'Campanies' }
        ]
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gender{
  background-color: var(--secondary-background-color);
  padding: 15px 0 ;
}
li{
  display: inline-block;
  padding-left: 30px;
}
.line-left:before{
  content: "";
  border-left: 3px solid var(--tertiary-color);
  height:10px;
  padding-left:6px;
}
span.value{
  color: var(--tertiary-color);
}
</style>