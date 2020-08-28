import React from "react";
import "./App.css";

import About from "./components/About";
import Challenge from "./components/Challenge";
import Disclaimer from "./components/Disclaimer";
import Interview from "./components/Interview";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YEMEN ACTION 2020</h1>
        <About></About>
        <Challenge></Challenge>
        <Disclaimer></Disclaimer>
        <Interview></Interview>
        <Menu></Menu>
      </header>
    </div>
  );
}

export default App;
