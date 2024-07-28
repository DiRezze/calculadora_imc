import React from "react";
import ReactApexChart from "react-apexcharts";

const BmiChart: React.FC = () => {
    const series =[{
        name: 'IMC',
        data: [16, 23, 24, 25, 26, 27]
    }];
    const options = {

        chart: {
          height: 350,
          id: 'BMIChart',
        },

        annotations: {

            yaxis: [{
                y: 15,
                y2: 20,
                fillColor: '#0000FF',
                opacity: 0.5,
                label: {
                    borderColor: '#B3F7CA',
                    style: {
                        fontSize: '12px',
                        color: '#fff',
                        background: '#00E396',
                    },
                    offsetY: -10,
                    text: 'Abaixo do Normal',

                }
            }],

            points: [{
                x: 1,
                y: 8607.55,
                  marker: {
                    size: 8,
                    fillColor: '#fff',
                    strokeColor: 'red',
                    radius: 2,
                    cssClass: 'apexcharts-custom-class'
                  },
                  label: {
                    borderColor: '#FF4560',
                    offsetY: 0,
                    style: {
                      color: '#fff',
                      background: '#FF4560',
                    },
              
                    text: 'Você',
                  }
            }]

        },

        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        }
    };
    return (
        <div>
          <ReactApexChart options={options} series={series} type="line" />
        </div>
    );
}

export default BmiChart;
