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
    const res = await fetch('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane', {
      'mode': 'cors',
    });
    const data = res.json();

    return data;
  }

  const handleFetch = (e) => {
    const getData = async () => {
      const data = await fetchData();
      setData(data.geonames);
    }
    getData();
    setEnable(false);
  }

  const getContinents = (arr, value) => {
    const uniqueValues = arr
      .map(e => e[value])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return uniqueValues;
  }

  const uniqueContinents = getContinents(data, 'continent').map(e => e.continent);

  const onOrder = (toggle, value) => {
    const newData = data.sort((a, b) => {
      const x = a[value];
      const y = b[value];
      return (toggle ? x > y : x < y);
    })
    setData(newData);
  }

  return (
    <div className="App">
      <Header title={headerTitle} onClick={handleFetch} />
      <Filters enable={enable} continents={uniqueContinents} />
      {data.length > 0 &&
        <Results data={data} continent={continent} metric={metric} max={max} onOrder={onOrder} />
      }
    </div>
  );
}

export default App;
