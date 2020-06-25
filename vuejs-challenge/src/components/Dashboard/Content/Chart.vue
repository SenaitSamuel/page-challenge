
<script>
import { Line } from 'vue-chartjs'

export default {
  name: "Chart",
  extends: Line,
  props:["labels", "datalabel", "chartdata",  "text"],

  data: () => ({
     gradient: null
     }) ,
  
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0,90)
    this.gradient.addColorStop(0.7, 'rgb(8, 164, 188)');
    this.gradient.addColorStop(0.5, 'rgb(24, 27, 36)')

    this.renderChart({
      
      labels: this.labels,
      datasets: [{
          label: this.datalabel,
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: this.chartdata
        }
      ],  
    },
    { responsive: true, 
      maintainAspectRatio: false,
      showAllTooltips: false,
       title:{
         display:true,
          text:this.text,
          fontSize:20
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