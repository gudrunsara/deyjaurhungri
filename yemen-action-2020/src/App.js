import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Challenge from "./components/Challenge";
import Disclaimer from "./components/Disclaimer";
import Interview from "./components/Interview";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Challenge></Challenge>
      <Menu></Menu>
      <Disclaimer></Disclaimer>
      <Interview></Interview>
    </div>
  );
}

export default App;
