import React from 'react';
import MainGame from "./components/MainGame/MainGame";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainGame}/>
    </div>
  );
}

export default App;
