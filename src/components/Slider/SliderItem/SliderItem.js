import React from 'react'

function SliderItem({img, title, status, desc}) {
	return (
		<div className="slider_item">
		<div>
			<img src={img} alt="" />
			<div>
				<h3>{title}</h3>
				<h5>{status}</h5>
			</div>
		</div>
		<p>
			{desc}
		</p>
	</div>
	)
}

export default SliderItem