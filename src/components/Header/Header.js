import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/svg/Logo.svg";
import { ReactComponent as BurgerOpen } from "../../assets/img/svg/burgerOpen.svg";
import NavBar from "../NavBar/NavBar.js";
import Burger from "../Burger/Burger.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import ForgotPass from "../ForgotPass/ForgotPass.js";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  return (
    <header className="wrapper">
      <NavBar title={<Logo />} to="/" />
      <nav className="navBar">
        <NavBar title="Menu" to="/menu" />
        <NavBar title="Blog" to="/blog" />
        <NavBar title="Pricing" to="/pricing" />
        <NavBar title="Contact" to="/contact" />
      </nav>
      <div className="buttons">
        <button className="withoutBG" onClick={() => setLoginOpen(!loginOpen)}>
          Login
        </button>
        <button
          className="withBG"
          onClick={() => setRegisterOpen(!registerOpen)}
        >
          Sign Up
        </button>
      </div>
      <div className="burger">
        {isOpen ? (
          <>
            <Burger
              isOpen={isOpen}
              loginOpen={loginOpen}
              registerOpen={registerOpen}
              setIsOpen={setIsOpen}
              setRegisterOpen={setRegisterOpen}
              setLoginOpen={setLoginOpen}
            />
          </>
        ) : (
          <BurgerOpen
            className="closeBurger"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div className={`login ${loginOpen && `show`}`}>
        <Login
          loginOpen={loginOpen}
          registerOpen={registerOpen}
          setLoginOpen={setLoginOpen}
          forgotOpen={forgotOpen}
          setForgotOpen={setForgotOpen}
          setRegisterOpen={setRegisterOpen}
        />
      </div>
      <div className={`register ${registerOpen && `show`}`}>
        <Register
          setRegisterOpen={setRegisterOpen}
          registerOpen={registerOpen}
          setLoginOpen={setLoginOpen}
          loginOpen={loginOpen}
        />
      </div>
      <div className={`forgot ${forgotOpen && `show`}`}>
        <ForgotPass forgotOpen={forgotOpen} setForgotOpen={setForgotOpen} />
      </div>
    </header>
  );
}

export default Header;
