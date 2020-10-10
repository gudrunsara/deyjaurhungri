import React, { Component } from "react";
import "../styles/AboutUs.scss";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs site-padding paragraph-padding">
        <ScrollAnimation animateIn="animate__fadeIn">
          <h2 className="component-title">UM OKKUR</h2>
          <div className="about-us-text">
            <p>
              ,,Deyja úr hungri“ er ungmennadrifið framtak sem varð til í miðjum
              heimsfaraldri. Að baki verkefnisins standa átta aktívistar úr
              öllum áttum sem sameinuðust í þeirri trú að ein versta
              mannúðarkrísa heims - sem á sér stað í Jemen - hafi þrífst í
              þögninni í of langan tíma. Teymið samanstendur af einstaklingum
              sem búa yfir ábyrgðarkennd sem nær yfir landamæri og treysta því
              að Íslendingar geti lagt verðugt framlag að mörkum.
            </p>
            <p>
              Löngu tímabært er að unnið sé að vitundarvakningu um hungursneyð
              sem snertir meirihluta íbúa Jemen, aðstæður sem Íslendingar hafa
              fæstir kynni af. Verkefnið er útfært til þess að vekja fólk til
              umhugsunar um forréttindi sín og gefa þeim kost á að kaupa máltíð
              fyrir þá sem hafa ekki slíkt val. Fjárframlög renna til
              Neyðarsöfnunar UNICEF í Jemen sem sér um að koma þeim á réttan
              stað. Aðstæður í Jemen eru af mannanna völdum, það er skylda okkar
              að bregðast við!
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
export default AboutUs;
