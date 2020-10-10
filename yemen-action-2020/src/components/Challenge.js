import React, { Component } from "react";
import "../styles/Challenge.scss";
import hendi from "../images/Hendi-svort.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class Challenge extends Component {
  render() {
    return (
      <div className="challengeSection">
        <div class="site-padding">
          <ScrollAnimation animateIn="animate__fadeIn">
            <h2 className="paragraph-padding">VIÐ SKORUM Á ÞIG</h2>
            <div class="challenge-intro-text paragraph-padding">
              <p>
                Yfirgnæfandi meirihluti Íslendinga upplifir ekki hungur í
                daglegu lífi. Samt sem áður erum við stöðugt að „deyja úr
                hungri“.
              </p>
              <p>
                En hvernig er að upplifa raunverulegt hungur, umfram almenna
                svengd, líkt og 20 milljónir Jemena gera dag hvern? Við skorum á
                þig að upplifa slíkt.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div class="site-padding challenge-padding">
          <ScrollAnimation animateIn="animate__fadeIn">
            <div class="challenge-box">
              <div className="two-columns">
                <div class="challenge-white-box"></div>
                <img src={hendi} alt="hendi" width="40%" id="handaImg"></img>
                <p className="challenge-info-col">
                  <span>
                    Við biðjum ungt fólk á Íslandi að sleppa máltíð eftir
                    matseðlinum okkar og styrkja börn í Jemen um fjárhæðina sem
                    henni nemur.
                  </span>
                  <br></br>
                  <br></br>
                  Jafnframt biðjum við fólk að íhuga reynslu sína, og deila
                  upplifuninni á InstaStory með myllumerkinu #deyjaúrhungri.
                  Þannig vekjum við aðra til umhugsunar um efnahagsleg
                  forréttindi sín, og söfnum pening fyrir jemensk börn.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
export default Challenge;
