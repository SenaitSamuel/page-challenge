<template>
  <div class="content-wrapper p-2"> 
    <slot>
    <h4 class=" latest_signups--title p-4">Latest Signups</h4>
    </slot>
    <b-table :items="items" :fields="fields" borderless thead-class=" bg-dark"></b-table>
  </div>
</template>

<script>
  export default {
   
   data: () => ({
        fields: ['name', 'scheduled_meeting'],
        items: [
          { name: 'David Hansen', scheduled_meeting: '23-03-2020-2PM'},
          { name: 'Shopify', scheduled_meeting: '05-03-2020-10:30AM' },
          { name: 'Arvid,Realtree AB', scheduled_meeting: '05-03-2020-3PM' },
        ]
    })
  }
</script>
<style lang="scss">

.latest_signups{
background-color: var(--secondary-background-color) !important;;
}
.latest_signups--title{
  background-color: var(--main-background-color);
}
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: var(--primary-text-color) !important;
  background-color: var(--secondary-background-color) !important;
}
thead.bg-dark {
  background-color:var(--main-background-color) !important;
}
td:first-child:before{
  content: "";
  border-left: 3px solid var(--secondary-color);
  height:10px;
  padding-left:6px;
}
</style>