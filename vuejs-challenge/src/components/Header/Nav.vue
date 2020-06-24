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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  height: var(--Navbar-height);
  z-index: 1;
}
nav.bg-info {
  background:linear-gradient(90deg, var(--main-background-color) 65%, var(--primary-color) 30%) !important;
 
}
.navbar-nav {
  padding-top: 25px !important;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--Nav-link-padding) !important;
  padding-left: var(--Nav-link-padding) !important;
}
.avator li{
  display: inline-block;
  color: var(--secondary-text-color) ;
  padding-right: var(--Nav-link-padding) !important;
  padding-left: var(--Nav-link-padding) !important;
}

</style>