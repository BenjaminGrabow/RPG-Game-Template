import React from 'react';
import Street from "./components/Maps/Street/Grid/Grid";
import Forest from "./components/Maps/Forest/Grid/Grid";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Street}/>
      <Route path="/forest" component={Forest}/>
    </div>
  );
}

export default App;
