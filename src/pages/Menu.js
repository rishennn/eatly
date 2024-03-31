import React from 'react'
import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import Top from '../components/Top/Top'
import Dishes from '../components/Dishes/Dishes'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/FAQ/FAQ'

function Menu() {
	return (
		<>
			<Header />
			<Filters />
			<Top />
			<Dishes />
			<FAQ />
			<Footer />
		</>
	)
}

export default Menu