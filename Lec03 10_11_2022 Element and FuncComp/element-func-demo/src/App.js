import logo from './logo.svg';
import './App.css';
import EHeader from './EHeader';
import FCStudent from './Functional Components/FCStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Main</p>
        <FCStudent id={7} name="avi" grade={70} /> <br />
        <FCStudent id={8} name="benny" grade={99} />
      </header>
    </div>
  );
}

export default App;
