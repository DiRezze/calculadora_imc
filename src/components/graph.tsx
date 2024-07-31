import React from "react";
import ReactApexChart from "react-apexcharts";

interface BmiChartProps {
  userWeight: number;
  userBmi: number;
}

const BmiChart: React.FC<BmiChartProps> = ({ userWeight, userBmi }) => {
  const weights = [45, 55, 65, 75, 85, 95, 105, 115];

  const generateBmiData = (weights: number[], height: number) => {
    return weights.map(weight => {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      return parseFloat(bmi);
    });
  };

  const height = 170;

  const series = [{
    name: 'IMC',
    data: generateBmiData(weights, height)
  }];

  const options = {
    chart: {
      height: 350,
      id: 'BMIChart',
    },
    annotations: {
      yaxis: [
        {
          y: 18.5,
          borderColor: '#0000FF',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Abaixo do Peso',
          }
        },
        {
          y: 24.9,
          borderColor: '#00FF00',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Peso Normal',
          }
        },
        {
          y: 29.9,
          borderColor: '#FFB200',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Sobrepeso',
          }
        },
        {
          y: 34.9,
          borderColor: '#FF0000',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Obesidade Grau I',
          }
        },
        {
          y: 39.9,
          borderColor: '#990000',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Obesidade Grau II',
          }
        },
        {
          y: 40,
          borderColor: '#660000',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Obesidade Grau III',
          }
        }
      ],
      points: [
        {
          x: `${userWeight}kg`,
          y: userBmi,
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
        }
      ]
    },
    xaxis: {
      categories: weights.map(weight => `${weight}kg`),
      title: {
        text: 'Peso (kg)'
      }
    },
    yaxis: {
      title: {
        text: 'IMC'
      }
    }
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" />
    </div>
  );
}

export default BmiChart;
