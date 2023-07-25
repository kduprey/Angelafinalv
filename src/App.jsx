import React from "react";
import Angela from "./Components/Angela";
import Breath from "./Components/Breath";
import "./App.css";
import About from "./Components/About/About";

const App = () => (
  <div className="App">
    <h1> Home </h1>
    <Angela />
    <Breath />
    <About />
  </div>
);

export default App;
