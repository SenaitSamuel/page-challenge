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

  background-color: var(--main-background-color) !important;
  font-family: 'Montserrat', sans-serif !important;
  color: rgb(149, 166, 182)!important;
  font-size: 18px;
  line-height: 1.4px;
  font-weight: 300
}
.app{
  color: var( --primary-text-color);
}
ul{
  list-style-type: none; 
}
.container {
    padding-right: 0 !important;
    padding-left: 0 !important;
}
.card{
  background-color: var(--secondary-background-color) !important;
  padding:10px;
}
select{
  background-color: var(--secondary-background-color) !important;
  color:white !important;
  border-color:var(--secondary-background-color) !important;
  border-radius: 0px !important;
}
 .primary-color{
    color: var(--tertiary-color);
    }
    .secondary-color{
    color: var(--secondary-color);
    }
    .tertiary-color{
    color: var(--primary-color)

    }
  .content-wrapper{
     background-color: var(--secondary-background-color) !important;
  }
 
</style>
