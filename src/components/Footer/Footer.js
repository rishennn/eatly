import React from "react";
import { ReactComponent as Logo } from "../../assets/img/svg/Logo.svg";
import { ReactComponent as Instagram } from "../../assets/img/svg/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/img/svg/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/img/svg/linkedIn.svg";
import { ReactComponent as Facebook } from "../../assets/img/svg/facebook.svg";

import NavBar from "../NavBar/NavBar";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer">
          <div className="footer_top">
            <Logo />
            <nav className="navbar">
              <NavBar title="Menu" to="/menu" />
              <NavBar title="Blog" to="/blog" />
              <NavBar title="Pricing" to="/pricing" />
              <NavBar title="Contact" to="/contact" />
            </nav>
          </div>
          <div className="footer_end">
            <p>© 2023 EATLY All Rights Reserved.</p>
            <div className="socials">
              <Instagram />
              <LinkedIn />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
