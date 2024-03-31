import React from 'react'
import { ReactComponent as BurgerClose } from "../../assets/img/svg/burgerClose.svg";
import { ReactComponent as Google } from "../../assets/img/svg/google.svg";
import { ReactComponent as Apple } from "../../assets/img/svg/apple.svg";
import NavBar from "../NavBar/NavBar.js";

function Register({setRegisterOpen,registerOpen,setLoginOpen,loginOpen}) {

	const handleRegisterSubmit = (e) => {
		e.preventDefault()

		alert("register submit")
	}

	return (
		<div className="registerModal">
		<BurgerClose
			className="closeRegister"
			onClick={() => setRegisterOpen(false)}
		/>
		<h1>Sign Up To eatly</h1>
		<div className="socialBtns">
			<NavBar to="#!" title={<Google />} />
			<NavBar to="#!" title={<Apple />} />
		</div>
		<p>OR</p>
		<form action="/" method="post" onSubmit={handleRegisterSubmit}>
			<input
				type="text"
				name="fullname"
				placeholder="FULL NAME"
				required
			/>
			<input type="email" name="email" placeholder="EMAIL" required />
			<input
				type="password"
				name="password"
				placeholder="PASSWORD"
				required
			/>
			<button className="withBG">SIGN UP</button>
			<div>
				Already Have An Account?{" "}
				<a
					href="#!"
					onClick={() => {
						setLoginOpen(!loginOpen);
						setRegisterOpen(!registerOpen);
					}}
				>
					Log In
				</a>
			</div>
		</form>
	</div>
	)
}

export default Register