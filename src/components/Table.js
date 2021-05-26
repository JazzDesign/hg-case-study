import React, { useState } from 'react';
import '../assets/styles/components/Table.css';

export function Table({ data, metric, onOrder }) {
  const [toggleAsc, setToggleAsc] = useState(true);

  const handleOrder = (value) => {
    onOrder(toggleAsc, value);
    setToggleAsc(!toggleAsc);
  }

  const getValues = (value) => {
    let sumValues = 0;
    for (let item in data) {
      sumValues += parseInt(data[item][value]);
    }
    return sumValues;
  }

  function tableHeader () {
    return(
      <tr>
        <th><button onClick={() => handleOrder('continent')}>Continent Name</button></th>
        <th><button onClick={() => handleOrder('countryName')}>Country Name</button></th>
        {metric === 'all' ? (
          <>
            <th><button onClick={() => handleOrder('population')}>population</button></th>
            <th><button onClick={() => handleOrder('areaInSqKm')}>areaInSqKm</button></th>
          </>
        ) : (

            <th><button onClick={() => handleOrder(`${metric}`)}>{metric}</button></th>
        )

        }
      </tr>
    );
  }

  function tableData() {
    return data.map(element => {
      const { continent, geonameId, countryName, population, areaInSqKm } = element;
      return(
        <tr key={geonameId}>
          <td>{continent}</td>
          <td>{countryName}</td>
          {metric === 'all' ? (
            <>
              <td>{population}</td>
              <td>{areaInSqKm}</td>
            </>
          ) : (
              <td>{element[metric]}</td>
          )}
        </tr>
      );
    })
  }

  return (
    <div>
      <table>
        <thead>
          {tableHeader()}
        </thead>
        <tbody>
          {tableData()}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"><strong>TOTAL</strong></td>
            {metric === 'all' ? (
              <>
                <td>{getValues('population')}</td>
                <td>{getValues('areaInSqKm')}</td>
              </>
            ) : (
                <td>{getValues(`${metric}`)}</td>
            )}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
