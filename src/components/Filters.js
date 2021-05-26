import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateContinent, updateMetric, updateMax } from '../redux/filterSlice';
import '../assets/styles/components/Filters.css';

const selectContinent = state => state.filter.continent;
const selectMetric = state => state.filter.metric;
const selectMax = state => state.filter.max;

export function Filters( { enable, continents }) {
  const dispatchContinent = useDispatch();
  const dispatchMetric = useDispatch();
  const dispatchMax = useDispatch();

  const continent = useSelector(selectContinent);
  const metric = useSelector(selectMetric);
  const max = useSelector(selectMax);

  const handleContinent = (e) =>{
    dispatchContinent(updateContinent(e.target.value));
  }
  const handleMetric = (e) =>{
    dispatchMetric(updateMetric(e.target.value));
  }
  const handleMax = (e) => {
    dispatchMax(updateMax(e.target.value));
  }
  return (
    <div className="filters">
      <h3>Filters</h3>
        <select value={continent} disabled={enable} onChange={handleContinent} >
          <option value="all">ALL</option>
          {continents.map(continent => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>

      <select disabled={enable} value={metric} onChange={handleMetric}>
          <option value="all">ALL</option>
          <option value="areaInSqKm">areaInSqKm</option>
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
