import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = () => {
  const colors = ['#98D89E', '#F6DC7D', '#EE8484']; //
  const options = {
    chart: {
      type: 'pie',
      height: 220,
      width: 250,
    },
    title: {
      text: ' ',
    },
    plotOptions: {
      pie: {
        innerSize: '80%',
        dataLabels: {
          enabled: false, // Disable data labels
        },
        marker: {
          enabled: false, // Hide data point markers
        },
      },
    },
    series: [
      {
        name: 'Data',
        data: [
          ['', 55],
          ['', 31],
          ['', 14],
        ],
        colors: colors,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />

};

export default DonutChart;
