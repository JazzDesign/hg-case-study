import '../assets/styles/App.css';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Filters } from '../components/Filters';
import { Results } from '../components/Results';

function App() {
  const [data, setData] = useState([]);
  const [enable, setEnable] = useState(true);
  const headerTitle = 'Frontend Dev CS';

  const fetchData = async () => {
    const res = await fetch('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane');
    const data = res.json();

    return data;
  }
  const handleFetch = (e) => {
    console.log("Funciona el click");
    const getD = async () => {
      const data = await fetchData();
      setData(data.geonames);
    }

    getD();
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

      {data &&
        <Results data={getContinents(data, 'continent')} />
      }
    </div>
  );
}

export default App;
