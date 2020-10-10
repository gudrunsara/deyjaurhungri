import React, { Component } from "react";
import "../styles/Menu.scss";
import curry from "../images/menu/currynaan.png";
import hamborgari from "../images/menu/hamborgari.png";
import nautasteik from "../images/menu/nautasteik.png";
import pizza from "../images/menu/pizza.png";
import pulsakok from "../images/menu/pulsakok.png";
import supa from "../images/menu/supa.png";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-section">
          <h2>MATSEÐILL</h2>

          <div className="three-columns">
            <div className="left-column">
              <img src={pulsakok} alt="pulsakok"></img>
              <img src={hamborgari} alt="hamborgari"></img>
              <img src={curry} alt="curry"></img>
            </div>
            <div className="menu-list paragraph-padding">
              <h4 className="menu-title">1. VELDU ÞÉR RÉTT AF MATSEÐLI</h4>

              {/* MENU ITEM  */}
              <section className="menu-item">
                <p className="course">EIN MEÐ ÖLLU</p>
                <span className="dots">
                  .....................................................................................................................................................................
                </span>
                <p className="price"> 730 ISK</p>
              </section>
              <p className="peanutbutter">
                Samanber 15 pakka af jarðhnetumauki
              </p>

              {/* MENU ITEM  */}
              <section className="menu-item">
                <p className="course">MIÐSTÆRÐ AF PÍZZU</p>
                <span className="dots">
                  .........................................................................................................................................................
                </span>
                <p className="price"> 2490 ISK</p>
              </section>
              <p className="peanutbutter">
                Samanber 50 pakka af jarðhnetumauki
              </p>

              {/* MENU ITEM  */}
              <section className="menu-item">
                <p className="course">HAMBORGARI OG BJÓR</p>
                <span className="dots">
                  .........................................................................................................................................................
                </span>
                <p className="price"> 3498 ISK</p>
              </section>
              <p className="peanutbutter">
                Samanber 70 pakka af jarðhnetumauki
              </p>

              {/* MENU ITEM  */}
              <section className="menu-item">
                <p className="course">HUMARSÚPA OG EPLAKAKA</p>
                <span className="dots">
                  .........................................................................................................................................................
                </span>
                <p className="price"> 4980 ISK</p>
              </section>
              <p className="peanutbutter">
                Samanber 100 pakka af jarðhnetumauki
              </p>

              {/* MENU ITEM  */}
              <section className="menu-item">
                <p className="course">GRÆNMETISKÚRRÍ OG NAAN BRAUÐ</p>
                <span className="dots">
                  .........................................................................................................................................................
                </span>
                <p className="price"> 5990 ISK</p>
              </section>
              <p className="peanutbutter">
                Samanber 99 pakka af jarðhnetumauki
              </p>

              {/* MENU ITEM  */}
              <section className="menu-item">
                <p className="course">NAUTALUND</p>
                <span className="dots">
                  .................................................................................................................................................................
                </span>
                <p className="price"> 5990 ISK</p>
              </section>
              <p className="peanutbutter">
                Samanber 120 pakka af jarðhnetumauki
              </p>
            </div>
            <div className="right-column">
              <img src={pizza} alt="pizza"></img>
              <img src={supa} alt="supa"></img>
              <img src={nautasteik} alt="nautasteik"></img>
            </div>
          </div>
        </div>
        <div className="donate-section paragraph-padding">
          <div className="donate">
            <h4 className="menu-title second">
              2. STYRKTU MÁLEFNIÐ <span>- NEYÐARSJÓÐUR UNISEF</span>
            </h4>
            {/* MENU ITEM  */}
            <section className="menu-item donate-item">
              <p className="course">AUR</p>
              <span className="dots">
                ........................................................................................................................................................................................................................
              </span>
              <p className="price"> 123 787 2332 / @Jemen</p>
            </section>

            {/* MENU ITEM  */}
            <section className="menu-item donate-item">
              <p className="course">SMS-IÐ “JEMEN” Í</p>
              <span className="dots">
                .........................................................................................................................................................
              </span>
              <p className="price">1900</p>
            </section>

            {/* MENU ITEM  */}
            <section className="menu-item donate-item">
              <p className="course">NETBANKI</p>
              <span className="dots">
                ........................................................................................................................................................................................................................
              </span>
            </section>
            <p className="peanutbutter">
              Bankanr. 701-26-102050 kt. 481203 - 2950
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
