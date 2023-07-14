import React from 'react'; 
import Angela from './Components/Angela.js';
import Breath from './Components/Breath.js';
import './App.css';





function App() {
 
  console.log(Angela);
  return (
    <div className="App">
      <h1> Home </h1>
      <Angela />
      <Breath />
      
    </div>
    
  );
}

export default App;
