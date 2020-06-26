<template>
   <ul class="avator">
       <li > <b-img :src="image"  alt="image"></b-img></li>
            <li>{{name}}</li>
            <li class="avator-date">{{date}}<span class="avator-time">{{time}}</span></li>        
        </ul>
</template>

<script>
export default {
  name: "Avator",
  props: [ "image", "name", "date", "time" ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.avator li{
  display: inline-block;
  color: var(--secondary-text-color) ;
  padding-right: var(--Nav-link-padding) !important;
  padding-left: var(--Nav-link-padding) !important;
   padding-bottom: 10px !important;
   color:white!important;
   font-size: 12px;
 
}
.avator-date{
  margin-top: 10px;
}
.avator-time{
    display: block;
}
</style>