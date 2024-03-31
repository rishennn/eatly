import React from "react";
import TopItem from "../Top/TopItem/TopItem";

function Resturent() {
  return (
    <div className="wrapper">
      <div className="resturent">
        <TopItem
          img="./image/resturent.png"
          status="Healty"
          statusColor="yellow"
          title="The Chicken King"
        />
      </div>
    </div>
  );
}

export default Resturent;
