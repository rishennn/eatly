import React from 'react'
import NavBar from '../NavBar/NavBar';
import { ReactComponent as BurgerClose } from "../../assets/img/svg/burgerClose.svg";


function Burger({isOpen,loginOpen,registerOpen,setIsOpen,setLoginOpen,setRegisterOpen}) {
	return (
		<div className="burgerPage open">
		<BurgerClose
			className="openBurger"
			onClick={() => setIsOpen(!isOpen)}
		/>
		<nav className="navBar">
			<NavBar title="Menu" to="/menu" />
			<NavBar title="Blog" to="/blog" />
			<NavBar title="Pricing" to="/pricing" />
			<NavBar title="Contact" to="/contact" />
		</nav>
		<div className="buttons burgerBtns">
			<button
				className="withoutBG"
				onClick={() => {
					setLoginOpen(!loginOpen);
					setIsOpen(!isOpen);
				}}
			>
				Login
			</button>
			<button
				className="withBG"
				onClick={() => {
					setRegisterOpen(!registerOpen);
					setIsOpen(!isOpen);
				}}
			>
				Sign Up
			</button>
		</div>
	</div>
	)
}

export default Burger