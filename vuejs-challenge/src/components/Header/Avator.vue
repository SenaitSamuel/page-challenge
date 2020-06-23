<template>
   <ul className="avator">
       <li > <b-img :src="image"  alt="image"></b-img></li>
            <li>{{name}}</li>
            <li>{{date}}</li>        
        </ul>
</template>

<script>
export default {
  name: "Avator",
  props: [ "image", "name", "date" ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>