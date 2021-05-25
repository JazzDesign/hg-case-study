import React from 'react';
import '../assets/styles/components/Table.css';

export function Table({ data, metric }) {

  function tableHeader () {
    return(
      <tr>
        <th>Continent Name</th>
        <th>Country Name</th>
        <th>Population</th>
        <th>AreaInSqKm</th>
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
          <td>{population}</td>
          <td>{areaInSqKm}</td>
        </tr>
      );
    })
  }

  return (
    <div>
      <table>
        <tbody>
          {tableHeader()}
          {tableData()}
        </tbody>
      </table>
      this is table
    </div>
  )
}
