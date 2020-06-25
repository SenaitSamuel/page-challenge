<template>
  <div class="content-wrapper p-2"> 
     <slot>
         <h4 class=" latest_signups--title p-4">Latest Signups</h4>
      </slot>
    <b-table :items="items" :fields="fields" borderless ></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['name', 'scheduled_meeting'],
        items: [
          { isActive: true, name: 'David Hansen', scheduled_meeting: '23-03-2020-2PM' },
          { isActive: false,  name: 'Shopify', scheduled_meeting: '05-03-2020-10:30AM' },
          { isActive: false,  name: 'Arvid,Realtree AB', scheduled_meeting: '05-03-2020-3PM' },
        ]
      }
    }
  }
</script>
<style scoped lang="scss" >
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
thead{
 background-color: var(--main-background-color) !important;
}
td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid red !important;
}
tr {
    vertical-align: bottom; 
    border-bottom: 2px solid rgb(24, 27, 36) !important; 
}
td:before{
  content: "";
  border-left: 3px solid var(--tertiary-color);
  height:10px;
  padding-left:6px;
}
</style>