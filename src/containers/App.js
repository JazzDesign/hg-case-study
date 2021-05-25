import '../assets/styles/App.css';
import { Header } from '../components/Header';
import { Filters } from '../components/Filters';
import { Results } from '../components/Results';

function App() {
  const headerTitle = 'Frontend Dev CS';
  return (
    <div className="App">
      <Header title={headerTitle} />
      <Filters />
      <Results />
    </div>
  );
}

export default App;
