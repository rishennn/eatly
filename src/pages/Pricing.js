import React from 'react'
import Header from '../components/Header/Header'
import Control from '../components/Control/Control'
import Slider from '../components/Slider/Slider'
import Footer from '../components/Footer/Footer'
import OurPricing from '../components/OurPricing/OurPricing'
import PriceCard from '../components/PriceCard/PriceCard'

function Pricing() {
	return (
		<>
			<Header />
			<OurPricing />
			<PriceCard />
			<Control />
			<Slider />
			<Footer />
		</>
	)
}

export default Pricing