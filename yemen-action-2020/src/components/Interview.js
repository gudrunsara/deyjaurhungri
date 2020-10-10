import React, { Component } from "react";
import "../styles/Interview.scss";
import interview from "../images/Interview.m4a";
import firstQuote from "../images/quote-1.png";
import secondQuote from "../images/quote-2.png";
import mobileSecondQuote from "../images/mobile-quote-2.png";
import mobileFirstQuote from "../images/mobile-quote-1.png";

class Interview extends Component {
  render() {
    return (
      <div className="interview">
        <div className="interview-align-center">
          <img
            className="desktop-quote"
            src={firstQuote}
            alt='"'
            id="quote1"
          ></img>
          <img
            className="mobile-quote"
            src={mobileFirstQuote}
            alt='"'
            id="quote1"
          ></img>

          <audio controls className="interview-audio">
            <source src={interview} type="audio/ogg"></source>
            <source src={interview} audio="audio/mpeg"></source>
          </audio>
          <img
            className="desktop-quote"
            src={secondQuote}
            alt='"'
            id="quote2"
          ></img>
          <img
            className="mobile-quote"
            src={mobileSecondQuote}
            alt='"'
            id="quote2"
          ></img>
        </div>
      </div>
    );
  }
}
export default Interview;
