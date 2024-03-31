import React from "react";
import TopItem from "../../Top/TopItem/TopItem";
 

function Vegatables() {
  return (
    <div className="wrapper">
      <h1 className="sideTitle">Chicken Vegetables</h1>
      <div className="vegatables">
        <div className="dishes_flex">
          <TopItem
            img="./image/dish1.png"
            status="Healty"
            statusColor="yellow"
            title="Chicken Hell"
            fav={true}
            toCart={true}
          />
          <TopItem
            img="./image/dish2.png"
            status="Trending"
            statusColor="red"
            title="Swe Dish"
            fav={true}
            toCart={true}
          />
        </div>
      </div>
    </div>
  );
}
 
export default Vegatables;
