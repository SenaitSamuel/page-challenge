<template>
  <b-container>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-for=" (link, index) in menu " :key="index">
          <Nav
          :link="link"
          />
          </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>
  </b-container>
</template>

<script>
import Nav from "@/components/Header/Nav.vue"
export default {
  name: "TopNav",
   components: {
    Nav
  },
  data: () => ({
    menu: [ '12', '34', '45' ],

  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>