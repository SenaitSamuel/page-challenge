<template>
  <div class="home">
    <Navigation />
    <Overview />
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Header/Navigation.vue";
import Overview from "@/components/Overview/Overview.vue";
import Dashboard from "@/views/Dashboard.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Overview,
    Dashboard
  }
};
</script>
