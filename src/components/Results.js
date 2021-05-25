import React from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import { Table } from './Table';



export function Results( { data, metric, max }) {
  const getMaxValues = () => {
    const resultData = data.slice(0, max);
    return resultData;
  }

  const getOthers = (value) => {
    const otherData = data.slice(max, data.length);
    let sumValues = 0;
    for(let other in otherData){
      sumValues += parseInt(otherData[other][value]);
    }
    return sumValues;
  }
  function handleOptions(value) {
    const maxValues = getMaxValues();
    const series = [];
    maxValues.map(e => {
      series.push({
        name: e.countryName,
        y: parseInt(e[value]),
      });
      return e;
    })

    const others = getOthers(value);
    series.push({
      name: 'Others',
      y: others,
    });

    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: `Results ${value}`
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
          name: `${value}`,
          data: series
        }
      ]
    };

    return options;
  }

  return (
    <div>
      {(metric === 'all') ? (
        <>
          <HighChartsReact highcharts={HighCharts} options={handleOptions('areaInSqKm')} />
          <HighChartsReact highcharts={HighCharts} options={handleOptions('population')} />
        </>
      ) : (
          <HighChartsReact highcharts={HighCharts} options={handleOptions(metric)} />
      )
      }
      <Table data={data} metric={metric} />
    </div>
  )
}
