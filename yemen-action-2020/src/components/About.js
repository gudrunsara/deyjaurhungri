import React, { Component } from "react";
import "../styles/About.scss";
import yemenMap from "../images/Yemen-map-teiknad.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import diskur from "../images/Diskur.png";
import Jordin from "../images/Jordin.png";

import jquery from "jquery";

jquery(document).ready(function () {
  jquery("#moreButtonAbout").on("click", function () {
    if (jquery("#aboutMoreText").hasClass("hideMore")) {
      jquery("#aboutMoreText").removeClass("hideMore");
      jquery("#moreButtonAbout").text("Sjá minna");
    } else {
      jquery("#aboutMoreText").addClass("hideMore");
      jquery("#moreButtonAbout").text("Meira um ástandið");
    }
  });
});

class About extends Component {
  render() {
    return (
      <div className="aboutSection site-padding">
        <ScrollAnimation animateIn="animate__fadeIn">
          <div className="text-about paragraph-padding">
            <h2>Um 16 milljónir manns lifa við sára hungursneið í Jemen</h2>
            <div>
              <p>
                Jemen er land í Mið-Austurlöndum þar sem borgarastyrjöld hefur
                geysað síðan 2015. Borgarastyrjöldinni fylgir ekki einungis
                hungursneið, en á þeim rúmlega fimm árum sem hún hefur geysað er
                talið að 230 þúsund almennir borgarar hafi látist, en 20 þúsund
                dauðsfallanna hafa verið staðfest af Mannréttindastofnun
                Sameinuðu Þjóðanna.
              </p>
              <img class="only-mobile" src={yemenMap} alt="yemen-map"></img>
              <p>
                Covid-19 faraldurinn hefur verið einstaklega skæður í Jemen þar
                sem margir íbúar hafa ekki aðgang að heilbrigðisþjónustu.
                Heilbrigðiskerfi Jemena er nú við það að hrynja, enn fleiri hafa
                fallið undir fátæktarmörk en áður og þjást af hungri og vegna
                lokana skólastofnanna hafa mörg þúsund börn ekki aðgang að
                menntun.
              </p>
            </div>
          </div>
          <div className="about-button-div">
            <button className="moreButton" id="moreButtonAbout">
              Meira um ástandið
            </button>
          </div>
          <p className="hideMore paragraph-padding" id="aboutMoreText">
            {" "}
            Árið 2011 var forsetanum Ali Abdullah Saleh steypt af stóli eftir 33
            ára valdatíð. Hann hafði lengi verið ásakaðum um alvarleg
            spillingarbrot, þá einkum af Huthi hópnum, sem eru samtök vopnaðra
            Zaidista. Abd Rabbu Mansour Hadi tók við af Saleh, en hann hafði
            starfað fyrir ríkisstjórn hans. Eftir tvö ár við völd lagði Hadi
            fram breytingar á stjórnarskipulagi í Jemen, sem skipti landinu í
            fylki, án tillits til samfélagslegra aðstæðna í hverju svæði fyrir
            sig. Þessari áætlun fygldi mikið mótlæti, þar á meðal frá Huthi
            samtökunum. Samtökin nýttu sér óánægju ríkisborgara Jemen og hófu
            yfirtöku nálægra svæði í Norðri, svo sem í Sa´da borg, í September
            2014. Í byrjun árs 2015 náðu þeir völdum yfir höfuðborginni Sana’a
            og þurfti sytjandi forseti og hans stjórn að flýja. Hadi forseti og
            hans stjórn fékk Saudi Arabíu og Sameinuðu Arabísku Furstadæmin með
            sér í lið til þess að ná aftur völdum og þann 25 Mars 2015 hófst
            styrjöldin sem enn stendur yfir. Hún nær nú ekki aðeins yfir
            höfuðborgina og norðurhluta landsins eins og til að byrja með,
            heldur hafa átökin heltekið alla þjóðina. Átökunum er langt frá því
            að linna og hafa margir Jemenar þurft að flýja heimili sín vegna
            hungurs, fátæktar eða eyðileggingar. Samkvæmt tölum Sameinuðu
            Þjóðanna gætu 2.4 milljónir barna í Jemen orðið vannærð í lok árs,
            helmingur þeirra undir 5 ára að aldri. Auk þess er talið að 30þúsund
            börn til viðbótar muni þróa með sér alvarlega sjúkdóma vegna
            mikillar vannæringar á næsta hálfa ári. Covid-19 faraldurinn hefur
            verið einstaklega skæður í Jemen þar sem margir íbúar hafa ekki
            aðgang að heilbrigðisþjónustu. Erfitt hefur reynst að prófa fyrir
            sjúkdóminum í Jemen en talið er að sjúkdómurinn sé mun útbreiddari
            en tölur gefa til kynna. Samkvæmt yfirlýsingu UNICEF hefur
            faraldurinn ýtt undir mörg vandamál sem voru þegar til staðar í
            Jemen, en heilbrigðiskerfi þeirra er nú við það að hrynja, enn
            fleiri hafa fallið undir fátæktarmörk en áður og þjást af hungri og
            vegna lokana skólastofnanna hafa mörg þúsund börn ekki aðgang að
            menntun.
          </p>
          <div className="yemen-map">
            <div>
              <img class="only-desktop" src={yemenMap} alt="yemen-map"></img>
            </div>
            {/* <div>
            <img src={diskur} alt="diskur" width=""></img>
          </div>

          <div>
            <img src={diskur} alt="diskur" width=""></img>
          </div> */}
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
export default About;
