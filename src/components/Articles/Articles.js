import React from 'react'
import ArticleItem from './ArticleItem/ArticleItem'
import NavBar from '../NavBar/NavBar'

const articleItems = [
	{id: 0, img: "./image/blog1.png", title: "How To Order Food ?"},
	{id: 1, img: "./image/blog2.png", title: "How To Track The Order ?"},
	{id: 2, img: "./image/blog3.png", title: "How To Manage Cards ?"},
	{id: 3, img: "./image/blog4.png", title: "Tips & Tricks For Business"},
	{id: 4, img: "./image/blog5.png", title: "How To Control Money ?"},
	{id: 5, img: "./image/blog6.png", title: "Top 5 Business Ideas"}
]

function Articles() {
	return (
		<div className='wrapper'>
			<h1 className="title">Latest <span>Articles</span></h1>
			<div className="articles">
				{articleItems.map((el) => (
					<NavBar to="article" key={el.id} title={<ArticleItem img={el.img} title={el.title} />}/>
				))}
			</div>
		</div>
	)
}

export default Articles