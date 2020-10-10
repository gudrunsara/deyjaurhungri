import React, { Component } from "react";
import "../styles/donateLinks.scss";

class DonateLinks extends Component {
  render() {
    return (
      <div className="donate-links">
        <h2>Aðrir hlekkir til að styrkja Jemen</h2>
        <div>
          <a
            href="https://www.unicef.org/emergencies/yemen-crisis"
            target="_blank"
          >
            UNICEF - Yemen crisis
          </a>
        </div>
        <div>
          <a
            href="https://www.savethechildren.org/us/what-we-do/where-we-work/greater-middle-east-eurasia/yemen"
            target="_blank"
          >
            Save the Children - Help Save Children in Yemen
          </a>
        </div>
        <div>
          <a
            href="https://donate.unhcr.org/int/yemen/~my-donation"
            target="_blank"
          >
            The UN Refugee Agency - Yemen
          </a>
        </div>
        <div>
          <a
            href="https://donate.unhcr.org/int/yemen/~my-donation"
            target="_blank"
          >
            ICRC - Yemen crisis appeal
          </a>
        </div>
        <div>
          <a href="https://www.patreon.com/monarelief" target="_blank">
            Mona Relief Yemen
          </a>
        </div>
        <div>
          <a href="https://www.patreon.com/monarelief" target="_blank">
            Pennyappeal - Yemen emergency
          </a>
        </div>
      </div>
    );
  }
}
export default DonateLinks;
