import React, { Component } from "react";

class ApexCharts extends React.Component{
    constructor(props:object){
        super(props);

        this.state = {

            series: [{
                name: "IMC",
                data: [15, 20, 24.9, 29.9, 39.9, 43, 50 ]
            }],
            options: {
                chart: {
                  height: 350,
                  type: 'line',
                  id: 'BMIGraph',
                  zoom:{
                    enable: false,
                  }
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    row:{
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: []
                },
                anotations: {
                    xaxis: [{
                        x: new Date('23 Nov 2017').getTime(),
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                          borderColor: '#775DD0',
                          style: {
                            color: '#fff',
                            background: '#775DD0',
                          },
                          text: 'Anno Test',
                        }
                    }],


                }
            }
        }
    }
}

export default ApexCharts;