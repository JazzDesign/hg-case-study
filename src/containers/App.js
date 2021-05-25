import '../assets/styles/App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Filters } from '../components/Filters';
import { Results } from '../components/Results';

const selectContinent = state => state.filter.continent;
const selectMetric = state => state.filter.metric;
const selectMax = state => state.filter.max;

function App() {
  const [data, setData] = useState([]);
  const [enable, setEnable] = useState(true);

  const headerTitle = 'Frontend Dev CS';
  const continent = useSelector(selectContinent);
  const metric = useSelector(selectMetric);
  const max = useSelector(selectMax);

  const fetchData = async () => {
    const res = await fetch('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane');
    const data = res.json();

    return data;
  }

  const handleFetch = (e) => {
    console.log("Funciona el click");
    const getData = async () => {
      const data = await fetchData();
      setData(data.geonames);
    }
    getData();
    setEnable(false);
  }

  const getContinents = (arr, value) => {
    const unique = arr
      //store the comparison values in array
      .map(e => e[value])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }

  const uniqueContinents = getContinents(data, 'continent').map(e => e.continent);
  return (
    <div className="App">
      <Header title={headerTitle} onClick={handleFetch} />
      <Filters enable={enable} continents={uniqueContinents} />
      {data.length > 0 &&
        <Results data={(continent === "all") ? data : data.filter(e => e.continent === continent)} metric={metric} max={max} />
      }
    </div>
  );
}

export default App;
