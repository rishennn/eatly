import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ title, to }) {
	return (
		<>
			<Link to={to}>{title}</Link>
		</>
	);
}

export default NavBar;
