<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
      <b-img :src="logo" width="150" alt="logo"></b-img>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class=" ml-auto">
          <b-nav-item href="#" v-for=" (link, index) in menu" :key="index">
          <Nav :link="link"/>   
          </b-nav-item>
          <Avator
          :image ="image"
          :name ="name"
          :date ="date"
          :time ="time"/>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import logo from "../../assets/images/logo.png"
import Nav from "@/components/Header/Nav.vue";
import image from "../../assets/images/avatar.png"
import Avator from "@/components/Header/Avator.vue";
export default {
  name: "Navigation",
  components: {
    Nav,
    Avator
  },
  data: () => ({
    menu: [ "Account", "Charts", "Help" ],
    logo: logo,
    name: "Elsa Andersen",
    image: image,
    date: "17-02-2020",
    time:"2.45PM"
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Navbar */
.navbar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  height: var(--Navbar-height);
  z-index: 1;
}
nav.bg-info {
  background:linear-gradient(90deg, var(--main-background-color) 67%, rgb(9, 176, 181) 60%,
    rgb(8, 164, 188) 100%) !important; 
}
.navbar-nav {
  padding-top: 8px !important;
}
 .navbar-nav .nav-link {
  padding-right: var(--Nav-link-padding) !important;
  padding-left: var(--Nav-link-padding) !important;
  text-align: center !important;
   text-transform: uppercase !important;
   font-size: 14px;
}
@media (max-width: 991.98px){
.navbar-collapse{
  background-color: rgb(9, 176, 181);
}
.navbar-nav .nav-link{
  text-align: left !important;
}
}


</style>