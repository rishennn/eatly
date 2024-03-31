import React from 'react'
import { ReactComponent as User } from '../../../assets/img/svg/User.svg'

function ArticleItem({title, img}) {
	return (
		<div className='articleItem'>
			<img src={img} alt="" />
			<h3>{title}</h3>
			<div className="articleFlex">
				<div className="articleUser">
					<User />
					<div>
						<p>Written By</p>
						<h3>Perperzon</h3>
					</div>
				</div>
				<p>15 DEC, 2022</p>
			</div>
		</div>
	)
}

export default ArticleItem