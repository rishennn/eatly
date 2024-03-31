import React from "react";
import { ReactComponent as BurgerClose } from "../../assets/img/svg/burgerClose.svg";

function ForgotPass({setForgotOpen}) {

	const handleForgotPassSubmit = (e) => {
		e.preventDefault()
		alert("forgot pass submit")
	}
  return (
    <div className="forgotModal">
      <BurgerClose
        className="closeForgot"
        onClick={() => setForgotOpen(false)}
      />
      <h1>Forget Password</h1>
      <p>Enter Your Mail To Reset</p>
      <form action="/" method="post" onSubmit={handleForgotPassSubmit}>
        <input type="email" name="email" placeholder="EMAIL" required  />
        <button className="withBG" >VERIFY</button>
      </form>
    </div>
  );
}

export default ForgotPass;
