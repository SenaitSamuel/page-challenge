
<script>
import { Line } from 'vue-chartjs'

export default {
  name: "Chart",
  extends: Line,
  props:["labels", "datalabel", "chartdata", "datalabel_2", "chartdata_2", ],

  data: () => ({
     gradient: null,
     gradient_2: null,
     }) ,
  
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0,450)
    this.gradient.addColorStop(0, 'rgb(78, 255, 207)');
     this.gradient.addColorStop(0, 'rgb(24, 27, 36)')
    this.gradient.addColorStop(1, 'rgb(8, 164, 188)');
   

    this.gradient_2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0,450)
     this.gradient_2.addColorStop(0, 'rgb(62, 87, 194)')
    this.gradient_2.addColorStop(0, 'rgb(24, 27, 36)');
    this.gradient_2.addColorStop(0.9, 'rgb(255, 86, 238)');
   

    this.renderChart({
      
      labels: this.labels,
      datasets: [{
          label: this.datalabel,
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: this.chartdata
        },{
          label: this.datalabel_2,
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          backgroundColor: this.gradient_2,
          data: this.chartdata_2
        }
      ],  
    },
    { responsive: true, 
      maintainAspectRatio: false,
      showAllTooltips: false,
       title:{
         display:true,
          text:this.text,
          fontSize:20,
          fontColor:"white"
          },
        legend:{
             display:false,
             },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                  display: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                  display: true
                }
            }]
       }
       } )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>