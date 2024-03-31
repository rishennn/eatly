import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
	const navigate = useNavigate()
	return (
		<div className='wrapper'>
			<div className="errorPage">
				<h1 className="title">404 Page <span>Not Found</span></h1>
				<button className='withBG' onClick={() => navigate('/')}>Go Home</button>
			</div>
		</div>
	)
}

export default ErrorPage