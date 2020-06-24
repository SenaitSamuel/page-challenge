<template>
  <div class="page-wrapper">
  <div class="nav-wrapper ">
  <Navigation />
  </div>
   <div  class=" overview-wrapper ">
    <OverviewPage />
    </div>
    <div class="">      
    <Dashboard />
  </div>
   </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/views/Navigation.vue";
import OverviewPage from "@/views/OverviewPage.vue";
import Dashboard from "@/views/Dashboard.vue";


export default {
  name: "Home",
  components: {
    Navigation,
    OverviewPage,
    Dashboard
  },
};
</script>

<style scoped >
.page-wrapper{
  width:100%;
}
.nav-wrapper{
  border-bottom: 2px solid var(--primary-color);
}
.overview-wrapper{
  background-color: var(--secondary-background-color);
}

</style>