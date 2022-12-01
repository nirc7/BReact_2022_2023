import './App.css';
import CCCar from './Class  Comps/CCCar';
import CCCarsListApp from './Class  Comps/CCCarsListApp';
import RefsDemo from './Class  Comps/RefsDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RefsDemo/>
        <CCCar model={"porshe"} speed={123}/>
        <CCCarsListApp />
        {/* <CCCar speed={200} /> */}
      </header>
    </div>
  );
}

export default App;
