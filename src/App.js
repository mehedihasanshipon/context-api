import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h4>Count: {count} </h4>
     <Header count={count} setCount={setCount} />
     <Home count={count} />
     <Shipment />
    </div>
  );
}

export default App;
