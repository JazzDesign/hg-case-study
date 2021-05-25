import React, { useEffect } from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

export function Results( { data, metric, max }) {

  const series = [];
  data.map(e => {
    series.push({
      name: e.countryName,
      y: parseInt(e.population),
    });
    return e;
  })

  const optionsPopulation = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Results Population'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
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
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        name: 'Population',
        data: series
      }
    ]
  };

  const optionsArea = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Results AreaInSqKm'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
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
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        name: 'AreaInSqKm',
        data: series
      }
    ]
  };

  console.log(series);
  return (
    <div>

      <HighChartsReact highcharts={HighCharts} options={optionsPopulation} />
      <HighChartsReact highcharts={HighCharts} options={optionsArea} />
      {data.map(item => (
        <p key={item.geonameId}>{item.continent}</p>
      ))}
    </div>
  )
}
