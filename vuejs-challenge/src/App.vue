<template>
  <div id="app">
    <router-view />
  </div>
</template>

 

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* globals */
body {
  color: var( --primary-text-color) !important;
  background-color: var(--main-background-color) !important;
  font-family: sans-serif;
  line-height: 1.4;
}
.app{
  color: var( --primary-text-color);
}
ul{
  list-style-type: none; 
}

h1 {
  font-size: 3em;
  line-height: 1;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 2em;
  margin-bottom: 0.75em;
}
h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
}
h4 {
  font-size: 1.2em;
  line-height: 1.25;
  margin-bottom: 1.25em;
}
h5 {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 1.5em;
}
h6 {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 1.5em;
}
.container {
    padding-right: 0 !important;
    padding-left: 0 !important;
}
</style>
