import React from 'react';

function SortByItem({title, isActive, onClick}) {
    return (
        <a 
            href="#!" 
            onClick={onClick} 
            style={{color: isActive ? '#6C5FBC' : 'initial'}}
        >
            {title}
        </a>
    );
}

export default SortByItem;