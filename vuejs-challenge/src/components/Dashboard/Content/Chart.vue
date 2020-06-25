

<script>
import { Line } from 'vue-chartjs'

export default {
   name: "Chart",
  extends: Line,
  props:["labels", "datalabel", "chartdata"],

  data ()  {
    return {
      gradient: null,
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 90)


    this.gradient.addColorStop(0, 'rgb(78, 255, 207)')
    this.gradient.addColorStop(1, 'rgb(8, 164, 188)');



    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: this.datalabel,
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: this.chartdata
        }
      ],
   
    },
    {

      responsive: true, 
      maintainAspectRatio: false,
      showAllTooltips: true,
      scales: {
            yAxes: [{
                 display: true,
                gridLines: {
                    display: false
                },
                ticks: {
                  display: false
                }
            }],
            xAxes: [{
                 display: true,
                gridLines: {
                    display: false
                },
                ticks: {
                  display: false
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