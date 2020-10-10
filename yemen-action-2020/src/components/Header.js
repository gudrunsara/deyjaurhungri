import React, { Component } from "react";
import "../styles/Header.scss";
import currynaan from "../images/menu/currynaan.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>ERT ÞÚ AÐ</h1>
        <h1>DEYJA ÚR HUNGRI?</h1>
        <img src={currynaan} alt="currynaan" id="currynaan"></img>
      </div>
    );
  }
}
export default Header;
