import logo from './logo.svg';
import './App.css';
import CCCar from './Class  Comps/CCCar';
import CCCarsList from './Class  Comps/CCCarsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCCarsList />
        <CCCar speed={200} />
      </header>
    </div>
  );
}

export default App;
