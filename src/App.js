import './App.css';
import { Suspense } from 'react';
import Location from './Components/Location';

function App() {

  return (
    <div className="App">
      <Suspense fallback={<div className="spiner"></div>} className="contentLoad">
       <h1 className="title">WELCOME TO THE WEATHER APP</h1>
       <Location/>
      </Suspense>
      
    </div>
  );
}

export default App;
