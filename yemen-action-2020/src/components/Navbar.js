import React, { Component } from "react";
import "../styles/Navbar.scss";
import instalogo from "../images/instalogo-white.png";
import jquery from "jquery";

jquery(document).ready(function () {
  jquery(window).scroll(function () {
    if (jquery(document).scrollTop() > 0) {
      jquery(".navbar").addClass("background-color-navbar");
    } else {
      jquery(".navbar").removeClass("background-color-navbar");
    }
  });
});

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a class="hide-mobile" href="#About">
          Ástandið í Jemen
        </a>
        <a href="#Challenge">Áskorunin</a>
        <a href="#Menu">Matseðill</a>
        <a class="hide-mobile" href="#DonateLinks">
          Styrktu málefnið
        </a>
        <a class="hide-mobile" href="#Interview">
          Viðtalið
        </a>
        <a class="hide-mobile" href="#AboutUs">
          Um Okkur
        </a>
        <a href="https://www.instagram.com/deyjaurhungri/" target="_blank">
          <img className="instalogo" src={instalogo} alt="instagram logo"></img>
        </a>
      </div>
    );
  }
}
export default Navbar;
