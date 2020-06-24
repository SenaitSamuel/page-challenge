<script>
import { Doughnut} from "vue-chartjs";
import { Chart } from "chart.js";

export default {
  name: "TotalSignUps",
  extends: Doughnut,
  props: {
  
  },
  mounted() {
    this.renderChart(
      {
       labels: ['Individuals', 'Companies'],
         datasets: [ {
            label: 'Total Signups',
            backgroundColor: [
            '#ff56ee',
            '#1bfbe4',           
            ],
            hoverBackgroundColor: [
            '#ff56ee',
            '#1bfbe4',            
            ],
             data: [284, 364]
         }],
         text: '648'
         
      }
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

        ctx.font = '40px Montserrat-Regular'
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';

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