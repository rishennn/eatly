import React from 'react'
import Header from '../components/Header/Header'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import Resturent from '../components/Resturent/Resturent'
import Popular from '../components/Resturent/Popular/Popular'
import Vegatables from '../components/Resturent/Vegatables/Vegatables'

function Resturents() {
	return (
		<>
			<Header />
			<Resturent />
			<Popular />
			<Vegatables />
			<FAQ />
			<Footer />
		</>
	)
}

export default Resturents