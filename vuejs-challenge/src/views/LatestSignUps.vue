<template>
     <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Striped Table with Hover</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <LatestSignUpsTable class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </LatestSignUpsTable>
          </div>

        </div>
     

      </div>
    </div> 
    </div>
</template>

<script>
// @ is an alias to /src
import LatestSignUpsTable from "@/components/Dashboard/Content/LatestSignUpsTable.vue";
const tableColumns = [ 'Name', 'Salary']
  const tableData = [{
    name: 'David Hansen',
    salary: '23-03-2020-2PM',
   
  },
  {
    name: 'Shopify',
    salary: '05-03-2020-10:30AM',
  
  },
  {
    name: 'Arvid,Realtree AB',
    salary: '05-03-2020-3PM',
    
  },
  ]
export default {
  name: "Home",
  components: {
LatestSignUpsTable
  
  }, 
  data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
      }
    }
};
</script>