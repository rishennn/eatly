import React from 'react'
import ArticleItem from '../ArticleItem/ArticleItem'

const articleItems = [
	{id: 0, img: "/image/blog1.png", title: "How To Order Food ?"},
	{id: 1, img: "/image/blog2.png", title: "How To Track The Order ?"},
	{id: 2, img: "/image/blog3.png", title: "How To Manage Cards ?"},
]

function ArticleDesc() {
	const handleNextArticleClick = ( ) => {
		alert("next article clicked")
	}
	return (
		<div className='wrapper'>
			<div className="articleDesc">
				<div className="descLeft">
					<h3>Browse restaurants and menus</h3>
					<p>Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.</p>
					<ul>
						<li>Lorem Ipsum passages, and more recently</li>
						<li>Lorem Ipsum passages, and more recently</li>
					</ul>
					<h3>Select your items</h3>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
					<h3>Place your order</h3>
					<p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
					<button className="withBG" onClick={handleNextArticleClick}>Next Article</button>
				</div>
				<div className="descRight">
					{articleItems.map((el) => (
						<ArticleItem key={el.id} img={el.img} title={el.title} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ArticleDesc