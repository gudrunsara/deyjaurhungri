import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Challenge from "./components/Challenge";
import Disclaimer from "./components/Disclaimer";
import Interview from "./components/Interview";
import Menu from "./components/Menu";
import DonateLinks from "./components/DonateLinks";
import AboutUs from "./components/AboutUs";
import Unicef from "./components/Unicef";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <section id="Intro">
        <Header></Header>
      </section>

      <section id="About">
        <About></About>
      </section>

      <section id="Challenge">
        <Challenge></Challenge>
      </section>

      <section id="Disclaimer">
        <Disclaimer></Disclaimer>
      </section>

      <section id="Menu">
        <Menu></Menu>
      </section>

      <section id="Unicef">
        <Unicef></Unicef>
      </section>

      <section id="Interview">
        <Interview></Interview>
      </section>

      <section id="AboutUs">
        <AboutUs></AboutUs>
      </section>

      <section id="DonateLinks">
        <DonateLinks></DonateLinks>
      </section>
    </div>
  );
}

export default App;
