import React from 'react'
import { ReactComponent as Basic } from '../../assets/img/svg/BasicPrice.svg'
import { ReactComponent as Pro } from '../../assets/img/svg/ProPrice.svg'
import {ReactComponent as Tick} from '../../assets/img/svg/Tick.svg'
import {ReactComponent as Cross} from '../../assets/img/svg/Cross.svg'

const cardFeauters = [
	"Support 24/7", "Fast Delivery", "20% Off Food Deals", "Transaction History", "Weekend Deals", "Dashboard Access", "Premium Group Access"
]

function PriceCard() {

	const handleFreeClick = () =>{
		alert("start free clicked")
	}
	const handleProClick = () =>{
		alert("start pro clicked")
	}

	return (
		<div className='wrapper'>
			<div className="priceCard">
				<div className='cardPricing'>
					<div className="cardTitle">
						<h1>Pricing</h1>
						<h3>Affordable Basic & Pro Plans</h3>
					</div>
					<p>&#160;</p>
					<div className="cardFeauters">
						<b>Core Feauters</b>
						{cardFeauters.map((el, index)=>(
							<p key={index}>{el}</p>
						))}
					</div>
					<p>&#160;</p>
				</div>
				<div className='cardBasic'>
						<div className="cardTitle">
							<h1>Basic</h1>
							<h3>Completely 100% Free Plan</h3>
						</div>
						<Basic />
						<div className="cardSvgs">
							<Tick/>
							<Tick/>
							<Tick/>
							<Tick/>
							<Cross/>
							<Cross/>
							<Cross/>
						</div>
						<button className='withBG' onClick={handleFreeClick}>Start Free</button>
				</div>
				<div className='cardPro'>
						<div className="cardTitle">
							<h1>Premium</h1>
							<h3>Amazing Premium Features Plan</h3>
						</div>
						<Pro />
						<div className="cardSvgs">
							<Tick/>
							<Tick/>
							<Tick/>
							<Tick/>
							<Tick/>
							<Tick/>
							<Tick/>
						</div>
						<button className='withBG' onClick={handleProClick}>Start Pro</button>
				</div>
			</div>
		</div>
	)
}

export default PriceCard