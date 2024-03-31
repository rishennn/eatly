import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ArticleBlog from '../components/Articles/ArticleBlog/ArticleBlog'
import ArticleDesc from '../components/Articles/ArticleDesc/ArticleDesc'

function Article() {
	return (
		<>
			<Header />
			<ArticleBlog />
			<ArticleDesc />
			<Footer />
		</>
	)
}

export default Article