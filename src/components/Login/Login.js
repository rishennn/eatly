import React from "react";
import { ReactComponent as BurgerClose } from "../../assets/img/svg/burgerClose.svg";
import { ReactComponent as Google } from "../../assets/img/svg/google.svg";
import { ReactComponent as Apple } from "../../assets/img/svg/apple.svg";
import NavBar from "../NavBar/NavBar.js";

function Login({
  loginOpen,
  setLoginOpen,
  forgotOpen,
  setForgotOpen,
  registerOpen,
  setRegisterOpen,
}) {
  const handleLogInSubmit = (e) => {
		e.preventDefault()
    alert("login sumbit");
  };

  return (
    <div className="loginModal">
      <BurgerClose
        className="closeLogin"
        onClick={() => setLoginOpen(false)}
      />
      <h1>Sign In To eatly</h1>
      <div className="socialBtns">
        <NavBar to="#!" title={<Google />} />
        <NavBar to="#!" title={<Apple />} />
      </div>
      <p>OR</p>
      <form action="/" method="post" onSubmit={handleLogInSubmit}>
        <input type="email" name="email" placeholder="EMAIL" required />
        <input
          type="password"
          name="password"
          placeholder="PASSWORD"
          required
        />
        <button className="withBG">
          SIGN IN
        </button>
        <a
          href="#!"
          onClick={() => {
            setForgotOpen(!forgotOpen);
            setLoginOpen(!loginOpen);
          }}
        >
          Forget Password?
        </a>
        <div>
          Create A New Account?{" "}
          <a
            href="#!"
            onClick={() => {
              setLoginOpen(!loginOpen);
              setRegisterOpen(!registerOpen);
            }}
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
