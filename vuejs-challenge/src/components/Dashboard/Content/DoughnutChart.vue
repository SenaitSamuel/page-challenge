<script>
import { Doughnut} from "vue-chartjs";
import { Chart } from "chart.js";

export default {
  name: "DoughnutChart",
  extends: Doughnut,
  props: ["labels", "datalabel", "chartdata"],

  mounted() {
    this.renderChart(
      {
       labels: this.labels,
         datasets: [ {
            label: this.datalabel,
            backgroundColor: ["#ff56ee" ,"#1bfbe4"],
            hoverBackgroundColor: [ "#ff56ee","#1bfbe4" ],
            borderWidth: 0,
            data: this.chartdata
         }],
         text:"648",         
      },
       { 
        responsive: true, 
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        legend: {
          display:false,
          labels: {
            boxWidth:15,
             position:"right"
            }
          },
        },
    );
    this.textCenter()
  },

  methods:{
   
   textCenter() {
    var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
   
    draw: function() {
        originalDoughnutDraw.apply(this, arguments);
        
        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        ctx.font = "40px Arial" 
        ctx.fillStyle = "white";
        ctx.textBaseline = "middle";

        var text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    }
      })
   
  }
   },
 }
    </script>