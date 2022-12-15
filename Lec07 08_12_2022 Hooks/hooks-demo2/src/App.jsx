
import './App.css';
import { useEffect, useState } from 'react';
import ShowNum from './ShowNum';
import ChangeNum from './ChangeNum';

function App() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState('...');

  useEffect(() => {
    console.log(count);
  });

  useEffect(() => {
    console.log(txt);
  }, [txt]);

  useEffect(() => {
    console.log('did mount!');

    return () => {
      console.log('will unmout');
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        count = {count} <br />
        <button onClick={() => setCount(prevC => prevC + 1)} >Add One</button> <br />
        <button onClick={() => setTxt('avi')} >change txt</button> <br />
        txt = {txt} <br />
        <ShowNum /> <br />
        <ChangeNum/>
      </header>
    </div>
  );
}

export default App;
