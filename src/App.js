import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count,setCount] = useState('laptop')
  return (
    <CategoryContext.Provider value={[count,setCount]}>
      <h4>Count: {count} </h4>
     <Header  setCount={setCount} />
     <Home count={count} />
     <Shipment />
    </CategoryContext.Provider>
  );
}

export default App;
