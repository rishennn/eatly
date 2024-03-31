import React from 'react'

function ControlItem({img,title,status,date}) {
	return (
		<div>
			<img src={img} alt="foodimg" />
			<div>
				<h3>{title}</h3>
				<p>{status}</p>
				<b>{date}</b>
			</div>

		</div>
	)
}

export default ControlItem