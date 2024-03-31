import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate()
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="hero_left">
          <b>OVER 1000 USERS</b>
          <h1 className="title">
            Enjoy Foods All Over The <span>World</span>
          </h1>
          <p>
            EatLy help you set saving goals, earn cash back offers, Go to
            disclaimer for more details and get paychecks up to two days early.
            Get a <span>$20 bonus.</span>
          </p>
          <div className="hero_buttons">
            <button className="withBG" onClick={() => navigate('/pricing')}>Get Started</button>
            <button className="withBorder" onClick={() => navigate("/pricing")}>Go Pro</button>
          </div>
        </div>
        <div className="hero_right">
          <img src="image/Hero.png" alt="main" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
