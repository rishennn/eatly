import React from 'react'
import Category from './Category/Category'
import SortBy from './SortBy/SortBy'
import Price from './Price'

function FilterMenu() {
	
	const handleApplyClick = () => {
		alert("filter submited")
	}

	return (
		<div className='filter'>
			<h3>Category</h3>
			<Category />

			<h3>Sort By</h3>
			<SortBy />

			<h3>Price</h3>
			<Price />

			<button className='withBG' onClick={handleApplyClick}>Apply</button>
		</div>
	)
}

export default FilterMenu