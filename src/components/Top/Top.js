import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import TopItem from "./TopItem/TopItem";

function Top() {
  return (
    <div className="wrapper">
      <h1 className="title">
        Our Top <span>Restaurants</span>
      </h1>
      <div className="top">
        <NavBar
          title={
            <TopItem
              img="./image/1.jpg"
              status="Healty"
              statusColor="yellow"
              title="The Chicken King"
            />
          }
          to="/resturent"
        />
        <NavBar
          title={
            <TopItem
              img="./image/2.jpg"
              status="Trending"
              statusColor="red"
              title="The Burger King"
            />
          }
          to="/resturent"
        />
        <NavBar
          title={
            <TopItem
              img="./image/1.jpg"
              status="Healty"
              statusColor="yellow"
              title="The Chicken King"
            />
          }
          to="/resturent"
        />
      </div>
      <Link className="view" to="/menu">
        View All &#x2192;
      </Link>
    </div>
  );
}

export default Top;
