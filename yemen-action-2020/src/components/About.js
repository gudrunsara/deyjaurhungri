import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <div class="aboutSection">
        <h2>HVAÐ ER AÐ GERAST Í YEMEN?</h2>
        <div class="aboutText">
          {/*  Left side */}
          <p>
            Yemen er land í Mið-Austurlöndum þar sem borgarastyrjöld hefur
            geysað síðan 2015. Samkvæmt tölum Amnesty International eru um 16
            milljónir mans sem lifa við sára hungursneið í Yemen.
            Borgarastyrjöldinni fylgir ekki einungis hungursneið, en á þeim
            rúmlega fimm árum sem hún hefur geysað er talið að 230 þúsund
            almennir borgarar hafi látist, en 20 þúsund dauðsfallanna hafa verið
            staðfest af Mannréttindastofnun Sameinuðu Þjóðanna. Styrjöldinni
            fylgja alvarleg mannréttindabrot, sem oft geta talist alvarlegir
            stríðsglæpir.
          </p>
          {/* Right side */}
          <p>
            Covid-19 faraldurinn hefur verið einstaklega skæður í Yemen þar sem
            margir íbúar hafa ekki aðgang að heilbrigðisþjónustu. Erfitt hefur
            reynst að prófa fyrir sjúkdóminum í Yemen en talið er að
            sjúkdómurinn sé mun útbreiddari en tölur gefa til kynna. Samkvæmt
            yfirlýsingu UNICEF hefur faraldurinn ýtt undir mörg vandamál sem
            voru þegar til staðar í Yemen, en heilbrigðiskerfi þeirra er nú við
            það að hrynja, enn fleiri hafa fallið undir fátæktarmörk en áður og
            þjást af hungri og vegna lokana skólastofnanna hafa mörg þúsund börn
            ekki aðgang að mentun.
          </p>
        </div>
      </div>
    );
  }
}
export default About;
