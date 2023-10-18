import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = () => {
  const options = {
    chart: {
      type: 'column',
      height: 350, 
      width: 1100,   
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    },
    yAxis: {
      title: {
        text: ' ',
      },
    },
    plotOptions: {
      column: {
        pointWidth: 30,

      },
    },
    series: [
      {
        name: 'Guest',
        data: [500, 350, 200, 400],
        color: '#98D89E',
      },
      {
        name: 'User',
        data: [400, 450, 300,350],
        color: '#EE8484',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
