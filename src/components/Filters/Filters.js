import React from 'react'
import FilterMenu from './FilterMenu/FilterMenu'

function Filters() {
	return (
		<div className='wrapper'>
			<div className="filters">
				<div className="filters_left">
					<div className="banner">
						<p>50% OFF</p>
						<p>WEEKEND</p>
					</div>
					<div className="search">
						<input type="search" placeholder='Search'/>
					</div>
				</div>
				<div className="filters_right">
						<FilterMenu />
				</div>
			</div>
		</div>
	)
}

export default Filters