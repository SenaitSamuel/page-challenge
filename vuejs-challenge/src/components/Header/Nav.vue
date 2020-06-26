<template>
  <b-navbar-nav class="ml-auto">
   <b-nav-item href="#">{{link}}</b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "Nav",
  props: [ "link" ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Navbar */


</style>