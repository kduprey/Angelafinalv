import React from 'react'; 
import Angela from './Components/Angela.js';
import Breath from './Components/Breath.js';
import './App.css';
import About from './Components/About/About.js';





function App() {
 
  console.log(Angela);
  return (
    <div className="App">
      <h1> Home </h1>
      <Angela />
      <Breath />
      <About />
      
    </div>
    
  );
}

export default App;
