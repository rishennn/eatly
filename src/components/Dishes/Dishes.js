import React from "react";
import TopItem from "../Top/TopItem/TopItem";
import { Link } from "react-router-dom";

function Dishes() {
  return (
    <div className="wrapper">
      <div className="dishes">
        <h1 className="title">
          Our Top <span>Dishes</span>
        </h1>
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
          <TopItem
            img="./image/dish3.png"
            status="Supreme"
            statusColor="green"
            title="Swe Dish"
            fav={true}
            toCart={true}
          />
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
        <Link to="/menu" className="view">
          View All &#x2192;
        </Link>
      </div>
    </div>
  );
}

export default Dishes;
