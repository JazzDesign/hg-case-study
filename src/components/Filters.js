import React, { useState } from 'react'

export function Filters( { enable, continents }) {
  const [continent, setContinent] = useState('all');
  const [metric, setMetric] = useState('all');
  const [max, setMax] = useState('5');

  const handleContinent = (e) =>{
    setContinent(e.target.value);
  }
  const handleMetric = (e) =>{
    setMetric(e.target.value);
  }
  const handleMax = (e) => {
    setMax(e.target.value);
  }
  return (
    <div>

        <select value={continent} disabled={enable} onChange={handleContinent} >
          <option value="all">ALL</option>
          {continents.map(continent => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>

      <select disabled={enable} value={metric} onChange={handleMetric}>
          <option value="all">ALL</option>
          <option value="area">areaInSqKm</option>
          <option value="population">Population</option>
        </select>

        <select disabled={enable} value={max} onChange={handleMax}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
    </div>
  )
}
