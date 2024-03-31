import React, { useState } from 'react';
import CategoryItem from './CategoryItem';

import {ReactComponent as Pizza} from '../../../../assets/img/svg/Pizza.svg';
import {ReactComponent as HotDog} from '../../../../assets/img/svg/Hotdog.svg';
import {ReactComponent as Donat} from '../../../../assets/img/svg/Doughnut.svg';
import {ReactComponent as Ice} from '../../../../assets/img/svg/Icecream.svg';

function Category() {
  const [activeItem, setActiveItem] = useState(null);

  const categories = [
    { bg: "#FFDE8A", title: "Pizza", Ico: Pizza, id: 1 },
    { bg: "#F7C5BA", title: "Asian", Ico: HotDog, id: 2 },
    { bg: "#EDB66B", title: "Donat", Ico: Donat, id: 3 },
    { bg: "#5A85FF", title: "Ice", Ico: Ice, id: 4 },
  ];

  return (
    <div className='category'>
      {categories.map(({ bg, title, Ico, id }) => (
        <CategoryItem
          key={id}
          bg={bg}
          title={title}
          Ico={Ico}
          isActive={activeItem === id}
          onClick={() => setActiveItem(id)}
        />
      ))}
    </div>
  );
}

export default Category;