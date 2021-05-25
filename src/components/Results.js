import React from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

export function Results( { data }) {
  const series = [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Results Case Study'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>test</b>: test %'
        }
      }
    },
    series: [
      {
        name: 'Population',
        colorByPoint: true,
        data: series
      }
    ]
  };

  console.log(data);
  return (
    <div>
      <HighChartsReact highcharts={HighCharts} options={options} />
      {data.map(item => (
        <p key={item.geonameId}>{item.continent}</p>
      ))}
    </div>
  )
}
