import React, { useState } from 'react';
import SortByItem from './SortByItem';

const sortItemTitles = [
    "Recommended",
    "Fast Delivery",
    "Most Popular"
];

function SortBy() {
    const [active, setActive] = useState(null);

    return (
        <div className='sortBy'>
            {sortItemTitles.map((title, index) => (
                <SortByItem 
                    key={index} 
                    title={title} 
                    isActive={active === title}
                    onClick={() => setActive(title)}
                />
            ))}
        </div>
    );
}

export default SortBy;