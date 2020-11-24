import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";




const Footer = () => (
  <div>
    <ul className="footer">
      <li className="">© 2020 Mahtava kirjakauppa | Kaikki oikeudet pidätetään.
      <Link
      to="/Tietosuojaseloste">Tietosuojaseloste</Link>

      </li>
      
    </ul>
  </div>
);


export default Footer;

