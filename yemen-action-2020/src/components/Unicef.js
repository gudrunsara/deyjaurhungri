import React, { Component } from "react";
import "../styles/Unicef.scss";
import jquery from "jquery";
import hreintVatn from "../images/unicef_verkefni/Hreint_vatn2.png";
import bolusetningar from "../images/unicef_verkefni/Bolusetningar2.png";
import jardhnetumauk from "../images/unicef_verkefni/Jardhnetumauk.png";
import penni from "../images/unicef_verkefni/Penni.png";
import bok from "../images/unicef_verkefni/Bok.png";

jquery(document).ready(function () {
  jquery("#moreButtonUnicef").on("click", function () {
    console.log("clicked");
    if (jquery("#UnicefMoreText").hasClass("hideMore")) {
      jquery("#UnicefMoreText").removeClass("hideMore");
      jquery("#moreButtonUnicef").text("Sjá minna");
    } else {
      jquery("#UnicefMoreText").addClass("hideMore");
      jquery("#moreButtonUnicef").text("Lesa meira");
    }
  });
});

class Unicef extends Component {
  render() {
    return (
      <div className="unicef site-padding paragraph-padding">
        <h2>HVAÐ GERIR UNICEF Í JEMEN?</h2>
        <div className="unicef-verk-div">
          <div className="unicef-verk">
            <img src={hreintVatn} alt="hreint vatn" width="100%"></img>
            <p>Veita fólki hreint vatn og hreinlætisaðstöðu.</p>
          </div>

          <div className="unicef-verk">
            <img src={bolusetningar} alt="bolusetningar" width="100%"></img>
            <p>
              Bólusetja börn gegn mislingum og öðrum lífshættulegum sjúkdómum.
            </p>
          </div>
          {/* </div>
        <div className="unicef-verk-div"> */}
          <div className="unicef-verk">
            <img src={jardhnetumauk} alt="jardhnetumauk" width="100%"></img>
            <p>Veita börnum meðferð við vannæringu.</p>
          </div>

          <div className="unicef-verk">
            <img src={penni} alt="penni" width="100%"></img>
            {/* <img src={bok} alt="bok" width="100%" className="unicef-verk"></img> */}
            <p>Koma börnum aftur í skóla.</p>
          </div>
        </div>

        {/* <p>
          Veita börnum sálrænan stuðning. <br></br> Setja upp barnvæn svæði þar
          sem börn geta leikið sér og fundið fyrir öryggi.<br></br> Hjálpa
          börnum sem hafa verið fengin til liðs við stríðandi fylkingar að
          sameinast fjölskyldum sínum.
        </p> */}
        <button className="moreButton" id="moreButtonUnicef">
          Lesa meira
        </button>
        <div id="UnicefMoreText" className="hideMore">
          <p className="unicef-text">
            Staða barna í Jemen er skelfileg og nánast hvert einasta barn í
            landinu þarf á lífsnauðsynlegri hjálp að halda. Milljónir barna
            þjást vegna vannæringar og smitsjúkdóma á borð við kóleru og nú
            bætist kórónaveiran við sem enn ein ógnin við líf og heilsu barna í
            landinu. UNICEF hefur í fleiri ár lagt allt kapp í að veita börnum í
            Jemen neyðaraðstoð við gífurlega erfiðar aðstæður og í forgangi er
            að meðhöndla þau börn sem þjást vegna alvarlegrar bráðavannæringar.
            Á síðasta ári náði UNICEF að meðhöndla yfir 200 þúsund börn vegna
            bráðavannæringar en ljóst er að fjöldi barna í neyð verður enn meiri
            á þessu ári þar sem vannæring og skortur á heilsugæslu gerir börn
            enn varnarlausari gegn kórónaveirunni.
          </p>
          <p className="unicef-text">
            UNICEF heldur einnig áfram að þrýsta á stjórnvöld og
            alþjóðasamfélagið að hjálparstofnunum sé tryggður óheftur aðgangur
            að höfnum og flugvöllum í landinu til þess að hægt sé að koma mat,
            vatni, lyfjum og bólusetningum til fólks í neyð.
          </p>
        </div>
      </div>
    );
  }
}
export default Unicef;
