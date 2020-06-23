<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-img :src="logo" width="150" alt="logo"></b-img>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-for=" (link, index) in menu " :key="index">{{link}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import logo from "../../assets/images/logo.png"
export default {
  name: "Navigation",
  props: {
  },
  data: () => ({
    menu: [ 'Account', 'Charts', 'Help' ],
     logo: logo,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>