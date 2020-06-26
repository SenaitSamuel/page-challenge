<template>
<div class="page-wrapper">
  <div class="nav-wrapper">
    <Navigation />
  </div>
  <div class="overview-wrapper mt-3">
    <Overview />
  </div>
  <div class="dashboard-wrapper">
    <Dashboard />
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/views/Header/Navigation.vue";
import Overview from "@/views/Overview/Overview.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Overview,
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