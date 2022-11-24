import './App.css';
import CCCar from './Class  Comps/CCCar';
import CCCarsListApp from './Class  Comps/CCCarsListApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CCCarsListApp />
        {/* <CCCar speed={200} /> */}
      </header>
    </div>
  );
}

export default App;
