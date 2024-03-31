import React from 'react'
import Header from '../components/Header/Header'
import Subscribe from '../components/Subscribe/Subscribe'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import Articles from '../components/Articles/Articles'

function Blog() {
	return (
		<>
			<Header />
			<Subscribe />
			<Articles />
			<FAQ />
			<Footer />
		</>
	)
}

export default Blog