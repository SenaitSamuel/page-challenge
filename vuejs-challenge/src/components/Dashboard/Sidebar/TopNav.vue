<template>
  <b-container class="top-Navbar mb-3">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
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
    menu: [ 'Signups', 'investments', 'Revenue', 'Exits', 'Trades'],

  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-info {
    background-color: var(--main-background-color) !important;
}
.top-Navbar{
   border-bottom: 2px solid var(--secondary-background-color);
}
.nav-item {
  padding-right: var(--Nav-link-padding) !important;

}
</style>